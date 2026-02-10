# ConsumerShield - FDCPA/TCPA Consumer Rights Platform

A lead generation platform that educates consumers about their FDCPA/TCPA rights, helps them identify violations, and connects them with attorneys.

## Features

- **Consumer Education**: Plain-English explanations of FDCPA and TCPA rights
- **Violation Identifier Tool**: Interactive questionnaire that identifies potential violations and scores lead quality
- **Lead Capture**: Qualified lead collection with contact forms
- **Template Letters**: Downloadable legal letter templates (debt validation, cease communication, etc.)
- **Attorney Network**: Attorney signup and lead assignment system
- **Email Notifications**: Automated emails to consumers and attorneys

## Tech Stack

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (free tier works)
- Resend account for emails (optional, for production)

### Installation

1. Clone the repository:
   ```bash
   cd consumer-rights-platform
   npm install
   ```

2. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL schema in `supabase/schema.sql` in your Supabase SQL editor
   - Copy your project URL and keys to `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   │   ├── leads/         # Lead submission API
│   │   └── attorneys/     # Attorney application API
│   ├── check/             # Violation checker page
│   ├── rights/            # FDCPA/TCPA education pages
│   ├── templates/         # Letter template pages
│   ├── attorneys/         # Attorney signup page
│   └── ...
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ViolationChecker.tsx
├── lib/                   # Utilities
│   ├── supabase.ts       # Supabase client
│   ├── email.ts          # Email utilities
│   └── questionnaire-data.ts  # Violation checker questions
└── data/                  # Static data
```

## Configuration

### Environment Variables

See `.env.example` for all required environment variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email (Resend)
RESEND_API_KEY=
FROM_EMAIL=
ADMIN_EMAIL=
```

### Supabase Setup

1. Create a new Supabase project
2. Go to SQL Editor and run the contents of `supabase/schema.sql`
3. Copy your API keys from Settings > API

### Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Create an API key
4. Add the key to your `.env.local`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

```bash
npm run build
```

## Lead Scoring

Leads are scored based on:

| Quality | Score | Criteria |
|---------|-------|----------|
| Strong | 50+ with strong indicators | 3+ violations, documentation, recent |
| Good | 30-49 | 2+ violations, some documentation |
| Weak | < 30 | 1 violation, limited documentation |
| Disqualified | N/A | Outside statute of limitations, original creditor, etc. |

## API Endpoints

### POST /api/leads
Create a new consumer lead.

### GET /api/leads
List leads (requires authentication in production).

### POST /api/attorneys
Submit attorney network application.

### GET /api/attorneys
List attorneys (requires authentication in production).

## Customization

### Adding Questions

Edit `src/lib/questionnaire-data.ts` to add/modify violation checker questions.

### Email Templates

Edit `src/lib/email.ts` to customize email templates.

### Styling

The project uses Tailwind CSS. Modify `src/app/globals.css` for global styles.

## Legal Disclaimer

This platform provides legal information, not legal advice. The letter templates and educational content are for informational purposes only. Users should consult with a licensed attorney for advice specific to their situation.

## License

MIT
