import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | ConsumerShield',
  description: 'Our commitment to making ConsumerShield accessible to all users, including those with disabilities.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Accessibility Statement
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            ConsumerShield is committed to ensuring digital accessibility for people with disabilities.
            We continually work to improve the user experience for everyone and apply relevant accessibility
            standards.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-700 mb-4">
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            These guidelines explain how to make web content more accessible to people with disabilities,
            including those who use assistive technologies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Accessibility Features
          </h2>
          <p className="text-gray-700 mb-4">
            We have implemented the following accessibility features on this website:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Keyboard Navigation:</strong> All interactive elements can be accessed using a keyboard.
              Use Tab to navigate between elements and Enter to activate them.
            </li>
            <li>
              <strong>Skip to Main Content:</strong> A &quot;Skip to main content&quot; link is available at the top
              of each page for keyboard users to bypass navigation.
            </li>
            <li>
              <strong>Semantic HTML:</strong> We use proper heading hierarchy and semantic HTML elements
              to help screen readers understand page structure.
            </li>
            <li>
              <strong>Color Contrast:</strong> Text and background colors meet WCAG 2.1 AA contrast
              requirements for readability.
            </li>
            <li>
              <strong>Descriptive Links:</strong> Link text describes the destination or purpose,
              not just &quot;click here&quot; or &quot;read more.&quot;
            </li>
            <li>
              <strong>Form Labels:</strong> All form inputs have associated labels for screen reader users.
            </li>
            <li>
              <strong>Responsive Design:</strong> The site works on all screen sizes and supports
              browser zoom up to 200%.
            </li>
            <li>
              <strong>No Flashing Content:</strong> We avoid content that flashes more than three times
              per second.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Assistive Technology Compatibility
          </h2>
          <p className="text-gray-700 mb-4">
            This website is designed to be compatible with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Known Limitations
          </h2>
          <p className="text-gray-700 mb-4">
            While we strive for full accessibility, some content may have limitations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>PDF Documents:</strong> Some downloadable letter templates are provided as plain
              text files for maximum compatibility. If you need an alternative format, please contact us.
            </li>
            <li>
              <strong>Third-Party Content:</strong> Some embedded content from third parties may not
              meet all accessibility standards.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Feedback and Contact
          </h2>
          <p className="text-gray-700 mb-4">
            We welcome your feedback on the accessibility of ConsumerShield. If you encounter
            any accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:accessibility@stopharassmentcalls.com" className="text-blue-600 underline hover:text-blue-800">
                accessibility@stopharassmentcalls.com
              </a>
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            We aim to respond to accessibility feedback within 5 business days and will work to
            resolve any issues as quickly as possible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Technical Specifications
          </h2>
          <p className="text-gray-700 mb-4">
            This website relies on the following technologies for accessibility:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>HTML5</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Conformance Status
          </h2>
          <p className="text-gray-700 mb-4">
            We believe this website substantially conforms to WCAG 2.1 Level AA. We regularly
            audit our site using automated tools and manual testing to identify and address
            accessibility issues.
          </p>

          <p className="text-gray-500 text-sm mt-8">
            Last updated: February 2025
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Return to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
