import { Plus_Jakarta_Sans } from 'next/font/google'
import { EmailForm } from "@/components/EmailForm"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  // Optional: specify weight if you need specific ones
  weight: ['300', '400', '500', '600', '700'],
})

export default function Component() {
  return (
    <div className={`flex flex-col min-h-screen antialiased ${plusJakartaSans.className}`}>
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <Image 
              src="/images/bs_icon.png"
              alt="BoostStays Icon"
              width={24}
              height={24}
            />
            <span className="ml-2 text-lg font-extrabold">BoostStays</span>
          </Link>
          <Navigation />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-[85vh] py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center relative">
          <Image
            src="/images/hero.jpg"
            alt="Luxury villa with infinity pool at sunset"
            fill
            priority
            className="object-cover absolute inset-0 brightness-[0.7]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 text-center">
              <Badge 
                className="rounded-full bg-transparent text-xl md:text-2xl lg:text-[32px] font-medium tracking-[-0.96px] leading-tight text-white hover:bg-transparent" 
                variant="secondary"
              >
                Boost your revenue today
              </Badge>
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-[60px] lg:leading-[1.1] font-bold tracking-[-1.2px] leading-tight text-white max-w-[800px] mb-4 sm:mb-6 md:mb-8">
                  Transform your listings into high-performing properties
                </h1>
                <p className="mx-auto max-w-[700px] text-base md:text-lg lg:text-xl font-light tracking-[-0.01em] text-gray-100 px-4 sm:px-6">
                  Get data-driven strategies to increase bookings, maximize revenue, and outperform your competition.
                </p>
              </div>

              <div className="w-full max-w-md space-y-3 sm:space-y-4 mt-4 sm:mt-6 px-4 sm:px-0">
                <EmailForm />
                <p className="text-sm text-gray-200">
                  Get personalized advice for your property.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white" id="features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="inline-block text-xl md:text-2xl lg:text-[32px] font-medium tracking-[-0.96px] leading-tight text-[#222222]">
                  Why BoostStays
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-bold tracking-[-0.04em] leading-tight mt-8 mb-8">
                  Maximize your property&apos;s earning potential
                </h2>
                <p className="text-gray-500 md:text-xl dark:text-gray-400 tracking-[-0.01em]">
                  Unlock higher occupancy rates and better pricing with personalized, data-backed optimization strategies.
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 px-4 sm:px-6 lg:px-0">
                <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
                  <CardContent className="p-6">
                    <Image 
                      src="/images/icon-keyboard-mouse.png"
                      alt="Listing optimization icon"
                      width={128}
                      height={128}
                      className="mb-3"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#222]">Listing optimization</h3>
                    <p className="text-[#717171] leading-relaxed tracking-[-0.01em]">
                      Boost visibility and bookings with expert-optimized titles, descriptions, and amenity highlights.
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
                  <CardContent className="p-6">
                    <Image 
                      src="/images/icon-camera.png"
                      alt="Listing optimization icon"
                      width={128}
                      height={128}
                      className="mb-3"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#222]">Photo enhancement</h3>
                    <p className="text-[#717171] leading-relaxed tracking-[-0.01em]">
                      Capture more bookings with professional photo optimization and strategic visual storytelling.
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
                  <CardContent className="p-6">
                    <Image 
                      src="/images/icon-money.png"
                      alt="Listing optimization icon"
                      width={128}
                      height={128}
                      className="mb-3"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#222]">Pricing strategy</h3>
                    <p className="text-[#717171] leading-relaxed tracking-[-0.01em]">
                      Maximize revenue with dynamic pricing strategies tailored to your market and peak seasons.
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
                  <CardContent className="p-6">
                    <Image 
                      src="/images/icon-award.png"
                      alt="Listing optimization icon"
                      width={128}
                      height={128}
                      className="mb-3"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#222]">Guest experience</h3>
                    <p className="text-[#717171] leading-relaxed tracking-[-0.01em]">
                      Boost your ratings with proven communication templates and guest experience strategies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24" style={{ backgroundColor: "rgba(0, 0, 0, .05)" }} id="testimonials">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
              <h2 className="max-w-[600px] text-2xl sm:text-3xl lg:text-5xl font-bold tracking-[-0.04em] mb-4 sm:mb-6">
                Transform your property into a top performer
              </h2>
              <p className="max-w-[600px] text-base sm:text-lg lg:text-xl text-gray-500 px-4 sm:px-6">
                Discover how hosts like you achieve 40-85% revenue increases with our proven optimization strategies.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12 md:grid-cols-2">
              <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
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
                      <p className="text-sm text-gray-500">Munich, Germany</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[#717171] tracking-[-0.01em]">
                    &ldquo;The listing optimization service transformed my property&apos;s performance. With their guidance on photos and description, my listing now ranks on the first page for my area, and bookings have increased by 45%.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
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
                      <p className="text-sm text-gray-500">Florence, Italy</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[#717171] dark:text-gray-400 tracking-[-0.01em]">
                    &ldquo;The expert support helped me improve my listing descriptions and photos. My average rating went up to 4.9 stars, and I&rsquo;m now getting 40% more bookings compared to last year.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
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
                  <p className="mt-4 text-[#717171] dark:text-gray-400 tracking-[-0.01em]">
                    &ldquo;BoostStays&rsquo; analytics helped me identify the perfect price point for different seasons. My revenue has increased by 75% since last winter, and I&rsquo;m getting much better quality guests.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
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
                  <p className="mt-4 text-[#717171] dark:text-gray-400 tracking-[-0.01em]">
                    &ldquo;The optimization suggestions were game-changing. My property now ranks on the first page for my area, and I&rsquo;ve seen a 60% increase in direct bookings. Worth every penny!&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      alt="Profile"
                      className="rounded-full"
                      height="40"
                      src="/images/lisa-vandenberg.jpg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="space-y-2">
                      <p className="text-sm font-medium leading-none">Lisa van den Berg</p>
                      <p className="text-sm text-gray-500">Amsterdam, Netherlands</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[#717171] dark:text-gray-400 tracking-[-0.01em]">
                    &ldquo;Since working with BoostStays, my canal house bookings have doubled. Their pricing strategy for peak tourist seasons has been particularly valuable, increasing my revenue by 85%.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      alt="Profile"
                      className="rounded-full"
                      height="40"
                      src="/images/jan-dekker.jpg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="space-y-2">
                      <p className="text-sm font-medium leading-none">Jan Dekker</p>
                      <p className="text-sm text-gray-500">Rotterdam, Netherlands</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[#717171] dark:text-gray-400 tracking-[-0.01em]">
                    &ldquo;Their optimization service transformed my apartment listings. Occupancy rates increased from 65% to 92%, and I&apos;m now able to charge premium rates even during off-peak seasons.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 border-t" id="pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-[-0.04em] mb-4 sm:mb-6">
                Select a plan to boost your revenue
              </h2>
              <p className="max-w-[600px] text-base sm:text-lg lg:text-xl text-gray-500 px-4 sm:px-6">
                Start optimizing your property today with our proven pricing strategies and expert support.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-none bg-white border border-[#ddd] rounded-xl">
                <CardContent className="p-6">
                <Image 
                      src="/images/icon-tier1.png"
                      alt="Studio plan icon"
                      width={128}
                      height={128}
                      className="mb-3"
                    />
                  <h3 className="font-bold text-xl text-[#222]">Studio</h3>
                  <div className="mt-2 text-3xl font-medium">$499<span className="text-lg font-normal text-gray-500">/one-time</span></div>
                  <p className="mt-2 text-sm text-[#717171] tracking-[-0.01em]">Complete listing optimization for one property</p>
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Includes:</div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-[#717171]">Title & description optimization</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Photo selection & ordering guidance</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Amenity list optimization</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <p className="text-sm text-gray-500">Basic pricing recommendations</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="mt-8 w-full bg-[#2e74ff] hover:bg-[#2361db] text-white h-12 px-6 rounded-lg text-base font-medium"
                  >
                    Get in Touch
                  </Button>
                </CardContent>
              </Card>
              <Card className="shadow-none bg-white border-2 border-[#2e74ff] lg:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#2e74ff] text-white">Most Popular</Badge>
                </div>
                <CardContent className="p-6">
                <Image 
                      src="/images/icon-tier2.png"
                      alt="Villa plan icon"
                      width={128}
                      height={128}
                      className="mb-3"
                    />
                  <h3 className="font-bold text-xl text-[#2e74ff]">Villa</h3>
                  <div className="mt-2 text-3xl font-bold">$199<span className="text-lg font-normal text-gray-500">/month</span></div>
                  <p className="mt-2 text-sm text-gray-500 tracking-[-0.01em]">Ideal for experienced hosts looking to maximize revenue</p>
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Everything in Studio, plus:</div>
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
                  <Button 
                    className="mt-8 w-full bg-[#2e74ff] hover:bg-[#2361db] text-white h-12 px-6 rounded-lg text-base font-medium"
                  >
                    Get in Touch
                  </Button>
                </CardContent>
              </Card>
              <Card className="shadow-none bg-white border-2 border-[#2e74ff] rounded-xl">
                <CardContent className="p-6">
                <Image 
                      src="/images/icon-tier3.png"
                      alt="Empire plan icon"
                      width={128}
                      height={128}
                      className="mb-3"
                    />
                  <h3 className="font-bold text-xl text-[#2e74ff]">Empire</h3>
                  <div className="mt-2 text-3xl font-bold">$499<span className="text-lg font-normal text-gray-500">/month</span></div>
                  <p className="mt-2 text-sm text-gray-500 tracking-[-0.01em]">For property managers with multiple listings</p>
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Everything in Villa, plus:</div>
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
                  <Button 
                    className="mt-8 w-full bg-[#2e74ff] hover:bg-[#2361db] text-white h-12 px-6 rounded-lg text-base font-medium"
                  >
                    Get in Touch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: "rgba(0, 0, 0, .05)" }}>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div>
                <h2 className="max-w-[600px] text-3xl font-bold tracking-[-0.04em] sm:text-5xl mb-8">Start maximizing your revenue today</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
                  Join hosts who increased their earnings by 40-85% with our proven optimization strategies
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <EmailForm />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white" id="faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">
              <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-[-0.04em] mb-4 sm:mb-6">
                  Frequently asked questions
                </h2>
                <p className="text-base sm:text-lg text-gray-500 tracking-[-0.01em]">
                  For more questions visit the <Link href="#" className="text-[#2e74ff] hover:underline">send us an email</Link>.
                </p>
              </div>
              <div className="space-y-4">
                <Accordion type="single" collapsible className="px-4 sm:px-0">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-[18px] leading-[24px] font-normal">How long does the optimization process take?</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[24px] font-normal text-[#717171]">Our basic optimization process typically takes 3-5 business days. For Professional and Enterprise plans, initial setup and optimization can be completed within 1-2 business days.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-[18px] leading-[24px] font-normal">Do you guarantee results?</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[24px] font-normal text-[#717171]">While we can&apos;t guarantee specific results due to market variables, our proven strategies have helped properties achieve 40-85% revenue increases on average.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left text-[18px] leading-[24px] font-normal">Can I cancel my subscription anytime?</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[24px] font-normal text-[#717171]">Yes, you can cancel your Professional or Enterprise subscription at any time. The Basic plan is a one-time payment and doesn&apos;t require cancellation.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left text-[18px] leading-[24px] font-normal">Do you work with properties worldwide?</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[24px] font-normal text-[#717171]">Yes, we work with property owners and managers worldwide. Our strategies are adaptable to different markets and regions.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left text-[18px] leading-[24px] font-normal">What platforms do you optimize for?</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[24px] font-normal text-[#717171]">We primarily optimize for Booking.com and Airbnb, but our strategies can be applied to other platforms like VRBO and Expedia as well.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left text-[18px] leading-[24px] font-normal">How do I get started?</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[24px] font-normal text-[#717171]">Simply enter your email in our contact form, and our team will reach out to discuss your property and recommend the best optimization plan.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left text-[18px] leading-[24px] font-normal">What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[24px] font-normal text-[#717171]">We accept all major credit cards, PayPal, and bank transfers for our services.</AccordionContent>
                  </AccordionItem>
                </Accordion>
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