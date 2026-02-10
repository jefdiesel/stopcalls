-- ConsumerShield Database Schema for Supabase
-- Run this in your Supabase SQL editor to set up the database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Attorneys table: Stores attorney network information
-- (Created first because leads references it)
CREATE TABLE attorneys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  firm_name TEXT NOT NULL,

  -- Practice Details
  states TEXT[] NOT NULL, -- Array of state abbreviations (e.g., ['CA', 'NY'])
  practice_areas TEXT[] NOT NULL, -- Array: ['fdcpa', 'tcpa', 'fcra', 'consumer_protection']
  years_experience TEXT,
  cases_per_month TEXT,
  naca_member BOOLEAN DEFAULT false,

  -- Account Status
  active BOOLEAN DEFAULT false, -- Activated after verification
  verified_at TIMESTAMPTZ,
  verified_by TEXT,

  -- Performance Metrics
  leads_received INTEGER DEFAULT 0,
  leads_converted INTEGER DEFAULT 0,
  avg_response_time_hours DECIMAL(5, 2),
  rating DECIMAL(3, 2), -- 1-5 scale

  -- Billing
  stripe_customer_id TEXT,
  billing_email TEXT,
  payment_method_on_file BOOLEAN DEFAULT false,

  -- Notes
  internal_notes TEXT,
  application_message TEXT
);

-- Leads table: Stores consumer lead information from the violation checker
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  state TEXT NOT NULL,

  -- Case Information
  violation_type TEXT NOT NULL, -- 'fdcpa', 'tcpa', 'both'
  collector_name TEXT,
  description TEXT,
  best_time TEXT, -- 'morning', 'afternoon', 'evening', 'anytime'

  -- Qualification Data (from questionnaire)
  score INTEGER NOT NULL DEFAULT 0,
  quality TEXT NOT NULL DEFAULT 'weak', -- 'strong', 'good', 'weak', 'disqualified'
  violations JSONB DEFAULT '[]'::jsonb, -- Array of violation types selected
  has_documentation BOOLEAN DEFAULT false,
  timeline TEXT, -- 'within_month', '1_6_months', '6_12_months', etc.
  questionnaire_answers JSONB DEFAULT '{}'::jsonb, -- Full questionnaire responses

  -- Assignment
  assigned_attorney_id UUID REFERENCES attorneys(id),
  assigned_at TIMESTAMPTZ,
  status TEXT DEFAULT 'new', -- 'new', 'assigned', 'contacted', 'retained', 'declined', 'closed'

  -- Outcome Tracking
  case_taken BOOLEAN,
  outcome TEXT,
  settlement_amount DECIMAL(10, 2),
  notes TEXT,

  -- Metadata
  source TEXT DEFAULT 'website', -- 'website', 'referral', 'organic', etc.
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_address INET,
  user_agent TEXT
);

-- Lead Activity Log: Tracks all activities on a lead
CREATE TABLE lead_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  attorney_id UUID REFERENCES attorneys(id),

  activity_type TEXT NOT NULL, -- 'created', 'assigned', 'contacted', 'retained', 'declined', 'note', 'status_change'
  description TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,

  -- Who performed the action
  performed_by TEXT -- 'system', 'admin', attorney email, etc.
);

-- Lead Payments: Tracks payments from attorneys for leads
CREATE TABLE lead_payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),

  lead_id UUID NOT NULL REFERENCES leads(id),
  attorney_id UUID NOT NULL REFERENCES attorneys(id),

  amount DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'paid', 'refunded', 'disputed'

  stripe_payment_intent_id TEXT,
  stripe_charge_id TEXT,

  paid_at TIMESTAMPTZ,
  refunded_at TIMESTAMPTZ,
  refund_reason TEXT
);

-- Email Templates: Stores email templates for notifications
CREATE TABLE email_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  name TEXT NOT NULL UNIQUE, -- 'lead_to_attorney', 'consumer_confirmation', 'attorney_welcome', etc.
  subject TEXT NOT NULL,
  html_body TEXT NOT NULL,
  text_body TEXT,

  active BOOLEAN DEFAULT true
);

-- Indexes for performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_quality ON leads(quality);
CREATE INDEX idx_leads_state ON leads(state);
CREATE INDEX idx_leads_violation_type ON leads(violation_type);
CREATE INDEX idx_leads_assigned_attorney ON leads(assigned_attorney_id);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

CREATE INDEX idx_attorneys_active ON attorneys(active);
CREATE INDEX idx_attorneys_states ON attorneys USING GIN(states);
CREATE INDEX idx_attorneys_practice_areas ON attorneys USING GIN(practice_areas);

CREATE INDEX idx_lead_activities_lead_id ON lead_activities(lead_id);
CREATE INDEX idx_lead_activities_attorney_id ON lead_activities(attorney_id);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_attorneys_updated_at
  BEFORE UPDATE ON attorneys
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_email_templates_updated_at
  BEFORE UPDATE ON email_templates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
-- Enable RLS on all tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE attorneys ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;

-- Service role has full access (for API routes)
-- These policies allow the service role to access all data
CREATE POLICY "Service role has full access to leads"
  ON leads FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to attorneys"
  ON attorneys FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to lead_activities"
  ON lead_activities FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to lead_payments"
  ON lead_payments FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to email_templates"
  ON email_templates FOR ALL
  USING (auth.role() = 'service_role');

-- Insert default email templates
INSERT INTO email_templates (name, subject, html_body, text_body) VALUES
(
  'consumer_confirmation',
  'Your Request Has Been Received - ConsumerShield',
  '<h1>Thank you for contacting ConsumerShield</h1>
<p>Hi {{name}},</p>
<p>We''ve received your request for assistance with {{violation_type}} violations.</p>
<p><strong>What happens next:</strong></p>
<ul>
<li>An attorney from our network will review your case</li>
<li>You''ll receive a call within 24 hours</li>
<li>The consultation is completely free</li>
</ul>
<p>If you have any questions, you can reply to this email.</p>
<p>Best regards,<br>The ConsumerShield Team</p>',
  'Thank you for contacting ConsumerShield

Hi {{name}},

We''ve received your request for assistance with {{violation_type}} violations.

What happens next:
- An attorney from our network will review your case
- You''ll receive a call within 24 hours
- The consultation is completely free

If you have any questions, you can reply to this email.

Best regards,
The ConsumerShield Team'
),
(
  'lead_to_attorney',
  'New {{quality}} Lead - {{state}} - {{violation_type}} | ConsumerShield',
  '<h1>New Lead Available</h1>
<p><strong>Quality:</strong> {{quality}}</p>
<p><strong>State:</strong> {{state}}</p>
<p><strong>Violation Type:</strong> {{violation_type}}</p>
<p><strong>Score:</strong> {{score}}</p>
<hr>
<h2>Contact Information</h2>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Best Time to Call:</strong> {{best_time}}</p>
<hr>
<h2>Case Details</h2>
<p><strong>Collector Name:</strong> {{collector_name}}</p>
<p><strong>Description:</strong> {{description}}</p>
<p><strong>Violations Identified:</strong></p>
<ul>{{violations_list}}</ul>
<hr>
<p>Please contact this lead within 24 hours.</p>',
  'New Lead Available

Quality: {{quality}}
State: {{state}}
Violation Type: {{violation_type}}
Score: {{score}}

---

Contact Information
Name: {{name}}
Phone: {{phone}}
Email: {{email}}
Best Time to Call: {{best_time}}

---

Case Details
Collector Name: {{collector_name}}
Description: {{description}}
Violations Identified: {{violations_list}}

---

Please contact this lead within 24 hours.'
);

-- View for lead dashboard
CREATE OR REPLACE VIEW lead_dashboard AS
SELECT
  l.id,
  l.created_at,
  l.name,
  l.email,
  l.phone,
  l.state,
  l.violation_type,
  l.quality,
  l.score,
  l.status,
  l.assigned_at,
  l.case_taken,
  a.name as attorney_name,
  a.firm_name as attorney_firm
FROM leads l
LEFT JOIN attorneys a ON l.assigned_attorney_id = a.id
ORDER BY l.created_at DESC;

-- View for attorney performance
CREATE OR REPLACE VIEW attorney_performance AS
SELECT
  a.id,
  a.name,
  a.firm_name,
  a.states,
  a.practice_areas,
  a.leads_received,
  a.leads_converted,
  CASE
    WHEN a.leads_received > 0
    THEN ROUND((a.leads_converted::decimal / a.leads_received) * 100, 1)
    ELSE 0
  END as conversion_rate,
  a.avg_response_time_hours,
  a.active
FROM attorneys a
ORDER BY conversion_rate DESC;
