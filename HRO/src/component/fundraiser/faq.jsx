"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const faqs = [
  {
    q: "How do you verify campaigns?",
    a: "We work with local partners and use a standardized audit checklist, budget reviews, and on-site verification before listing any campaign.",
  },
  {
    q: "Where does my donation go?",
    a: "100% of your donation goes directly to the campaign you choose. Operational costs are covered by separate grants and sponsors.",
  },
  {
    q: "Do I receive updates?",
    a: "Yes. You'll get email updates with reports, photos, and milestones as the project progresses.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "In many regions, yes. We provide a receipt immediately after your donation for your records.",
  },
]

export default function Faq() {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="relative bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-50">
      {/* Golden decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-20 left-16 w-40 h-40 bg-gradient-to-br from-yellow-300/12 to-amber-400/12 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-gradient-to-tl from-amber-300/12 to-yellow-400/12 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/8 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            subtitle="If you have other questions, reach out to our support team."
          />
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openItems.has(idx)
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 shadow-xl shadow-yellow-400/20 border-2 border-yellow-300/50 hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className={`w-full cursor-pointer list-none p-6 text-left transition-all duration-300 ${
                    isOpen 
                      ? "bg-gradient-to-r from-yellow-100 to-amber-100 border-b-2 border-yellow-300/60" 
                      : "hover:bg-gradient-to-r hover:from-yellow-100/50 hover:to-amber-100/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`text-base font-bold ${
                      isOpen 
                        ? "bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent" 
                        : "text-amber-800 group-hover:text-amber-900"
                    }`}>
                      {f.q}
                    </span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isOpen 
                        ? "bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/40 rotate-180" 
                        : "bg-gradient-to-br from-amber-200 to-yellow-300 shadow-md shadow-yellow-400/30 group-hover:bg-gradient-to-br group-hover:from-yellow-300 group-hover:to-amber-400"
                    }`}>
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-amber-900" />
                      ) : (
                        <Plus className="h-4 w-4 text-amber-800" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Enhanced answer section with smooth animation */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-sm leading-relaxed text-amber-700/85 font-medium bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 border border-yellow-300/40 shadow-inner">
                      {f.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced support contact section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link to='/contact'>
          <div className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-base font-bold text-amber-900 shadow-xl shadow-yellow-500/30 border-2 border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300">
            <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse" />
            Still have questions? Contact our support team
          </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}