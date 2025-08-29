"use client"

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    {
      image: "./slider-p-1-2.png",
      title: "Education for All",
      description: "Providing quality education to children in underserved communities worldwide.",
    },
    {
      image: "https://www.wikiimpact.com/wp-content/uploads/2022/03/joshua-lanzarini-JQwzKcHLHoc-unsplash-scaled-1.jpg",
      title: "Clean Water Access",
      description: "Building wells and water systems to bring clean water to remote villages.",
    },
    {
      image: "https://www.smilefoundationindia.org/wp-content/uploads/2023/05/1-1.jpg",
      title: "Emergency Relief",
      description: "Rapid response to natural disasters and humanitarian crises globally.",
    },
    {
      image: "https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/World-heart-day-1-645x430-1.jpg",
      title: "Healthcare Support",
      description: "Mobile clinics and medical aid reaching the most vulnerable populations.",
    },
    {
      image: "https://static.wixstatic.com/media/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg/v1/fill/w_1962,h_1462,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2cdbfc_cf1b36190dfc46598c48c7606bbc008a~mv2.jpg",
      title: "Sustainable Development",
      description: "Long-term projects that create lasting positive change in communities.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100  mt-12 md:mt-25"
    >
      <div
        className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse z-5"
        style={{ backgroundColor: "#2979FF20" }}
      ></div>
      <div
        className="absolute top-20 right-8 md:top-40 md:right-20 w-16 h-16 md:w-32 md:h-32 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000 z-5"
        style={{ backgroundColor: "#2979FF15" }}
      ></div>
      <div
        className="absolute bottom-16 left-1/4 md:bottom-32 w-10 h-10 md:w-16 md:h-16 bg-blue-600/25 rounded-full blur-lg animate-pulse delay-2000 z-5"
        style={{ backgroundColor: "#2979FF25" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-12 h-12 md:w-24 md:h-24 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-3000 z-5"
        style={{ backgroundColor: "#2979FF10" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/3 w-8 h-8 md:w-12 md:h-12 bg-blue-400/30 rounded-full blur-md animate-bounce z-5"
        style={{ backgroundColor: "#2979FF30", animationDelay: "2s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-4 md:right-10 w-16 h-16 md:w-28 md:h-28 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-4000 z-5"
        style={{ backgroundColor: "#2979FF20" }}
      ></div>

      <div className="relative z-10 min-h-screen flex items-center  ">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-1">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 md:space-y-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 bg-clip-text text-transparent">
                    Transform Lives
                  </span>
                  <br />
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"
                    style={{ backgroundImage: `linear-gradient(135deg, #2979FF, #1565C0)` }}
                  >
                    Together
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                  Join our mission to create lasting change in communities worldwide. Every donation, every volunteer
                  hour, every shared story brings hope to those who need it most.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4  "
              >
                <button
                  className="px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, #2979FF, #1565C0)`,
                  }}
                >
                  Start Donating
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  className="border-2 px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  style={{
                    borderColor: "#2979FF",
                    color: "#2979FF",
                  }}
                >
                  Learn Our Story
                </button>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 "
              >
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold" style={{ color: "#2979FF" }}>
                    50K+
                  </div>
                  <div className="text-sm md:text-base text-slate-600">Lives Changed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold" style={{ color: "#2979FF" }}>
                    120+
                  </div>
                  <div className="text-sm md:text-base text-slate-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold" style={{ color: "#2979FF" }}>
                    $2M+
                  </div>
                  <div className="text-sm md:text-base text-slate-600">Raised</div>
                </div>
              </motion.div>
            </div>

            {/* <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-20 hidden lg:block">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="relative h-full"
              >
                <svg width="120" height="100%" viewBox="0 0 120 800" className="drop-shadow-2xl h-full">
                  <defs>
                    <linearGradient id="cDividerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#2979FF", stopOpacity: 0.9 }} />
                      <stop offset="50%" style={{ stopColor: "#1565C0", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#2979FF", stopOpacity: 0.8 }} />
                    </linearGradient>
                    <filter id="cGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M90 50 Q30 50 30 150 Q30 250 40 350 Q45 450 50 550 Q55 650 60 750"
                    stroke="url(#cDividerGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#cGlow)"
                    className="animate-pulse"
                  />
                </svg>
              </motion.div>
            </div> */}

            <div className="relative order-1 lg:order-2  overflow-hidden">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative max-w-2xl mx-auto"
              >
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((slide, index) => (
                      <div key={index} className="min-w-full h-full relative">
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                          <motion.h3
                            key={`title-${index}-${currentSlide}`}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-2xl font-bold mb-2 md:mb-3"
                          >
                            {slide.title}
                          </motion.h3>
                          <motion.p
                            key={`desc-${index}-${currentSlide}`}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-sm md:text-lg opacity-90"
                          >
                            {slide.description}
                          </motion.p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                  </button>

                  <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div
                  className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-8 h-8 md:w-16 md:h-16 border-l-2 md:border-l-4 border-t-2 md:border-t-4 opacity-60 animate-pulse"
                  style={{ borderColor: "#2979FF" }}
                />
                <div
                  className="absolute -top-4 md:-top-8 -right-4 md:-right-8 w-8 h-8 md:w-16 md:h-16 border-r-2 md:border-r-4 border-t-2 md:border-t-4 opacity-60 animate-pulse"
                  style={{ borderColor: "#2979FF", animationDelay: "1s" }}
                />
                <div
                  className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-8 h-8 md:w-16 md:h-16 border-l-2 md:border-l-4 border-b-2 md:border-b-4 opacity-60 animate-pulse"
                  style={{ borderColor: "#2979FF", animationDelay: "2s" }}
                />
                <div
                  className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-8 h-8 md:w-16 md:h-16 border-r-2 md:border-r-4 border-b-2 md:border-b-4 opacity-60 animate-pulse"
                  style={{ borderColor: "#2979FF", animationDelay: "3s" }}
                />

                <div
                  className="absolute -top-2 md:-top-4 left-1/4 w-4 h-4 md:w-8 md:h-8 bg-blue-400/30 rounded-full blur-sm animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "3s" }}
                />
                <div
                  className="absolute top-1/3 -right-3 md:-right-6 w-3 h-3 md:w-6 md:h-6 bg-blue-500/40 rounded-full blur-sm animate-bounce"
                  style={{ animationDelay: "2s", animationDuration: "4s" }}
                />
                <div
                  className="absolute bottom-1/4 -left-2 md:-left-4 w-5 h-5 md:w-10 md:h-10 bg-blue-300/25 rounded-full blur-md animate-bounce"
                  style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
