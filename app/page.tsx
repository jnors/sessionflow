"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Calendar, Users, TrendingUp } from "lucide-react"
import { useEffect } from "react"

export default function HomePage() {
  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Load Tally script
    const script = document.createElement("script")
    script.src = "https://tally.so/widgets/embed.js"
    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).Tally) {
        ;(window as any).Tally.loadEmbeds()
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/images/logo.png"
              alt="SessionFlow Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
            <div className="space-x-4">
              <Button
                variant="outline"
                className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
                onClick={scrollToForm}
              >
                Join Waitlist
              </Button>
              <Button
                className="bg-[#E53935] hover:bg-red-600 text-white"
                onClick={scrollToForm}
              >
                Pre-Order Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#212121] mb-6 leading-tight">
                Get SessionFlow Pro for{" "}
                <span className="text-[#E53935]">€9.99/month</span> — Forever
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Become a founding user and lock in our best pricing ever. Pay now, use later—and get a full refund if we don’t
                launch within 4 months.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 mb-6">
                <Button
                  size="lg"
                  className="bg-[#E53935] hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
                  onClick={scrollToForm}
                >
                  Unlock Pro at €9.99
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white px-8 py-4 text-lg font-semibold"
                  onClick={scrollToForm}
                >
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Limited to the first 100 subscribers. Full refund if not live within 4 months.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-[600px] bg-[#212121] rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/trainer-home.png"
                      alt="SessionFlow mobile app dashboard"
                      width={280}
                      height={596}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">
              Why SessionFlow Works for You
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#212121]">Effortless Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Smart booking system with automated reminders and calendar sync—never double-book again.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#212121]">Client Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Track sessions, goals, and private notes all in one place. Store detailed client notes,
                  track progress, and maintain comprehensive session histories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#212121]">Growth Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Analytics and insights to help you understand your practice and grow your business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">
              Still texting and scribbling notes?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Chaotic Way */}
            <div className="bg-white border border-red-200 rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#E53935] mb-4">The Chaotic Way</h3>
              <ul className="space-y-3 text-[#212121]">
                <li className="flex items-start">
                  <span className="text-[#E53935] mr-2 mt-1">•</span>
                  Texting clients to schedule and reschedule sessions
                </li>
                <li className="flex items-start">
                  <span className="text-[#E53935] mr-2 mt-1">•</span>
                  Losing client notes written on random papers
                </li>
                <li className="flex items-start">
                  <span className="text-[#E53935] mr-2 mt-1">•</span>
                  No clear view of your business growth or patterns
                </li>
                <li className="flex items-start">
                  <span className="text-[#E53935] mr-2 mt-1">•</span>
                  Spending more time organizing than helping clients
                </li>
              </ul>
            </div>

            {/* SessionFlow Way */}
            <div className="bg-green-50 border border-green-200 rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-green-700 mb-4">The SessionFlow Way</h3>
              <ul className="space-y-3 text-[#212121]">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Automated scheduling with client self-booking
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Digital client profiles with searchable session notes
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Progress tracking and business analytics dashboard
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  More time for what matters: helping your clients
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">How It Works</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Steps */}
            <div className="space-y-8">
              {[
                {
                  title: "Join the waitlist",
                  desc: "Sign up with your email to secure your early access",
                  icon: "📩",
                },
                {
                  title: "Get notified at launch",
                  desc: "We’ll email you when SessionFlow is ready for you",
                  icon: "📱",
                },
                {
                  title: "Choose your role",
                  desc: "Select 'Trainer' or 'Therapist' during onboarding setup",
                  icon: "🧑‍⚕️",
                },
                {
                  title: "Add your clients",
                  desc: "Import existing clients or add new ones to your practice",
                  icon: "👥",
                },
                {
                  title: "Start managing sessions",
                  desc: "Focus on your clients while SessionFlow handles the rest",
                  icon: "▶️",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#E53935] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-[#212121] font-semibold">{step.title}</p>
                    <p className="text-gray-600 text-sm">
                      {step.icon} {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: App Screens */}
            <div className="flex justify-center space-x-4">
              <div className="w-48 h-[400px] bg-[#212121] rounded-[2rem] p-2 shadow-xl">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/images/calendar.png"
                    alt="Calendar view"
                    width={192}
                    height={396}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-48 h-[400px] bg-[#212121] rounded-[2rem] p-2 shadow-xl">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/images/list-overview.png"
                    alt="Client management"
                    width={192}
                    height={396}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              Pricing That Grows With You
            </h2>
            <p className="text-gray-600">Only pay when your practice grows</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="border border-gray-200 text-center py-8 rounded-xl shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold text-slate-900">Free</CardTitle>
                <p className="text-gray-500 text-sm">Up to 5 clients</p>
                <p className="text-2xl font-bold text-slate-900">Free</p>
              </CardHeader>
            </Card>

            {/* Starter Plan (Most Popular) */}
            <Card className="border border-[#E53935] bg-red-50 text-center py-8 rounded-xl shadow-sm relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E53935] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold text-slate-900">Starter</CardTitle>
                <p className="text-gray-500 text-sm">Up to 25 clients</p>
                <p className="text-2xl font-bold text-slate-900">$19/mo</p>
              </CardHeader>
            </Card>

            {/* Pro Plan */}
            <Card className="border border-gray-200 text-center py-8 rounded-xl shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold text-slate-900">Pro</CardTitle>
                <p className="text-gray-500 text-sm">Up to 100 clients</p>
                <p className="text-2xl font-bold text-slate-900">$39/mo</p>
              </CardHeader>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border border-gray-200 text-center py-8 rounded-xl shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold text-slate-900">Enterprise</CardTitle>
                <p className="text-gray-500 text-sm">Unlimited clients</p>
                <p className="text-2xl font-bold text-slate-900">$79/mo</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA + Waitlist Form */}
      <section id="waitlist-form" className="py-16 bg-[#212121]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start managing your practice with ease.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No card required—stay updated, and be the first to get access when we launch.
          </p>
          <Button
            size="lg"
            className="bg-[#E53935] hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold mb-8"
            onClick={scrollToForm}
          >
            Join Waitlist Now
          </Button>

          {/* Tally Form Embed */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-4">
            <iframe
              data-tally-src="https://tally.so/embed/mO92qg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="471"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="SessionFlow Waitlist Form"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="/images/logo.png"
              alt="SessionFlow Logo"
              width={150}
              height={32}
              className="h-6 w-auto mb-4 md:mb-0"
            />
            <p className="text-gray-500 text-sm">© 2025 SessionFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
