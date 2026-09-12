"use client"

import { motion } from "framer-motion"
import { Globe2, School, Droplets, Sparkles } from "lucide-react"

const items = [
  { 
    icon: Droplets, 
    label: "Wells Constructed", 
    value: "92", 
    detail: "Providing clean drinking water daily" 
  },
  { 
    icon: School, 
    label: "Students Supported", 
    value: "6,400+", 
    detail: "With safe schooling and supplies" 
  },
  { 
    icon: Globe2, 
    label: "Districts Reached", 
    value: "8", 
    detail: "Across remote underserved regions" 
  },
]

export default function ImpactBanner() {
  return (
    <section className="relative bg-[#FCFBF7] py-8 sm:py-12">
      {/* Subtle ambient gold accent behind the strip */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
        <div className="h-40 w-3/4 max-w-5xl rounded-full bg-gradient-to-r from-amber-200/20 via-yellow-100/30 to-amber-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Floating Banner Card */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md sm:p-8">
          
          <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-stone-200/80">
            {items.map((it, idx) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`group flex items-center gap-4 ${idx !== 0 ? "sm:pl-6" : ""}`}
              >
                {/* Refined Gold Icon Container */}
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-amber-500/30">
                  <it.icon className="h-6 w-6" aria-hidden />
                </div>

                {/* Counter & Details */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
                      {it.value}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    {it.label}
                  </span>
                  <span className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                    {it.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Micro Bottom Verification Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-stone-100 pt-5 text-center text-xs font-medium text-stone-500"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Every single project milestone is independently verified and auditable on-chain.</span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}