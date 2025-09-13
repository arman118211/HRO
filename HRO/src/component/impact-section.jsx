"use client"

import { motion } from "framer-motion"
import { Heart, Users, Globe, Star } from "lucide-react"

export default function ImpactSection() {
  const stories = [
    {
      name: "Maria Santos",
      age: 12,
      location: "Guatemala",
      story:
        "Thanks to your support, Maria now attends school regularly and dreams of becoming a doctor to help her community.",
      image: "https://mariasantosfdez.github.io/images/headshot.jpg",
      program: "Education Initiative",
    },
    {
      name: "Ahmed Hassan",
      age: 45,
      location: "Kenya",
      story:
        "The new water well in Ahmed's village has reduced water collection time from 6 hours to 30 minutes daily.",
      image: "https://ceocoachinginternational.com/wp-content/uploads/2023/04/Ahmed-Hassan.jpeg",
      program: "Clean Water Project",
    },
    {
      name: "Rosa Martinez",
      age: 28,
      location: "Peru",
      story:
        "Rosa received life-saving treatment at our mobile clinic and now volunteers to help other mothers in her community.",
      image: "https://pbs.twimg.com/profile_images/740472114113826816/KnLqZN7-_400x400.jpg",
      program: "Healthcare Access",
    },
  ]

  return (
    <section
      id="impact"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>

        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full mb-6 shadow-lg"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Real Stories, Real Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every donation creates ripples of change. Here are just a few stories of lives transformed through your
            generosity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden relative group border border-amber-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 text-amber-500" />
                  </div>
                </div>
              </div>

              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      Age {story.age} • {story.location}
                    </p>
                  </div>
                  <span className="bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold border border-amber-400/30">
                    {story.program}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{story.story}</p>

                {/* Bottom decoration line */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full mb-4 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Impact Matters</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Every dollar you donate is carefully allocated to maximize impact. See exactly how your contribution makes
              a difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { amount: "$25", description: "Provides school supplies for one child for a month", icon: "📚" },
                { amount: "$50", description: "Funds medical treatment for a family of four", icon: "🏥" },
                { amount: "$100", description: "Supports clean water access for 10 people", icon: "💧" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg border border-amber-100 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-3xl font-bold text-amber-600 mb-2">{item.amount}</div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}