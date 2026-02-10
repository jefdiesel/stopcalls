import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white">ConsumerShield</span>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering consumers to understand their rights and fight back against illegal debt collection
              practices and unwanted robocalls. Free education, free resources, free attorney connections.
            </p>
          </div>

          {/* Know Your Rights */}
          <div>
            <h3 className="text-white font-semibold mb-4">Know Your Rights</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rights/fdcpa" className="hover:text-white transition-colors">
                  FDCPA Rights
                </Link>
              </li>
              <li>
                <Link href="/rights/tcpa" className="hover:text-white transition-colors">
                  TCPA Rights
                </Link>
              </li>
              <li>
                <Link href="/check" className="hover:text-white transition-colors">
                  Check for Violations
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Letter Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/attorneys" className="hover:text-white transition-colors">
                  For Attorneys
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ConsumerShield. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              This site provides legal information, not legal advice. Consult an attorney for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
