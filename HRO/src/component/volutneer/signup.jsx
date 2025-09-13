"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function Signup() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <div id="signup" className="mx-auto max-w-4xl text-white">
      <div className="text-center">
        <h2 className="text-pretty text-3xl font-semibold sm:text-4xl">Ready to volunteer?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-sm text-white/70">
          Tell us a bit about yourself and we’ll match you with the right role.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-5">
        <form onSubmit={onSubmit} className="md:col-span-3 rounded-lg border border-white/10 bg-white/5 p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@example.com" icon={Mail} />
            <Field label="Phone" name="phone" type="tel" placeholder="+1 555 000 1234" icon={Phone} />
            <Field label="City" name="city" placeholder="Your city" icon={MapPin} />
            <Field label="Availability" name="availability" placeholder="Weekends, 3–5 hrs" icon={Clock} />
            <SelectField
              label="Area of interest"
              name="interest"
              options={[
                "Community Outreach",
                "Education & Tutoring",
                "Event Logistics",
                "Environmental Care",
                "Creative & Media",
              ]}
            />
          </div>
          <div className="mt-4">
            <Label>Message</Label>
            <textarea
              name="message"
              placeholder="Tell us what motivates you to volunteer…"
              className="mt-1 h-28 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-amber-500/50 focus:bg-white/10 focus:outline-none"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 text-sm font-semibold text-[#0b0f1a] shadow-sm transition hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              Submit application
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-4 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-300"
              >
                Thank you! Your volunteer application has been received. We’ll contact you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <aside className="md:col-span-2 space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Need help?</h3>
            <p className="mt-2 text-sm text-white/70">
              Our team can guide you to find the perfect role based on your skills and schedule.
            </p>
            <div className="mt-3 space-y-2 text-sm text-white/80">
              <div>• Average response time: 24–48 hours</div>
              <div>• Orientation provided for all roles</div>
              <div>• Safeguarding and safety first</div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Email: volunteers@example.org</li>
              <li>Phone: +1 555 123 4567</li>
              <li>Address: 123 Impact Ave, Hope City</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

function Label({ children }) {
  return <label className="text-xs font-medium text-white/80">{children}</label>
}

function Field({ label, icon: Icon, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-1 relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
            aria-hidden="true"
          />
        )}
        <input
          {...props}
          className={`h-10 w-full rounded-md border border-white/15 bg-white/5 px-3 ${Icon ? "pl-9" : ""} text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-amber-500/50 focus:bg-white/10`}
        />
      </div>
    </div>
  )
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        className="mt-1 h-10 w-full rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white outline-none transition focus:border-amber-500/50 focus:bg-white/10"
        defaultValue=""
      >
        <option value="" disabled className="text-white/50">
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-[#0b0f1a]">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
