'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ConsumerShield</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Know Your Rights
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/rights/fdcpa" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Debt Collector Harassment (FDCPA)
                </Link>
                <Link href="/rights/tcpa" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Phone Spam Rights (TCPA)
                </Link>
                <Link href="/rights/robocalls" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Stop Robocalls &amp; Get Paid
                </Link>
                <Link href="/rights/fcra" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Credit Report Errors (FCRA)
                </Link>
              </div>
            </div>
            <Link href="/check" className="text-gray-700 hover:text-blue-600 font-medium">
              Check Violations
            </Link>
            <Link href="/templates" className="text-gray-700 hover:text-blue-600 font-medium">
              Templates
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/attorneys" className="text-gray-700 hover:text-blue-600 font-medium">
              For Attorneys
            </Link>
            <Link
              href="/check"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Help Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">Know Your Rights</div>
            <Link href="/rights/fdcpa" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Debt Collectors (FDCPA)
            </Link>
            <Link href="/rights/tcpa" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Phone Spam (TCPA)
            </Link>
            <Link href="/rights/robocalls" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Stop Robocalls
            </Link>
            <Link href="/rights/fcra" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Credit Reports (FCRA)
            </Link>
            <div className="border-t border-gray-100 my-2"></div>
            <Link href="/check" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Check Violations
            </Link>
            <Link href="/templates" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Templates
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Blog
            </Link>
            <Link href="/attorneys" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              For Attorneys
            </Link>
            <Link
              href="/check"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md text-center font-medium"
            >
              Get Help Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
