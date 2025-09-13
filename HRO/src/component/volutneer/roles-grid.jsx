"use client"

import { motion } from "framer-motion"
import { Megaphone, Leaf, School, Stethoscope, Truck, Laptop, Soup, Palette, ArrowRight, Zap } from "lucide-react"

const roles = [
  {
    icon: Soup,
    title: "Community Outreach",
    desc: "Assist with food drives, distributions, and local engagement events.",
  },
  {
    icon: School,
    title: "Education Support",
    desc: "Tutor students, run workshops, and help with after-school programs.",
  },
  {
    icon: Leaf,
    title: "Environment & Cleanups",
    desc: "Participate in tree-planting and neighborhood cleanups.",
  },
  {
    icon: Stethoscope,
    title: "Health Camps",
    desc: "Support basic screenings and awareness campaigns with our teams.",
  },
  {
    icon: Laptop,
    title: "Digital & Admin",
    desc: "Help with design, social media, data entry, and content writing.",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Assist with packing, transport, and event setup/teardown.",
  },
  {
    icon: Palette,
    title: "Creative Projects",
    desc: "Photography, video, and storytelling to amplify impact.",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    desc: "Raise awareness, mobilize support, and champion our causes.",
  },
]

export default function RolesGrid() {
  return (
    <section aria-labelledby="roles-heading" className="relative bg-gradient-to-br from-white via-amber-50/10 to-yellow-50/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0  opacity-50"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6 mb-10"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#111827]">Find Your Calling</span>
            </div>
            <h2 id="roles-heading" className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
              Volunteer <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 bg-clip-text text-transparent">Roles</span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Explore roles that match your interests and skills. Training and guidance provided for every opportunity.
            </p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#volunteer-form"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border-2 border-[#D4AF37]/30 bg-white/80 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-[#111827] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <span>See Openings</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-xl border-2 border-[#D4AF37]/10 bg-gradient-to-br from-white to-yellow-50/30 p-5 hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/3 to-yellow-200/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Enhanced icon with gradient background */}
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-yellow-200/25 border border-[#D4AF37]/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-sm">
                <role.icon className="h-5 w-5 text-[#D4AF37] group-hover:text-yellow-600 transition-colors duration-300" aria-hidden="true" />
              </div>
              
              {/* Enhanced title */}
              <h3 className="relative mt-4 text-lg font-bold text-[#111827] group-hover:text-gray-800 transition-colors duration-300">
                {role.title}
              </h3>
              
              {/* Enhanced description */}
              <p className="relative mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {role.desc}
              </p>

              

              {/* Decorative corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors duration-300 rounded-tr-lg"></div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}