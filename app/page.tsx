import { EmailForm } from "@/components/EmailForm"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BarChart2, Star, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <TrendingUp className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">BoostStays</span>
          </Link>
          <Navigation />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="rounded-full" variant="secondary">
                  Maximize Your Booking Potential
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Boost Your Property Rankings on Booking.com & Airbnb
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Expert guidance and proven strategies to increase your visibility, bookings, and revenue on major booking platforms.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <EmailForm />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Try it risk-free. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Why Choose BoostStays
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Transform Your Property Performance
                </h2>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Get personalized strategies and data-driven insights to optimize your listings and maximize your revenue.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-green-500 border-2">
                  <CardContent className="p-6">
                    <BarChart2 className="h-12 w-12 mb-4 text-green-500" />
                    <h3 className="font-bold">Data Analytics</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get detailed insights into your property&apos;s performance
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-500 border-2">
                  <CardContent className="p-6">
                    <Star className="h-12 w-12 mb-4 text-green-500" />
                    <h3 className="font-bold">Optimization</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Improve your listing&apos;s visibility and ranking
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-500 border-2">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 mb-4 text-green-500" />
                    <h3 className="font-bold">Expert Support</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get guidance from industry professionals
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-500 border-2">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 mb-4 text-green-500" />
                    <h3 className="font-bold">Revenue Growth</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Increase your bookings and revenue
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100" id="testimonials">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how property owners like you have transformed their business with BoostStays
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        alt="Property"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div className="space-y-2">
                        <p className="text-sm font-medium leading-none">Sarah Johnson</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Property Owner</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                      &quot;Since using BoostStays, my property&apos;s bookings have increased by 50% and my revenue has doubled!&quot;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="pricing">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the perfect plan for your property
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                <Card key={plan} className="border-blue-800 border-2">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-blue-800">{plan}</h3>
                    <div className="mt-4 space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          <p className="text-sm text-gray-500 dark:text-gray-400">Feature {i}</p>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-6 w-full bg-blue-800 hover:bg-blue-900 text-white">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Property?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of successful property owners who have transformed their business with BoostStays
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <EmailForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6 max-w-7xl">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 BoostStays. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}