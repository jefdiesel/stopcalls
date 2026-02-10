'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FurnisherDisputePage() {
  const [copied, setCopied] = useState(false);

  const letterTemplate = `[Your Name]
[Your Address]
[City, State, ZIP]
[Date]

[Furnisher Name - Bank, Creditor, or Collection Agency]
[Furnisher Address]

Via Certified Mail, Return Receipt Requested

RE: Direct Dispute Under FCRA § 1681s-2(a)(8) - Account #[XXXXX]

To Whom It May Concern:

I am writing to dispute inaccurate information that you are reporting to the consumer reporting agencies regarding the above-referenced account. Under the Fair Credit Reporting Act (15 U.S.C. § 1681s-2), you are required to report accurate information and to investigate disputes submitted directly to you.

ACCOUNT INFORMATION:
Account Number: [Account Number]
Account Name: [Your name as it appears on the account]
Account Type: [Credit Card, Loan, Collection, etc.]

DISPUTE:
The information you are reporting is inaccurate for the following reason(s):

[Check all that apply and add details:]
□ This account does not belong to me
□ The balance reported is incorrect
   - You are reporting: $[Amount]
   - The correct balance is: $[Amount] / $0 (paid in full)
□ The payment history is incorrect
□ The account status is incorrect
   - You are reporting: [Status - e.g., "Charged Off," "Collection"]
   - The correct status is: [Status - e.g., "Paid," "Current"]
□ The date of first delinquency is incorrect
□ This account is past the 7-year reporting period
□ This account was included in bankruptcy
□ This is a duplicate entry
□ Other: [Explain]

SUPPORTING EVIDENCE:
I have enclosed copies of the following documents to support my dispute:
- [Payment confirmation/receipt]
- [Account statement showing correct balance]
- [Letter from creditor]
- [Court documents/Bankruptcy discharge]
- [Other relevant documentation]

YOUR OBLIGATIONS UNDER THE FCRA:
As a furnisher of information to consumer reporting agencies, you are required to:

1. Conduct a reasonable investigation of this dispute (15 U.S.C. § 1681s-2(b))
2. Review all relevant information I have provided
3. Report the results of your investigation to all credit bureaus to which you reported
4. If this information is inaccurate or cannot be verified, modify or delete it
5. Notify me of the results of your investigation

You may not:
- Ignore this dispute
- Conduct only a cursory review
- Fail to consider the evidence I have provided
- Continue reporting inaccurate information after being notified

LEGAL NOTICE:
Please be advised that if you fail to conduct a reasonable investigation, or if you continue to report information you know or should know is inaccurate, you may be subject to liability under the FCRA including:
- Actual damages suffered as a result of the inaccurate reporting
- Statutory damages of $100 to $1,000 per violation for willful noncompliance
- Punitive damages for willful violations
- Court costs and reasonable attorney fees

I expect a written response within 30 days confirming that you have investigated this matter and what actions you have taken.

Sincerely,

_______________________
[Your Signature]
[Your Printed Name]
[Your Phone Number]
[Your Email]

Enclosures:
- Copy of government-issued ID
- [List all supporting documents]

cc: Equifax, Experian, TransUnion (if applicable)`;

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
    a.download = 'furnisher-dispute-letter.txt';
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
            Furnisher Dispute Letter (Direct Dispute)
          </h1>
          <p className="text-gray-600 mb-6">
            Use this letter to dispute errors directly with the company reporting the information
            (bank, creditor, collection agency). This is in addition to disputing with the credit bureaus.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Why Dispute with the Furnisher?</h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Furnishers have the actual account records and can verify accuracy</li>
              <li>• Creates a paper trail if they continue reporting inaccurate info</li>
              <li>• They have independent obligations under the FCRA</li>
              <li>• Can be more effective than bureau disputes for complex errors</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-purple-800 mb-2">Important Tips:</h3>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Send via certified mail with return receipt requested</li>
              <li>• Include copies (not originals) of all supporting documents</li>
              <li>• Be specific about what&apos;s wrong and what the correct info should be</li>
              <li>• Keep copies of everything for your records</li>
              <li>• Also send disputes to the credit bureaus for maximum effect</li>
            </ul>
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
          <h3 className="font-semibold text-gray-900 mb-2">Still Having Trouble?</h3>
          <p className="text-gray-700 mb-4">
            If the furnisher ignores your dispute or continues reporting inaccurate information,
            you may have a case under the FCRA. Attorneys take these cases on contingency.
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
