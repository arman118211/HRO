"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Droplet,
  BookMarked,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const campaigns = [
  {
    id: "education-fund",
    title: "Education Fund",
    description: "Provide books, tuition, and mentorship so children can learn, grow, and lead brighter futures.",
    icon: BookOpen,
  },
  {
    id: "school-fund",
    title: "School Fund",
    description: "Equip classrooms and support teachers with essential resources for quality education.",
    icon: GraduationCap,
  },
  {
    id: "orphan-support",
    title: "Orphan Support",
    description: "Offer care, stability, and long-term support to orphans in need across our communities.",
    icon: HeartHandshake,
  },
  {
    id: "water-for-life",
    title: "Water for Life",
    description: "Build and maintain wells to ensure safe, reliable water for families and villages.",
    icon: Droplet,
  },
  {
    id: "sponsor-hafij-quran",
    title: "Sponsor a Hafij Quran",
    description: "Support students in memorizing the Quran by sponsoring education, lodging, and materials.",
    icon: BookMarked,
  },
]

export default function OurCampaignSection() {
  const navigate = useNavigate()
  const perPage = 3
  const [page, setPage] = useState(0)
  const pages = Math.ceil(campaigns.length / perPage)
  const start = page * perPage
  const visible = campaigns.slice(start, start + perPage)
  

  const goTo = (idx) => setPage(Math.max(0, Math.min(idx, pages - 1)))
  const prev = () => goTo(page - 1)
  const next = () => goTo(page + 1)

  const handleLearnMore = (campaignId) => {
    navigate(`/campaign/${campaignId}`)
  }

  return (
    <section aria-labelledby="our-campaigns-title" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="our-campaigns-title"
            className="text-pretty text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Our Campaigns
          </h2>
          <p className="mt-3 text-pretty text-zinc-600 dark:text-zinc-400">
            Join us in empowering lives through education, support, and access to essentials.
          </p>
          {/* Golden accent underline */}
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-amber-500" />
        </div>

        {/* Controls + Cards */}
        <div className="mt-10">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-900 dark:text-white">Browse campaigns</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                disabled={page === 0}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-amber-200 text-amber-700 transition-colors hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                disabled={page === pages - 1}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-amber-200 text-amber-700 transition-colors hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Replace horizontal scroll area with a non-scrolling paginated grid */}
          <div className="mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
              >
                {visible.map((item) => (
                  <Card key={item.id} item={item} onLearnMore={handleLearnMore} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === page ? "bg-amber-600" : "bg-amber-200 hover:bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ item, onLearnMore }) {
  const Icon = item.icon
  return (
    <motion.article
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className="group relative flex h-full flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-amber-100 p-2 ring-1 ring-amber-200">
          <Icon className="h-6 w-6 text-amber-600" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>

      {/* Actions */}
      <div className="mt-5 flex items-center justify-between ">
        <button
          type="button"
          onClick={() => onLearnMore(item.id)}
          aria-label={`Learn more about ${item.title}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 transition-colors hover:text-amber-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>

        <Link to='/donate'>
        <button
          type="button"
          aria-label={`Donate to ${item.title}`}
          className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900"
        >
          Donate
        </button>
        </Link>
      </div>

      {/* Subtle golden corner accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 h-2 w-2 rounded-sm bg-amber-500/70"
      />
    </motion.article>
  )
}

/*
Color System (max 5):
- Primary: amber (golden) — bg-amber-500/600, text-amber-600
- Neutrals: white, zinc-900/600/400 for text and borders
*/