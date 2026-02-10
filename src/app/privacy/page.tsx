import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ConsumerShield',
  description: 'Learn how ConsumerShield collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            ConsumerShield (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p className="text-gray-700 mb-4">When you use our violation checker or contact form, we may collect:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Name and contact information (email, phone number)</li>
            <li>State of residence</li>
            <li>Information about your debt collection or robocall experience</li>
            <li>Documentation you choose to share (letters, call logs, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">We may automatically collect:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Usage data and browsing patterns</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Evaluate potential legal violations</li>
            <li>Connect you with qualified consumer rights attorneys</li>
            <li>Improve our services and user experience</li>
            <li>Send you relevant educational content (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-700 mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Attorneys:</strong> When you request to be connected with an attorney,
              we share your intake information with qualified attorneys in our network.</li>
            <li><strong>Service Providers:</strong> Third parties that help us operate our website
              and provide services (hosting, analytics, email delivery).</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Attorney-Client Privilege</h2>
          <p className="text-gray-700 mb-4">
            <strong>Important:</strong> Information you share through our website is not protected by
            attorney-client privilege until you establish a formal relationship with an attorney.
            Once an attorney agrees to represent you, communications between you and that attorney
            are privileged.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect your personal
            information. However, no method of transmission over the Internet is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your experience, analyze site usage,
            and assist in our marketing efforts. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services are not directed to individuals under 18 years of age. We do not knowingly
            collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-gray-700 mb-4">
            Email: privacy@consumershield.com
          </p>
        </div>
      </div>
    </div>
  );
}
