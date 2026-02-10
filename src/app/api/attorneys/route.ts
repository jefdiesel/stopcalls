import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

// POST /api/attorneys - Submit attorney application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      firmName,
      states,
      practiceAreas,
      yearsExperience,
      casesPerMonth,
      nacaMember,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !firmName || !states?.length || !practiceAreas?.length) {
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
      console.log('Attorney application submitted (Supabase not configured):', {
        name,
        email,
        firmName,
        states,
        practiceAreas,
      });
      return NextResponse.json({
        success: true,
        message: 'Application received (database not configured)',
      });
    }

    // Check if attorney already exists
    const { data: existing } = await supabaseAdmin
      .from('attorneys')
      .select('id')
      .eq('email', email)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'An application with this email already exists' },
        { status: 409 }
      );
    }

    // Insert attorney application
    const { data: attorney, error } = await supabaseAdmin
      .from('attorneys')
      .insert({
        name,
        email,
        phone,
        firm_name: firmName,
        states,
        practice_areas: practiceAreas.map((a: string) => a.toLowerCase().replace(' ', '_')),
        years_experience: yearsExperience,
        cases_per_month: casesPerMonth,
        naca_member: nacaMember || false,
        application_message: message,
        active: false, // Needs manual verification
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating attorney application:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    // TODO: Send confirmation email to attorney
    // TODO: Notify admin of new application

    return NextResponse.json({
      success: true,
      attorneyId: attorney.id,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Error in POST /api/attorneys:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/attorneys - List attorneys (admin only)
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
    const active = url.searchParams.get('active');
    const state = url.searchParams.get('state');
    const practiceArea = url.searchParams.get('practice_area');

    let query = supabaseAdmin
      .from('attorneys')
      .select('*')
      .order('created_at', { ascending: false });

    if (active !== null) {
      query = query.eq('active', active === 'true');
    }
    if (state) {
      query = query.contains('states', [state]);
    }
    if (practiceArea) {
      query = query.contains('practice_areas', [practiceArea]);
    }

    const { data: attorneys, error } = await query;

    if (error) {
      console.error('Error fetching attorneys:', error);
      return NextResponse.json(
        { error: 'Failed to fetch attorneys' },
        { status: 500 }
      );
    }

    return NextResponse.json({ attorneys });
  } catch (error) {
    console.error('Error in GET /api/attorneys:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
