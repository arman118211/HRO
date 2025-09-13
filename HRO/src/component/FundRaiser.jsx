import Hero from "../component/fundraiser/hero"
import Stats from "../component/fundraiser/stats"
import FeaturedCampaigns from "../component/fundraiser/featured-campaigns"
import HowItWorks from "../component/fundraiser/how-it-works"
import DonationTiers from "../component/fundraiser/donation-tiers"
import ImpactBanner from "../component/fundraiser/impact-banner"
import Testimonials from "../component/fundraiser/testimonials"
import Faq from "../component/fundraiser/faq"


export const metadata = {
  title: "Fundraiser | Your NGO",
  description: "Support impactful causes with transparent fundraising and real-time impact.",
}

export default function FundRaiser() {
  return (
    <main className="font-sans">
      {/* Design Tokens (5 colors total):
         1) Primary: amber (golden)
         2) Neutral: white
         3) Neutral: near-black
         4) Neutral: gray-600
         5) Accent: deep amber
      */}
      <Hero />
      <Stats />
      <FeaturedCampaigns />
      <HowItWorks />
      <ImpactBanner />
      <DonationTiers />
      <Testimonials />
      <Faq />
     
    </main>
  )
}
