"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield, Clock, FileCheck, Heart } from "lucide-react"

const requirements = [
  "Minimum age 16 (or with guardian consent where applicable).",
  "Commitment to safety, dignity, and inclusivity.",
  "Willingness to learn and follow guidance.",
  "Positive attitude and teamwork spirit.",
]

export default function Requirements() {
  return (
    <section aria-labelledby="requirements-heading" className="relative bg-gradient-to-br from-white via-amber-50/8 to-yellow-50/15 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#D4AF37]/6 to-yellow-300/6 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-l from-yellow-200/5 to-[#D4AF37]/5 rounded-full blur-2xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-4 py-2 mb-4">
                <FileCheck className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#111827]">Getting Started</span>
              </div>
              <h2 id="requirements-heading" className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
                Requirements & <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 bg-clip-text text-transparent">Guidelines</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We prioritize safety and inclusivity. Please review our basic criteria to get started.
              </p>
            </div>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {requirements.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#D4AF37]/5 hover:to-yellow-100/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-yellow-200/30 border border-[#D4AF37]/30 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-[#D4AF37] group-hover:text-yellow-600 transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-[#D4AF37]/5 border border-[#D4AF37]/15"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-yellow-200/30 border border-[#D4AF37]/30 flex items-center justify-center">
                <Shield className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111827] mb-1">Safety First</p>
                <p className="text-sm text-gray-600">Background checks may be required for certain roles.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Enhanced time commitment card */}
            <div className="relative rounded-xl border-2 border-[#D4AF37]/15 bg-gradient-to-br from-white to-amber-50/20 p-6 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/3 to-yellow-200/3 opacity-50 rounded-xl"></div>
              
              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-yellow-200/30 border border-[#D4AF37]/30 flex items-center justify-center shadow-sm">
                  <Clock className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#111827]">Time Commitment</h3>
              </div>
              <p className="relative text-sm text-gray-600 leading-relaxed mb-4">
                Most roles ask for 2–6 hours per week. Seasonal and event-based options are available for flexible schedules.
              </p>

              {/* Enhanced image container */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border-2 border-[#D4AF37]/20 bg-gradient-to-br from-white to-yellow-50/30 shadow-lg hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://www.cry.org/wp-content/uploads/Volunteer-picture-1.png"
                  alt="Volunteer orientation session in progress"
                  className="h-full w-full object-cover"
                />
                {/* Image overlay for better visual integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-transparent to-transparent"></div>
                
                {/* Floating badge on image */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-[#D4AF37] animate-pulse" />
                    <span className="text-xs font-semibold text-[#111827]">Orientation Included</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}