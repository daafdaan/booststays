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
        <section className="w-full min-h-[85vh] flex items-center justify-center relative">
          <Image
            src="/images/hero.jpg"
            alt="Luxury villa with infinity pool at sunset"
            fill
            priority
            className="object-cover absolute inset-0 brightness-[0.7]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
          
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <Badge 
                className="rounded-full bg-white/90 text-black hover:bg-white/95 transition-colors" 
                variant="secondary"
              >
                Maximize Your Booking Potential
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl/none text-white max-w-[1000px]">
                  Boost Your Property Rankings on Booking.com & Airbnb
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 text-xl md:text-2xl font-light">
                  Expert guidance and proven strategies to increase your visibility, bookings, and revenue on major booking platforms.
                </p>
              </div>

              <div className="w-full max-w-md space-y-4 mt-4">
                <EmailForm />
                <p className="text-sm text-gray-200">
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
                <h2 className="lg:leading-tighter text-3xl font-medium tracking-[-0.04em] sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
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
                <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how property owners like you have transformed their business with BoostStays
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      alt="Profile"
                      className="rounded-full"
                      height="40"
                      src="/images/thomas-weber.jpg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="space-y-2">
                      <p className="text-sm font-medium leading-none">Thomas Weber</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Munich, Germany</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    &ldquo;Within 3 months of using BoostStays, my occupancy rate increased from 65% to 89%. The data-driven insights helped me optimize my pricing strategy for the Oktoberfest season.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      alt="Profile"
                      className="rounded-full"
                      height="40"
                      src="/images/sofia-rossi.jpg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="space-y-2">
                      <p className="text-sm font-medium leading-none">Sofia Rossi</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Florence, Italy</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    &ldquo;The expert support helped me improve my listing descriptions and photos. My average rating went up to 4.9 stars, and I&rsquo;m now getting 40% more bookings compared to last year.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      alt="Profile"
                      className="rounded-full"
                      height="40"
                      src="/images/henrik-nielsen.jpg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="space-y-2">
                      <p className="text-sm font-medium leading-none">Henrik Nielsen</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Copenhagen, Denmark</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    &ldquo;BoostStays&rsquo; analytics helped me identify the perfect price point for different seasons. My revenue has increased by 75% since last winter, and I&rsquo;m getting much better quality guests.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      alt="Profile"
                      className="rounded-full"
                      height="40"
                      src="/images/marie-dubois.jpg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="space-y-2">
                      <p className="text-sm font-medium leading-none">Marie Dubois</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Lyon, France</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    &ldquo;The optimization suggestions were game-changing. My property now ranks on the first page for my area, and I&rsquo;ve seen a 60% increase in direct bookings. Worth every penny!&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="pricing">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the perfect plan for your property
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-blue-800 border-2">
                <CardContent className="p-6">
                  <h3 className="font-medium text-xl text-blue-800">Basic</h3>
                  <div className="mt-2 text-3xl font-bold">$29<span className="text-lg font-normal text-gray-500">/month</span></div>
                  <p className="mt-2 text-sm text-gray-500">Perfect for new hosts or single property managers</p>
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Listing Optimization Assistant</div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Title & description recommendations</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Photo order optimization</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Amenity checklist optimization</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Basic Analytics Dashboard</div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Occupancy tracking</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Basic pricing insights</p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 w-full bg-blue-800 hover:bg-blue-900 text-white">Start Free Trial</Button>
                </CardContent>
              </Card>
              <Card className="border-blue-800 border-2 lg:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-800 text-white">Most Popular</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-medium text-xl text-blue-800">Professional</h3>
                  <div className="mt-2 text-3xl font-bold">$79<span className="text-lg font-normal text-gray-500">/month</span></div>
                  <p className="mt-2 text-sm text-gray-500">Ideal for experienced hosts looking to maximize revenue</p>
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Everything in Basic, plus:</div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Dynamic pricing recommendations</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">AI-powered listing description generator</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">24/7 email support</p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 w-full bg-blue-800 hover:bg-blue-900 text-white">Start Free Trial</Button>
                </CardContent>
              </Card>
              <Card className="border-blue-800 border-2">
                <CardContent className="p-6">
                  <h3 className="font-medium text-xl text-blue-800">Enterprise</h3>
                  <div className="mt-2 text-3xl font-bold">$199<span className="text-lg font-normal text-gray-500">/month</span></div>
                  <p className="mt-2 text-sm text-gray-500">For property managers with multiple listings</p>
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Everything in Professional, plus:</div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Multi-property dashboard</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Custom pricing algorithms</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Personal account manager</p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-8 w-full bg-blue-800 hover:bg-blue-900 text-white">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                All plans include a 14-day free trial. No credit card required.
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <Link className="text-sm text-blue-800 hover:underline" href="#">
                  View full feature comparison
                </Link>
                <Link className="text-sm text-blue-800 hover:underline" href="#">
                  Enterprise custom pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Ready to Boost Your Property?</h2>
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