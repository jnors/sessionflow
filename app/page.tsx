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
            <Image src="/images/logo.png" alt="SessionFlow Logo" width={180} height={40} className="h-8 w-auto" />
            <Button
              variant="outline"
              className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
              onClick={scrollToForm}
            >
              Join Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#212121] mb-6 leading-tight">
                More time to coach. <span className="text-[#E53935]">Less time to manage.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SessionFlow helps Personal Trainers simplify session scheduling, track progress, and stay organized —
                all from their phone.
              </p>
              <p className="text-lg text-[#E53935] font-semibold mb-8">
                Join the waitlist now and get 50% off for 3 months!
              </p>
              <Button
                size="lg"
                className="bg-[#E53935] hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
                onClick={scrollToForm}
              >
                Join Waitlist Now
              </Button>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">Why Trainers Love SessionFlow</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#212121]">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Define availability and let clients book without back-and-forth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#212121]">Client CRM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Track sessions, goals, and private notes all in one place.
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
                  Know your monthly revenue, cancellations, and client stats.
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
              Still using spreadsheets and scattered chats?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-[#E53935] transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#212121] mb-4">Missed sessions?</h3>
                <div className="text-2xl mb-4">↓</div>
                <p className="text-[#E53935] font-semibold">SessionFlow keeps your calendar tight.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E53935] transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#212121] mb-4">Messy client info?</h3>
                <div className="text-2xl mb-4">↓</div>
                <p className="text-[#E53935] font-semibold">Track everything in one profile.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">How it works</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Create a free account",
                "Add your clients",
                "Set your calendar",
                "Let clients book",
                "Track revenue and progress",
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#E53935] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-[#212121] font-medium">{step}</p>
                </div>
              ))}
            </div>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">Start Free. Upgrade When You Grow.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-[#E53935] transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-bold text-[#212121]">Free</CardTitle>
                <div className="text-2xl font-bold text-[#E53935]">
                  €0<span className="text-sm text-gray-500">/month</span>
                </div>
                <CardDescription>5 clients</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E53935] transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-bold text-[#212121]">Starter</CardTitle>
                <div className="text-2xl font-bold text-[#E53935]">
                  €20<span className="text-sm text-gray-500">/month</span>
                </div>
                <CardDescription>25 clients</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E53935] transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-bold text-[#212121]">Pro</CardTitle>
                <div className="text-2xl font-bold text-[#E53935]">
                  €39<span className="text-sm text-gray-500">/month</span>
                </div>
                <CardDescription>60 clients</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E53935] transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-bold text-[#212121]">Enterprise</CardTitle>
                <div className="text-2xl font-bold text-[#E53935]">
                  €79<span className="text-sm text-gray-500">/month</span>
                </div>
                <CardDescription>Unlimited</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="waitlist-form" className="py-16 bg-[#212121]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start managing your coaching business with ease.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No card required. Designed for mobile. Built for growth.
          </p>
          <Button
            size="lg"
            className="bg-[#E53935] hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold mb-8"
            onClick={scrollToForm}
          >
            Join Waitlist Now
          </Button>

          {/* Tally Form */}
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
