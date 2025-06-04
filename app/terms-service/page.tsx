import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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

      {/* Terms of Service Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-[#212121] mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> June 4, 2025
            </p>

            <p className="text-gray-700 mb-6">
              Welcome to SessionFlow! These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">1. Use of Service</h2>
            <p className="text-gray-700 mb-6">
              You agree to use SessionFlow for lawful purposes only and in accordance with these terms. You may not use our platform to violate any applicable laws or regulations.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">2. Early Access and Pre-Launch Offers</h2>
            <p className="text-gray-700 mb-6">
              If you purchase early access, you are entitled to our Pro plan at a discounted rate of €9.99/month. If the app is not launched within 4 months of purchase, you are eligible for a full refund.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">3. Refund Policy</h2>
            <p className="text-gray-700 mb-6">
              Refunds are only issued if the app is not launched within 4 months of your early access purchase. After the launch, regular billing applies unless canceled.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">4. Account Responsibilities</h2>
            <p className="text-gray-700 mb-6">
              You are responsible for maintaining the confidentiality of your account information and all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on SessionFlow, including logos, text, graphics, and software, is the property of SessionFlow and protected by intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">6. Termination</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to suspend or terminate your access to the service at any time for violation of these terms or suspected misuse.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We may modify these terms at any time. Updated terms will be posted on this page and are effective immediately upon posting.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">8. Contact</h2>
            <p className="text-gray-700 mb-6">
              For questions or concerns, email us at{" "}
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
              <Link href="/terms-of-service" className="text-gray-500 hover:text-[#E53935] text-sm transition-colors">
                Terms of Service
              </Link>
              <p className="text-gray-500 text-sm">© 2025 SessionFlow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
