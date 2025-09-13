"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "Volunteering here changed my perspective. The team made it easy to get involved, and the impact is tangible.",
    author: "Aisha, Community Outreach Volunteer",
  },
  {
    text: "I grew my skills and gave back—best of both worlds. Flexible timing helped me manage with college.",
    author: "Rahul, Education Support Volunteer",
  },
  {
    text: "Every event feels purposeful and well organized. The smiles make every hour worth it.",
    author: "Maya, Logistics Volunteer",
  },
]

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold text-[#111827]">
          Volunteer Stories
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.author}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border-l-4 border-l-[#D4AF37] bg-white p-6 hover:shadow-sm hover:ring-1 hover:ring-[#D4AF37]/25 transition"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
                <Quote className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <blockquote className="mt-3 text-gray-700 leading-relaxed">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-[#111827]">{q.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
