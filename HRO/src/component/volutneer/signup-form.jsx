"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, UserRound, HeartHandshake, Calendar, MapPin, CheckCircle2 } from "lucide-react"

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // In production, post to your API route or integration here.
    setSubmitted(true)
  }

  return (
    <section id="signup" className="bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-3xl font-semibold text-zinc-900 sm:text-4xl">Ready to make a difference?</h2>
          <p className="mt-3 text-zinc-700">Apply in minutes. We’ll get back to you within 3–5 business days.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-10 max-w-3xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-100"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-zinc-900">
                Full name
              </label>
              <div className="relative mt-1">
                <UserRound
                  className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-amber-600"
                  aria-hidden="true"
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-amber-200 bg-white py-2 pl-10 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Jane Doe"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                Email
              </label>
              <div className="relative mt-1">
                <Mail
                  className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-amber-600"
                  aria-hidden="true"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-amber-200 bg-white py-2 pl-10 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="you@example.org"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-zinc-900">
                Phone
              </label>
              <div className="relative mt-1">
                <Phone
                  className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-amber-600"
                  aria-hidden="true"
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md border border-amber-200 bg-white py-2 pl-10 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="+1 555 123 4567"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="interest" className="text-sm font-medium text-zinc-900">
                Area of interest
              </label>
              <div className="relative mt-1">
                <HeartHandshake
                  className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-amber-600"
                  aria-hidden="true"
                />
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full appearance-none rounded-md border border-amber-200 bg-white py-2 pl-10 pr-8 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select an area</option>
                  <option>Community Support</option>
                  <option>Tutoring & Mentorship</option>
                  <option>Neighborhood Cleanup</option>
                  <option>Health Outreach</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="availability" className="text-sm font-medium text-zinc-900">
                Availability
              </label>
              <div className="relative mt-1">
                <Calendar
                  className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-amber-600"
                  aria-hidden="true"
                />
                <input
                  id="availability"
                  name="availability"
                  type="text"
                  className="w-full rounded-md border border-amber-200 bg-white py-2 pl-10 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g. Weekends, Weekdays after 5pm"
                />
              </div>
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="location" className="text-sm font-medium text-zinc-900">
                Location
              </label>
              <div className="relative mt-1">
                <MapPin
                  className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-amber-600"
                  aria-hidden="true"
                />
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="w-full rounded-md border border-amber-200 bg-white py-2 pl-10 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="City, State"
                />
              </div>
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-900">
                Tell us more
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-amber-200 bg-white p-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Share any skills, languages, or goals."
              />
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="consent" className="text-sm text-zinc-700">
              I agree to be contacted about volunteering opportunities.
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-base font-semibold text-zinc-900 transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Submit Application
            </button>
            <p className="text-xs text-zinc-500">We respect your privacy and never share your information.</p>
          </div>

          {submitted && (
            <div
              role="status"
              aria-live="polite"
              className="mt-6 flex items-center gap-2 rounded-md bg-amber-50 p-3 text-amber-800 ring-1 ring-amber-200"
            >
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              <span>Thanks for applying! We’ll be in touch shortly.</span>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
