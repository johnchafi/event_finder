import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, DollarSign, HandCoins, HandshakeIcon, Ticket, NavigationIcon } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"
import { FaqSection } from "@/components/ui/faq"
import {CtaSection} from "@/components/ui/service"
import MagicButton from "@/components/ui/magicButton"
import { InfiniteCarousel } from "@/components/ui/hero"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
//import { Footer } from "@/components/footer"

export default function Page() {

  const heroImages = [
    {
      image:"/assets/images/audience.jpg",
    },
    {
      image:"/assets/images/concert.jpg",
    },
    {
      image:"/assets/images/drinks.jpg",
    },
    {
      image:"/assets/images/artist.jpg",
    },
    {
      image:"/assets/images/crowd.jpg",
    },
   
  ];
  const testimonials = [
    {
      image:"/assets/images/test.png",
      hoster: "PCK"
    },
    {
      image:"/assets/images/test.png",
      hoster: "DJ Ivan"
    },
    {
      image:"/assets/images/test.png",
      hoster: "DJ Sparx"
    },
    {
      image:"/assets/images/test.png",
      hoster: "Massada"
    },
    {
      image:"/assets/images/test.png",
      hoster: "DJ Leriche"
    },
    {
      image:"/assets/images/test.png",
      hoster: "DJ Arestide"
    },
    {
      image:"/assets/images/test.png",
      hoster: "DJ Best"
    },
    {
      image:"/assets/images/test.png",
      hoster: "Sabry entertainment"
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="wrapper px-4 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold"><span className="h1-bold text-primary-800"> Host, connect , </span>  celebrate: Your <span className="h1-bold text-primary-800"> events , </span> our platform!</h1>
          <p className="text-gray-400 leading-relaxed">Eventhub simplifies event planning by allowing you to manage guests, sell tickets, coordinate details, and connect seamlessly. It’s the ultimate solution for hassle-free event enjoyment!</p>
          <Link className="button w-full" href="/explore">
            <MagicButton
              title=" Explorer Now"
              icon={<NavigationIcon className='w-4'/>}
              position="right"
            />
          </Link>
        </div>
        <InfiniteCarousel items={heroImages} />
      </div>
     

      {/* Clients Section */}
      <div className="wrapper mx-auto px-4 py-20 text-center">
        <h2 className="text-gray-400 leading-relaxed py-12">Trusted by many <span className="text-primary-800">organizers</span></h2>
          <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
          />
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-5">
        <div className="text-center mb-16 space-y-4 text-gray-400 leading-relaxed">
          <div className="inline-block px-4 py-2 rounded-full bg-[#F5A524]/10 text-primary-800">Our solution</div>
          <h2 className="text-2xl font-semibold">
            key <span className="text-primary-800">features</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={BarChart3}
            title="Metrics"
            description="A rich dashboard with advanced analytics from any period of time in a single view."
          />
          <FeatureCard
            icon={Users}
            title="Clients"
            description="You have access to your customers. You can manage them and their data."
          />
          <FeatureCard
            icon={DollarSign}
            title="Sales"
            description="Stay in control of all transactions being made in your events and organization."
          />
          <FeatureCard
            icon={HandCoins}
            title="Cash Out"
            description="Cash out your revenue made anytime!"
          />
          <FeatureCard
            icon={HandshakeIcon}
            title="Marketing"
            description="Organizers page to facilitate advertizing and marketing of your events."
          />
          <FeatureCard
            icon={Ticket}
            title="Visibility"
            description="Easily share a link to your events through our explore page."
          />
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <CtaSection />

    </div>
  )
}

