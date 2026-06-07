import Navbar from "./navbar";
import HeroCarousel from "./hero-carousel";
import AboutSection from "./about-section";
import ProgramsSection from "./programs-section";
import ImpactSection from "./impact-section";
import VolunteerTeamSection from "./volunteer-team-section";
import PhotoGallerySection from "./photo-gallery-section";

import CausesDonationSection from "./causes-donation-section";
import DonationSection from "./DonationSection";
import Footer from "./footer";
import PosterCarousel from "./PosterCarousel";
import OurCampaignSection from "./our-campaign";
import LanguageSelector from "./LanguageSelector";
import SEO from "./SEO";

export default function HomePage() {
	return (
		<>
    <SEO
        title="Human Relief Organization Nepal | Education, Healthcare & Community Support"
        description="Human Relief Organization Nepal empowers communities through education, healthcare, sponsorship programs, orphan support, water projects, winter relief, and sustainable development."
        keywords="NGO Nepal, charity Nepal, donate Nepal, volunteer Nepal, education support Nepal, healthcare Nepal, sponsorship programs Nepal"
        url="https://hro.org.np/"
        image="https://hro.org.np/logo.png"
      />
			<main className="min-h-screen">
				{/* <HeroCarousel /> */}

				<PosterCarousel />
				<AboutSection />
				<CausesDonationSection />
				<ProgramsSection />
				<ImpactSection />
				<OurCampaignSection />
				<VolunteerTeamSection />
				<PhotoGallerySection />
				{/* <DonationSection /> */}
				<DonationSection />
			</main>
		</>
	);
}
