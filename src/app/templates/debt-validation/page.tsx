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
    Debt Validation Request

To Whom It May Concern:

I am writing in response to your [letter dated / phone call on] [date] regarding the above-referenced account. This letter is not an acknowledgment that I owe this debt.

Pursuant to the Fair Debt Collection Practices Act (FDCPA), 15 U.S.C. § 1692g, I am requesting validation of this alleged debt. Please provide the following information:

1. The amount of the alleged debt, including an itemization of:
   - The original principal amount
   - Any interest charges
   - Any fees or other charges
   - Any payments or credits applied

2. The name and address of the original creditor

3. A copy of any signed agreement or contract between myself and the original creditor

4. Proof that you are licensed to collect debts in [Your State]

5. Proof that you have the authority to collect this debt, including the complete chain of assignment from the original creditor to your company

6. The date of the last payment made on this account, if any

7. The date the original creditor alleges this debt became delinquent

Please note the following:

• This letter is a formal dispute of this alleged debt per 15 U.S.C. § 1692g(b).

• You must cease all collection activity until you have provided the requested validation as required by 15 U.S.C. § 1692g(b).

• Do not contact me by telephone regarding this matter. All communications must be in writing.

• If you cannot validate this debt, you must cease all collection activities and notify any credit reporting agencies to which you have reported this account to remove it from my credit report.

• Any continued collection activity or negative credit reporting without proper validation is a violation of the FDCPA.

I reserve all rights to pursue legal action for any violations of the FDCPA.

Sincerely,

[Your Signature]
[Your Printed Name]

Sent via Certified Mail, Return Receipt Requested
Tracking Number: _______________`;

export default function DebtValidationTemplate() {
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
    a.download = 'debt-validation-letter.txt';
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
            Debt Validation Letter
          </h1>
          <p className="mt-3 text-lg text-blue-100">
            Request proof that you owe the debt and that the collector has the right to collect it.
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
                Within 30 days of a collector&apos;s first contact (for strongest protection)
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                When you don&apos;t recognize the debt or believe it&apos;s incorrect
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                When you want to verify the collector has proper documentation
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Anytime you want to exercise your rights under the FDCPA
              </li>
            </ul>
          </div>

          {/* What Happens */}
          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900">What Happens After You Send This</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">1</span>
                <span>Collector must stop all collection activity until they validate the debt</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">2</span>
                <span>They have to provide proof of the debt, including the original amount and creditor</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">3</span>
                <span>If they can&apos;t validate, they should stop collection and remove from your credit report</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium">4</span>
                <span>Continuing to collect without validation is an FDCPA violation</span>
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

          {/* Instructions */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900">How to Use This Template</h3>
            <ol className="mt-3 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium flex-shrink-0">1</span>
                <span>Replace all bracketed [text] with your actual information</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium flex-shrink-0">2</span>
                <span>Print the letter on plain white paper</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium flex-shrink-0">3</span>
                <span>Sign your name above your printed name</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium flex-shrink-0">4</span>
                <span>Make a copy for your records before sending</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium flex-shrink-0">5</span>
                <span>Send via USPS Certified Mail with Return Receipt Requested</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-2 text-sm font-medium flex-shrink-0">6</span>
                <span>Record the tracking number on your copy and save the receipt</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
