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

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/causes/:causeType" element={<DynamicCauses />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/campaign/:campaignId" element={<CampaignDetailPage/>} />
        <Route path="/volunteer" element={<VolunteerPage/>} />
        <Route path="/fundraiser" element={<FundRaiser/>} />
        <Route path="/blog&news" element={<BlogNewsPage/>} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/reports" element={<AnnualReports />} />
        <Route path="/career" element={<CareersPage/>} />
        <Route path="/donate" element={<DonationPage/>} />

        
        
        
        
      </Routes>
      <Footer />
    </Router>
  )
}
