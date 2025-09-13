"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Target,
  DollarSign,
  Heart,
  Mail,
  Phone,
  Star,
  Award,
  TrendingUp,
} from "lucide-react"
import DonationSections from "./DonationSections"

export default function ProgramDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const programs = {
    "education-for-all": {
      title: "Education for All",
      description:
        "Providing quality education and learning opportunities to underprivileged children in rural communities.",
      fullDescription:
        "Our Education for All program focuses on breaking the cycle of poverty through education. We establish schools, provide learning materials, train teachers, and offer scholarships to ensure every child has access to quality education regardless of their economic background.",
      image: "/sliderq-1.png",
      raised: 75000,
      goal: 100000,
      donors: 1250,
      objectives: [
        "Build and renovate schools in underserved communities",
        "Provide educational materials and technology",
        "Train and support local teachers",
        "Offer scholarships for higher education",
        "Implement adult literacy programs",
      ],
      locations: ["Rural Bangladesh", "Northern Kenya", "Eastern Guatemala"],
      timeline: "2024-2026",
      budget: "$100,000",
      achievements: [
        "15 schools built or renovated",
        "3,500 children enrolled",
        "150 teachers trained",
        "95% literacy rate improvement",
      ],
    },
    "clean-water-initiative": {
      title: "Clean Water Initiative",
      description: "Building wells and water systems to provide clean, safe drinking water to communities in need.",
      fullDescription:
        "Access to clean water is a fundamental human right. Our Clean Water Initiative works to provide sustainable water solutions through well construction, water purification systems, and community education on water safety and hygiene practices.",
      image: "/Picture24.jpg",
      raised: 45000,
      goal: 80000,
      donors: 890,
      objectives: [
        "Construct deep water wells in remote areas",
        "Install water purification systems",
        "Train local maintenance teams",
        "Educate communities on water safety",
        "Establish water committees for sustainability",
      ],
      locations: ["Sub-Saharan Africa", "Rural India", "Remote Philippines"],
      timeline: "2024-2025",
      budget: "$80,000",
      achievements: [
        "25 wells constructed",
        "12,000 people served",
        "80% reduction in waterborne diseases",
        "100% community participation",
      ],
    },
    "healthcare-outreach": {
      title: "Healthcare Outreach",
      description: "Mobile clinics and medical camps providing essential healthcare services to remote areas.",
      fullDescription:
        "Our Healthcare Outreach program brings medical care directly to communities that lack access to healthcare facilities. Through mobile clinics, medical camps, and telemedicine, we provide preventive care, treatment, and health education.",
      image: "/org-3.png",
      raised: 62000,
      goal: 90000,
      donors: 1100,
      objectives: [
        "Operate mobile medical clinics",
        "Conduct regular health screenings",
        "Provide vaccination programs",
        "Train community health workers",
        "Establish telemedicine connections",
      ],
      locations: ["Remote Amazon", "Mountain regions of Nepal", "Desert communities in Mali"],
      timeline: "2024-2027",
      budget: "$90,000",
      achievements: [
        "50,000 patients treated",
        "15,000 vaccinations administered",
        "200 community health workers trained",
        "90% improvement in health outcomes",
      ],
    },
    "housing-shelter": {
      title: "Housing & Shelter Program",
      description: "Safe, sustainable, and dignified housing solutions for vulnerable communities.",
      fullDescription:
        "Our Housing & Shelter Program focuses on providing safe, affordable, and sustainable housing for families displaced by poverty, natural disasters, or conflict. We build durable homes, emergency shelters, and community housing facilities while ensuring access to clean water, sanitation, and basic utilities. This initiative empowers communities by creating stable living conditions, which are essential for dignity, security, and long-term development.",
      image: "/slider7.png",
      raised: 48000,
      goal: 100000,
      donors: 850,
      objectives: [
        "Construct safe and durable homes for displaced families",
        "Provide emergency shelters during natural disasters",
        "Develop community housing with clean water and sanitation facilities",
        "Promote eco-friendly and sustainable building practices",
        "Empower communities through housing-related skill training"
      ],
      locations: ["Flood-affected regions of Bangladesh", "Earthquake-prone areas in Nepal", "Urban slums in Kenya"],
      timeline: "2024-2028",
      budget: "$100,000",
      achievements: [
        "1,200 families resettled in safe homes",
        "3,500 individuals provided with emergency shelters",
        "15 community housing projects completed",
        "Introduction of eco-friendly building techniques in 5 regions"
      ]
    },
  }

  const program = programs[id]

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const progressPercentage = (program.raised / program.goal) * 100

  const handleDonationSubmit = (e) => {
    e.preventDefault()
    const amount = donationAmount || customAmount
    console.log("[v0] Donation submitted:", { amount, program: program.title, formData })
    alert(`Thank you for your donation of $${amount} to ${program.title}!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 relative overflow-hidden mt-15 md:mt-25 ">
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-300/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-amber-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-yellow-500/30 rounded-full blur-xl animate-pulse delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-6 right-6 w-3 h-3 bg-white/80 rounded-full animate-ping" />
                <div className="absolute top-12 right-12 w-2 h-2 bg-yellow-300/80 rounded-full animate-pulse delay-500" />
                <div className="absolute top-8 right-20 w-1.5 h-1.5 bg-amber-300/80 rounded-full animate-ping delay-1000" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                    {program.title}
                  </h1>
                  <p className="text-sm md:text-lg opacity-90 max-w-2xl">{program.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-medium">High Impact Program</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-6">
                  About This Program
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative">
                  {program.fullDescription}
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-yellow-300 rounded-full" />
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-6">
                    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100 transition-all duration-300">
                      <div className="p-3 bg-amber-500 rounded-xl group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Locations</h3>
                        <p className="text-gray-600">{program.locations.join(", ")}</p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                      <div className="p-3 bg-green-500 rounded-xl group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Timeline</h3>
                        <p className="text-gray-600">{program.timeline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 transition-all duration-300">
                      <div className="p-3 bg-amber-600 rounded-xl group-hover:scale-110 transition-transform">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Total Budget</h3>
                        <p className="text-gray-600">{program.budget}</p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300">
                      <div className="p-3 bg-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Supporters</h3>
                        <p className="text-gray-600">{program.donors.toLocaleString()} donors</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-yellow-100/30 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-amber-500 rounded-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    Program Objectives
                  </h3>
                  <ul className="space-y-4">
                    {program.objectives.map((objective, index) => (
                      <li
                        key={index}
                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    Key Achievements
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {program.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="group relative p-6 bg-gradient-to-br from-amber-500/10 via-yellow-50 to-amber-100 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full" />
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-amber-500 rounded-lg group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-gray-800 font-semibold">{achievement}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1  ">
            {/* Funding Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-8 z-5 "
              >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Funding Progress</h3>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Raised</span>
                  <span>Goal</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 mb-3">
                  <span>${program.raised.toLocaleString()}</span>
                  <span>${program.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-center text-sm text-gray-600">{Math.round(progressPercentage)}% funded</div>
              </div>

              <div className="text-center text-gray-600 mb-6">
                <div className="text-2xl font-bold text-yellow-600">
                  ${(program.goal - program.raised).toLocaleString()}
                </div>
                <div className="text-sm">still needed</div>
              </div>
              </motion.div>

            {/* Donation Section */}
            <div className="relative z-12  ">
                <DonationSections  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}