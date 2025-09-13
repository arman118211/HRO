"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Users, Star, Gift, Sparkles } from "lucide-react"

const benefits = [
  { icon: Star, title: "Meaningful Impact", desc: "Help real people with real needs." },
  { icon: Users, title: "Community", desc: "Join a caring, supportive team." },
  { icon: BookOpen, title: "Learning", desc: "Gain skills and hands-on experience." },
  { icon: Award, title: "Recognition", desc: "Certificates and letters of appreciation." },
]

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="relative bg-gradient-to-br from-white via-amber-50/8 to-yellow-50/12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 right-10 w-40 h-40 bg-gradient-to-r from-[#D4AF37]/4 to-yellow-300/4 rounded-full blur-2xl"></div>
      <div className="absolute bottom-16 left-10 w-56 h-56 bg-gradient-to-l from-yellow-200/6 to-[#D4AF37]/6 rounded-full blur-3xl"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0  opacity-40"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-4 py-2 mb-4">
            <Gift className="h-4 w-4 text-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium text-[#111827]">What You Gain</span>
          </div>
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            Volunteer <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 bg-clip-text text-transparent">Benefits</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Discover the personal rewards that come with making a difference in your community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-xl border-2 border-[#D4AF37]/12 bg-gradient-to-br from-white via-amber-50/20 to-yellow-50/30 p-5 hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/3 to-yellow-200/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Enhanced icon container */}
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-yellow-200/25 border border-[#D4AF37]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                <b.icon className="h-6 w-6 text-[#D4AF37] group-hover:text-yellow-600 transition-colors duration-300" aria-hidden="true" />
                
                {/* Sparkle effect on hover */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse" />
                </div>
              </div>
              
              {/* Enhanced title */}
              <h3 className="relative mt-4 text-lg font-bold text-[#111827] group-hover:text-gray-800 transition-colors duration-300">
                {b.title}
              </h3>
              
              {/* Enhanced description */}
              <p className="relative mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {b.desc}
              </p>

              {/* Decorative elements */}
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors duration-300 rounded-br-lg"></div>
              
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-4 w-4 text-[#D4AF37] animate-pulse" 
                style={{animationDelay: `${i * 0.2}s`}}
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 font-medium">Join thousands of satisfied volunteers</p>
        </motion.div>
      </div>
    </section>
  )
}