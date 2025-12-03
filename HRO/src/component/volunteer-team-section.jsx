"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, Users, Award, Globe } from "lucide-react"
import React from "react" // Import React for JSX creation

const volunteers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Community Outreach Coordinator",
    image: "https://www.gmevents.ae/wp-content/uploads/2019/04/female-placeholder.jpg",
    bio: "Priya has been supporting our community outreach programs for over 3 years, connecting with vulnerable families and organizing local support networks.",
    achievements: "Helped 500+ families",
    icon: Users,
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Education Program Director",
    image: "https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg",
    bio: "Amit leads our educational initiatives, ensuring underprivileged children receive quality learning opportunities and academic support.",
    achievements: "Educated 1000+ children",
    icon: Award,
  },
  {
    id: 3,
    name: "Sita Rai",
    role: "Healthcare Volunteer",
    location: "Nepal",
    image: "https://www.gmevents.ae/wp-content/uploads/2019/04/female-placeholder.jpg",
    bio: "Sita provides essential medical assistance at our free health camps and cataract surgery programs, reaching remote communities in Nepal.",
    achievements: "Treated 800+ patients",
    icon: Heart,
  },
  {
    id: 4,
    name: "Rajesh Thapa",
    role: "Environmental Advocate",
    location: "Nepal",
    image: "https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg",
    bio: "Rajesh leads sustainable development workshops and organizes environmental clean-up drives across rural Nepal.",
    achievements: "Planted 2000+ trees",
    icon: Globe,
  },
  {
    id: 5,
    name: "Anita Kumari",
    role: "Youth Mentor",
    image: "https://www.gmevents.ae/wp-content/uploads/2019/04/female-placeholder.jpg",
    bio: "Anita mentors young adults, helping them build confidence, career skills, and strong leadership qualities.",
    achievements: "Mentored 300+ youth",
    icon: Users,
  },
  {
    id: 6,
    name: "Deepak Singh",
    role: "Emergency Response Coordinator",
    image: "https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg",
    bio: "Deepak manages our emergency relief missions, ensuring timely aid distribution during disasters and crises.",
    achievements: "Led 50+ relief missions",
    icon: Award,
  },
];



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
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-lg animate-pulse delay-2000"></div>

        {/* Sparkle Effects */}
        <div className="absolute top-16 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-1500"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-2500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Amazing Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
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
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-transparent rounded-br-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-tl-2xl"></div>

            <div className="grid md:grid-cols-2 gap-0 h-[500px] md:h-[400px] ">
              {/* Image Side */}
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-400/10 to-yellow-50">
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
                        className: "w-4 h-4 text-amber-600",
                      })}
                    <span className="text-xs font-semibold text-gray-800">{volunteers[currentIndex].achievements}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-8 flex flex-col justify-center relative  ">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 ">
                  <div className="w-full h-full bg-gradient-to-br from-amber-500 to-yellow-400 rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {volunteers[currentIndex].name}
                    </h3>
                    <p className="text-amber-600 font-semibold text-base">{volunteers[currentIndex].role}</p>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">{volunteers[currentIndex].bio}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-amber-400/20 text-amber-700 px-3 py-1.5 rounded-full">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-amber-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-amber-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-20"
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
                index === currentIndex ? "w-8 h-3 bg-amber-500" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { number: "50+", label: "Active Volunteers", icon: Users },
            { number: "10K+", label: "Lives Impacted", icon: Heart },
            { number: "8+", label: "Countries", icon: Globe },
            { number: "100+", label: "Projects Completed", icon: Award },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-amber-400/20 text-amber-600 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
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