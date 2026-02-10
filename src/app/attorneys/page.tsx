'use client';

import { useState } from 'react';
import { usStates } from '@/lib/questionnaire-data';

interface AttorneyForm {
  name: string;
  email: string;
  phone: string;
  firmName: string;
  states: string[];
  practiceAreas: string[];
  yearsExperience: string;
  casesPerMonth: string;
  nacaMember: boolean;
  message: string;
}

export default function AttorneysPage() {
  const [formData, setFormData] = useState<AttorneyForm>({
    name: '',
    email: '',
    phone: '',
    firmName: '',
    states: [],
    practiceAreas: [],
    yearsExperience: '',
    casesPerMonth: '',
    nacaMember: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const toggleState = (stateValue: string) => {
    setFormData((prev) => ({
      ...prev,
      states: prev.states.includes(stateValue)
        ? prev.states.filter((s) => s !== stateValue)
        : [...prev.states, stateValue],
    }));
  };

  const togglePracticeArea = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      practiceAreas: prev.practiceAreas.includes(area)
        ? prev.practiceAreas.filter((a) => a !== area)
        : [...prev.practiceAreas, area],
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Application Received</h1>
          <p className="mt-4 text-lg text-gray-600">
            Thank you for your interest in joining our attorney network. We&apos;ll review your
            application and be in touch within 2-3 business days.
          </p>
          <a
            href="/"
            className="inline-flex items-center mt-8 text-blue-600 font-medium hover:text-blue-700"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Join Our Attorney Network
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Receive pre-qualified FDCPA and TCPA leads. Consumers are educated, screened,
            and ready to discuss their cases.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Partner With Us?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Pre-Qualified Leads</h3>
              <p className="mt-2 text-gray-600">
                Every lead goes through our violation identifier tool. We screen for statute of limitations,
                type of collector, and documented violations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Educated Consumers</h3>
              <p className="mt-2 text-gray-600">
                Consumers learn about FDCPA/TCPA rights before submitting their information.
                They understand the process and are ready to engage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Quality Scoring</h3>
              <p className="mt-2 text-gray-600">
                Each lead includes a quality score based on violation severity, documentation,
                and timeline. Know what you&apos;re getting before you call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How It Works</h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Apply to Join</h3>
                <p className="mt-1 text-gray-600">
                  Complete the application below. We verify bar membership and FDCPA/TCPA experience.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Receive Qualified Leads</h3>
                <p className="mt-1 text-gray-600">
                  Get leads matched to your practice areas and licensed states.
                  Each lead includes intake responses, violation types, and contact information.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Contact Within 24 Hours</h3>
                <p className="mt-1 text-gray-600">
                  Reach out to consumers within 24 hours of receiving a lead.
                  Faster response times lead to higher conversion rates.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Pay Per Lead</h3>
                <p className="mt-1 text-gray-600">
                  Simple pay-per-lead pricing. No subscriptions or minimums.
                  Pricing varies by lead quality ($50-200 typical range).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Lead Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-sm font-medium text-gray-500 uppercase">Strong Lead</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">$150-200</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>3+ documented violations</li>
                <li>Strong evidence (voicemails, letters)</li>
                <li>Recent (within 6 months)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-sm font-medium text-gray-500 uppercase">Good Lead</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">$75-150</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>2+ violations identified</li>
                <li>Some documentation</li>
                <li>Within statute of limitations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-sm font-medium text-gray-500 uppercase">Standard Lead</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">$50-75</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>1+ violation identified</li>
                <li>Limited documentation</li>
                <li>May need additional review</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            <strong>First 5 leads free</strong> for new partners to prove quality.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Apply Now</h2>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="firmName" className="block text-sm font-medium text-gray-700 mb-1">
                  Firm Name *
                </label>
                <input
                  type="text"
                  id="firmName"
                  required
                  value={formData.firmName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firmName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Practice Areas *
              </label>
              <div className="flex flex-wrap gap-3">
                {['FDCPA', 'TCPA', 'FCRA', 'Consumer Protection'].map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => togglePracticeArea(area)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      formData.practiceAreas.includes(area)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Licensed States * (Select all that apply)
              </label>
              <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {usStates.map((state) => (
                    <label
                      key={state.value}
                      className={`flex items-center p-2 rounded cursor-pointer ${
                        formData.states.includes(state.value) ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.states.includes(state.value)}
                        onChange={() => toggleState(state.value)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{state.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Consumer Law Experience *
                </label>
                <select
                  id="yearsExperience"
                  required
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData((prev) => ({ ...prev, yearsExperience: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label htmlFor="casesPerMonth" className="block text-sm font-medium text-gray-700 mb-1">
                  FDCPA/TCPA Cases Per Month
                </label>
                <select
                  id="casesPerMonth"
                  value={formData.casesPerMonth}
                  onChange={(e) => setFormData((prev) => ({ ...prev, casesPerMonth: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="1-5">1-5</option>
                  <option value="5-10">5-10</option>
                  <option value="10-25">10-25</option>
                  <option value="25+">25+</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="nacaMember"
                checked={formData.nacaMember}
                onChange={(e) => setFormData((prev) => ({ ...prev, nacaMember: e.target.checked }))}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <label htmlFor="nacaMember" className="ml-2 text-sm text-gray-700">
                I am a NACA (National Association of Consumer Advocates) member
              </label>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your practice and why you'd like to join..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formData.practiceAreas.length === 0 || formData.states.length === 0}
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
