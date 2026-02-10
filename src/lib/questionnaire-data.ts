export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple';
  options: {
    value: string;
    label: string;
    score: number;
    disqualify?: boolean;
    strong?: boolean;
  }[];
}

export const fdcpaQuestions: Question[] = [
  {
    id: 'collector_type',
    text: 'Who is contacting you about this debt?',
    type: 'single',
    options: [
      { value: 'collection_agency', label: 'A collection agency or debt collector', score: 10 },
      { value: 'debt_buyer', label: 'A company that bought my debt (not the original creditor)', score: 10 },
      { value: 'original_creditor', label: 'The original company I owed money to', score: 0, disqualify: true },
      { value: 'not_sure', label: "I'm not sure", score: 5 },
    ],
  },
  {
    id: 'timeline',
    text: 'When did the most recent violation happen?',
    type: 'single',
    options: [
      { value: 'within_month', label: 'Within the last month', score: 15 },
      { value: '1_6_months', label: '1-6 months ago', score: 15 },
      { value: '6_12_months', label: '6-12 months ago', score: 10 },
      { value: 'over_1_year', label: 'Over 1 year ago', score: 0, disqualify: true },
    ],
  },
  {
    id: 'violations',
    text: 'What did they do? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'early_late_calls', label: 'Called before 8am or after 9pm', score: 10 },
      { value: 'threats', label: 'Threatened to arrest me or sue when they legally cannot', score: 15, strong: true },
      { value: 'third_party', label: 'Told my family, friends, or employer about my debt', score: 20, strong: true },
      { value: 'continued_after_cease', label: 'Kept calling after I sent a written cease letter', score: 15 },
      { value: 'no_identification', label: "Didn't identify themselves as a debt collector", score: 10 },
      { value: 'lied_amount', label: 'Lied about how much I owe', score: 15 },
      { value: 'workplace', label: 'Called my workplace after I told them not to', score: 15 },
      { value: 'profanity_violence', label: 'Threatened violence or used profanity', score: 20, strong: true },
      { value: 'false_legal_docs', label: 'Sent fake legal documents', score: 15 },
      { value: 'excessive_calls', label: 'Called repeatedly (multiple times per day)', score: 10 },
    ],
  },
  {
    id: 'documentation',
    text: 'What documentation do you have?',
    type: 'multiple',
    options: [
      { value: 'letters', label: 'Letters or mail from the collector', score: 10 },
      { value: 'voicemails', label: 'Saved voicemails', score: 15, strong: true },
      { value: 'call_log', label: 'Call log from my phone', score: 10 },
      { value: 'emails', label: 'Emails or text messages', score: 10 },
      { value: 'nothing', label: 'No documentation', score: 0 },
    ],
  },
];

export const fcraQuestions: Question[] = [
  {
    id: 'error_type',
    text: 'What type of error is on your credit report?',
    type: 'multiple',
    options: [
      { value: 'not_my_account', label: 'An account that isn\'t mine', score: 15, strong: true },
      { value: 'wrong_balance', label: 'Wrong balance or amount owed', score: 10 },
      { value: 'paid_showing_unpaid', label: 'Paid debt showing as unpaid', score: 12 },
      { value: 'wrong_status', label: 'Wrong account status (showing late when current)', score: 10 },
      { value: 'old_debt', label: 'Debt older than 7 years still showing', score: 15, strong: true },
      { value: 'duplicate', label: 'Same debt listed multiple times', score: 12 },
      { value: 'identity_theft', label: 'Accounts from identity theft', score: 20, strong: true },
      { value: 'wrong_personal_info', label: 'Wrong personal information', score: 5 },
    ],
  },
  {
    id: 'disputed',
    text: 'Have you disputed this error with the credit bureau?',
    type: 'single',
    options: [
      { value: 'no', label: 'No, not yet', score: 5 },
      { value: 'yes_fixed', label: 'Yes, and they fixed it', score: 0, disqualify: true },
      { value: 'yes_denied', label: 'Yes, and they said it was accurate (but it\'s not)', score: 20, strong: true },
      { value: 'yes_ignored', label: 'Yes, and they didn\'t respond in 30 days', score: 20, strong: true },
      { value: 'yes_reinserted', label: 'Yes, they deleted it but it came back', score: 25, strong: true },
    ],
  },
  {
    id: 'harm',
    text: 'Has this error caused you harm?',
    type: 'multiple',
    options: [
      { value: 'denied_credit', label: 'Denied for a loan or credit card', score: 20, strong: true },
      { value: 'higher_rate', label: 'Charged higher interest rates', score: 15 },
      { value: 'denied_housing', label: 'Denied housing/apartment', score: 20, strong: true },
      { value: 'denied_job', label: 'Denied a job due to credit check', score: 25, strong: true },
      { value: 'stress', label: 'Stress and frustration', score: 5 },
      { value: 'no_harm', label: 'No specific harm yet', score: 0 },
    ],
  },
  {
    id: 'bureaus',
    text: 'Which credit bureaus have the error?',
    type: 'multiple',
    options: [
      { value: 'equifax', label: 'Equifax', score: 5 },
      { value: 'experian', label: 'Experian', score: 5 },
      { value: 'transunion', label: 'TransUnion', score: 5 },
      { value: 'not_sure', label: 'Not sure / haven\'t checked all', score: 0 },
    ],
  },
  {
    id: 'timeline',
    text: 'When did you first notice the error?',
    type: 'single',
    options: [
      { value: 'within_month', label: 'Within the last month', score: 10 },
      { value: '1_6_months', label: '1-6 months ago', score: 10 },
      { value: '6_12_months', label: '6-12 months ago', score: 8 },
      { value: '1_2_years', label: '1-2 years ago', score: 5 },
      { value: 'over_2_years', label: 'Over 2 years ago', score: 0, disqualify: true },
    ],
  },
  {
    id: 'documentation',
    text: 'What documentation do you have?',
    type: 'multiple',
    options: [
      { value: 'credit_report', label: 'Copy of the credit report with error', score: 10 },
      { value: 'dispute_letters', label: 'Copies of dispute letters sent', score: 15, strong: true },
      { value: 'response_letters', label: 'Bureau response letters', score: 15, strong: true },
      { value: 'proof_of_payment', label: 'Proof of payment (for "unpaid" errors)', score: 15 },
      { value: 'denial_letter', label: 'Denial letter for credit/housing/job', score: 20, strong: true },
      { value: 'nothing', label: 'No documentation', score: 0 },
    ],
  },
];

export const tcpaQuestions: Question[] = [
  {
    id: 'phone_type',
    text: 'What type of phone did they call or text?',
    type: 'single',
    options: [
      { value: 'cell', label: 'Cell phone', score: 10 },
      { value: 'landline', label: 'Landline only', score: 0, disqualify: true },
    ],
  },
  {
    id: 'call_count',
    text: 'Approximately how many calls or texts have you received?',
    type: 'single',
    options: [
      { value: '1_5', label: '1-5', score: 5 },
      { value: '6_10', label: '6-10', score: 10 },
      { value: '11_25', label: '11-25', score: 15 },
      { value: '26_50', label: '26-50', score: 20, strong: true },
      { value: '50_plus', label: '50+', score: 25, strong: true },
    ],
  },
  {
    id: 'call_type',
    text: 'Were the calls robocalls or prerecorded messages?',
    type: 'single',
    options: [
      { value: 'robocall', label: 'Yes, robocall/automated voice', score: 15, strong: true },
      { value: 'prerecorded', label: 'Yes, prerecorded message', score: 15, strong: true },
      { value: 'live_person', label: 'No, always a live person', score: 5 },
      { value: 'not_sure', label: "I'm not sure", score: 10 },
    ],
  },
  {
    id: 'consent',
    text: 'Did you ever give them permission to call or text?',
    type: 'single',
    options: [
      { value: 'never', label: 'Never gave my number to them', score: 15, strong: true },
      { value: 'revoked', label: 'Gave number but asked them to stop', score: 12 },
      { value: 'wrong_number', label: "It's a wrong number (not my account/debt)", score: 15, strong: true },
      { value: 'gave_consent', label: 'Gave number and never asked to stop', score: 0, disqualify: true },
    ],
  },
  {
    id: 'timeline',
    text: 'When did the calls start?',
    type: 'single',
    options: [
      { value: 'within_month', label: 'Within the last month', score: 15 },
      { value: '1_6_months', label: '1-6 months ago', score: 15 },
      { value: '6_12_months', label: '6-12 months ago', score: 10 },
      { value: '1_4_years', label: '1-4 years ago', score: 5 },
      { value: 'over_4_years', label: 'Over 4 years ago', score: 0, disqualify: true },
    ],
  },
  {
    id: 'documentation',
    text: 'What proof do you have?',
    type: 'multiple',
    options: [
      { value: 'phone_bill', label: 'Phone bill or call log', score: 10 },
      { value: 'screenshots', label: 'Screenshots of texts', score: 15, strong: true },
      { value: 'voicemails', label: 'Saved voicemails', score: 15, strong: true },
      { value: 'nothing', label: 'No documentation', score: 0 },
    ],
  },
];

export function calculateScore(
  answers: Record<string, string | string[]>,
  questions: Question[]
): { score: number; quality: 'strong' | 'good' | 'weak' | 'disqualified'; violations: string[]; hasStrong: boolean } {
  let score = 0;
  let disqualified = false;
  let hasStrong = false;
  const violations: string[] = [];

  questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;

    if (Array.isArray(answer)) {
      answer.forEach((val) => {
        const option = question.options.find((o) => o.value === val);
        if (option) {
          score += option.score;
          if (option.disqualify) disqualified = true;
          if (option.strong) hasStrong = true;
          if (option.score > 0 && question.id === 'violations') {
            violations.push(option.label);
          }
        }
      });
    } else {
      const option = question.options.find((o) => o.value === answer);
      if (option) {
        score += option.score;
        if (option.disqualify) disqualified = true;
        if (option.strong) hasStrong = true;
      }
    }
  });

  let quality: 'strong' | 'good' | 'weak' | 'disqualified';
  if (disqualified) {
    quality = 'disqualified';
  } else if (score >= 50 && hasStrong) {
    quality = 'strong';
  } else if (score >= 30) {
    quality = 'good';
  } else {
    quality = 'weak';
  }

  return { score, quality, violations, hasStrong };
}

export function estimateDamages(
  type: 'fdcpa' | 'tcpa' | 'fcra' | 'both',
  answers: Record<string, string | string[]>
): { min: number; max: number } {
  if (type === 'fcra') {
    // FCRA: $100-$1,000 statutory per willful violation + actual damages
    const harm = answers['harm'] as string[] || [];
    let baseMin = 1000;
    let baseMax = 5000;

    // Actual damages can be significant
    if (harm.includes('denied_job')) {
      baseMin += 10000;
      baseMax += 50000;
    }
    if (harm.includes('denied_housing')) {
      baseMin += 5000;
      baseMax += 20000;
    }
    if (harm.includes('denied_credit') || harm.includes('higher_rate')) {
      baseMin += 2000;
      baseMax += 10000;
    }

    return { min: baseMin, max: baseMax };
  }

  if (type === 'fdcpa' || type === 'both') {
    // FDCPA: Up to $1,000 statutory + actual damages
    const fdcpaMin = 500;
    const fdcpaMax = 1500;

    if (type === 'both') {
      // Add TCPA damages
      const callCount = answers['call_count'] as string;
      let multiplier = 1;
      switch (callCount) {
        case '1_5': multiplier = 3; break;
        case '6_10': multiplier = 8; break;
        case '11_25': multiplier = 18; break;
        case '26_50': multiplier = 38; break;
        case '50_plus': multiplier = 75; break;
      }
      return {
        min: fdcpaMin + (multiplier * 500),
        max: fdcpaMax + (multiplier * 1500),
      };
    }

    return { min: fdcpaMin, max: fdcpaMax };
  }

  // TCPA only
  const callCount = answers['call_count'] as string;
  let multiplier = 1;
  switch (callCount) {
    case '1_5': multiplier = 3; break;
    case '6_10': multiplier = 8; break;
    case '11_25': multiplier = 18; break;
    case '26_50': multiplier = 38; break;
    case '50_plus': multiplier = 75; break;
  }

  return {
    min: multiplier * 500,
    max: multiplier * 1500,
  };
}

export const usStates = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'DC', label: 'Washington D.C.' },
];
