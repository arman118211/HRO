"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

const tiers = [
  { id: "basic", amount: 25, impact: ["1 hygiene kit", "Local sourcing", "Field report"] },
  { id: "supporter", amount: 50, impact: ["2 hygiene kits", "Photo update", "Impact breakdown"] },
  { id: "advocate", amount: 100, impact: ["Safe water for 5 people", "Project updates", "Thank-you letter"] },
  { id: "champion", amount: 250, impact: ["Scholarship support", "Quarterly reports", "Recognition badge"] },
]

export default function DonationTiers() {
  const [selected, setSelected] = useState("supporter")

  return (
    <section id="donate" className="relative bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-50">
      {/* Golden decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-20 left-16 w-48 h-48 bg-gradient-to-br from-yellow-300/15 to-amber-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-16 w-36 h-36 bg-gradient-to-tl from-amber-300/15 to-yellow-400/15 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/8 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Donate"
            title="Choose a giving level"
            subtitle="Every amount makes a difference. Select a tier to see how your support helps on the ground."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, idx) => {
            const active = selected === t.id
            return (
              <motion.button
                key={t.id}
                type="button"
                onClick={() => setSelected(t.id)}
                aria-pressed={active}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col gap-5 rounded-xl p-6 text-left transition-all duration-300 hover:scale-105  ${
                  active
                    ? "bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 border-3 border-yellow-300 shadow-2xl shadow-yellow-500/40 transform scale-105"
                    : "bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300/50 shadow-xl shadow-yellow-400/20 hover:shadow-2xl hover:shadow-yellow-500/30 hover:border-yellow-400/70"
                }`}
              >
                {/* Golden accent corner */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full shadow-md transition-all duration-300 ${
                  active 
                    ? "bg-gradient-to-br from-amber-300 to-yellow-400 shadow-yellow-400/50 scale-125" 
                    : "bg-gradient-to-br from-yellow-400 to-amber-500 shadow-yellow-500/40 group-hover:scale-110"
                }`} />

                <div className="flex items-baseline justify-between">
                  {/* Enhanced amount display */}
                  <div className={`text-2xl font-bold ${
                    active 
                      ? "text-amber-900" 
                      : "bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent"
                  }`}>
                    ${t.amount}
                  </div>
                  {active ? (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 shadow-md">
                      <CheckCircle className="h-5 w-5 text-amber-800" aria-label="Selected" />
                    </div>
                  ) : null}
                </div>

                {/* Enhanced impact list */}
                <ul className="flex flex-col gap-3">
                  {t.impact.map((i) => (
                    <li key={i} className={`inline-flex items-center gap-3 text-sm font-medium ${
                      active ? "text-amber-900" : "text-amber-700"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        active 
                          ? "bg-amber-800 shadow-sm" 
                          : "bg-gradient-to-r from-yellow-500 to-amber-600"
                      }`} aria-hidden />
                      {i}
                    </li>
                  ))}
                </ul>

                {/* Enhanced action button */}
                <Link to='/donate'>
                <div className={`mt-auto inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  active
                    ? "bg-amber-100 text-amber-900 shadow-lg shadow-amber-900/20 hover:bg-amber-50 hover:shadow-xl"
                    : "bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-amber-900 shadow-lg shadow-yellow-500/30 border border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/40"
                }`}>
                  Give ${t.amount}
                </div>
                </Link>
              </motion.button>
            )
          })}
        </div>

        {/* Enhanced disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 text-xs font-semibold text-amber-700 border border-yellow-300/50 shadow-md shadow-yellow-400/20">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            All donations are tax-deductible where applicable and processed securely.
          </div>
        </motion.div>
      </div>
    </section>
  )
}