"use client"

import { motion } from "framer-motion"
import { Sparkles, Globe2, Clock, Users, Star } from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    title: "Create Lasting Change",
    desc: "Directly support programs that uplift communities with sustainable solutions.",
  },
  {
    icon: Globe2,
    title: "Be Part of a Movement",
    desc: "Join a global network of compassionate individuals working toward shared goals.",
  },
  {
    icon: Clock,
    title: "Flexible Commitment",
    desc: "Opportunities to fit your schedule—weekdays, weekends, on-site, or remote.",
  },
  {
    icon: Users,
    title: "Grow Your Skills",
    desc: "Build leadership, teamwork, and professional experience while serving others.",
  },
]

export default function WhyVolunteer() {
  return (
    <section aria-labelledby="why-heading" className="relative bg-gradient-to-br from-white via-amber-50/15 to-yellow-50/25 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-[#D4AF37]/5 to-yellow-300/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-l from-yellow-200/8 to-[#D4AF37]/8 rounded-full blur-2xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-4 py-2 mb-4">
            <Star className="h-4 w-4 text-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium text-[#111827]">Join the Movement</span>
          </div>
          <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            Why Volunteer with <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 bg-clip-text text-transparent">Us</span>?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your time and talents can transform lives. We provide safe, inclusive, and meaningful ways to contribute to
            causes you care about.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative rounded-xl border-2 border-[#D4AF37]/10 bg-gradient-to-br from-white to-yellow-50/40 p-6 hover:border-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/15 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-yellow-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Enhanced icon container */}
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-yellow-200/25 border border-[#D4AF37]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                <r.icon className="h-6 w-6 text-[#D4AF37] group-hover:text-yellow-600 transition-colors duration-300" aria-hidden="true" />
              </div>
              
              {/* Enhanced title */}
              <h3 className="relative mt-4 text-lg font-bold text-[#111827] group-hover:text-gray-800 transition-colors duration-300">
                {r.title}
              </h3>
              
              {/* Enhanced description */}
              <p className="relative mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {r.desc}
              </p>

              {/* Decorative elements */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute bottom-3 left-3 w-8 h-1 bg-gradient-to-r from-[#D4AF37]/20 to-yellow-300/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}