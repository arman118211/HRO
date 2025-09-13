"use client"

import { motion } from "framer-motion"
import { ClipboardList, Mail, CalendarClock, HandHeart, ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "1. Apply",
    desc: "Fill the short form with your interests and availability.",
  },
  {
    icon: Mail,
    title: "2. Connect",
    desc: "Our team will reach out to match you to the right role.",
  },
  {
    icon: CalendarClock,
    title: "3. Schedule",
    desc: "Choose times that fit your routine—flexible options available.",
  },
  {
    icon: HandHeart,
    title: "4. Make Impact",
    desc: "Start volunteering with guidance, training, and support.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="relative bg-gradient-to-br from-white via-amber-50/10 to-yellow-50/15 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-gradient-to-r from-[#D4AF37]/5 to-yellow-300/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-l from-yellow-200/5 to-[#D4AF37]/5 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-4 py-2 mb-4">
            <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#111827]">Simple Process</span>
          </div>
          <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            How It <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Simple steps to get started. We'll support you every step of the way on your volunteer journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-xl border-2 border-[#D4AF37]/15 bg-gradient-to-br from-white to-amber-50/30 p-5 hover:border-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-yellow-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Step number indicator */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-400 text-white text-xs font-bold flex items-center justify-center shadow-md">
                {i + 1}
              </div>
              
              {/* Enhanced icon container */}
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-yellow-200/25 border border-[#D4AF37]/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-sm">
                <s.icon className="h-6 w-6 text-[#D4AF37] group-hover:text-yellow-600 transition-colors duration-300" aria-hidden="true" />
              </div>
              
              {/* Enhanced title */}
              <h3 className="relative mt-4 text-lg font-bold text-[#111827] group-hover:text-gray-800 transition-colors duration-300">
                {s.title}
              </h3>
              
              {/* Enhanced description */}
              <p className="relative mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {s.desc}
              </p>

              {/* Progress connector line (except for last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#D4AF37]/30 to-yellow-300/30 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#D4AF37] rounded-full transform -translate-y-1/2 animate-pulse"></div>
                </div>
              )}

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="sm:hidden text-center mt-8"
        >
          <a
            href="#volunteer-form"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-yellow-400 px-6 py-3 text-sm font-semibold text-[#111827] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>See Openings</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}