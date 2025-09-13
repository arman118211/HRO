"use client"

import { motion } from "framer-motion"
import { Heart, Users, Shield, Star } from "lucide-react"

const items = [
  { icon: Users, label: "Donors", value: "24,380+" },
  { icon: Heart, label: "Raised", value: "$3.2M+" },
  { icon: Shield, label: "Projects Audited", value: "180" },
  { icon: Star, label: "Satisfaction", value: "4.9/5" },
]

export default function Stats() {
  return (
    <section aria-label="Impact statistics" className="relative bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 border-y-2 border-yellow-400/30">
      {/* Golden decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-tl from-amber-300/20 to-yellow-400/20 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:grid-cols-4 sm:px-6 lg:px-8">
        {items.map((it, idx) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col items-center gap-3 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 p-6 text-center shadow-xl shadow-yellow-400/20 border-2 border-yellow-300/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
          >
            {/* Golden icon with glow effect */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/40 group-hover:shadow-xl group-hover:shadow-yellow-500/50 transition-all duration-300">
              <it.icon className="h-6 w-6 text-amber-900" aria-hidden />
            </div>
            
            {/* Enhanced value with golden gradient */}
            <div className="text-xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent sm:text-2xl">
              {it.value}
            </div>
            
            {/* Styled label */}
            <div className="text-xs font-semibold text-amber-700/80 uppercase tracking-wide">
              {it.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}