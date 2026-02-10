import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Lazy initialization to avoid errors during build
let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

// Client for browser-side operations (limited access)
export const getSupabase = (): SupabaseClient => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables not configured');
  }
  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
};

// Server-side client with service role (full access) - only use in API routes
export const getSupabaseAdmin = (): SupabaseClient => {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Supabase environment variables not configured');
  }
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
  }
  return _supabaseAdmin;
};

// For backward compatibility - will throw if called without env vars
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (null as unknown as SupabaseClient);

export const supabaseAdmin = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : (null as unknown as SupabaseClient);

// Type definitions for our database tables
export interface Lead {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  violation_type: 'fdcpa' | 'tcpa' | 'both';
  collector_name?: string;
  description?: string;
  best_time?: string;
  score: number;
  quality: 'strong' | 'good' | 'weak' | 'disqualified';
  violations: string[];
  has_documentation: boolean;
  timeline?: string;
  questionnaire_answers: Record<string, unknown>;
  assigned_attorney_id?: string;
  assigned_at?: string;
  status: 'new' | 'assigned' | 'contacted' | 'retained' | 'declined' | 'closed';
  case_taken?: boolean;
  outcome?: string;
  settlement_amount?: number;
  notes?: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export interface Attorney {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  phone: string;
  firm_name: string;
  states: string[];
  practice_areas: string[];
  years_experience?: string;
  cases_per_month?: string;
  naca_member: boolean;
  active: boolean;
  verified_at?: string;
  leads_received: number;
  leads_converted: number;
  avg_response_time_hours?: number;
  rating?: number;
}

export interface LeadActivity {
  id: string;
  created_at: string;
  lead_id: string;
  attorney_id?: string;
  activity_type: string;
  description?: string;
  metadata: Record<string, unknown>;
  performed_by: string;
}
