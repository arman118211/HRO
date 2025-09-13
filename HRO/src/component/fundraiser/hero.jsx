"use client"

import { motion } from "framer-motion"
import { Heart, ArrowRight, Shield, Users } from "lucide-react"

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50  mt-9 md:mt-9">
      {/* Enhanced golden grid pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-yellow-300/30 via-amber-400/20 to-yellow-300/30" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
        {/* Additional decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-yellow-300/10 to-amber-400/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-amber-300/10 to-yellow-400/10 rounded-full blur-lg" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Golden fundraiser badge */}
            

            {/* Enhanced heading with stunning golden gradient text */}
            <h1 className="text-pretty text-3xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent sm:text-4xl lg:text-5xl leading-tight drop-shadow-sm">
              Transform Hearts, 
              <span className="block bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Change Lives
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent font-semibold mt-2">
                Through Transparent Giving
              </span>
            </h1>
            
            <p className="text-sm leading-relaxed text-amber-700/80 sm:text-base font-medium">
              Support verified campaigns and track real-world impact. Your donation goes where it&apos;s needed most—
              directly to communities, with full accountability at every step.
            </p>

            {/* Golden action buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#donate" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 px-6 py-3 text-sm font-bold text-amber-900 shadow-lg shadow-yellow-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-yellow-500/40 hover:scale-105 border border-yellow-400">
                Donate Now
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href="#campaigns" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-yellow-500 bg-yellow-50 px-6 py-3 text-sm font-bold text-amber-800 transition-all duration-200 hover:bg-yellow-100 hover:border-yellow-600 hover:scale-105">
                Explore Campaigns
              </a>
            </div>

            {/* Enhanced feature badges with golden styling */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="inline-flex items-center gap-2 rounded-lg border-2 border-yellow-400/50 bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-3 shadow-md shadow-yellow-400/20">
                <Shield className="h-5 w-5 text-amber-600" aria-hidden />
                <span className="font-bold text-amber-800">100% Transparent</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border-2 border-yellow-400/50 bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-3 shadow-md shadow-yellow-400/20">
                <Users className="h-5 w-5 text-amber-600" aria-hidden />
                <span className="font-bold text-amber-800">Community-Led</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Enhanced image container with golden glow */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl shadow-yellow-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-400/20 z-10" />
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhky4Kg5Lcq5_O912IxQZIK3dCrI_zCWz3jh4VzcV725zePb3KlJMBvAUDLljLsI5Y26pvO_zCfCSz9be-1u3enAkYR53KtBr5jVb_Lq793EwINwf94nrqJTRyvREpiRuPauc82AX_4fs6wMxURhCMnQpdLSWb2WOmViKfZuFMgEgtUS0Vy0TJoCL5c7Q/s900/bigstock-fundraising-donations-charity--146155910.jpg"
                alt="Volunteers distributing aid"
                className="h-full w-full object-cover"
              />
              
              {/* Golden info overlay */}
              <div className="absolute inset-x-4 bottom-4 rounded-lg border-2 border-yellow-400/60 bg-gradient-to-r from-yellow-50/95 to-amber-50/95 p-4 text-xs font-semibold text-amber-800 backdrop-blur-sm shadow-lg shadow-yellow-400/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  Every donation is tracked with photo and report updates from the field.
                </div>
              </div>
            </div>
            
            {/* Decorative golden accent */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-500/40" />
          </motion.div>
        </div>
      </div>
    </header>
  )
}