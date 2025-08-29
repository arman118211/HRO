"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  BookOpen,
  Users,
  Target,
  Heart,
  Star,
  GraduationCap,
  School,
  Award,
  Globe,
  Sparkles,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"

export default function EducationForAll() {
  const navigate = useNavigate()
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [hoveredCard, setHoveredCard] = useState(null)

  const impactStats = [
    {
      icon: BookOpen,
      number: "15,000+",
      label: "Students Educated",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: School,
      number: "250+",
      label: "Schools Built",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Users,
      number: "800+",
      label: "Teachers Trained",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Globe,
      number: "45",
      label: "Countries Reached",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
    },
  ]

  const successStories = [
    {
      name: "Maria Santos",
      age: 16,
      location: "Philippines",
      story:
        "Thanks to the scholarship program, I'm now studying engineering and dream of building schools in my community.",
      image: "/student-maria-philippines-scholarship.png",
      achievement: "Engineering Student",
    },
    {
      name: "Ahmed Hassan",
      age: 14,
      location: "Kenya",
      story: "The mobile library brought books to our village. Now I read every day and want to become a teacher.",
      image: "/student-ahmed-kenya-mobile-library.png",
      achievement: "Future Teacher",
    },
    {
      name: "Priya Sharma",
      age: 17,
      location: "India",
      story: "The computer lab at our school opened new possibilities. I'm learning coding and web development.",
      image: "/student-priya-india-computer-lab.png",
      achievement: "Web Developer",
    },
  ]

  const programs = [
    {
      title: "School Construction",
      description:
        "Building modern, safe schools in underserved communities with sustainable materials and innovative designs",
      impact: "250+ schools built",
      cost: "$25,000 per school",
      icon: School,
      gradient: "from-[#2979FF] to-blue-500",
      features: ["Solar panels", "Water systems", "Safe playgrounds"],
    },
    {
      title: "Teacher Training",
      description: "Comprehensive training programs for local educators with modern teaching methodologies",
      impact: "800+ teachers trained",
      cost: "$500 per teacher",
      icon: GraduationCap,
      gradient: "from-green-500 to-emerald-500",
      features: ["Digital skills", "Curriculum design", "Student engagement"],
    },
    {
      title: "Scholarship Program",
      description: "Financial support for promising students to continue their education and achieve their dreams",
      impact: "5,000+ scholarships awarded",
      cost: "$200 per year per student",
      icon: Award,
      gradient: "from-purple-500 to-violet-500",
      features: ["Tuition coverage", "Books & supplies", "Mentorship"],
    },
    {
      title: "Digital Learning",
      description: "Computer labs and internet access for rural schools to bridge the digital divide",
      impact: "100+ digital labs established",
      cost: "$5,000 per lab",
      icon: BookOpen,
      gradient: "from-orange-500 to-amber-500",
      features: ["High-speed internet", "Modern computers", "Software training"],
    },
  ]

  const donationImpacts = [
    { amount: 25, impact: "School supplies for 5 students", icon: BookOpen, color: "text-blue-600" },
    { amount: 50, impact: "Monthly scholarship for 1 student", icon: GraduationCap, color: "text-green-600" },
    { amount: 100, impact: "Teacher training workshop", icon: Users, color: "text-purple-600" },
    { amount: 250, impact: "Complete classroom setup", icon: School, color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50  mt-0 md:mt-9">
      {/* Enhanced floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#2979FF]/10 to-blue-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl"
        />

        {/* Additional decorative elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#2979FF]/20 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-green-400/30 rounded-full animate-bounce" />
      </div>

      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-r from-[#2979FF] via-[#1976D2] to-[#1565C0] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        {/* Header decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <motion.button
            onClick={() => navigate("/")}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8 group bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button> */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="bg-white/20 p-2 rounded-full"
                  >
                    <Sparkles className="h-6 w-6 text-yellow-300" />
                  </motion.div>
                  <span className="text-blue-100 font-medium">Transforming Lives Through Education</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
                  Education for All
                </h1>

                <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
                  Breaking barriers and building futures through quality education. Every child deserves the opportunity
                  to learn, grow, and achieve their dreams.
                </p>

                <div className="flex  gap-4  ">
                  <Link to='/donate'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#2979FF] px-6 md:px-10 md:py-4 py-4 rounded-full font-bold text-lg md:text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
                  >
                    Donate Now
                  </motion.button>
                  </Link>
                  <Link to='/about'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-6 md:px-10 md:py-4 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2979FF] transition-all backdrop-blur-sm"
                  >
                    Learn More
                  </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white/15 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />

                <div className="relative grid grid-cols-2 gap-8">
                  {impactStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center group cursor-pointer"
                    >
                      <motion.div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -right-4 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Tabs */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: Target },
              { id: "programs", label: "Programs", icon: BookOpen },
              { id: "stories", label: "Success Stories", icon: Star },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 py-4 px-6 border-b-3 font-semibold text-sm whitespace-nowrap transition-all relative ${
                  activeTab === tab.id
                    ? "border-[#2979FF] text-[#2979FF] bg-blue-50/50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-50/30 rounded-t-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Overview Section */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-[#2979FF]/10 p-2 rounded-full">
                      <Target className="h-6 w-6 text-[#2979FF]" />
                    </div>
                    <span className="text-[#2979FF] font-semibold">Our Mission</span>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                    Empowering Communities Through
                    <span className="text-[#2979FF]"> Quality Education</span>
                  </h2>

                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    We believe education is the most powerful tool for breaking the cycle of poverty. Our comprehensive
                    approach focuses on building infrastructure, training teachers, and providing resources to ensure
                    every child has access to quality education.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Target,
                        title: "Quality Infrastructure",
                        desc: "Building safe, modern schools with proper facilities and sustainable design",
                      },
                      {
                        icon: Users,
                        title: "Teacher Development",
                        desc: "Training and supporting local educators with modern methodologies",
                      },
                      {
                        icon: BookOpen,
                        title: "Learning Resources",
                        desc: "Providing books, technology, and educational materials for all students",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all cursor-pointer group"
                      >
                        <div className="bg-gradient-to-r from-[#2979FF] to-blue-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10"
                  >
                    <Link to='/donate'>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(41, 121, 255, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#2979FF] to-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3"
                    >
                      <Heart className="h-6 w-6" />
                      <span>Donate Now</span>
                    </motion.button></Link>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/children-studying-classroom-education-africa.png"
                    alt="Children studying in classroom"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Floating stats overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">98%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#2979FF]">100%</div>
                        <div className="text-sm text-gray-600">Transparency</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#2979FF] to-blue-500 rounded-full shadow-lg" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg" />
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Enhanced Programs Section */}
        {activeTab === "programs" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="bg-[#2979FF]/10 p-2 rounded-full">
                    <BookOpen className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <span className="text-[#2979FF] font-semibold">Our Impact Programs</span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Comprehensive <span className="text-[#2979FF]">Education Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive initiatives designed to create lasting impact in education across communities worldwide.
                  Each program is carefully crafted to address specific educational challenges.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden group"
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${program.gradient}/5 rounded-full -translate-y-20 translate-x-20 transition-all group-hover:scale-150`}
                  />

                  <div className="relative">
                    <div
                      className={`bg-gradient-to-r ${program.gradient} p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <program.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                    {/* Features list */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-600 font-medium">Impact:</span>
                        <span className="font-bold text-[#2979FF]">{program.impact}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-gray-600 font-medium">Investment:</span>
                        <span className="font-bold text-gray-900">{program.cost}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${program.gradient} text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all`}
                    >
                      Support This Program
                    </motion.button>
                  </div>

                  {/* Hover indicator */}
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                    >
                      <TrendingUp className="h-4 w-4 text-[#2979FF]" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Enhanced Success Stories Section */}
        {activeTab === "stories" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="bg-[#2979FF]/10 p-2 rounded-full">
                    <Star className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <span className="text-[#2979FF] font-semibold">Success Stories</span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Lives <span className="text-[#2979FF]">Transformed</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Real stories from students whose lives have been transformed through education. These inspiring
                  journeys show the power of opportunity and determination.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Achievement badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-[#2979FF]">{story.achievement}</span>
                    </div>

                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                      <p className="text-sm opacity-90 flex items-center space-x-2">
                        <span>Age {story.age}</span>
                        <span>•</span>
                        <span>{story.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="p-8">
                    <blockquote className="text-gray-600 italic leading-relaxed mb-6 text-lg">
                      "{story.story}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <Star className="h-5 w-5 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#2979FF] font-semibold hover:underline"
                      >
                        Read Full Story
                      </motion.button> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
