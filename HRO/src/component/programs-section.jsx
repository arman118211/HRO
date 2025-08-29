"use client"
import { useNavigate } from "react-router-dom"
import { BookOpen, Stethoscope, Droplets, Home, ArrowRight, Sparkles, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function ProgramsSection() {
  const navigate = useNavigate()

  const programs = [
    {
      id: "education-for-all",
      icon: BookOpen,
      title: "Education Initiative",
      description:
        "Building schools, training teachers, and providing scholarships to ensure every child has access to quality education.",
      image: "/sliderq-1.png",
      impact: "12,000 students supported",
      color: "from-[#2979FF] to-[#1565C0]",
      bgColor: "from-[#2979FF]/10 to-[#1565C0]/5",
    },
    {
      id: "healthcare-outreach",
      icon: Stethoscope,
      title: "Healthcare Access",
      description:
        "Mobile clinics, medical supplies, and health education programs bringing care to remote communities.",
      image: "/org-3.png",
      impact: "25,000 patients treated",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      id: "clean-water-initiative",
      icon: Droplets,
      title: "Clean Water Project",
      description:
        "Installing wells, water purification systems, and sanitation facilities for sustainable water access.",
      image: "/water1.png",
      impact: "150 wells constructed",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
    },
    {
      id: "housing-shelter",
      icon: Home,
      title: "Housing & Shelter",
      description: "Emergency shelter, disaster relief, and sustainable housing solutions for families in need.",
      image: "/slider7.png",
      impact: "500 homes built",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
  ]

  const handleSupportClick = (program) => {
    navigate(`/program/${program.id}`)
  }

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2979FF]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 text-[#2979FF]/20 animate-bounce">
        <Star className="h-8 w-8" />
      </div>
      <div className="absolute bottom-32 left-32 text-purple-400/20 animate-pulse delay-1000">
        <Sparkles className="h-10 w-10" />
      </div>
      <div className="absolute top-1/2 right-1/4 text-orange-400/20 animate-bounce delay-500">
        <Star className="h-6 w-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#2979FF] to-[#1565C0] bg-clip-text text-transparent mb-6"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We focus on four key areas that create lasting change and sustainable development in communities worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 transform hover:scale-105 hover:-translate-y-2">
                {/* Gradient overlay for visual appeal */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Enhanced icon with gradient background */}
                    <div className={`absolute top-6 left-6 bg-gradient-to-r ${program.color} p-4 rounded-xl shadow-lg`}>
                      <program.icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Floating sparkle effect */}
                    <div className="absolute top-6 right-6 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Sparkles className="h-6 w-6 animate-pulse" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#2979FF] transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span
                          className={`text-sm font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}
                        >
                          Impact Made
                        </span>
                        <span className="text-lg font-bold text-slate-800">{program.impact}</span>
                      </div>

                      <button
                        onClick={() => handleSupportClick(program)}
                        className={`bg-gradient-to-r ${program.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group-hover:gap-3`}
                      >
                        Support This
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Corner decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
