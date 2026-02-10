import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FDCPA Rights - What Debt Collectors Cannot Do | ConsumerShield',
  description: 'Learn your rights under the Fair Debt Collection Practices Act (FDCPA). Know what debt collectors cannot legally do and how to fight back against harassment.',
};

export default function FDCPARights() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your FDCPA Rights
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            The Fair Debt Collection Practices Act protects you from abusive, unfair, and deceptive
            debt collection practices. Here&apos;s what you need to know.
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
              <li><strong>What:</strong> Federal law (15 U.S.C. &sect; 1692) regulating third-party debt collectors</li>
              <li><strong>Damages:</strong> Up to $1,000 per lawsuit + actual damages + attorney fees</li>
              <li><strong>Statute of Limitations:</strong> 1 year from the date of the violation</li>
              <li><strong>Key Point:</strong> The debt collector pays your attorney fees if you win (fee-shifting)</li>
            </ul>
          </div>

          {/* Who Is Covered */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is Covered by the FDCPA?</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    FDCPA Applies To:
                  </h3>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li>Third-party collection agencies</li>
                    <li>Debt buyers who purchased your debt</li>
                    <li>Attorneys who regularly collect debts</li>
                    <li>Companies collecting on behalf of others</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    FDCPA Does NOT Apply To:
                  </h3>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li>The original creditor (the company you owed)</li>
                    <li>Internal collection departments of the original creditor</li>
                    <li>Business debts (only consumer debts)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What Debt Collectors Cannot Do */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Debt Collectors CANNOT Do</h2>

            {/* Harassment */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </span>
                Harassment or Abuse
              </h3>
              <ul className="mt-4 ml-11 space-y-2 text-gray-700">
                <li>Use or threaten violence or harm</li>
                <li>Use obscene or profane language</li>
                <li>Call repeatedly to annoy or harass you</li>
                <li>Call before 8:00 AM or after 9:00 PM (your local time)</li>
                <li>Publish your name on a &quot;bad debt&quot; list</li>
              </ul>
            </div>

            {/* False Statements */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </span>
                False or Misleading Statements
              </h3>
              <ul className="mt-4 ml-11 space-y-2 text-gray-700">
                <li>Lie about the amount you owe</li>
                <li>Falsely claim to be an attorney or government representative</li>
                <li>Threaten to sue when they have no intention or ability to do so</li>
                <li>Threaten arrest or jail time (debt is civil, not criminal)</li>
                <li>Claim you&apos;ll be arrested if you don&apos;t pay</li>
                <li>Misrepresent that documents are legal forms when they aren&apos;t</li>
                <li>Falsely claim to operate or work for a credit bureau</li>
              </ul>
            </div>

            {/* Unfair Practices */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </span>
                Unfair Practices
              </h3>
              <ul className="mt-4 ml-11 space-y-2 text-gray-700">
                <li>Collect more than you legally owe</li>
                <li>Deposit a post-dated check early</li>
                <li>Take or threaten to take your property without legal right</li>
                <li>Contact you by postcard (must use sealed envelope)</li>
                <li>Add unauthorized interest, fees, or charges</li>
              </ul>
            </div>

            {/* Third Party Disclosure */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </span>
                Third-Party Disclosure
              </h3>
              <ul className="mt-4 ml-11 space-y-2 text-gray-700">
                <li>Tell your family, friends, neighbors, or employer about your debt</li>
                <li>Discuss your debt with anyone except you, your spouse, or your attorney</li>
                <li>Contact third parties more than once to locate you</li>
                <li>Call your workplace after you&apos;ve told them not to</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under the FDCPA</h2>
            <div className="bg-green-50 rounded-xl p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Right to Validation:</strong> Within 5 days of first contact, they must send you a written notice
                    with the amount owed, creditor name, and your right to dispute.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Right to Dispute:</strong> You have 30 days to dispute the debt in writing. They must stop
                    collection until they verify the debt.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Right to Stop Contact:</strong> You can send a written &quot;cease communication&quot; letter.
                    They can only contact you to confirm they&apos;ll stop or notify you of legal action.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Right to Sue:</strong> You can sue the collector for FDCPA violations within 1 year.
                    You can recover up to $1,000 in statutory damages plus actual damages and attorney fees.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Damages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can You Recover?</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">$1,000</div>
                  <div className="text-gray-600 mt-1">Statutory Damages</div>
                  <div className="text-sm text-gray-500 mt-2">Per lawsuit (not per violation)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">Actual</div>
                  <div className="text-gray-600 mt-1">Damages</div>
                  <div className="text-sm text-gray-500 mt-2">Lost wages, emotional distress, etc.</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">$0</div>
                  <div className="text-gray-600 mt-1">Attorney Fees</div>
                  <div className="text-sm text-gray-500 mt-2">Collector pays if you win</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold">Think Your Rights Were Violated?</h2>
            <p className="mt-2 text-blue-100">
              Our free violation checker can help you identify potential FDCPA violations.
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
