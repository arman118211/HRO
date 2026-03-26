"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ReadMore({ text, maxLength = 200 }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  const shouldTruncate = text.length > maxLength
  const displayedText = isExpanded
    ? text
    : text.substring(0, maxLength) + (shouldTruncate ? "..." : "")

  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
    >
      {displayedText}

      {shouldTruncate && (
        <span
          onClick={toggleReadMore}
          className="ml-2 text-blue-600 font-semibold cursor-pointer hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      )}
    </motion.p>
  )
}