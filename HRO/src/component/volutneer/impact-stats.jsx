"use client"

import { motion } from "framer-motion"
import { HeartHandshake, School, Leaf, Droplets, TrendingUp } from "lucide-react"

const stats = [
  { icon: HeartHandshake, label: "Families Supported", value: "25,000+" },
  { icon: School, label: "Children Educated", value: "8,200+" },
  { icon: Leaf, label: "Trees Planted", value: "120,000+" },
  { icon: Droplets, label: "People with Clean Water", value: "45,000+" },
]

export default function ImpactStats() {
  return (
    <section aria-labelledby="impact-heading" className="relative bg-gradient-to-br from-white via-amber-50/20 to-yellow-50/30 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 "></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-4 py-2 mb-4">
            <TrendingUp className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#111827]">Growing Impact</span>
          </div>
          <h2 id="impact-heading" className="text-2xl sm:text-3xl font-bold text-[#111827] mb-2">
            Our Impact Together
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
            <span>Updated quarterly</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-xl border-2 border-[#D4AF37]/10 bg-gradient-to-br from-white to-yellow-50/50 p-5 hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-yellow-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Icon container with enhanced styling */}
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-6 w-6 text-[#D4AF37] group-hover:text-yellow-600 transition-colors duration-300" aria-hidden="true" />
              </div>
              
              {/* Enhanced number with gradient */}
              <div className="relative mt-4 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#111827] to-gray-700 bg-clip-text text-transparent">
                {s.value}
              </div>
              
              {/* Label with better spacing */}
              <div className="relative text-sm font-medium text-gray-600 mt-1 leading-tight">
                {s.label}
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}