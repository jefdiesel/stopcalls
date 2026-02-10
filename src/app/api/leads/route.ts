import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

// POST /api/leads - Create a new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      state,
      violationType,
      collectorName,
      description,
      bestTime,
      score,
      quality,
      violations,
      hasDocumentation,
      timeline,
      answers,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !state || !violationType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Supabase is configured
    let supabaseAdmin;
    try {
      supabaseAdmin = getSupabaseAdmin();
    } catch {
      // Supabase not configured - log to console and return success
      // In production, you'd want to handle this differently (e.g., queue for later)
      console.log('Lead submitted (Supabase not configured):', {
        name,
        email,
        phone,
        state,
        violationType,
        quality,
        score,
      });
      return NextResponse.json({
        success: true,
        message: 'Lead received (database not configured)',
      });
    }

    // Get client info
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    const userAgent = request.headers.get('user-agent');

    // Get UTM parameters from query string
    const url = new URL(request.url);
    const utmSource = url.searchParams.get('utm_source');
    const utmMedium = url.searchParams.get('utm_medium');
    const utmCampaign = url.searchParams.get('utm_campaign');

    // Insert lead into database
    const { data: lead, error } = await supabaseAdmin
      .from('leads')
      .insert({
        name,
        email,
        phone,
        state,
        violation_type: violationType,
        collector_name: collectorName,
        description,
        best_time: bestTime,
        score: score || 0,
        quality: quality || 'weak',
        violations: violations || [],
        has_documentation: hasDocumentation || false,
        timeline,
        questionnaire_answers: answers || {},
        status: 'new',
        source: 'website',
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        ip_address: ipAddress,
        user_agent: userAgent,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating lead:', error);
      return NextResponse.json(
        { error: 'Failed to create lead' },
        { status: 500 }
      );
    }

    // Log the activity
    await supabaseAdmin.from('lead_activities').insert({
      lead_id: lead.id,
      activity_type: 'created',
      description: 'Lead created via website',
      performed_by: 'system',
    });

    // TODO: Send confirmation email to consumer
    // TODO: Notify relevant attorneys
    // TODO: Auto-assign to attorney based on state and practice area

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: 'Lead created successfully',
    });
  } catch (error) {
    console.error('Error in POST /api/leads:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/leads - List leads (admin only, would need auth)
export async function GET(request: NextRequest) {
  try {
    let supabaseAdmin;
    try {
      supabaseAdmin = getSupabaseAdmin();
    } catch {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    // In production, you'd verify admin authentication here
    const url = new URL(request.url);
    const status = url.searchParams.get('status');
    const quality = url.searchParams.get('quality');
    const state = url.searchParams.get('state');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    let query = supabaseAdmin
      .from('leads')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq('status', status);
    }
    if (quality) {
      query = query.eq('quality', quality);
    }
    if (state) {
      query = query.eq('state', state);
    }

    const { data: leads, error, count } = await query;

    if (error) {
      console.error('Error fetching leads:', error);
      return NextResponse.json(
        { error: 'Failed to fetch leads' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      leads,
      total: count,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Error in GET /api/leads:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
