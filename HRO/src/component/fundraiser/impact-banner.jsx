"use client"

import { motion } from "framer-motion"
import { Globe2, School, Droplets } from "lucide-react"

const items = [
  { icon: Droplets, label: "Wells built", value: "92" },
  { icon: School, label: "Students supported", value: "6,400+" },
  { icon: Globe2, label: "Countries", value: "14" },
]

export default function ImpactBanner() {
  return (
    <section className="relative bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 border-y-4 border-yellow-400/50">
      {/* Golden decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/3 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-gradient-to-tl from-amber-300/20 to-yellow-400/20 rounded-full blur-lg" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 via-transparent to-amber-300/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 px-6 py-5 shadow-xl shadow-yellow-400/25 border-2 border-yellow-300/50 hover:shadow-2xl hover:shadow-yellow-500/35 hover:scale-105 transition-all duration-300"
            >
              {/* Enhanced golden icon container */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/40 group-hover:shadow-xl group-hover:shadow-yellow-500/50 group-hover:scale-110 transition-all duration-300">
                <it.icon className="h-7 w-7 text-amber-900" aria-hidden />
              </div>
              
              <div className="text-center">
                {/* Enhanced value with golden gradient */}
                <div className="text-xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent sm:text-2xl">
                  {it.value}
                </div>
                {/* Enhanced label */}
                <div className="text-xs font-semibold text-amber-700/80 uppercase tracking-wide mt-1">
                  {it.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Added inspiring message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
            Together, we're building a brighter future, one community at a time
          </p>
        </motion.div>
      </div>
    </section>
  )
}