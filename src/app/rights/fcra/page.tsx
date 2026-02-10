import Link from 'next/link';

export default function FCRAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Credit Report Errors? Fight Back.
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            1 in 5 credit reports has errors. The FCRA gives you the power to fix them - or sue.
          </p>
          <Link
            href="/check"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full text-lg hover:bg-purple-50 transition-colors"
          >
            Check Your Rights
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-700">1 in 5</div>
              <div className="text-gray-600">Credit reports have errors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-700">40M+</div>
              <div className="text-gray-600">Americans with report errors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-700">30 Days</div>
              <div className="text-gray-600">To investigate your dispute</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-700">$1,000+</div>
              <div className="text-gray-600">Per willful FCRA violation</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* The Big Three */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Credit Bureaus
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Three companies control your credit score. They collect data from banks, credit cards, and collectors. According to FTC studies, 1 in 5 consumers have errors on their reports.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Equifax</h3>
              <p className="text-gray-600 text-sm">
                One of the three major bureaus. Handles credit data for hundreds of millions of consumers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experian</h3>
              <p className="text-gray-600 text-sm">
                Processes billions of data points from creditors, lenders, and collection agencies.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">TransUnion</h3>
              <p className="text-gray-600 text-sm">
                Maintains credit files on over 200 million Americans with data from thousands of sources.
              </p>
            </div>
          </div>
        </section>

        {/* Common Errors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Common Credit Report Errors
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Mixed Files
              </h3>
              <p className="text-gray-700">
                Someone else&apos;s accounts on your report - common with similar names, Jr./Sr., or common surnames. The bureaus&apos; matching algorithms are notoriously bad.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Identity Theft
              </h3>
              <p className="text-gray-700">
                Accounts you never opened. Someone used your info to open credit cards, loans, or utilities. You&apos;re not responsible, but you have to fight to remove them.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Wrong Balance/Status
              </h3>
              <p className="text-gray-700">
                Showing a debt as unpaid when you paid it off. Showing the wrong balance. Marking accounts as delinquent when you&apos;re current.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Old Debts
              </h3>
              <p className="text-gray-700">
                Negative items older than 7 years that should have fallen off. Re-aged debts that were sold to new collectors. Duplicate listings of the same debt.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Incorrect Personal Info
              </h3>
              <p className="text-gray-700">
                Wrong addresses, employers, or names can indicate a mixed file. Also makes it harder to verify your identity.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Closed Accounts Showing Open
              </h3>
              <p className="text-gray-700">
                Accounts you closed still showing as open and active. Can affect debt-to-credit ratios and make it look like you have more credit.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Rights Under the FCRA
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The Fair Credit Reporting Act gives you powerful rights against credit bureaus and the companies that report to them (&quot;furnishers&quot;).
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">
                Right to Free Reports
              </h3>
              <p className="text-gray-700">
                One free report from each bureau per year at AnnualCreditReport.com. Also free if you&apos;re denied credit, unemployed, on welfare, or suspect fraud.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">
                Right to Dispute Errors
              </h3>
              <p className="text-gray-700">
                You can dispute any inaccurate information directly with the bureau and/or the furnisher. They must investigate.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">
                Right to Investigation in 30 Days
              </h3>
              <p className="text-gray-700">
                The bureau must investigate within 30 days (35 if you provide additional info). They must review all relevant evidence you submit.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">
                Right to Results
              </h3>
              <p className="text-gray-700">
                They must notify you of the results and provide a free updated report if changes were made.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">
                Right to Sue
              </h3>
              <p className="text-gray-700">
                If they fail to investigate properly, re-insert deleted info without notice, or report obviously inaccurate info, you can sue for damages.
              </p>
            </div>
          </div>
        </section>

        {/* How to Dispute */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How to Dispute Credit Report Errors
          </h2>
          <div className="space-y-6">
            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-purple-700 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Reports</h3>
                <p className="text-gray-600">
                  Go to <a href="https://www.annualcreditreport.com" className="text-purple-600 underline hover:text-purple-800" target="_blank" rel="noopener noreferrer">AnnualCreditReport.com</a> (the only official source). Check all three bureaus - they often have different errors.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-purple-700 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Identify Errors</h3>
                <p className="text-gray-600">
                  Review every account. Check balances, statuses, dates, and personal info. Note anything that looks wrong.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-purple-700 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dispute in Writing</h3>
                <p className="text-gray-600">
                  Send a written dispute via certified mail with return receipt. Include copies (not originals) of supporting documents. Online disputes create a weaker paper trail.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-purple-700 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dispute to Furnisher Too</h3>
                <p className="text-gray-600">
                  Also send a dispute to the company that reported the info (bank, collector, etc.). They have their own obligation to investigate under the FCRA.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-purple-700 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wait for Response</h3>
                <p className="text-gray-600">
                  They have 30-35 days to investigate and respond. If they &quot;verify&quot; without actually investigating, or ignore your evidence, that&apos;s actionable.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-purple-700 font-bold">6</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Escalate If Needed</h3>
                <p className="text-gray-600">
                  If they don&apos;t fix it: file a CFPB complaint, send a second dispute, and consult an FCRA attorney. The more they ignore, the stronger your case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When You Can Sue */}
        <section className="mb-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            When You Can Sue Under the FCRA
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Credit Bureau Violations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Failed to conduct a &quot;reasonable&quot; investigation
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Re-inserted deleted info without notifying you
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Reported obviously inaccurate information
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Ignored documentation you provided
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Furnisher Violations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Reported info they knew was wrong
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Failed to investigate after direct dispute
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Continued reporting after receiving correction
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Reported debts past the 7-year limit
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">What You Can Win</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Actual damages:</strong> Denied credit, higher interest rates paid, lost job opportunity</li>
              <li><strong>Statutory damages:</strong> $100-$1,000 per willful violation</li>
              <li><strong>Punitive damages:</strong> Additional penalty for willful violations</li>
              <li><strong>Attorney fees:</strong> They pay your lawyer - not you</li>
            </ul>
          </div>
        </section>

        {/* Real Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Notable FCRA Court Cases
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            These are publicly documented court cases and settlements. Past results do not guarantee future outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$40M</div>
              <div className="text-xl font-bold text-gray-900 mb-1">White v. Equifax (2013)</div>
              <p className="text-gray-600">Class action settlement involving mixed credit files</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$8M+</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Ramirez v. TransUnion (2021)</div>
              <p className="text-gray-600">Supreme Court case regarding OFAC terrorist list matching errors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$22.5M</div>
              <div className="text-xl font-bold text-gray-900 mb-1">CFPB v. Equifax (2017)</div>
              <p className="text-gray-600">CFPB enforcement action for dispute handling procedures</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">$5K-50K</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Individual Cases</div>
              <p className="text-gray-600">Typical range for individual cases with documented harm</p>
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Dispute Letter Templates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/templates/credit-dispute" className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Credit Bureau Dispute Letter
              </h3>
              <p className="text-gray-600 mb-4">
                Template for disputing errors directly with Equifax, Experian, or TransUnion.
              </p>
              <span className="text-purple-600 font-medium">Get Template →</span>
            </Link>
            <Link href="/templates/furnisher-dispute" className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Furnisher Dispute Letter
              </h3>
              <p className="text-gray-600 mb-4">
                Template for disputing directly with the company that reported the error.
              </p>
              <span className="text-purple-600 font-medium">Get Template →</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Errors on Your Credit Report?
          </h2>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Our free tool helps identify FCRA violations and connects you with attorneys who specialize in credit reporting cases. No upfront cost.
          </p>
          <Link
            href="/check"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors"
          >
            Check My Credit Rights
          </Link>
        </section>
      </div>
    </div>
  );
}
