import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TCPA Rights - Stop Robocalls & Spam Texts | ConsumerShield',
  description: 'Learn your rights under the Telephone Consumer Protection Act (TCPA). Find out how to stop illegal robocalls and get compensation for unwanted calls and texts.',
};

export default function TCPARights() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your TCPA Rights
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            The Telephone Consumer Protection Act protects you from unwanted robocalls, automated texts,
            and prerecorded messages. Here&apos;s what you need to know.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Summary */}
          <div className="bg-blue-50 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Summary
            </h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><strong>What:</strong> Federal law (47 U.S.C. &sect; 227) restricting automated calls and texts</li>
              <li><strong>Damages:</strong> $500-$1,500 per illegal call or text</li>
              <li><strong>Statute of Limitations:</strong> 4 years from the date of the violation</li>
              <li><strong>Key Point:</strong> Each robocall or text is a separate violation</li>
            </ul>
          </div>

          {/* What's Covered */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What the TCPA Covers</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Protected Communications:
                  </h3>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li>Robocalls to cell phones</li>
                    <li>Automated/prerecorded voice messages</li>
                    <li>Automated text messages (SMS)</li>
                    <li>Fax advertisements</li>
                    <li>Calls using autodialers (ATDS)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Key Requirement:
                  </h3>
                  <p className="mt-3 text-gray-700">
                    Companies need your <strong>prior express consent</strong> before making automated calls
                    or sending automated texts to your cell phone. For marketing, they need
                    <strong> prior express written consent</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Illegal */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Illegal Under the TCPA</h2>

            <div className="space-y-4">
              {/* Robocalls */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Robocalls Without Consent
                </h3>
                <p className="mt-3 ml-11 text-gray-700">
                  Automated or prerecorded calls to your cell phone without your prior express consent.
                  This includes debt collection calls, telemarketing, and informational calls using autodialers.
                </p>
              </div>

              {/* Spam Texts */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Automated Text Messages
                </h3>
                <p className="mt-3 ml-11 text-gray-700">
                  Text messages sent using an autodialer without consent. Marketing texts require written consent.
                  Each text is a separate violation worth $500-$1,500.
                </p>
              </div>

              {/* Revoked Consent */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Calls After You Said Stop
                </h3>
                <p className="mt-3 ml-11 text-gray-700">
                  You can revoke consent at any time. Once you tell them to stop calling, every subsequent call
                  is a violation. You don&apos;t need a reason and they can&apos;t require you to do it in writing.
                </p>
              </div>

              {/* Wrong Number */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Wrong Number Calls
                </h3>
                <p className="mt-3 ml-11 text-gray-700">
                  If you inherited a phone number and receive robocalls meant for someone else, those are violations.
                  The caller had no consent from <em>you</em>, even if the previous owner consented.
                </p>
              </div>

              {/* Do Not Call */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Do Not Call Violations
                </h3>
                <p className="mt-3 ml-11 text-gray-700">
                  Telemarketing calls to numbers on the National Do Not Call Registry or to numbers you&apos;ve asked
                  that specific company not to call. Companies must maintain internal do-not-call lists.
                </p>
              </div>
            </div>
          </div>

          {/* Damages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can You Recover?</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">$500</div>
                  <div className="text-gray-600 mt-2">Per violation (standard)</div>
                  <div className="text-sm text-gray-500 mt-2">Each call or text counts separately</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">$1,500</div>
                  <div className="text-gray-600 mt-2">Per violation (willful)</div>
                  <div className="text-sm text-gray-500 mt-2">Treble damages for knowing violations</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Example Calculation:</h4>
                <p className="text-green-700 mt-2">
                  50 robocalls &times; $500 = <strong>$25,000</strong> (standard damages)<br />
                  50 robocalls &times; $1,500 = <strong>$75,000</strong> (if willful)
                </p>
              </div>
            </div>
          </div>

          {/* How to Document */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Build Your Case</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">1</span>
                  </span>
                  <div>
                    <strong>Save your call log:</strong> Screenshot your phone&apos;s call history showing dates,
                    times, and phone numbers. Your carrier can also provide records.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">2</span>
                  </span>
                  <div>
                    <strong>Save voicemails:</strong> Don&apos;t delete prerecorded messages. These prove the call
                    was automated. Forward them to your email if possible.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">3</span>
                  </span>
                  <div>
                    <strong>Screenshot texts:</strong> Save all spam text messages with visible timestamps
                    and sender information.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">4</span>
                  </span>
                  <div>
                    <strong>Note when you revoked consent:</strong> If you told them to stop and they didn&apos;t,
                    write down when and how you asked.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">5</span>
                  </span>
                  <div>
                    <strong>Identify the caller:</strong> Listen to the message to identify the company.
                    Search the phone number online to find who&apos;s calling.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Common TCPA Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common TCPA Case Types</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Debt Collection Robocalls</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Collectors using autodialers or prerecorded messages to reach you on your cell phone.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Telemarketing Texts</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Marketing texts from companies you never gave your number to, or after you unsubscribed.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Wrong Number Harassment</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Calls for someone else that continue after you&apos;ve told them it&apos;s the wrong number.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Political Robocalls</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Prerecorded political calls to cell phones without consent (live calls have different rules).
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold">Getting Bombarded With Robocalls?</h2>
            <p className="mt-2 text-blue-100">
              Our free violation checker can help you identify potential TCPA violations and estimate your case value.
            </p>
            <Link
              href="/check"
              className="inline-flex items-center justify-center mt-6 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Check My Rights Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
