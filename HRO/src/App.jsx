import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./component/Home"
import ProgramDetail from "./component/program-detail"
import DynamicCauses from "./component/dynamic-causes" // Added import for dynamic causes component
import Navbar from "./component/navbar"
import Footer from "./component/footer"
import ContactPage from "./component/ContactPage"
import AboutPage from "./component/AboutPage"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/causes/:causeType" element={<DynamicCauses />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        
      </Routes>
      <Footer />
    </Router>
  )
}
