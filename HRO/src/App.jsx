import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./component/Home"
import ProgramDetail from "./component/program-detail"
import DynamicCauses from "./component/dynamic-causes" // Added import for dynamic causes component
import Navbar from "./component/navbar"
import Footer from "./component/footer"
import ContactPage from "./component/ContactPage"
import AboutPage from "./component/AboutPage"
import ScrollToTop from "./component/ScrollToTop"
import CampaignDetailPage from "./component/CampaignDetailPage"
import VolunteerPage from "./component/VolunteerPage"
import FundRaiser from "./component/FundRaiser"
import BlogNewsPage from "./component/BlogNewsPage"
import BlogPostPage from "./component/BlogPostPage"
import AnnualReports from "./component/AnnualReports"
import CareersPage from "./component/CareersPage"
import DonationPage from "./component/DonationPage"
import LanguageSelector from "./component/LanguageSelector"
import ShareButton from "./component/ShareButton"
import PrivacyPolicy from "./component/PrivacyPolicy"
import TermsOfService from "./component/TermsOfService"
import SponsorshipPage from "./component/SponserShip"
import SponsorshipDetail from "./component/SponserDetailPage"
import AnalyticsTracker from "./component/AnalyticsTracker"
import NepalFloodFundraiser from "./component/fundraiser/NepalFundraiser"
import PopupAd from "./component/PopupAd"

export default function App() {
  return (
    <Router>
      <AnalyticsTracker />
      
      <Navbar />
      <PopupAd imageSrc="./mobile_view/pop-mob.png" redirectPath="/donate" />
      <LanguageSelector />
      <ShareButton />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/causes/:causeType" element={<DynamicCauses />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/campaign/:campaignId" element={<CampaignDetailPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/fundraiser" element={<FundRaiser />} />
        <Route path="/blog&news" element={<BlogNewsPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/reports" element={<AnnualReports />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/sponsorship" element={<SponsorshipPage />} />
        <Route path="/nepal_fundrasier" element={<NepalFloodFundraiser />} />










      </Routes>
      <Footer />
    </Router>
  )
}
