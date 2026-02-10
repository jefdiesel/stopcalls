import Link from 'next/link';

export default function RobocallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stop Robocalls &amp; Get Paid
          </h1>
          <p className="text-xl text-red-100 mb-8">
            Every illegal robocall is worth $500-$1,500. Here&apos;s how to fight back.
          </p>
          <Link
            href="/check"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-full text-lg hover:bg-red-50 transition-colors"
          >
            Check If You Have a Case
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600">50B+</div>
              <div className="text-gray-600">Robocalls per year in the US</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600">$500</div>
              <div className="text-gray-600">Per illegal robocall (TCPA)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600">$1,500</div>
              <div className="text-gray-600">Per willful violation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600">$0</div>
              <div className="text-gray-600">Cost to you (attorneys work free)</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* What Counts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Robocalls Are Illegal?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The Telephone Consumer Protection Act (TCPA) makes it illegal to call your cell phone using an autodialer or prerecorded message without your consent. Violations can result in $500-$1,500 per call.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Illegal Robocalls
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">Calls to your cell without consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">Prerecorded marketing messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">Auto-dialed calls (computer dialing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">Spam text messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">Calls after you revoked consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-700">Wrong number calls (not your account)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Usually Legal
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Live calls from humans (manual dialing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Calls you consented to when signing up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Emergency notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Fraud alerts from your bank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Appointment reminders you agreed to</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Violators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who Gets Sued Most Often
          </h2>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Debt Collectors</h3>
                <p className="text-gray-600 mb-4">
                  Companies like Midland Credit, Portfolio Recovery, and LVNV Funding use autodialers to blast out collection calls. If they&apos;re calling your cell without permission, that&apos;s a violation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Banks &amp; Credit Cards</h3>
                <p className="text-gray-600 mb-4">
                  Even big banks violate TCPA. Capital One, Chase, and others have paid millions in settlements for robocalling customers without proper consent.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Student Loan Servicers</h3>
                <p className="text-gray-600 mb-4">
                  Those &quot;student loan forgiveness&quot; calls? Often illegal. Real servicers and scammers alike use robocalls to reach borrowers.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Healthcare &amp; Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Medicare supplement scams, insurance marketing, and even hospital billing departments use autodialers. Many violate TCPA.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Car Warranty Scams</h3>
                <p className="text-gray-600 mb-4">
                  &quot;Your car&apos;s extended warranty...&quot; These are often traceable to real companies. If you can identify them, you can sue them.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Wrong Number Calls</h3>
                <p className="text-gray-600 mb-4">
                  Getting calls for someone else? If a company keeps calling your cell about an account that isn&apos;t yours, that&apos;s actionable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Math */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Math: How Much Are Your Calls Worth?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-green-300">
                  <th className="text-left py-3 text-gray-900">Number of Calls</th>
                  <th className="text-right py-3 text-gray-900">Minimum ($500/call)</th>
                  <th className="text-right py-3 text-gray-900">Maximum ($1,500/call)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-200">
                  <td className="py-3 text-gray-700">10 calls</td>
                  <td className="text-right py-3 font-semibold text-green-700">$5,000</td>
                  <td className="text-right py-3 font-semibold text-green-700">$15,000</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3 text-gray-700">25 calls</td>
                  <td className="text-right py-3 font-semibold text-green-700">$12,500</td>
                  <td className="text-right py-3 font-semibold text-green-700">$37,500</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-3 text-gray-700">50 calls</td>
                  <td className="text-right py-3 font-semibold text-green-700">$25,000</td>
                  <td className="text-right py-3 font-semibold text-green-700">$75,000</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">100 calls</td>
                  <td className="text-right py-3 font-semibold text-green-700">$50,000</td>
                  <td className="text-right py-3 font-semibold text-green-700">$150,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            * Real settlements vary. Most individual cases settle for $1,000-$10,000, but high-volume cases can go much higher.
          </p>
        </section>

        {/* How to Document */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How to Build Your Case
          </h2>
          <div className="space-y-6">
            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Document Every Call</h3>
                <p className="text-gray-600">
                  Screenshot your call log. Note dates, times, and phone numbers. The more calls, the stronger your case.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Identify the Caller</h3>
                <p className="text-gray-600">
                  Answer and ask &quot;What company is this?&quot; Press 1 to speak to someone. Google the callback number. You need to know who to sue.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tell Them to Stop</h3>
                <p className="text-gray-600">
                  Say &quot;Do not call me again&quot; clearly. Send a written cease letter if possible. Calls after revocation are worth more.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Record If Legal</h3>
                <p className="text-gray-600">
                  Many states allow one-party consent recording. A recording of the robocall or your conversation is powerful evidence.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Talk to an Attorney</h3>
                <p className="text-gray-600">
                  TCPA attorneys work on contingency - you pay nothing upfront. They review your case for free and only get paid if you win.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Major Settlements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Real TCPA Settlements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$280M</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Dish Network (2017)</div>
              <p className="text-gray-600">Do Not Call Registry violations from telemarketing</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$75M</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Capital One (2014)</div>
              <p className="text-gray-600">Robocalls to collect debts without consent</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$76M</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Caribbean Cruise (2016)</div>
              <p className="text-gray-600">Prerecorded telemarketing robocalls</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$40M</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Navient (2020)</div>
              <p className="text-gray-600">Student loan robocalls to wrong numbers</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Common Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-sm border">
              <summary className="font-bold text-gray-900 cursor-pointer">
                What if I don&apos;t know who&apos;s calling?
              </summary>
              <p className="mt-4 text-gray-600">
                Try answering and asking for the company name. Press 1 to reach an agent. If you truly can&apos;t identify them, the case is harder - but not impossible. An attorney may have tools to trace calls.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border">
              <summary className="font-bold text-gray-900 cursor-pointer">
                What if I gave them my number originally?
              </summary>
              <p className="mt-4 text-gray-600">
                You can revoke consent at any time. Once you tell them to stop calling and they continue, those calls are violations. Also, consent to one company doesn&apos;t transfer to another.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Do political robocalls count?
              </summary>
              <p className="mt-4 text-gray-600">
                Political calls have some exemptions, but not total immunity. If they use an autodialer or prerecorded message to your cell without consent, there may be a violation.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border">
              <summary className="font-bold text-gray-900 cursor-pointer">
                What about spam texts?
              </summary>
              <p className="mt-4 text-gray-600">
                Yes! The TCPA covers text messages too. Same rules apply - autodialers and marketing without consent are violations.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border">
              <summary className="font-bold text-gray-900 cursor-pointer">
                How long do I have to sue?
              </summary>
              <p className="mt-4 text-gray-600">
                The TCPA has a 4-year statute of limitations. But don&apos;t wait - evidence fades, companies disappear, and call logs get deleted.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Stop the Calls and Get Paid?
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Our free tool identifies TCPA violations and connects you with attorneys who specialize in robocall cases. No upfront cost - ever.
          </p>
          <Link
            href="/check"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-full hover:bg-red-50 transition-colors"
          >
            Check My Robocall Case
          </Link>
        </section>
      </div>
    </div>
  );
}
