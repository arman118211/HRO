"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { Search, Shield, HeartHandshake,ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "1. Choose a verified cause",
    desc: "Explore audited, community-led campaigns with clear goals and budgets.",
  },
  {
    icon: Shield,
    title: "2. Donate securely",
    desc: "Your contribution is processed safely with full accountability.",
  },
  {
    icon: HeartHandshake,
    title: "3. See your impact",
    desc: "Receive updates, reports, and photos directly from the field.",
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-50">
      {/* Golden decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-10 right-20 w-56 h-56 bg-gradient-to-br from-yellow-300/10 to-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-tl from-amber-300/10 to-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="How it works"
            title="Giving made simple, safe, and meaningful"
            subtitle="We prioritize transparency at every step so you know exactly how your donation helps."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative flex flex-col gap-5 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 p-6 shadow-xl shadow-yellow-400/20 border-2 border-yellow-300/40 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
            >
              {/* Golden step indicator */}
              <div className="inline-flex w-fit items-center gap-3 rounded-lg bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-4 py-2 text-xs font-bold text-amber-900 shadow-lg shadow-yellow-400/30 border border-yellow-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 shadow-md">
                  <s.icon className="h-4 w-4 text-amber-700" aria-hidden />
                </div>
                Step {idx + 1}
              </div>

              {/* Enhanced title with golden gradient */}
              <h3 className="text-lg font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent leading-tight">
                {s.title}
              </h3>

              {/* Enhanced description */}
              <p className="text-sm leading-relaxed text-amber-700/85 font-medium">
                {s.desc}
              </p>

              {/* Connecting line for visual flow (except last item) */}
              {idx < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden sm:block w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 z-10" />
              )}

              {/* Golden accent corner */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-md shadow-yellow-500/40 group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Enhanced call-to-action section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-base font-bold text-amber-900 shadow-xl shadow-yellow-500/30 border-2 border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300">
            Ready to make a difference?
            <ArrowRight className="h-5 w-5 text-amber-800" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  )
}