"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, Users, Award, Globe } from "lucide-react"
import React from "react" // Import React for JSX creation

const volunteers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Community Outreach Coordinator",
    image: "https://blog.landg.com/asset/4a6d63/globalassets/lgim-blog/images/author-images/aysha_patel-638623678636527682.jpg",
    bio: "Sarah has been leading our community outreach programs for over 3 years, connecting with local families and organizing support networks.",
    achievements: "Helped 500+ families",
    icon: Users,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Education Program Director",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHrA3tpj76vCg/profile-displayphoto-shrink_200_200/B4DZTcNyYRHIAc-/0/1738861390380?e=2147483647&v=beta&t=v4VC1irP4DEKXluXHvqQZWgYLkqXO-6YaqdZnUw_ywI",
    bio: "Michael develops and oversees our educational initiatives, ensuring quality learning opportunities for underprivileged children.",
    achievements: "Educated 1000+ children",
    icon: Award,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Healthcare Volunteer",
    image: "https://run.imgix.net/1a4e460e-4d01-4e62-837b-75ef484fe5c9/c8fe794a-7a5d-4d8d-aa53-0ed7ae778412/c8fe794a-7a5d-4d8d-aa53-0ed7ae778412.jpeg?ixlib=js-3.8.0&bri=0&con=0&sat=0&high=0&shad=0&usm=0&rect=1429%2C0%2C3665%2C4000&auto=compress%2Cformat&fit=fillmax&w=2048&q=75",
    bio: "Emily provides essential healthcare services in remote areas, bringing medical care to those who need it most.",
    achievements: "Treated 800+ patients",
    icon: Heart,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Environmental Advocate",
    image: "https://m.media-amazon.com/images/M/MV5BMDhhYjYxYjYtMjY2Zi00MmNiLWE4MjctMTFlNGQ3NjdjMGJjXkEyXkFqcGc@._V1_CR2103,329,1653,2479_.jpg",
    bio: "David leads our environmental conservation efforts, organizing clean-up drives and sustainability workshops.",
    achievements: "Planted 2000+ trees",
    icon: Globe,
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Youth Mentor",
    image: "https://bateswells.co.uk/wp-content/uploads/2019/05/Web_BWB_Chetal-Patel-1.jpg",
    bio: "Aisha mentors young adults, providing guidance and support to help them build better futures for themselves.",
    achievements: "Mentored 300+ youth",
    icon: Users,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Emergency Response Coordinator",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSaU7F68Xlcu371OeRlObQevbXxt6vmS5sg&s",
    bio: "James coordinates our disaster relief efforts, ensuring rapid response and aid distribution during emergencies.",
    achievements: "Led 50+ relief missions",
    icon: Award,
  },
]

export default function VolunteerTeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % volunteers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % volunteers.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + volunteers.length) % volunteers.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#2979FF]/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-[#2979FF]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-lg animate-pulse delay-2000"></div>

        {/* Sparkle Effects */}
        <div className="absolute top-16 right-1/4 w-2 h-2 bg-[#2979FF] rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-1500"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-2500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2979FF]/10 text-[#2979FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Amazing Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#2979FF] to-blue-600 bg-clip-text text-transparent">
              Volunteer Heroes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated volunteers are the heart of our mission. Each brings unique skills, passion, and commitment to
            creating positive change in communities worldwide.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#2979FF]/20 to-transparent rounded-br-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-tl-2xl"></div>

            <div className="grid md:grid-cols-2 gap-0 h-[500px] md:h-[400px] ">
              {/* Image Side */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#2979FF]/5 to-blue-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 "></div>
                <img
                  src={volunteers[currentIndex].image || "/placeholder.svg"}
                  alt={volunteers[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 "
                />

                {/* Floating Achievement Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg z-20">
                  <div className="flex items-center gap-2">
                    {volunteers[currentIndex].icon &&
                      React.createElement(volunteers[currentIndex].icon, {
                        className: "w-4 h-4 text-[#2979FF]",
                      })}
                    <span className="text-xs font-semibold text-gray-800">{volunteers[currentIndex].achievements}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-8 flex flex-col justify-center relative  ">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 ">
                  <div className="w-full h-full bg-gradient-to-br from-[#2979FF] to-blue-400 rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {volunteers[currentIndex].name}
                    </h3>
                    <p className="text-[#2979FF] font-semibold text-base">{volunteers[currentIndex].role}</p>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">{volunteers[currentIndex].bio}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#2979FF]/10 text-[#2979FF] px-3 py-1.5 rounded-full">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Volunteer Since 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-[#2979FF] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-[#2979FF] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {volunteers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 h-3 bg-[#2979FF]" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { number: "50+", label: "Active Volunteers", icon: Users },
            { number: "10K+", label: "Lives Impacted", icon: Heart },
            { number: "25+", label: "Countries Served", icon: Globe },
            { number: "100+", label: "Projects Completed", icon: Award },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[#2979FF]/10 text-[#2979FF] rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-xs font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
