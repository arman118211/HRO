"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  Users,
  GraduationCap,
  Droplets,
  Home,
  Utensils,
  ArrowRight,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const causes = [
  {
    id: 1,
    title: "Education for All",
    description: "Help us provide quality education and school supplies to underprivileged children in remote areas.",
    image: "/HRO-2-img-41.png",
    icon: GraduationCap,
    raised: 45000,
    goal: 75000,
    donors: 234,
    urgency: "High",
    category: "Education",
  },
  {
    id: 2,
    title: "Clean Water Access",
    description: "Support our mission to bring clean, safe drinking water to communities in need.",
    image: "/Picture24.jpg",
    icon: Droplets,
    raised: 32000,
    goal: 50000,
    donors: 189,
    urgency: "Critical",
    category: "Health",
  },
  {
    id: 3,
    title: "Emergency Relief",
    description: "Provide immediate aid and support to families affected by natural disasters and emergencies.",
    image: "/f.png",
    icon: Heart,
    raised: 28000,
    goal: 60000,
    donors: 156,
    urgency: "Urgent",
    category: "Emergency",
  },
  {
    id: 4,
    title: "Food Security",
    description: "Help us fight hunger by providing nutritious meals to families and children in need.",
    image: "/d.png",
    icon: Utensils,
    raised: 38000,
    goal: 55000,
    donors: 201,
    urgency: "High",
    category: "Nutrition",
  },
  {
    id: 5,
    title: "Housing Support",
    description: "Build safe, affordable homes for families living in poverty and unsafe conditions.",
    image: "/hr2.png",
    icon: Home,
    raised: 52000,
    goal: 80000,
    donors: 298,
    urgency: "Medium",
    category: "Housing",
  },
  {
    id: 6,
    title: "Healthcare Access",
    description: "Provide essential medical care and health services to underserved communities.",
    image: "/org-3.png",
    icon: Users,
    raised: 41000,
    goal: 70000,
    donors: 267,
    urgency: "High",
    category: "Healthcare",
  },
]

const donationAmounts = [25, 50, 100, 250, 500]

export default function CausesDonationSection() {
  const [selectedCause, setSelectedCause] = useState(null)
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
  const cardsPerPage = 3
  const totalPages = Math.ceil(causes.length / cardsPerPage)

  const getCurrentPageCauses = () => {
    const startIndex = currentPage * cardsPerPage
    return causes.slice(startIndex, startIndex + cardsPerPage)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToPage = (page) => {
    setCurrentPage(page)
  }

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "Critical":
        return "bg-red-500"
      case "Urgent":
        return "bg-orange-500"
      case "High":
        return "bg-yellow-500"
      default:
        return "bg-green-500"
    }
  }

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100)
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-50 via-yellow-50/30 to-orange-50/50 overflow-hidden ">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block mb-4" whileHover={{ scale: 1.05 }}>
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-600 rounded-full text-sm font-semibold border border-yellow-500/20">
              Make a Difference Today
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              Support Our Causes
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose a cause that resonates with your heart and make a direct impact on the lives of those who need it
            most. Every donation, no matter the size, creates meaningful change.
          </p>
        </motion.div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {getCurrentPageCauses().map((cause, index) => (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Urgency Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 ${getUrgencyColor(cause.urgency)} text-white text-xs font-semibold rounded-full shadow-lg`}
                >
                  {cause.urgency}
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-yellow-600 text-xs font-semibold rounded-full shadow-lg">
                  {cause.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cause.image || "/placeholder.svg"}
                  alt={cause.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <cause.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {cause.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cause.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-yellow-600">
                      ${cause.raised.toLocaleString()} raised
                    </span>
                    <span className="text-sm text-gray-500">${cause.goal.toLocaleString()} goal</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${getProgressPercentage(cause.raised, cause.goal)}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{cause.donors} donors</span>
                    <span className="text-xs font-semibold text-yellow-600">
                      {getProgressPercentage(cause.raised, cause.goal).toFixed(0)}% funded
                    </span>
                  </div>
                </div>

                {/* Donation Button */}
                <a href='/donate'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <DollarSign className="w-4 h-4" />
                  Donate Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform " />
                </motion.button>
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/0 to-amber-500/0 group-hover:from-yellow-500/5 group-hover:to-amber-500/5 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevPage}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-yellow-600 hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </motion.button>

          {/* Page Indicators */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToPage(index)}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  currentPage === index
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-600 hover:text-yellow-600 hover:border-yellow-500"
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-yellow-600 hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Quick Donation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-yellow-600 mb-2">
                $236K+
              </motion.div>
              <p className="text-gray-600 text-sm">Total Raised</p>
            </div>

            <div className="group">
              <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-yellow-600 mb-2">
                1,345
              </motion.div>
              <p className="text-gray-600 text-sm">Active Donors</p>
            </div>

            <div className="group">
              <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-yellow-600 mb-2">
                6
              </motion.div>
              <p className="text-gray-600 text-sm">Active Causes</p>
            </div>

            <div className="group">
              <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-yellow-600 mb-2">
                98%
              </motion.div>
              <p className="text-gray-600 text-sm">Funds to Cause</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Donation Modal */}
      {selectedCause && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCause(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <selectedCause.icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCause.title}</h3>
              <p className="text-gray-600 text-sm">Choose your donation amount</p>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                    selectedAmount === amount
                      ? "bg-yellow-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedCause(null)}
                className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 py-3 px-6 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg">
                Donate Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}