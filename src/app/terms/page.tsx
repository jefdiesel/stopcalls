import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ConsumerShield',
  description: 'Terms and conditions for using ConsumerShield services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using ConsumerShield (&quot;the Service&quot;), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            ConsumerShield provides educational information about consumer rights under federal laws
            including the Fair Debt Collection Practices Act (FDCPA) and the Telephone Consumer
            Protection Act (TCPA). We also offer tools to help identify potential legal violations
            and connect consumers with qualified attorneys.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Not Legal Advice</h2>
          <p className="text-gray-700 mb-4">
            <strong>IMPORTANT:</strong> The information provided through our Service is for educational
            purposes only and does not constitute legal advice. Our violation checker and other tools
            provide general information and are not a substitute for professional legal counsel.
          </p>
          <p className="text-gray-700 mb-4">
            We do not represent you or any user as an attorney. No attorney-client relationship is
            created by using our Service. For legal advice specific to your situation, please consult
            with a licensed attorney.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Attorney Referrals</h2>
          <p className="text-gray-700 mb-4">
            When you request to be connected with an attorney through our Service:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>We share your information with attorneys in our network who may be able to assist you</li>
            <li>Attorneys are independent professionals; we do not control their actions or advice</li>
            <li>Connection with an attorney does not guarantee representation or a specific outcome</li>
            <li>You are free to choose whether to engage any attorney we connect you with</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">By using our Service, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Provide accurate and truthful information</li>
            <li>Not use the Service for any unlawful purpose</li>
            <li>Not attempt to interfere with or disrupt the Service</li>
            <li>Not impersonate any person or entity</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content on our website, including text, graphics, logos, and software, is the property
            of ConsumerShield or its content suppliers and is protected by intellectual property laws.
            Letter templates provided are for personal use only.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONSUMERSHIELD SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
            LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR
            USE OF THE SERVICE.
          </p>
          <p className="text-gray-700 mb-4">
            Our total liability for any claim arising from the Service shall not exceed the amount
            you paid us, if any, in the twelve (12) months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p className="text-gray-700 mb-4">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
            ERROR-FREE, OR SECURE.
          </p>
          <p className="text-gray-700 mb-4">
            We do not guarantee any specific legal outcome or that the information provided is
            complete, accurate, or applicable to your specific situation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Indemnification</h2>
          <p className="text-gray-700 mb-4">
            You agree to indemnify and hold harmless ConsumerShield and its officers, directors,
            employees, and agents from any claims, damages, losses, or expenses arising from your
            use of the Service or violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these Terms at any time. We will notify you of significant
            changes by posting the new Terms on our website. Your continued use of the Service after
            changes constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the
            State of [Your State], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-700 mb-4">
            Email: legal@consumershield.com
          </p>
        </div>
      </div>
    </div>
  );
}
