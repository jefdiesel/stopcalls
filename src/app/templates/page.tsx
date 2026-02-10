import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Legal Letter Templates - FDCPA, FCRA, Credit Disputes | ConsumerShield',
  description: 'Download free legal letter templates for debt validation, cease communication, credit bureau disputes, and CFPB complaints. Fight back against debt collectors and credit bureaus.',
};

const templates = [
  // Debt Collection (FDCPA)
  {
    id: 'debt-validation',
    title: 'Debt Validation Letter',
    description: 'Request that a debt collector prove you actually owe the debt. They must stop collection until they provide validation.',
    useCase: 'When a collector first contacts you or when you dispute the debt',
    category: 'fdcpa',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'cease-communication',
    title: 'Cease Communication Letter',
    description: 'Demand that a debt collector stop contacting you. After receiving this, they can only contact you to confirm they\'ll stop or notify you of legal action.',
    useCase: 'When you want the calls and letters to stop',
    category: 'fdcpa',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  // Credit Reports (FCRA)
  {
    id: 'credit-dispute',
    title: 'Credit Bureau Dispute Letter',
    description: 'Dispute errors directly with Equifax, Experian, or TransUnion. They must investigate within 30 days under the FCRA.',
    useCase: 'When you find errors on your credit report',
    category: 'fcra',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'furnisher-dispute',
    title: 'Furnisher Dispute Letter',
    description: 'Dispute errors directly with the company reporting the information (bank, creditor, collection agency) under FCRA § 1681s-2.',
    useCase: 'When you want to dispute directly with the source of the error',
    category: 'fcra',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  // Complaints
  {
    id: 'cfpb-complaint',
    title: 'CFPB Complaint Template',
    description: 'File a complaint with the Consumer Financial Protection Bureau. The CFPB will forward your complaint to the company and work to get a response.',
    useCase: 'When a collector or credit bureau violates your rights',
    category: 'complaint',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    id: 'ftc-complaint',
    title: 'FTC Complaint Template',
    description: 'Report TCPA violations (robocalls, spam texts) to the Federal Trade Commission.',
    useCase: 'When you receive illegal robocalls or automated texts',
    category: 'complaint',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function TemplatesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Free Letter Templates
          </h1>
          <p className="mt-4 text-xl text-white">
            Download free, ready-to-use legal letters to protect your rights against debt collectors
            and report violations.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    {template.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{template.title}</h3>
                    <p className="mt-2 text-gray-600">{template.description}</p>
                    <p className="mt-3 text-sm text-gray-500">
                      <strong>Best used:</strong> {template.useCase}
                    </p>
                    <a
                      href={`/templates/${template.id}`}
                      className="inline-flex items-center mt-4 text-blue-600 font-medium hover:text-blue-700"
                    >
                      View & Download
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How to Use These Templates</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Download the Template</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Choose the appropriate letter for your situation and download it.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Fill in Your Information</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Replace the bracketed placeholders with your personal information and details.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Send via Certified Mail</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Always send letters via certified mail with return receipt for proof of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Tips */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 flex items-center">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Important Tips
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Keep copies</strong> of all letters you send</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Use certified mail</strong> with return receipt requested to prove delivery</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Note the date</strong> you sent each letter and when it was received</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Send within 30 days</strong> of first contact for debt validation requests</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Think Your Rights Were Violated?
          </h2>
          <p className="mt-2 text-gray-600">
            Letters help document violations, but you may be entitled to compensation.
            Check if you have a case.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center justify-center mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Check My Rights Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
