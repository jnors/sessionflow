import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/images/logo.png" alt="SessionFlow Logo" width={180} height={40} className="h-8 w-auto" />
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-[#212121] mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> June 4, 2025
            </p>

            <p className="text-gray-700 mb-6">Welcome to SessionFlow. Your privacy is important to us.</p>

            <p className="text-gray-700 mb-8">
              This Privacy Policy describes how we collect, use, and protect your information when you interact with our
              website, join our waitlist, or purchase early access to our platform.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Information We Collect:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Personal Information</strong>: When you sign up for the waitlist or early access, we collect
                your name and email address.
              </li>
              <li>
                <strong>Payment Information</strong>: If you purchase early access, your payment is securely processed
                by our third-party provider (e.g., Stripe). We do not store payment details on our servers.
              </li>
              <li>
                <strong>Usage Data</strong>: We may collect anonymized data such as browser type, device information,
                and IP address for analytics purposes.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">How We Use Your Information:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>To send updates about product development and early access opportunities.</li>
              <li>To communicate with you about your waitlist status or pre-launch purchase.</li>
              <li>To improve our website and user experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Cookies:</h2>
            <p className="text-gray-700 mb-6">
              We may use cookies or similar tracking tools to enhance your experience. You can disable cookies via your
              browser settings.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Data Sharing:</h2>
            <p className="text-gray-700 mb-6">
              We do not sell your information. We may share minimal information with service providers (e.g., email or
              payment providers) who help us deliver our services. These providers are bound by confidentiality
              agreements.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Your Rights:</h2>
            <p className="text-gray-700 mb-6">
              You may request access, correction, or deletion of your data at any time. Email us at{" "}
              <a href="mailto:joaonorsilva92@gmail.com" className="text-[#E53935] hover:underline">
                joaonorsilva92@gmail.com
              </a>{" "}
              for assistance.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Security:</h2>
            <p className="text-gray-700 mb-6">
              We take reasonable measures to protect your data from unauthorized access or disclosure. However, no
              method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Changes:</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with an updated
              effective date.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Contact:</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions, email us at{" "}
              <a href="mailto:joaonorsilva92@gmail.com" className="text-[#E53935] hover:underline">
                joaonorsilva92@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="SessionFlow Logo"
                width={150}
                height={32}
                className="h-6 w-auto mb-4 md:mb-0"
              />
            </Link>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-[#E53935] text-sm transition-colors">
                Privacy Policy
              </Link>
              <p className="text-gray-500 text-sm">© 2025 SessionFlow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
