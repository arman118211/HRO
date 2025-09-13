"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Lightbulb } from "lucide-react"

const faqs = [
  {
    q: "Do I need prior experience?",
    a: "No. We provide orientation and role-specific guidance. Enthusiasm and a willingness to learn are most important.",
  },
  {
    q: "Is there a minimum time commitment?",
    a: "Most roles suggest 2–6 hours per week, but we also have event-based and seasonal options.",
  },
  {
    q: "Can I volunteer remotely?",
    a: "Yes. Several roles like digital, content, and administrative support can be done remotely.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, we offer certificates and appreciation letters based on your contribution.",
  },
]

function Item({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="group w-full relative rounded-xl border-2 border-[#D4AF37]/10 bg-gradient-to-br from-white to-amber-50/20 hover:border-[#D4AF37]/25 hover:shadow-md hover:shadow-[#D4AF37]/5 transition-all duration-300 overflow-hidden ">
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/2 to-yellow-200/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl "></div>
      
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-full flex items-center justify-between gap-4 px-5 py-4 text-left group "
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 ">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37]/15 to-yellow-200/25 border border-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-xs font-bold text-[#D4AF37]">{index + 1}</span>
          </div>
          <span className="font-semibold text-[#111827] group-hover:text-gray-800 transition-colors duration-300">
            {q}
          </span>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37]/10 to-yellow-100/20 border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#D4AF37]/20 group-hover:to-yellow-200/30 transition-all duration-300">
          <ChevronDown
            className={`h-4 w-4 text-[#D4AF37] transition-all duration-300 ${
              open ? "rotate-180 text-yellow-600" : "group-hover:text-yellow-600"
            }`}
            aria-hidden="true"
          />
        </div>
      </button>
      
      {open && (
        <div className="relative px-5 pb-5">
          <div className="ml-11 pl-4 border-l-2 border-[#D4AF37]/20">
            <div className="text-sm text-gray-600 leading-relaxed bg-gradient-to-r from-amber-50/50 to-yellow-50/30 rounded-lg p-4 border border-[#D4AF37]/10">
              {a}
            </div>
          </div>
        </div>
      )}

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-yellow-400 transition-all duration-300 ${
        open ? "w-full" : "w-0 group-hover:w-1/3"
      }`}></div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="relative bg-gradient-to-br from-white via-amber-50/8 to-yellow-50/12 overflow-hidden ">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-1/4 w-48 h-48 bg-gradient-to-r from-[#D4AF37]/4 to-yellow-300/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-1/4 w-40 h-40 bg-gradient-to-l from-yellow-200/6 to-[#D4AF37]/6 rounded-full blur-2xl"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0  opacity-50"></div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 ">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-4 py-2 mb-4">
            <HelpCircle className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#111827]">Have Questions?</span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            Frequently Asked <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about volunteering with us. Still have questions? We're here to help!
          </p>
        </div>
        
        <div className="space-y-4 ">
          {faqs.map((f, index) => (
            <Item key={f.q} q={f.q} a={f.a} index={index} />
          ))}
        </div>

        {/* Bottom call-to-action */}
        <div className="text-center mt-10 p-6 rounded-xl bg-gradient-to-r from-[#D4AF37]/5 to-yellow-100/20 border border-[#D4AF37]/15">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Lightbulb className="h-5 w-5 text-[#D4AF37] animate-pulse" />
            <span className="font-semibold text-[#111827]">Still have questions?</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Our team is ready to help you find the perfect volunteer opportunity.
          </p>
          <a
            href="mailto:info@hro.org.np"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-yellow-400 px-4 py-2 text-sm font-semibold text-[#111827] hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}