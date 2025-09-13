"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { ArrowRight, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

const campaigns = [
  {
    id: "c1",
    title: "Clean Water for Rural Schools",
    location: "Kisumu, Kenya",
    goal: 25000,
    raised: 18400,
    image: "/water-for-life-program-hero-image.png",
    path:"/causes/water-for-life"
  },
  {
    id: "c2",
    title: "Emergency Relief Kits",
    location: "Hetauda, Nepal",
    goal: 40000,
    raised: 29250,
    image: "/f.png",
    path:"/causes/emergency-relief"

  },
  {
    id: "c3",
    title: "Education For All",
    location: "Niger State, Nigeria",
    goal: 30000,
    raised: 22100,
    image: "/p2.png",
    path:"/causes/education"
  },
]

function Progress({ raised, goal }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100))
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold">
        <span className="text-amber-700">{pct}% funded</span>
        <span className="text-amber-800">
          ${raised.toLocaleString()} / ${goal.toLocaleString()}
        </span>
      </div>
      <div className="h-3 w-full rounded-full bg-yellow-100 border border-yellow-300/50 shadow-inner">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 shadow-sm"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          aria-label={`Progress: ${pct}%`}
        />
      </div>
    </div>
  )
}

export default function FeaturedCampaigns() {
  return (
    <section id="campaigns" className="relative bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-50">
      {/* Golden decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-yellow-300/15 to-amber-400/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-300/15 to-yellow-400/15 rounded-full blur-xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Featured Campaigns"
            title="Support a cause that speaks to you"
            subtitle="Every campaign is verified and monitored by our field teams for transparency and timely reporting."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c, idx) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 shadow-xl shadow-yellow-400/20 border-2 border-yellow-300/40 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image || "/placeholder.svg?height=400&width=600&query=campaign%20image"}
                  alt={c.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Golden overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-yellow-400/10" />
                
                {/* Enhanced location badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg border-2 border-yellow-400/60 bg-gradient-to-r from-yellow-100/95 to-amber-100/95 px-3 py-2 text-xs font-bold text-amber-800 shadow-lg shadow-yellow-400/30 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-amber-600" aria-hidden />
                  {c.location}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                {/* Enhanced title */}
                <h3 className="text-balance text-xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent leading-tight">
                  {c.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-amber-700/80 font-medium">
                  Your support brings lasting change through local partnerships and sustainable solutions.
                </p>
                
                <Progress raised={c.raised} goal={c.goal} />
                
                {/* Enhanced action buttons */}
                <div className="mt-auto flex items-center justify-between pt-3">
                  <a href="#donate" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 px-5 py-2.5 text-sm font-bold text-amber-900 shadow-lg shadow-yellow-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-yellow-500/40 hover:scale-105 border border-yellow-400">
                    Donate
                  </a>
                  <Link
                    to={c.path}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors duration-200"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-amber-600" aria-hidden />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}