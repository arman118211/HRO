import Navbar from "./navbar"
import HeroCarousel from "./hero-carousel"
import AboutSection from "./about-section"
import ProgramsSection from "./programs-section"
import ImpactSection from "./impact-section"
import VolunteerTeamSection from "./volunteer-team-section"
import PhotoGallerySection from "./photo-gallery-section"

import CausesDonationSection from "./causes-donation-section"
import DonationSection from "./DonationSection"
import Footer from "./footer"
import PosterCarousel from "./PosterCarousel"
import OurCampaignSection from "./our-campaign"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* <HeroCarousel /> */}
      <PosterCarousel/>
      <AboutSection />
      <CausesDonationSection />
      <ProgramsSection />
      <ImpactSection />
      <OurCampaignSection/>
      <VolunteerTeamSection />
      <PhotoGallerySection />
      {/* <DonationSection /> */}
      <DonationSection/>
    
    </main>
  )
}
