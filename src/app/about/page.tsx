import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story | ConsumerShield',
  description: 'We built ConsumerShield because we\'ve been there. Harassed by debt collectors, lied to, threatened. Now we help others fight back.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Built This Because We&apos;ve Been There
          </h1>
          <p className="text-xl text-gray-300">
            Harassed. Threatened. Lied to. We know what it feels like.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In 2019, I hit a rough patch. Lost my job during a company restructuring.
              Had about three months of savings. Thought I&apos;d land something quickly. I didn&apos;t.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The credit card bills piled up. Then came the calls.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              At first, it was just reminders. Polite enough. But when I fell 90 days behind,
              everything changed. The account got sold to a collection agency, and suddenly
              I was getting 5, 6, sometimes 8 calls a day.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <p className="text-gray-800 italic mb-4">
                &quot;We&apos;re going to garnish your wages. We&apos;re going to freeze your bank account.
                We&apos;re sending someone to your house.&quot;
              </p>
              <p className="text-gray-600 text-sm">
                — Actual threats I received. All illegal under the FDCPA.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              They called my mom. They called my old job. They called at 6 AM and 10 PM.
              One guy told me I could be arrested for not paying a credit card bill.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I didn&apos;t know any of that was illegal. I thought debt collectors could do
              whatever they wanted. I was ashamed, scared, and completely in the dark about my rights.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Turning Point</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              One night, after a particularly brutal call where the collector implied I was
              a deadbeat who would never amount to anything, I started Googling. Not &quot;how to pay off debt&quot;
              — I&apos;d done that a hundred times. I searched &quot;can debt collectors threaten you.&quot;
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              That&apos;s when I discovered the <strong>Fair Debt Collection Practices Act</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Turns out, almost everything they&apos;d done to me was illegal:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span className="text-gray-700">Calling before 8 AM and after 9 PM — <strong>illegal</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span className="text-gray-700">Threatening arrest for a civil debt — <strong>illegal</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span className="text-gray-700">Calling family members to discuss my debt — <strong>illegal</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span className="text-gray-700">Threatening actions they couldn&apos;t legally take — <strong>illegal</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span className="text-gray-700">Using abusive language — <strong>illegal</strong></span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              I found an attorney who specialized in FDCPA cases. She took my case on contingency
              — meaning I paid nothing upfront. Three months later, I received a settlement check
              for <strong>$3,200</strong>. The collector paid my attorney&apos;s fees on top of that.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The debt? Still there. But the harassment stopped immediately. And I had money
              to actually start paying it down on my terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why We Built ConsumerShield</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              After my case settled, I couldn&apos;t stop thinking about how many people were going
              through the same thing I did. The shame. The fear. The constant anxiety every time
              the phone rang.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I started helping friends and family understand their rights. Then friends of friends.
              I kept hearing the same story: &quot;I had no idea they couldn&apos;t do that.&quot;
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-gray-800 text-lg font-medium mb-2">
                70% of Americans don&apos;t know their rights under the FDCPA.
              </p>
              <p className="text-gray-600">
                Debt collectors count on that. They break the law because they know most people
                won&apos;t fight back.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              ConsumerShield exists to change that equation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We built free tools to help people identify violations. We wrote guides in plain English
              — not legal jargon. We created a network of attorneys who specialize in these cases and
              work on contingency, so fighting back doesn&apos;t cost you a dime.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Because here&apos;s the thing: <strong>you don&apos;t owe these people your dignity.</strong>
              You might owe money — that&apos;s between you and whoever you borrowed from. But the harassment?
              The threats? The lies? Those are crimes. And there are laws to protect you.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What We Believe</h3>

            <div className="space-y-6 my-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Debt doesn&apos;t make you a bad person.</h3>
                  <p className="text-gray-600 mt-1">
                    Medical bills, job loss, divorce, economic downturns — life happens.
                    Owing money is a financial situation, not a character flaw.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Knowledge is power.</h3>
                  <p className="text-gray-600 mt-1">
                    Debt collectors bet on your ignorance. When you know your rights,
                    the power dynamic shifts completely.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Fighting back should be free.</h3>
                  <p className="text-gray-600 mt-1">
                    Thanks to fee-shifting provisions in the FDCPA and TCPA, attorneys can
                    take cases on contingency. You pay nothing unless you win — and the
                    collector pays your legal fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Accountability matters.</h3>
                  <p className="text-gray-600 mt-1">
                    When collectors face consequences for breaking the law, they think twice
                    before harassing the next person. Every case matters.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Numbers</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              We&apos;re not the only ones going through this. Not even close.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600">70M+</div>
              <div className="text-gray-600 mt-2">Americans with debt in collections</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600">1 in 7</div>
              <div className="text-gray-600 mt-2">U.S. adults contacted by collectors yearly</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600">50B+</div>
              <div className="text-gray-600 mt-2">Robocalls made to Americans per year</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600">1 in 5</div>
              <div className="text-gray-600 mt-2">Credit reports with errors</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What We&apos;re Not</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Let&apos;s be clear about what ConsumerShield isn&apos;t:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span className="text-gray-700">
                  <strong>We&apos;re not a law firm.</strong> We provide information and connect you
                  with attorneys, but we don&apos;t give legal advice.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span className="text-gray-700">
                  <strong>We&apos;re not debt counseling.</strong> We don&apos;t help you pay down debt
                  or negotiate settlements. (There are good nonprofits for that.)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span className="text-gray-700">
                  <strong>We&apos;re not magic.</strong> Not every situation qualifies for legal action.
                  Our tool helps you figure out if yours does.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              What we are: people who&apos;ve been through it, helping others who are going through it now.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ready to Fight Back?</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you&apos;re dealing with harassment from debt collectors, robocalls, or credit report
              errors — you&apos;re not alone, and you have options.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Our free violation checker takes 2 minutes. If you have a case, we&apos;ll connect you
              with an attorney who can help. No cost to you. Ever.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Check Your Rights — Free
            </h2>
            <p className="text-white mb-6 max-w-xl mx-auto">
              Takes 2 minutes. No cost. No obligation. Find out if you have a case.
            </p>
            <Link
              href="/check"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Check My Rights Now
            </Link>
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-4">
              Questions? Suggestions? Just want to share your story?
            </p>
            <p className="text-blue-600 font-medium">
              hello@consumershield.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
