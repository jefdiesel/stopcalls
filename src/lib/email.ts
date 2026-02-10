// Email notification utilities
// This uses Resend for email delivery - sign up at resend.com

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
  replyTo?: string;
}

interface LeadEmailData {
  name: string;
  email: string;
  phone: string;
  state: string;
  violationType: string;
  quality: string;
  score: number;
  collectorName?: string;
  description?: string;
  bestTime?: string;
  violations: string[];
}

interface AttorneyEmailData {
  name: string;
  email: string;
  firmName: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'ConsumerShield <noreply@consumershield.com>';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@consumershield.com';

/**
 * Send an email using Resend API
 */
export async function sendEmail(options: SendEmailOptions): Promise<{ success: boolean; error?: string }> {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured - email not sent');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: options.from || FROM_EMAIL,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text,
        reply_to: options.replyTo,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Failed to send email:', error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send confirmation email to consumer after lead submission
 */
export async function sendConsumerConfirmation(data: LeadEmailData): Promise<void> {
  const violationTypeLabel = {
    fdcpa: 'debt collection harassment',
    tcpa: 'robocalls/spam texts',
    both: 'debt collection and robocall',
  }[data.violationType] || data.violationType;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 30px; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting ConsumerShield</h1>
  </div>

  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
    <p>Hi ${data.name},</p>

    <p>We've received your request for assistance with <strong>${violationTypeLabel}</strong> violations.</p>

    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
      <h2 style="margin-top: 0; font-size: 18px; color: #1f2937;">What Happens Next</h2>
      <ul style="padding-left: 20px; margin-bottom: 0;">
        <li>An attorney from our network will review your case</li>
        <li>You'll receive a call within 24 hours</li>
        <li>The consultation is completely free</li>
        <li>You are under no obligation to proceed</li>
      </ul>
    </div>

    <p><strong>Important:</strong> Have your documentation ready when the attorney calls. This includes:</p>
    <ul style="padding-left: 20px;">
      <li>Call logs or phone records</li>
      <li>Saved voicemails or text messages</li>
      <li>Letters from the collector</li>
      <li>Any notes about what was said</li>
    </ul>

    <p>If you have any questions before then, you can reply to this email.</p>

    <p style="margin-bottom: 0;">
      Best regards,<br>
      <strong>The ConsumerShield Team</strong>
    </p>
  </div>

  <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
    <p style="margin: 0;">ConsumerShield provides legal information, not legal advice.</p>
    <p style="margin: 5px 0 0;">You're receiving this because you submitted a request on our website.</p>
  </div>
</body>
</html>
  `.trim();

  const text = `
Thank You for Contacting ConsumerShield

Hi ${data.name},

We've received your request for assistance with ${violationTypeLabel} violations.

What Happens Next:
- An attorney from our network will review your case
- You'll receive a call within 24 hours
- The consultation is completely free
- You are under no obligation to proceed

Important: Have your documentation ready when the attorney calls. This includes:
- Call logs or phone records
- Saved voicemails or text messages
- Letters from the collector
- Any notes about what was said

If you have any questions before then, you can reply to this email.

Best regards,
The ConsumerShield Team
  `.trim();

  await sendEmail({
    to: data.email,
    subject: 'Your Request Has Been Received - ConsumerShield',
    html,
    text,
    replyTo: ADMIN_EMAIL,
  });
}

/**
 * Send new lead notification to attorney
 */
export async function sendLeadToAttorney(lead: LeadEmailData, attorney: AttorneyEmailData): Promise<void> {
  const qualityColors = {
    strong: '#059669',
    good: '#d97706',
    weak: '#6b7280',
  };

  const qualityColor = qualityColors[lead.quality as keyof typeof qualityColors] || '#6b7280';

  const violationsList = lead.violations.length > 0
    ? lead.violations.map(v => `<li>${v}</li>`).join('')
    : '<li>See description below</li>';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 30px; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New ${lead.quality.toUpperCase()} Lead Available</h1>
    <p style="color: #bfdbfe; margin: 10px 0 0; font-size: 14px;">ConsumerShield Lead Notification</p>
  </div>

  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
      <div style="background: ${qualityColor}; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 14px;">
        ${lead.quality.toUpperCase()}
      </div>
      <div style="background: #e5e7eb; padding: 5px 15px; border-radius: 20px; font-size: 14px;">
        Score: ${lead.score}
      </div>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>State:</strong></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${lead.state}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Violation Type:</strong></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${lead.violationType.toUpperCase()}</td>
      </tr>
    </table>

    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h2 style="margin-top: 0; font-size: 18px; color: #1f2937;">Contact Information</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${lead.name}</p>
      <p style="margin: 5px 0;"><strong>Phone:</strong> ${lead.phone}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${lead.email}</p>
      <p style="margin: 5px 0 0;"><strong>Best Time to Call:</strong> ${lead.bestTime || 'Anytime'}</p>
    </div>

    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h2 style="margin-top: 0; font-size: 18px; color: #1f2937;">Case Details</h2>
      ${lead.collectorName ? `<p style="margin: 5px 0;"><strong>Collector Name:</strong> ${lead.collectorName}</p>` : ''}
      <p style="margin: 5px 0;"><strong>Violations Identified:</strong></p>
      <ul style="padding-left: 20px; margin: 10px 0;">${violationsList}</ul>
      ${lead.description ? `<p style="margin: 10px 0 0;"><strong>Description:</strong> ${lead.description}</p>` : ''}
    </div>

    <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 15px;">
      <p style="margin: 0; font-weight: bold; color: #92400e;">Please contact this lead within 24 hours.</p>
    </div>
  </div>

  <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
    <p style="margin: 0;">This lead was generated by ConsumerShield.</p>
  </div>
</body>
</html>
  `.trim();

  await sendEmail({
    to: attorney.email,
    subject: `New ${lead.quality.toUpperCase()} Lead - ${lead.state} - ${lead.violationType.toUpperCase()} | ConsumerShield`,
    html,
    replyTo: ADMIN_EMAIL,
  });
}

/**
 * Send notification to admin about new lead
 */
export async function notifyAdminNewLead(lead: LeadEmailData): Promise<void> {
  const html = `
<h2>New Lead Submitted</h2>
<p><strong>Quality:</strong> ${lead.quality}</p>
<p><strong>Score:</strong> ${lead.score}</p>
<p><strong>Name:</strong> ${lead.name}</p>
<p><strong>Email:</strong> ${lead.email}</p>
<p><strong>Phone:</strong> ${lead.phone}</p>
<p><strong>State:</strong> ${lead.state}</p>
<p><strong>Violation Type:</strong> ${lead.violationType}</p>
<p><strong>Collector:</strong> ${lead.collectorName || 'Not provided'}</p>
<hr>
<p><strong>Violations:</strong></p>
<ul>${lead.violations.map(v => `<li>${v}</li>`).join('')}</ul>
<hr>
<p><strong>Description:</strong></p>
<p>${lead.description || 'Not provided'}</p>
  `.trim();

  await sendEmail({
    to: ADMIN_EMAIL,
    subject: `[ConsumerShield] New ${lead.quality} Lead - ${lead.state}`,
    html,
  });
}

/**
 * Send confirmation to attorney after application submission
 */
export async function sendAttorneyApplicationConfirmation(attorney: AttorneyEmailData): Promise<void> {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #2563eb;">Thank You for Your Application</h1>

  <p>Dear ${attorney.name},</p>

  <p>Thank you for applying to join the ConsumerShield attorney network. We've received your application for <strong>${attorney.firmName}</strong>.</p>

  <h2>What Happens Next</h2>
  <ul>
    <li>We'll review your application within 2-3 business days</li>
    <li>We may reach out to verify your bar membership and experience</li>
    <li>Once approved, you'll receive access to qualified FDCPA/TCPA leads</li>
    <li>Your first 5 leads will be free to prove our quality</li>
  </ul>

  <p>If you have any questions, please reply to this email.</p>

  <p>
    Best regards,<br>
    <strong>The ConsumerShield Team</strong>
  </p>
</body>
</html>
  `.trim();

  await sendEmail({
    to: attorney.email,
    subject: 'Application Received - ConsumerShield Attorney Network',
    html,
    replyTo: ADMIN_EMAIL,
  });
}
