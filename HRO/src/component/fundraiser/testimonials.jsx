"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Amina, Community Organizer",
    quote: "The support arrived right when we needed it. We built a well that now serves three villages.",
    image: "https://assets.entrepreneur.com/content/3x2/2000/1755840264-LEADIMAGETEMPLATE25.png",
  },
  {
    name: "Rahul, Donor",
    quote: "I loved the transparent reports and photos. You can see your impact—it's real and personal.",
    image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/12/Pictures/_18142e30-9422-11ea-9070-932bbf5d90a5.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50">
      {/* Golden decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-16 right-12 w-44 h-44 bg-gradient-to-br from-yellow-300/12 to-amber-400/12 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-12 w-36 h-36 bg-gradient-to-tl from-amber-300/12 to-yellow-400/12 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 via-transparent to-amber-100/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Voices from our community"
            title="Trusted by donors and partners"
            subtitle="Stories from the field and the people who make our work possible."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative flex flex-col gap-6 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 p-8 shadow-xl shadow-yellow-400/25 border-2 border-yellow-300/50 hover:shadow-2xl hover:shadow-yellow-500/35 hover:scale-105 transition-all duration-300"
            >
              {/* Golden quote decoration */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-500/40 flex items-center justify-center">
                <span className="text-amber-900 font-bold text-lg">"</span>
              </div>

              {/* Enhanced profile section */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={t.image || "/placeholder.svg?height=96&width=96&query=portrait%20headshot"}
                    alt={`${t.name} headshot`}
                    className="h-16 w-16 rounded-full object-cover border-3 border-yellow-400/60 shadow-lg shadow-yellow-400/30"
                  />
                  {/* Golden ring around avatar */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20" />
                </div>
                <div className="flex flex-col gap-2">
                  <figcaption className="text-base font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
                    {t.name}
                  </figcaption>
                  {/* Enhanced star rating */}
                  <div className="flex items-center gap-1" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 text-yellow-500 fill-yellow-400 drop-shadow-sm" 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced quote with golden styling */}
              <blockquote className="relative text-base leading-relaxed text-amber-700/90 font-medium italic">
                &ldquo;{t.quote}&rdquo;
                {/* Golden quote accent */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-md shadow-yellow-500/40 flex items-center justify-center">
                  <span className="text-amber-900 font-bold text-sm">"</span>
                </div>
              </blockquote>

              {/* Verification badge */}
              <div className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-100 to-amber-100 px-3 py-2 text-xs font-bold text-amber-800 border border-yellow-300/60 shadow-md shadow-yellow-400/20">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                Verified Impact Story
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Enhanced call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-base font-bold text-amber-900 shadow-xl shadow-yellow-500/30 border-2 border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300">
            Join thousands of satisfied donors
            <Star className="h-5 w-5 text-amber-800 fill-amber-700" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}