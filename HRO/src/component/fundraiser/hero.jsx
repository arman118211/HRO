"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Sparkles } from "lucide-react";
import { trackEvent } from "../../utills/analytics";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#FCFBF7] pt-12 pb-16 md:pt-16 md:pb-24">
      {/* Ambient soft warm-gold lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-amber-200/25 via-yellow-100/15 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-100/25 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            {/* Elegant Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-amber-200/80 bg-amber-50/80 px-3.5 py-1.5 text-xs font-semibold text-amber-900 shadow-sm backdrop-blur-sm mt-15">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Direct, Verified Humanitarian Giving</span>
            </div>

            {/* High-Contrast Hero Headline */}
            <h1 className="text-pretty text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl leading-[1.12]">
              Transform Hearts,{" "}
              <span className="text-stone-900">Change Lives Through</span>{" "}
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Transparent Giving.
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              Support verified grassroots campaigns and track measurable on-ground impact.
              Every contribution delivers direct relief with auditable accountability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <a
                href="#donate"
                onClick={() =>
                  trackEvent("fundraiser_hero_donate_click", {
                    location: "hero",
                  })
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-amber-500/25 transition-all duration-200 hover:brightness-105 hover:shadow-lg hover:shadow-amber-500/35 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Donate Now</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>

              <a
                href="#campaigns"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 shadow-sm transition-all duration-200 hover:border-amber-300 hover:bg-amber-50/50 hover:text-amber-900 hover:-translate-y-0.5"
              >
                Explore Campaigns
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-stone-200/60 max-w-lg">
              <div className="flex items-center gap-3 rounded-xl border border-stone-200/70 bg-white/70 p-3.5 shadow-sm backdrop-blur-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100/70 text-amber-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">100% Audited</p>
                  <p className="text-[11px] text-stone-500">Verified field partners</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-stone-200/70 bg-white/70 p-3.5 shadow-sm backdrop-blur-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100/70 text-amber-700">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">Community-Led</p>
                  <p className="text-[11px] text-stone-500">Local direct distribution</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:col-span-5"
          >
            {/* Outer Card Frame */}
            <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-2.5 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhky4Kg5Lcq5_O912IxQZIK3dCrI_zCWz3jh4VzcV725zePb3KlJMBvAUDLljLsI5Y26pvO_zCfCSz9be-1u3enAkYR53KtBr5jVb_Lq793EwINwf94nrqJTRyvREpiRuPauc82AX_4fs6wMxURhCMnQpdLSWb2WOmViKfZuFMgEgtUS0Vy0TJoCL5c7Q/s900/bigstock-fundraising-donations-charity--146155910.jpg"
                  alt="Volunteers distributing aid"
                  className="h-full w-full object-cover"
                />

                {/* Subtle soft dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* Floating On-Ground Update Tag */}
                <div className="absolute inset-x-3.5 bottom-3.5 rounded-xl border border-white/20 bg-stone-900/75 p-3 backdrop-blur-md">
                  <div className="flex items-center gap-2.5 text-xs font-medium text-stone-200">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                    </span>
                    <span>Real-time photo proofs and expenditure receipts published for every release.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold halo element */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-amber-300/40 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </header>
  );
}