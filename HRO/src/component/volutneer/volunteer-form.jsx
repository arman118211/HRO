"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, Check, UserPlus, Sparkles } from "lucide-react"

export default function VolunteerForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      await new Promise((res) => setTimeout(res, 1000))
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="volunteer-form" aria-labelledby="form-heading" className="relative bg-gradient-to-br from-white via-amber-50/12 to-yellow-50/20 overflow-hidden min-h-screen">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-gradient-to-r from-[#D4AF37]/6 to-yellow-300/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-gradient-to-l from-yellow-200/8 to-[#D4AF37]/8 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 left-10 w-48 h-48 bg-gradient-to-r from-yellow-100/5 to-[#D4AF37]/5 rounded-full blur-2xl"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-yellow-200/20 border border-[#D4AF37]/20 px-6 py-3 mb-6">
            <UserPlus className="h-5 w-5 text-[#D4AF37] animate-pulse" />
            <span className="text-base font-medium text-[#111827]">Join Our Mission</span>
          </div>
          <h2 id="form-heading" className="text-4xl sm:text-5xl lg:text-4xl font-bold text-[#111827] mb-6">
            Ready to Make a <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 bg-clip-text text-transparent">Difference</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Tell us a bit about yourself—we'll match you with the perfect opportunity to create impact.
          </p>
        </div>

        <div className="relative rounded-3xl border-2 border-[#D4AF37]/15 bg-gradient-to-br from-white via-amber-50/10 to-yellow-50/15 p-8 sm:p-12 lg:p-16 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 overflow-hidden">
          {/* Form background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/3 to-yellow-200/3 opacity-50 rounded-3xl "></div>
          
          {/* Decorative corner elements */}
          <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37]/30 rounded-tl-lg"></div>
          <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-[#D4AF37]/30 rounded-tr-lg"></div>
          <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-[#D4AF37]/30 rounded-bl-lg"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37]/30 rounded-br-lg"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-[#111827] mb-3">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border-2 border-gray-200 bg-white/80 px-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-[#111827] mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border-2 border-gray-200 bg-white/80 pl-14 pr-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-base font-semibold text-[#111827] mb-3">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
                  <input
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border-2 border-gray-200 bg-white/80 pl-14 pr-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50"
                    placeholder="+1 555 555 5555"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-base font-semibold text-[#111827] mb-3">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
                  <input
                    id="location"
                    name="location"
                    className="w-full rounded-xl border-2 border-gray-200 bg-white/80 pl-14 pr-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label htmlFor="interests" className="block text-base font-semibold text-[#111827] mb-3">
                  Areas of Interest *
                </label>
                <select
                  id="interests"
                  name="interests"
                  className="w-full rounded-xl border-2 border-gray-200 bg-white/80 px-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select your preferred area
                  </option>
                  <option>Community Outreach</option>
                  <option>Education Support</option>
                  <option>Environment & Cleanups</option>
                  <option>Health Camps</option>
                  <option>Digital & Admin</option>
                  <option>Creative Projects</option>
                  <option>Logistics</option>
                  <option>Advocacy</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="availability" className="block text-base font-semibold text-[#111827] mb-3">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  className="w-full rounded-xl border-2 border-gray-200 bg-white/80 px-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    When can you volunteer?
                  </option>
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Evenings</option>
                  <option>Flexible</option>
                  <option>Remote</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="hours" className="block text-base font-semibold text-[#111827] mb-3">
                  Hours per Week *
                </label>
                <input
                  id="hours"
                  name="hours"
                  type="number"
                  min="1"
                  max="40"
                  className="w-full rounded-xl border-2 border-gray-200 bg-white/80 px-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50"
                  placeholder="e.g., 4"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-[#111827] mb-3">
                  Tell Us More About Yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white/80 px-5 py-4 text-base outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 hover:border-[#D4AF37]/50 resize-none"
                  placeholder="Share any relevant experience, skills, or what motivates you to volunteer with us..."
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-8 border-t border-[#D4AF37]/15">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <p className="text-base text-gray-600 leading-relaxed">
                By applying, you agree to our code of conduct and safety guidelines.
              </p>
            </div>
            
            <button
              onClick={onSubmit}
              disabled={submitting || submitted}
              className="group relative inline-flex items-center justify-center gap-3 rounded-xl border border-transparent bg-gradient-to-r from-[#D4AF37] to-yellow-400 px-10 py-5 text-lg font-bold text-[#111827] shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/25 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 overflow-hidden min-w-[240px]"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 flex items-center gap-3">
                {submitted ? (
                  <>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    Application Received
                  </>
                ) : (
                  <>
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#111827] border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        Submit Application
                      </>
                    )}
                  </>
                )}
              </span>
              
              {/* Sparkle effects on success */}
              {submitted && (
                <div className="absolute inset-0 pointer-events-none">
                  <Sparkles className="absolute top-3 right-3 h-5 w-5 text-yellow-400 animate-pulse" />
                  <Sparkles className="absolute bottom-3 left-3 h-4 w-4 text-[#D4AF37] animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}