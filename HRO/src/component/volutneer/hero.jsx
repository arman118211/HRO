"use client"

import { motion } from "framer-motion"
import { HandHeart, Users, ChevronRight, Sparkles, Heart } from "lucide-react"

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#D4AF37]/10 to-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#D4AF37]/5 to-amber-200/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-200/10 to-[#D4AF37]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Enhanced top banner with gradient */}
      <div className="w-full bg-gradient-to-r from-[#D4AF37] via-yellow-400 to-[#D4AF37] text-[#111827] relative">
        <div className="absolute inset-0  opacity-30"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Your time is priceless. Your impact is golden.
            </span>
            <Sparkles className="h-4 w-4 animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Enhanced badge with glow effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D4AF37]/30 bg-gradient-to-r from-white/80 to-yellow-50/80 backdrop-blur-sm px-4 py-2 text-sm shadow-lg ring-1 ring-[#D4AF37]/20"
            >
              <HandHeart className="h-5 w-5 text-[#D4AF37] animate-pulse" aria-hidden="true" />
              <span className="font-medium bg-gradient-to-r from-[#D4AF37] to-yellow-600 bg-clip-text text-transparent">
                Volunteer with Our NGO
              </span>
            </motion.div>

            {/* Enhanced heading with gradient text */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight"
            >
              <span className="text-[#111827]">Turn compassion into action with a </span>
              <span className="bg-gradient-to-r from-[#D4AF37] via-yellow-500 to-[#D4AF37] bg-clip-text text-transparent animate-pulse">
                golden
              </span>
              <span className="text-[#111827]"> opportunity to serve</span>
            </motion.h1>

            {/* Enhanced description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 leading-relaxed max-w-xl"
            >
              Join a global community of change-makers. Give your time, share your skills, and help us empower lives
              with dignity and hope. Together, we create ripples of positive change that transform communities.
            </motion.p>

            {/* Enhanced buttons with better hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#volunteer-form"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-[#D4AF37] to-yellow-400 px-8 py-4 font-bold text-[#111827] shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/25 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 ">Become a Volunteer</span>
                <ChevronRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D4AF37]/30 bg-white/80 backdrop-blur-sm px-8 py-4 font-semibold text-[#111827] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>How it works</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Enhanced stats with icons and animations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-400 shadow-lg">
                  <Users className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#111827]">10,000+</div>
                  <div className="text-sm text-gray-600">volunteers</div>
                </div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-400 shadow-lg">
                  <Heart className="h-5 w-5 text-white animate-pulse" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#111827]">Flexible</div>
                  <div className="text-sm text-gray-600">schedules</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced image section with multiple visual effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-yellow-300/20 rounded-2xl blur-2xl transform scale-110"></div>
            
            {/* Main image container with enhanced styling */}
            <div className="relative aspect-[4/3] w-full rounded-2xl border-2 border-[#D4AF37]/20 bg-gradient-to-br from-white to-yellow-50/30 shadow-2xl overflow-hidden ring-1 ring-[#D4AF37]/10 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://www.shutterstock.com/image-photo/happy-volunteer-portrait-people-park-260nw-2507688333.jpg"
                alt="Volunteers working together in the community"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Enhanced floating card with better positioning and styling */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-white to-yellow-50/80 backdrop-blur-md border-2 border-[#D4AF37]/30 rounded-2xl shadow-2xl px-6 py-4 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full animate-pulse"></div>
                <p className="text-sm font-bold text-[#111827]">Every hour counts</p>
              </div>
              <p className="text-xs text-gray-600 font-medium">Small acts. Big impact.</p>
              <div className="absolute top-2 right-2">
                <Heart className="h-4 w-4 text-[#D4AF37] animate-pulse" />
              </div>
            </motion.div>

            {/* Additional decorative floating elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full shadow-lg flex items-center justify-center"
            >
              <Sparkles className="h-6 w-6 text-white animate-spin" style={{animationDuration: '3s'}} />
            </motion.div>

            {/* Subtle corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37]/40 rounded-tl-lg"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37]/40 rounded-br-lg"></div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#D4AF37]/5 to-transparent"></div>
      <svg className="absolute bottom-0 left-0 w-full h-16 text-[#D4AF37]/10" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M0,120 C200,80 400,40 600,60 C800,80 1000,40 1200,80 L1200,120 Z" fill="currentColor"></path>
      </svg>
    </header>
  )
}