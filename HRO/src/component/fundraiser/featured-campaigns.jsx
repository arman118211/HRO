"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, HeartHandshake } from "lucide-react"
import { Link } from "react-router-dom"

const campaigns = [
  {
    id: "c12",
    title: "Nepal Flash Flood Emergency Response - 2026",
    location: "Kisumu, Nepal",
    goal: 25000,
    raised: 0,
    image: "./mobile_view/fundraiser-mob.png",
    path: "/causes/nepal-fundraiser",
    category: "Disaster Relief"
  },
  {
    id: "c1",
    title: "Clean Water for Rural Schools",
    location: "Kisumu, Nepal",
    goal: 25000,
    raised: 0,
    image: "/water-for-life-program-hero-image.png",
    path: "/causes/water-for-life",
    category: "Infrastructure"
  },
  {
    id: "c2",
    title: "Emergency Relief Kits",
    location: "Hetauda, Nepal",
    goal: 40000,
    raised: 0,
    image: "/f.png",
    path: "/causes/emergency-relief",
    category: "Emergency"
  },
  {
    id: "c3",
    title: "Education For All",
    location: "Niger State, Nigeria",
    goal: 30000,
    raised: 0,
    image: "/p2.png",
    path: "/causes/education",
    category: "Education"
  },
]

function Progress({ raised, goal }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100))
  return (
    <div className="w-full space-y-2 ">
      <div className="flex items-baseline justify-between text-xs">
        <span className="font-semibold text-amber-600 tracking-wide uppercase">
          {pct}% Funded
        </span>
        <span className="text-stone-500 font-medium">
          <strong className="text-stone-900 font-semibold">${raised.toLocaleString()}</strong> of ${goal.toLocaleString()}
        </span>
      </div>
      
      {/* Sleek track */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-stone-200/70 p-[1px]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 shadow-sm"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          aria-label={`Progress: ${pct}%`}
        />
      </div>
    </div>
  )
}

export default function FeaturedCampaigns() {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollContainerRef.current
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction) => {
    const el = scrollContainerRef.current
    if (el) {
      const scrollAmount = direction === "left" ? -400 : 400
      el.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="campaigns" className="relative bg-[#FCFBF7] py-20 lg:py-28 overflow-hidden">
      {/* Subtle luxury ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-200/20 via-yellow-100/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header (as originally placed) */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <SectionHeader
            eyebrow="Featured Campaigns"
            title="Support a cause that speaks to you"
            subtitle="Every campaign is verified and monitored by our field teams for transparency and timely reporting."
          />
          
          {/* Centered Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous campaigns"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-5 w-5 text-stone-700 group-hover:text-amber-700 transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next campaigns"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="h-5 w-5 text-stone-700 group-hover:text-amber-700 transition-colors" />
            </button>
          </div>
        </div>

        {/* Scrollable / Grid Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible"
        >
          {campaigns.map((c, idx) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative min-w-[300px] flex-1 sm:min-w-0 snap-start flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-8px_rgba(217,119,6,0.14)] hover:border-amber-300"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={c.image || "/placeholder.svg?height=400&width=600&query=campaign%20image"}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Top badges */}
                <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-800 shadow-sm backdrop-blur-md border border-stone-200/50">
                    <MapPin className="h-3.5 w-3.5 text-amber-600" />
                    {c.location}
                  </span>
                  
                  {c.category && (
                    <span className="rounded-full bg-amber-950/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-amber-300 backdrop-blur-md">
                      {c.category}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="line-clamp-2 text-lg font-bold text-stone-900 transition-colors group-hover:text-amber-800">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500 line-clamp-2 font-normal">
                    Your support brings lasting change through local partnerships and sustainable solutions.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 space-y-5">
                  <Progress raised={c.raised} goal={c.goal} />

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href="#donate"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-amber-500/20 transition-all hover:brightness-105 hover:shadow-lg hover:shadow-amber-500/30 active:scale-[0.98]"
                    >
                      <HeartHandshake className="h-4 w-4" />
                      Donate Now
                    </a>
                    <Link
                      to={c.path}
                      aria-label={`View details about ${c.title}`}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-600 transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700"
                    >
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}