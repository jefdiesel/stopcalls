'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreditDisputePage() {
  const [copied, setCopied] = useState(false);

  const letterTemplate = `[Your Name]
[Your Address]
[City, State, ZIP]
[Date]

[Credit Bureau Name]
[Credit Bureau Address]

Via Certified Mail, Return Receipt Requested

RE: Dispute of Inaccurate Information - Request for Investigation

To Whom It May Concern:

I am writing to dispute the following inaccurate information that appears on my credit report. Pursuant to the Fair Credit Reporting Act (15 U.S.C. § 1681i), I am requesting that you investigate these items and correct or delete any information that cannot be verified.

DISPUTED ITEM(S):

Account Name: [Name of Creditor/Account]
Account Number: [Full or Partial Account Number]
Reason for Dispute: [Choose one or more:]
- This account does not belong to me
- The balance shown is incorrect
- This account was paid in full
- This account is incorrectly showing as delinquent
- This account is outdated and should be removed (older than 7 years)
- This is a duplicate entry of another account
- [Other specific reason]

Correct Information: [Describe what the correct information should be]

I have enclosed copies of the following supporting documentation:
- [List documents: payment receipts, account statements, identity documents, etc.]

Under the FCRA, you are required to:
1. Conduct a reasonable investigation within 30 days (35 days if I submit additional information)
2. Forward all relevant information I provide to the furnisher
3. Review and consider all relevant information
4. Delete or modify any information that cannot be verified
5. Provide me with written notice of the results

If your investigation determines that the disputed information is inaccurate, incomplete, or cannot be verified, I request that you:
1. Delete the inaccurate information from my credit file
2. Send me a corrected copy of my credit report
3. Send a corrected report to any party who received my report in the past six months

Please note that under the FCRA, failure to conduct a reasonable investigation, or reinserting deleted information without proper notice to me, may result in liability including statutory damages of $100-$1,000 per violation, actual damages, punitive damages, and attorney fees.

I expect to receive your written response within 30 days of receipt of this letter.

Sincerely,

_______________________
[Your Signature]
[Your Printed Name]

Enclosures:
- Copy of government-issued ID
- Copy of utility bill or other proof of address
- [List other supporting documents]`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(letterTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadLetter = () => {
    const blob = new Blob([letterTemplate], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'credit-bureau-dispute-letter.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/templates"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Templates
        </Link>

        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Credit Bureau Dispute Letter
          </h1>
          <p className="text-gray-600 mb-6">
            Use this letter to dispute errors on your credit report directly with Equifax, Experian, or TransUnion.
            Under the FCRA, they must investigate within 30 days.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-purple-800 mb-2">Important Tips:</h3>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Always send via certified mail with return receipt requested</li>
              <li>• Keep copies of everything you send</li>
              <li>• Include copies (not originals) of supporting documents</li>
              <li>• Be specific about what information is incorrect and why</li>
              <li>• Send separate letters for each bureau that has the error</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Credit Bureau Addresses:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <strong>Equifax</strong><br />
                P.O. Box 740256<br />
                Atlanta, GA 30374
              </div>
              <div>
                <strong>Experian</strong><br />
                P.O. Box 4500<br />
                Allen, TX 75013
              </div>
              <div>
                <strong>TransUnion</strong><br />
                P.O. Box 2000<br />
                Chester, PA 19016
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={copyToClipboard}
              className="flex-1 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Letter
                </>
              )}
            </button>
            <button
              onClick={downloadLetter}
              className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download .txt
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-gray-100 text-sm whitespace-pre-wrap font-mono">
              {letterTemplate}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-2">What If They Don&apos;t Fix It?</h3>
          <p className="text-gray-700 mb-4">
            If the credit bureau fails to investigate properly or ignores your evidence, you may have a case under the FCRA.
            Attorneys take these cases on contingency - you pay nothing unless you win.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
          >
            Check if you have a case
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
