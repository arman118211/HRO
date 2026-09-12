"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { Star, Quote, CheckCircle2, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const testimonials = [
  {
    name: "Amina",
    role: "Community Organizer",
    quote: "The emergency support arrived right when we needed it most. We built a solar-powered well that now reliably serves three neighboring villages daily.",
    image: "https://assets.entrepreneur.com/content/3x2/2000/1755840264-LEADIMAGETEMPLATE25.png",
    metric: "Clean water to 1,200+ residents"
  },
  {
    name: "Rahul",
    role: "Verified Sustaining Donor",
    quote: "I was blown away by the granular reporting and timestamped photos. You actually see where every single dollar goes—it is transparent, personal, and real.",
    image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/12/Pictures/_18142e30-9422-11ea-9070-932bbf5d90a5.jpg",
    metric: "Supporting since 2024"
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#FCFBF7] py-20 lg:py-28 overflow-hidden">
      {/* Ambient warm gold glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-100/25 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <SectionHeader
            eyebrow="Voices from our community"
            title="Trusted by donors and partners alike"
            subtitle="Real field dispatches and firsthand perspectives from the people powering our mission."
          />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/80 bg-white p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-[0_16px_36px_-8px_rgba(217,119,6,0.12)]"
            >
              <div>
                {/* Header Row: Stars & Watermark Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-500"
                      />
                    ))}
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Quote className="h-4 w-4 fill-amber-500/20 text-amber-600" />
                  </div>
                </div>

                {/* Quote Body */}
                <blockquote className="text-base sm:text-lg leading-relaxed text-stone-700 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Verification Footer */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={`${t.name} portrait`}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-400/40 ring-offset-2 ring-offset-white"
                    />
                  </div>
                  <div>
                    <figcaption className="text-sm font-bold text-stone-900">
                      {t.name}
                    </figcaption>
                    <p className="text-xs text-stone-500 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Micro verification badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50/80 border border-amber-200/70 px-3 py-1 text-xs font-semibold text-amber-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                  <span>{t.metric}</span>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Global CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            to="/donate"
            className="group inline-flex items-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-stone-800 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Join over 12,000 donors making a verified difference</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-stone-900 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}