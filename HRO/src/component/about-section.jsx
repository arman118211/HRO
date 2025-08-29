"use client"

import { Users, Heart, Globe, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  const stats = [
    { icon: Users, number: "50K+", label: "Lives Impacted" },
    { icon: Heart, number: "1M+", label: "Donations Received" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: Award, number: "15+", label: "Years of Service" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#2979FF]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1565C0]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2979FF] to-[#1565C0] bg-clip-text text-transparent mb-6"
          >
            About Hope Foundation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            For over 15 years, we've been dedicated to creating lasting change in communities worldwide. Through
            education, healthcare, and sustainable development programs, we're building a better future for all.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/30 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2979FF]/10 via-[#1565C0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#2979FF]/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>

              {/* Floating sparkles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#2979FF] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-150"></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-[#1565C0] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-300"></div>

              <div className="bg-gradient-to-br from-[#2979FF]/15 via-[#1565C0]/10 to-[#0D47A1]/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:shadow-lg group-hover:shadow-[#2979FF]/25 transition-all duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <stat.icon className="h-10 w-10 text-[#2979FF] relative z-10 group-hover:text-[#1565C0] transition-colors duration-300" />
              </div>

              <div className="text-4xl font-bold bg-gradient-to-r from-[#2979FF] to-[#1565C0] bg-clip-text text-transparent mb-3 relative z-10 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-slate-700 font-semibold text-lg relative z-10 group-hover:text-slate-800 transition-colors duration-300">
                {stat.label}
              </div>

              <div className="absolute inset-0 rounded-2xl border border-[#2979FF]/0 group-hover:border-[#2979FF]/20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2979FF]/20 to-[#1565C0]/20 rounded-2xl blur-lg"></div>
            <img
              src="/mission.svg"
              alt="Our team working in the community"
              className="rounded-xl shadow-lg w-full relative z-10"
            />
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#2979FF] rounded-tl-lg"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#1565C0] rounded-br-lg"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#2979FF] to-[#1565C0] bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe every person deserves access to education, healthcare, and opportunities to thrive. Our mission
              is to break the cycle of poverty through sustainable community development programs that empower
              individuals and transform lives.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With transparency at our core, 95% of every donation goes directly to our programs, ensuring maximum
              impact for the communities we serve.
            </p>
            <button className="bg-gradient-to-r from-[#2979FF] to-[#1565C0] hover:from-[#1565C0] hover:to-[#0D47A1] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
