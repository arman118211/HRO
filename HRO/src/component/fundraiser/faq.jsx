"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeader from "./section-header"
import { Plus, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

const faqs = [
  {
    num: "01",
    q: "How do you verify campaigns before listing?",
    a: "Every initiative undergoes on-ground partner vetting, expenditure auditing, baseline milestone mapping, and legal compliance checks before being approved for public funding.",
  },
  {
    num: "02",
    q: "Where does 100% of my donation actually go?",
    a: "Every dollar donated reaches frontline programs directly. Operational expenses and transaction fees are independently sponsored by philanthropic board grants.",
  },
  {
    num: "03",
    q: "How and when will I receive project updates?",
    a: "You will receive timestamped progress reports, verified field photography, and itemized financial statements at each major campaign milestone.",
  },
  {
    num: "04",
    q: "Are my contributions tax-deductible?",
    a: "Yes. An official 501(c)(3) tax receipt is generated instantly with each contribution and delivered directly to your inbox for record keeping.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative bg-[#FAF8F5] py-24 lg:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <SectionHeader
            eyebrow="Transparency & Trust"
            title="Frequently asked questions"
            subtitle="Clear answers about how your funds are vetted, protected, and directed."
          />
        </div>

        {/* Minimalist Editorial Accordion */}
        <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={f.num}
                className="group relative transition-colors duration-200"
              >
                {/* Active Left Gold Accent Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-500 to-amber-600 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-6 py-7 px-4 text-left transition-colors sm:px-6"
                >
                  <div className="flex items-center gap-5 sm:gap-8">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest transition-colors ${
                        isOpen ? "text-amber-600" : "text-stone-400 group-hover:text-stone-600"
                      }`}
                    >
                      {f.num}
                    </span>
                    <h3
                      className={`text-lg font-semibold tracking-tight transition-colors sm:text-xl ${
                        isOpen ? "text-stone-900 font-bold" : "text-stone-700 group-hover:text-stone-900"
                      }`}
                    >
                      {f.q}
                    </h3>
                  </div>

                  {/* Minimalist Rotational Toggle */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-amber-500 text-white rotate-45"
                        : "border border-stone-200 bg-white text-stone-500 group-hover:border-amber-400 group-hover:text-stone-900"
                    }`}
                  >
                    <Plus className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated Pure-Text Expand */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="pb-8 pt-1 pl-12 pr-4 sm:pl-20 sm:pr-12">
                        <p className="text-base leading-relaxed text-stone-600 max-w-3xl">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Subtle, Clean Query Link */}
        <div className="mt-14 flex items-center justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition-colors hover:text-amber-600"
          >
            <span>Have a different question? Talk to our team</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-amber-500" />
          </Link>
        </div>

      </div>
    </section>
  )
}