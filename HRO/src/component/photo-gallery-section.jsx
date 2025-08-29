"use client"
import { motion } from "framer-motion"

export default function PartnerAffiliatesSection() {
  const partners = [
    { name: "UNICEF", logo: "/partner/part3.jpeg" },
    { name: "World Health Organization", logo: "/partner/part4.jpg" },
    { name: "Red Cross", logo: "/partner/part5.jpg" },
    { name: "Doctors Without Borders", logo: "/partner/part6.png" },
    { name: "Oxfam", logo: "/partner/part7.png" },
    { name: "Save the Children", logo: "/partner/part8.jpg" },
    { name: "World Vision", logo: "/partner/part9.jpg" },
    { name: "Habitat for Humanity", logo: "/partner/part11.png" },
    { name: "Feeding America", logo: "/partner/part12.png" },
    { name: "United Way", logo: "/partner/part13.png" },
    { name: "Amnesty International", logo: "/partner/part14.png" },
    { name: "Greenpeace", logo: "/partner/part15.png" },
  ]

  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2979FF]/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#2979FF]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-[#2979FF]/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#2979FF] via-blue-600 to-[#2979FF] bg-clip-text text-transparent mb-4">
              Partners & Affiliates
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#2979FF] to-blue-400 rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6"
          >
            Working together with leading organizations worldwide to create lasting impact and positive change in
            communities everywhere.
          </motion.p>
        </div>

        {/* Logo Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 via-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-gray-50 via-white/80 to-transparent z-10"></div>

          <div className="overflow-hidden py-8">
            <div
              className="flex animate-scroll"
              style={{
                width: `${duplicatedPartners.length * 200}px`,
                animation: "scroll 40s linear infinite",
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex-shrink-0 group mx-4 md:mx-6">
                  <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2979FF]/20 w-40 md:w-48 h-24 md:h-28 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50/30 hover:scale-105">
                    {/* Decorative Corner */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#2979FF]/20 group-hover:border-[#2979FF]/40 transition-colors duration-300"></div>

                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2979FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-[#2979FF] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Global Partners</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-[#2979FF] mb-2">25+</div>
              <div className="text-gray-600 font-medium">Countries Reached</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-[#2979FF] mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#2979FF]/40 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#2979FF]/50 rounded-full animate-ping delay-500"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${partners.length * 200}px);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
