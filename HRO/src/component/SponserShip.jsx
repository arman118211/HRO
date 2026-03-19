"use client"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  BookOpen,
  Droplets,
  Eye,
  Heart,
  CloudRain as Quran,
  Building2,
  Users,
  Shirt,
  Snowflake,
  Bus,
  ArrowRight,
  Star,
} from "lucide-react"

export default function SponsorshipPage() {
  const navigate = useNavigate()

  const programs = [
    {
      id: 1,
      title: "Adopt a School",
      subtitle: "Educate a Generation",
      description:
        "Transform the lives of underprivileged children by adopting a school and supporting infrastructure, teaching resources, and student welfare.",
      icon: BookOpen,
      impact: "Educates 200+ children",
      color: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
    },
    {
      id: 2,
      title: "Water for Life",
      subtitle: "Sponsor a Hand Pump",
      description:
        "Provide clean and safe drinking water to impoverished communities by installing hand pumps in underserved areas.",
      icon: Droplets,
      impact: "Serves 50+ families",
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      id: 3,
      title: "Restore Sight",
      subtitle: "Sponsor a Cataract Surgery",
      description:
        "Give the gift of sight by sponsoring cataract surgeries for elderly and vulnerable individuals who cannot afford treatment.",
      icon: Eye,
      impact: "1 surgery = 1 life restored",
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
    },
    {
      id: 4,
      title: "Medical Care",
      subtitle: "Sponsor a Patient",
      description:
        "Support free medical camps providing essential healthcare, medicines, and treatments to poor and underserved communities.",
      icon: Heart,
      impact: "Treats 100+ patients",
      color: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
    },
    {
      id: 5,
      title: "Quranic Education",
      subtitle: "Sponsor a Hafiz",
      description:
        "Support orphaned students in memorizing the Holy Quran with education, accommodation, meals, and learning materials.",
      icon: Quran,
      impact: "1 Hafiz = Lifetime reward",
      color: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
    },
    {
      id: 6,
      title: "Build a School",
      subtitle: "Empower a Generation",
      description:
        "Construct safe, inclusive learning spaces with classrooms, sanitation, furniture, and qualified teachers.",
      icon: Building2,
      impact: "Educates future leaders",
      color: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
    },
    {
      id: 7,
      title: "Educate a Child",
      subtitle: "Empower a Generation",
      description:
        "Provide free, quality education to orphaned and underprivileged children with supplies, meals, and guidance.",
      icon: Users,
      impact: "Breaks cycle of poverty",
      color: "from-lime-50 to-green-50",
      borderColor: "border-lime-200",
    },
    {
      id: 8,
      title: "Sewing Skills",
      subtitle: "Stronger Women",
      description:
        "Empower women with professional sewing and tailoring training, machines, and business guidance for economic independence.",
      icon: Shirt,
      impact: "Creates sustainable income",
      color: "from-fuchsia-50 to-rose-50",
      borderColor: "border-fuchsia-200",
    },
    {
      id: 9,
      title: "Winter Relief",
      subtitle: "Bring Warmth and Hope",
      description:
        "Distribute essential winter supplies, warm clothing, blankets, and shelter to vulnerable families during harsh winters.",
      icon: Snowflake,
      impact: "Saves lives in winter",
      color: "from-sky-50 to-blue-50",
      borderColor: "border-sky-200",
    },
    {
      id: 10,
      title: "School Bus",
      subtitle: "Sponsor Safe Transportation",
      description:
        "Provide safe, reliable transportation ensuring children from remote areas can reach school without risk or hardship.",
      icon: Bus,
      impact: "100% school attendance",
      color: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  }

  const handleSponsorClick = (programId) => {
    navigate(`/sponsorship/${programId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-yellow-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-2 rounded-full border border-amber-200"
          >
            <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
            <span className="text-sm font-semibold text-amber-900">Make a Difference Today</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-6"
          >
            Life-Changing Sponsorship Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Empower communities across Nepal. Choose a sponsorship program that resonates with your heart and be part of
            transformative change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm text-amber-700 font-medium"
          >
            Together, we can build a brighter future for generations to come
          </motion.div>
        </div>
      </motion.div>

      {/* Programs Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover="hover"
                className={`group relative bg-gradient-to-br ${program.color} border-2 ${program.borderColor} rounded-2xl p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200 to-transparent opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl mb-6 shadow-lg"
                  >
                    <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>

                  <p className="text-sm font-semibold text-amber-700 mb-4">{program.subtitle}</p>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{program.description}</p>

                  <div className="inline-block bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-2 rounded-lg mb-6 border border-amber-200">
                    <p className="text-xs font-semibold text-amber-900">✨ {program.impact}</p>
                  </div>

                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSponsorClick(program.id)}
                    className="w-full group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Sponsor Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
      >
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Every contribution, no matter the size, transforms lives and builds hope in communities across Nepal. Your
            generosity today creates opportunities for tomorrow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
          >
            <Heart className="w-6 h-6 fill-white" />
            Start Sponsoring Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400" />
    </div>
  )
}
