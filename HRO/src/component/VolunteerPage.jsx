import Hero from "../component/volutneer/hero"
import ImpactStats from "../component/volutneer/impact-stats"
import WhyVolunteer from "../component/volutneer/why-volunteer"
import RolesGrid from "../component/volutneer/roles-grid"
import HowItWorks from "../component/volutneer/how-it-works"
import Benefits from "../component/volutneer/benefits"
import Requirements from "../component/volutneer/requirements"
import Testimonials from "../component/volutneer/testimonials"
import FAQ from "../component/volutneer/faq"
import VolunteerForm from "../component/volutneer/volunteer-form"

export const metadata = {
  title: "Volunteer | Our NGO",
  description: "Join our community of volunteers and make a lasting impact.",
}

export default function VolunteerPage() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <WhyVolunteer />
      <RolesGrid />
      <HowItWorks />
      <Benefits />
      <Requirements />
      <Testimonials />
      <VolunteerForm />
      <FAQ />
      
    </main>
  )
}
