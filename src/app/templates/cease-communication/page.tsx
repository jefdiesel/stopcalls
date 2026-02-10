'use client';

import { useState } from 'react';
import Link from 'next/link';

const letterTemplate = `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Debt Collector Name]
[Debt Collector Address]
[City, State ZIP]

Re: Account Number [Account Number, if known]
    Cease Communication Demand

To Whom It May Concern:

Pursuant to my rights under the Fair Debt Collection Practices Act (FDCPA), 15 U.S.C. § 1692c(c), I am formally requesting that you cease all communication with me regarding the above-referenced account or any other alleged debts.

I am requesting that you:

1. Stop all telephone calls to me, my family, and my workplace
2. Stop all written correspondence except as permitted by law
3. Stop all text messages and electronic communications
4. Do not sell or transfer this account without notifying me in writing

Under the FDCPA, upon receipt of this letter, you may only contact me to:
• Advise me that collection efforts are being terminated
• Notify me that you may invoke specified remedies (such as filing a lawsuit)
• Notify me that you are invoking a specific remedy

Any contact beyond what is permitted by law will be considered a violation of the FDCPA, and I will pursue all available legal remedies, including seeking statutory damages of up to $1,000, plus actual damages and attorney fees.

Please note that this letter is not an acknowledgment that I owe any debt, and I reserve all rights to dispute any alleged debt.

Sincerely,

[Your Signature]
[Your Printed Name]

Sent via Certified Mail, Return Receipt Requested
Tracking Number: _______________`;

export default function CeaseCommunicationTemplate() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([letterTemplate], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cease-communication-letter.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/templates" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Templates
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">
            Cease Communication Letter
          </h1>
          <p className="mt-3 text-lg text-white">
            Legally demand that a debt collector stop contacting you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* When to Use */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              When to Use This Letter
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                When you want all contact from a collector to stop immediately
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                When a collector is harassing you with repeated calls
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                When you&apos;ve already validated or disputed the debt
              </li>
            </ul>
          </div>

          {/* Important Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 flex items-center">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Important: Read Before Sending
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span><strong>This does NOT make the debt go away.</strong> The debt may still exist.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>The collector can still <strong>sue you</strong> to collect the debt.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>The debt may still be <strong>reported to credit bureaus</strong>.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Consider sending a <strong>debt validation letter first</strong> if you haven&apos;t.</span>
              </li>
            </ul>
          </div>

          {/* What Happens */}
          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900">What Happens After You Send This</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">1</span>
                <span>Collector must stop all phone calls, letters, and other contact attempts</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">2</span>
                <span>They can only contact you to confirm they&apos;re stopping or to notify you of legal action</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">3</span>
                <span>Any further contact beyond these exceptions is an FDCPA violation</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">4</span>
                <span>Document any violations &ndash; each one could be worth up to $1,000</span>
              </li>
            </ul>
          </div>

          {/* Download Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Template
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>

          {/* Letter Preview */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Letter Template</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-gray-50 p-6 rounded-lg overflow-x-auto">
              {letterTemplate}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
