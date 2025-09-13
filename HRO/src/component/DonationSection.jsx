"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import { GraduationCap, Heart, Home, Leaf, Shield, Utensils, DollarSign, Users, Globe, Award, Search, CheckCircle, Lock, Target, Sparkles, X, Receipt, Download, MapPin } from 'lucide-react'

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: "service_j5smok4", // Replace with your EmailJS service ID
  templateId: "template_8mqpxmi", // Replace with your EmailJS template ID
  publicKey: "wlRazedBdxGXG1R42", // Replace with your EmailJS public key
}

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey)

// Email service for sending transaction details
const sendTransactionEmail = async (transactionData) => {
  try {
    console.log("Sending transaction email...", transactionData)

    const templateParams = {
      to_email: "your-email@example.com", // Replace with your email
      donor_name: transactionData.donorInfo?.name || "Anonymous",
      donor_email: transactionData.donorInfo?.email || "Not provided",
      transaction_id: transactionData.transactionId || transactionData.orderID,
      order_id: transactionData.orderID,
      payer_id: transactionData.payerID,
      amount: transactionData.amount,
      currency: transactionData.currency || "USD",
      cause: transactionData.selectedReason,
      donation_type: transactionData.type,
      payer_name: transactionData.payerName,
      payer_email: transactionData.payerEmail,
      transaction_date: new Date().toLocaleString(),
      payment_status: transactionData.details?.status || "COMPLETED",
    }

    const result = await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)

    console.log("Email sent successfully:", result)
    return { success: true, result }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error }
  }
}

// PayPal Integration Hook
const usePayPal = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if PayPal script is already loaded
    
    if (window.paypal) {
      setIsLoaded(true)
      return
    }

    // Load PayPal script with proper configuration
    const script = document.createElement("script")
    // Using the same client ID with card funding enabled
    script.src = `https://www.paypal.com/sdk/js?client-id=AbxENDzjASgSG34ZOvjRiQDsLNTRH0aTsZKyaLCnmuwCSbai7AmvnFKE28OH8h7kgE292JGVx_2MqRE5&currency=USD&intent=capture&enable-funding=venmo,paylater`
    script.async = true

    script.onload = () => {
      console.log("PayPal SDK loaded successfully")
      setIsLoaded(true)
      setIsLoading(false)
      setError(null)
    }

    script.onerror = (err) => {
      console.error("Failed to load PayPal SDK:", err)
      setError("Failed to load PayPal. Please try again.")
      setIsLoading(false)
    }

    setIsLoading(true)
    document.body.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return { isLoaded, isLoading, error }
}

// PayPal Button Component
const PayPalButton = ({ amount, onSuccess, onError, onCancel, selectedReason }) => {
  const paypalRef = useRef(null)
  const { isLoaded, isLoading, error } = usePayPal()
  const [isRendered, setIsRendered] = useState(false)
  const [buttonError, setButtonError] = useState(null)
  const [isProcessingEmail, setIsProcessingEmail] = useState(false)

  useEffect(() => {
    if (isLoaded && !isRendered && paypalRef.current && amount && window.paypal) {
      try {
        setIsRendered(true)
        setButtonError(null)

        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount.toString(),
                      currency_code: "USD",
                    },
                    description: `Donation to ${selectedReason} - Human Relief Organization`,
                    custom_id: `quickdonate_${selectedReason}_${Date.now()}`,
                    soft_descriptor: "HRO Donation",
                  },
                ],
                application_context: {
                  brand_name: "Human Relief Organization",
                  locale: "en-US",
                  landing_page: "BILLING",
                  shipping_preference: "NO_SHIPPING",
                  user_action: "PAY_NOW",
                },
              })
            },
            onApprove: async (data, actions) => {
              try {
                const details = await actions.order.capture()
                console.log("Payment successful:", details)

                // Prepare transaction data for email
                const transactionData = {
                  orderID: data.orderID,
                  payerID: data.payerID,
                  type: "one-time",
                  amount: amount,
                  currency: "USD",
                  details: details,
                  selectedReason: selectedReason,
                  payerEmail: details.payer?.email_address,
                  payerName: details.payer?.name
                    ? `${details.payer.name.given_name} ${details.payer.name.surname}`
                    : "Anonymous Donor",
                  transactionId: details.purchase_units[0]?.payments?.captures[0]?.id,
                  transactionDate: new Date().toISOString(),
                  paymentMethod: "PayPal",
                }

                // Send email notification
                setIsProcessingEmail(true)
                const emailResult = await sendTransactionEmail(transactionData)
                setIsProcessingEmail(false)

                if (emailResult.success) {
                  console.log("Transaction email sent successfully")
                } else {
                  console.error("Failed to send transaction email:", emailResult.error)
                  // Don't fail the transaction if email fails
                }

                // Call the success handler
                onSuccess(transactionData)
              } catch (error) {
                console.error("Error capturing payment:", error)
                setIsProcessingEmail(false)
                onError(error)
              }
            },
            onError: (err) => {
              console.error("PayPal Error:", err)
              setButtonError("Payment failed. Please try again.")
              onError(err)
            },
            onCancel: (data) => {
              console.log("Payment cancelled:", data)
              onCancel(data)
            },
            style: {
              layout: "vertical",
              color: "blue",
              shape: "rect",
              label: "paypal",
              height: 50,
              tagline: false,
            },
          })
          .render(paypalRef.current)
          .catch((err) => {
            console.error("Error rendering PayPal button:", err)
            setButtonError("Unable to load PayPal button. Please try again.")
          })
      } catch (error) {
        console.error("PayPal button setup error:", error)
        setButtonError("PayPal setup failed. Please try again.")
      }
    }
  }, [isLoaded, isRendered, amount, selectedReason, onSuccess, onError, onCancel])

  // Clear and re-render when amount changes
  useEffect(() => {
    if (isRendered && paypalRef.current) {
      paypalRef.current.innerHTML = ""
      setIsRendered(false)
    }
  }, [amount])

  if (error || buttonError) {
    return (
      <div className="flex items-center justify-center p-8 bg-red-50 rounded-xl border border-red-200">
        <div className="text-center">
          <div className="text-red-600 mb-2">⚠️</div>
          <p className="text-red-700 font-medium">{error || buttonError}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (isLoading || !isLoaded) {
    return (
      <div className="flex items-center justify-center p-8 bg-blue-50 rounded-xl">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
          />
          <span className="text-blue-600 font-medium">Loading PayPal...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {isProcessingEmail && (
        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full"
            />
            <span className="text-green-700 text-sm font-medium">Sending transaction details...</span>
          </div>
        </div>
      )}

      <div ref={paypalRef} className="min-h-[60px]" />

      <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-700 text-sm">
          <strong>📧 Email Notification:</strong> Transaction details will be automatically sent upon successful
          payment.
        </p>
      </div>
    </div>
  )
}

// Receipt Modal Component
const ReceiptModal = ({ isOpen, onClose, transactionData, selectedReason }) => {
  const receiptRef = useRef(null)

  const handleDownloadPDF = async () => {
    try {
      // Dynamically import jsPDF
      const { jsPDF } = await import("jspdf")

      const doc = new jsPDF()
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const margin = 20
      let yPosition = margin

      // Helper function to add text with word wrapping
      const addText = (text, x, y, options = {}) => {
        const { fontSize = 10, fontStyle = "normal", maxWidth = pageWidth - 2 * margin, align = "left" } = options
        doc.setFontSize(fontSize)
        doc.setFont("helvetica", fontStyle)

        if (maxWidth && text.length > 50) {
          const lines = doc.splitTextToSize(text, maxWidth)
          lines.forEach((line, index) => {
            if (align === "center") {
              doc.text(line, pageWidth / 2, y + index * fontSize * 0.5, { align: "center" })
            } else {
              doc.text(line, x, y + index * fontSize * 0.5)
            }
          })
          return y + lines.length * fontSize * 0.5
        } else {
          if (align === "center") {
            doc.text(text, pageWidth / 2, y, { align: "center" })
          } else {
            doc.text(text, x, y)
          }
          return y
        }
      }

      // Header
      doc.setFillColor(41, 121, 255)
      doc.rect(0, 0, pageWidth, 40, "F")

      doc.setTextColor(255, 255, 255)
      yPosition = 15
      addText("Community Welfare International", margin, yPosition, { fontSize: 16, fontStyle: "bold", align: "center" })
      yPosition += 8
      addText("Official Donation Receipt", margin, yPosition, { fontSize: 12, align: "center" })
      yPosition += 8
      addText("Tax-Exempt Organization | EIN: XX-XXXXXXX", margin, yPosition, { fontSize: 8, align: "center" })

      // Reset text color
      doc.setTextColor(0, 0, 0)
      yPosition = 60

      // Transaction Details Section
      doc.setFillColor(240, 248, 255)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F")
      yPosition += 6
      addText("TRANSACTION DETAILS", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" })
      yPosition += 12

      const transactionDetails = [
        ["Receipt Number:", transactionData?.orderID || "N/A"],
        ["Transaction ID:", transactionData?.transactionId || "N/A"],
        ["Date:", new Date(transactionData?.transactionDate || Date.now()).toLocaleDateString()],
        ["Time:", new Date(transactionData?.transactionDate || Date.now()).toLocaleTimeString()],
        ["Payment Method:", transactionData?.paymentMethod || "PayPal"],
        ["Status:", "Completed"],
      ]

      transactionDetails.forEach(([label, value]) => {
        addText(label, margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" })
        addText(value, margin + 80, yPosition, { fontSize: 9 })
        yPosition += 8
      })

      yPosition += 10

      // Donor Information Section
      doc.setFillColor(240, 248, 255)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F")
      yPosition += 6
      addText("DONOR INFORMATION", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" })
      yPosition += 12

      const donorDetails = [
        ["Name:", transactionData?.payerName || "Anonymous Donor"],
        ["Email:", transactionData?.payerEmail || "Not provided"],
        ["Donation Type:", "One-time"],
      ]

      donorDetails.forEach(([label, value]) => {
        addText(label, margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" })
        addText(value, margin + 80, yPosition, { fontSize: 9 })
        yPosition += 8
      })

      yPosition += 10

      // Donation Details Section
      doc.setFillColor(245, 250, 255)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F")
      yPosition += 6
      addText("DONATION DETAILS", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" })
      yPosition += 12

      const donationDetails = [
        ["Cause:", selectedReason?.title || "General Donation"],
        ["Description:", selectedReason?.description || "Supporting our mission"],
        ["Impact:", selectedReason?.impact || "Making a difference"],
      ]

      donationDetails.forEach(([label, value]) => {
        addText(label, margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" })
        const textY = addText(value, margin + 80, yPosition, { fontSize: 9, maxWidth: pageWidth - margin - 85 })
        yPosition = Math.max(yPosition + 8, textY + 5)
      })

      yPosition += 10

      // Amount Section (Highlighted)
      doc.setFillColor(41, 121, 255)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 20, "F")
      doc.setTextColor(255, 255, 255)
      yPosition += 8
      addText("TOTAL DONATION AMOUNT", margin + 5, yPosition, { fontSize: 10, fontStyle: "bold" })
      yPosition += 8
      addText(`$${transactionData?.amount || "0"}`, margin + 5, yPosition, { fontSize: 16, fontStyle: "bold" })

      doc.setTextColor(0, 0, 0)
      yPosition += 20

      // Tax Information Section
      doc.setFillColor(245, 255, 245)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F")
      yPosition += 6
      addText("TAX INFORMATION", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" })
      yPosition += 12

      const taxInfo = [
        "Tax Deductible: This donation is tax-deductible to the full extent allowed by law.",
        "No goods or services: No goods or services were provided in exchange for this contribution.",
        "Keep this receipt: Please retain this receipt for your tax records.",
      ]

      taxInfo.forEach((info) => {
        yPosition = addText(info, margin + 5, yPosition, { fontSize: 8, maxWidth: pageWidth - 2 * margin - 10 }) + 8
      })

      yPosition += 10

      // Organization Information Footer
      if (yPosition > pageHeight - 60) {
        doc.addPage()
        yPosition = margin
      }

      doc.setDrawColor(200, 200, 200)
      doc.line(margin, yPosition, pageWidth - margin, yPosition)
      yPosition += 10

      addText("Community Welfare International", margin, yPosition, { fontSize: 12, fontStyle: "bold", align: "center" })
      yPosition += 10
      addText("66 Middlesex Ave Isline NJ 08830 USA", margin, yPosition, { fontSize: 9, align: "center" })
      yPosition += 8
      addText("Email: info@cwinonprofit.org | Website: www.cwinonprofit.org", margin, yPosition, { fontSize: 9, align: "center" })
      yPosition += 15
      addText("This receipt was generated electronically and is valid without signature.", margin, yPosition, {
        fontSize: 7,
        align: "center",
      })

      // Save the PDF
      const fileName = `donation-receipt-${transactionData?.orderID || Date.now()}.pdf`
      doc.save(fileName)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 "
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl max-h-[92vh] overflow-hidden "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2979FF] to-blue-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Receipt className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Donation Receipt</h2>
                  <p className="text-blue-100">Thank you for your generous contribution</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Receipt Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
            <div ref={receiptRef} className="p-8">
              {/* Organization Header */}
              <div className="text-center border-b-2 border-blue-500 pb-6 mb-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">Community Welfare International</div>
                <div className="text-lg text-gray-600 mb-2">Official Donation Receipt</div>
                <div className="text-sm text-gray-500">Tax-Exempt Organization | EIN: XX-XXXXXXX</div>
              </div>

              {/* Receipt Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Transaction Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-blue-600 border-b border-blue-200 pb-2">Transaction Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Receipt Number:</span>
                      <span className="font-mono text-sm">{transactionData?.orderID || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-mono text-sm">{transactionData?.transactionId || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span>{new Date(transactionData?.transactionDate || Date.now()).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span>{new Date(transactionData?.transactionDate || Date.now()).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method:</span>
                      <span>{transactionData?.paymentMethod || "PayPal"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-semibold">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-blue-600 border-b border-blue-200 pb-2">Donor Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span>{transactionData?.payerName || "Anonymous Donor"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="text-sm">{transactionData?.payerEmail || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Donation Type:</span>
                      <span>One-time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donation Details */}
              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-600 mb-4">Donation Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cause:</span>
                    <span className="font-semibold">{selectedReason?.title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Description:</span>
                    <span className="text-sm text-gray-700">{selectedReason?.description}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Impact:</span>
                    <span className="text-sm text-blue-600 font-medium">{selectedReason?.impact}</span>
                  </div>
                  <div className="border-t border-blue-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
                      <span className="text-3xl font-bold text-blue-600">${transactionData?.amount || "0"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Information */}
              <div className="bg-green-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-green-600 mb-4">Tax Information</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Tax Deductible:</strong> This donation is tax-deductible to the full extent allowed by law.
                  </p>
                  <p className="text-gray-700">
                    <strong>No goods or services:</strong> No goods or services were provided in exchange for this
                    contribution.
                  </p>
                  <p className="text-gray-700">
                    <strong>Keep this receipt:</strong> Please retain this receipt for your tax records.
                  </p>
                </div>
              </div>

              {/* Organization Information */}
              <div className="border-t-2 border-gray-200 pt-6 text-center">
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Community Welfare International</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>66 Middlesex Ave Isline NJ 08830 USA</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>info@cwinonprofit.org</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>www.cwinonprofit.org</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  This receipt was generated electronically and is valid without signature.
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleDownloadPDF}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-[#2979FF] to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Receipt PDF
              </motion.button>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const DonationSection = () => {
  const [selectedReason, setSelectedReason] = useState("")
  const [selectedAmount, setSelectedAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [showPayPalButton, setShowPayPalButton] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(null)
  const [showReceipt, setShowReceipt] = useState(false)

  // Refs for scrolling
  const amountSectionRef = useRef(null)
  const donateSectionRef = useRef(null)
  const searchRef = useRef(null)

  const donationReasons = [
    {
      id: "education",
      title: "Education",
      description: "Empower through learning",
      icon: GraduationCap,
      impact: "Fund 5 children's education for a month",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Save lives, restore hope",
      icon: Heart,
      impact: "Provide medical care for 10 families",
    },
    {
      id: "hunger",
      title: "End Hunger",
      description: "Nourish communities",
      icon: Utensils,
      impact: "Feed 50 people for a week",
    },
    {
      id: "shelter",
      title: "Shelter",
      description: "Build safe homes",
      icon: Home,
      impact: "House 3 families safely",
    },
    {
      id: "environment",
      title: "Environment",
      description: "Protect our planet",
      icon: Leaf,
      impact: "Plant 100 trees in communities",
    },
    {
      id: "emergency",
      title: "Emergency Aid",
      description: "Crisis response",
      icon: Shield,
      impact: "Emergency supplies for 20 families",
    },
  ]

  // Additional reasons available only through search
  const additionalReasons = [
    {
      id: "water",
      title: "Clean Water",
      description: "Provide access to safe drinking water",
      impact: "Clean water for 25 families for a year",
    },
    {
      id: "disability",
      title: "Disability Support",
      description: "Support people with disabilities",
      impact: "Accessibility equipment for 8 individuals",
    },
    {
      id: "elderly",
      title: "Elderly Care",
      description: "Care for senior citizens",
      impact: "Monthly care package for 15 seniors",
    },
    {
      id: "mental-health",
      title: "Mental Health",
      description: "Mental health support services",
      impact: "Counseling sessions for 12 people",
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment",
      description: "Empower women through skills and education",
      impact: "Skill training for 20 women",
    },
    {
      id: "animal-welfare",
      title: "Animal Welfare",
      description: "Protect and care for animals",
      impact: "Care for 30 rescued animals",
    },
    {
      id: "refugee-aid",
      title: "Refugee Aid",
      description: "Support displaced people",
      impact: "Essential supplies for 40 refugee families",
    },
    {
      id: "technology-access",
      title: "Technology Access",
      description: "Bridge the digital divide",
      impact: "Digital devices for 10 students",
    },
    {
      id: "arts-culture",
      title: "Arts & Culture",
      description: "Preserve and promote cultural heritage",
      impact: "Art supplies for community programs",
    },
    {
      id: "disaster-relief",
      title: "Disaster Relief",
      description: "Emergency response and recovery",
      impact: "Emergency kits for 35 affected families",
    },
  ]

  // Combine all reasons for search
  const allReasons = [...donationReasons, ...additionalReasons]

  const amountOptions = [25, 50, 100, 250, 500, 1000]

  // Check if device is mobile
  const isMobile = () => {
    return window.innerWidth <= 1024 // lg breakpoint
  }

  // Smooth scroll function
  const scrollToSection = (ref) => {
    if (ref.current && isMobile()) {
      setTimeout(() => {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 300) // Small delay to allow for animation
    }
  }

  const getCurrentAmount = () => {
    return customAmount || selectedAmount
  }

  const getSelectedReason = () => {
    return allReasons.find((r) => r.id === selectedReason)
  }

  // Filter reasons based on search query
  const getFilteredReasons = () => {
    if (!searchQuery.trim()) return []

    return allReasons
      .filter(
        (reason) =>
          reason.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          reason.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .slice(0, 8) // Limit to 8 results
  }

  // Handle search input and dropdown
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowDropdown(value.trim().length > 0)
  }

  const handleSearchSelect = (reason) => {
    setSelectedReason(reason.id)
    setSearchQuery(reason.title)
    setShowDropdown(false)
    scrollToSection(amountSectionRef)
  }

  const handleSearchFocus = () => {
    if (searchQuery.trim()) {
      setShowDropdown(true)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleReasonSelect = (reasonId) => {
    setSelectedReason(reasonId)
    // Auto-scroll to amount section on mobile after selecting reason
    scrollToSection(amountSectionRef)
  }

  // Show PayPal button when both reason and amount are selected
  useEffect(() => {
    setShowPayPalButton(selectedReason && getCurrentAmount())
  }, [selectedReason, selectedAmount, customAmount])

  // PayPal payment handlers
  const handlePayPalSuccess = (paymentData) => {
    console.log("PayPal payment successful:", paymentData)
    setPaymentSuccess(paymentData)
  }

  const handlePayPalError = (error) => {
    console.error("PayPal payment error:", error)
    alert("Payment failed. Please try again.")
  }

  const handlePayPalCancel = (data) => {
    console.log("PayPal payment cancelled:", data)
    // Don't show alert for cancellation as it's user-initiated
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value)
      if (value) {
        setSelectedAmount("")
        // Auto-scroll to donate section on mobile after entering custom amount
        scrollToSection(donateSectionRef)
      }
    }
  }

  const handlePresetAmountChange = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
    // Auto-scroll to donate section on mobile after selecting preset amount
    scrollToSection(donateSectionRef)
  }
  useEffect(() => {
  if (paymentSuccess) {
    // Scroll to top of the page when success modal appears
    window.scrollTo({ top: 400, behavior: "smooth" });

    // Optional: prevent background scrolling if modal is full screen
    // document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // reset when unmounted
    };
  }
}, [paymentSuccess]);

  // Success state
  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center p-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <CheckCircle className="w-14 h-14 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-6 text-lg"
          >
            Your donation of <span className="font-bold text-[#2979FF] text-xl">${getCurrentAmount()}</span> to{" "}
            <span className="font-bold">{getSelectedReason()?.title}</span> has been processed successfully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-[#2979FF]" />
              <p className="font-semibold text-gray-800">Your Impact:</p>
            </div>
            <p className="text-[#2979FF] font-medium text-lg">{getSelectedReason()?.impact}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-gray-500 mb-6"
          >
            Transaction ID: {paymentSuccess.orderID}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="flex-1 bg-gradient-to-r from-[#2979FF] to-blue-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Make Another Donation
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowReceipt(true)}
              className="flex-1 bg-white border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Receipt className="w-5 h-5" />
              View Receipt
            </motion.button>
          </div>

          {/* Receipt Modal */}
          <ReceiptModal
            isOpen={showReceipt}
            onClose={() => setShowReceipt(false)}
            transactionData={paymentSuccess}
            selectedReason={getSelectedReason()}
          />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white ">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Donate</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of changemakers creating lasting impact in communities worldwide. Every donation, no matter
              the size, transforms lives.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Cause Selection */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Cause</h2>
              <p className="text-gray-600 mb-8">Select the area where you'd like to make an impact</p>

              {/* Search Bar */}
              <div className="relative mb-8" ref={searchRef}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={handleSearchFocus}
                    placeholder="Search for more causes (e.g., water, mental health, women empowerment)"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg bg-white focus:border-yellow-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Search Dropdown */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto"
                    >
                      {getFilteredReasons().map((reason) => (
                        <motion.div
                          key={reason.id}
                          whileHover={{ backgroundColor: "#f8fafc" }}
                          onClick={() => handleSearchSelect(reason)}
                          className="p-4 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">{reason.description}</p>
                              <p className="text-xs text-yellow-600 font-medium">
                                ${getCurrentAmount() || "100"}: {reason.impact}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {getFilteredReasons().length === 0 && searchQuery.trim() && (
                        <div className="p-4 text-center text-gray-500">No causes found matching "{searchQuery}"</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {donationReasons.map((reason, index) => {
                  const IconComponent = reason.icon
                  return (
                    <motion.div
                      key={reason.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="group cursor-pointer"
                      onClick={() => handleReasonSelect(reason.id)}
                    >
                      <div
                        className={`
                        p-6 rounded-2xl border-2 transition-all duration-300 h-full
                        ${
                          selectedReason === reason.id
                            ? "border-yellow-500 bg-yellow-500 text-white shadow-lg shadow-yellow-100"
                            : "border-gray-200 bg-white hover:border-yellow-500 hover:shadow-md"
                        }
                      `}
                      >
                        <IconComponent
                          className={`w-10 h-10 mb-4 ${selectedReason === reason.id ? "text-white" : "text-yellow-600"}`}
                        />
                        <h3
                          className={`font-bold text-lg mb-2 ${selectedReason === reason.id ? "text-white" : "text-gray-900"}`}
                        >
                          {reason.title}
                        </h3>
                        <p
                          className={`text-sm mb-3 ${selectedReason === reason.id ? "text-yellow-100" : "text-gray-600"}`}
                        >
                          {reason.description}
                        </p>
                        <p
                          className={`text-xs font-medium ${selectedReason === reason.id ? "text-yellow-200" : "text-yellow-600"}`}
                        >
                          ${getCurrentAmount() || "100"}: {reason.impact}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Amount Selection */}
            <motion.div
              ref={amountSectionRef}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Amount</h2>
              <p className="text-gray-600 mb-8">Select a preset amount or enter your own</p>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                {amountOptions.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePresetAmountChange(amount)}
                    className={`
                      py-4 px-4 rounded-xl font-bold text-lg border-2 transition-all duration-300
                      ${
                        selectedAmount === amount
                          ? "border-yellow-500 bg-yellow-500 text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-yellow-500"
                      }
                    `}
                  >
                    ${amount}
                  </motion.button>
                ))}
              </div>

              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter custom amount"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg bg-white focus:border-yellow-500 focus:outline-none transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Summary & CTA */}
          <div className="lg:col-span-1">
            <motion.div
              ref={donateSectionRef}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="sticky top-15"
            >
              {/* Donation Summary */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Impact</h3>
                    <p className="text-sm text-gray-600">Ready to make a difference</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {selectedReason && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {React.createElement(getSelectedReason().icon, { className: "w-6 h-6 text-yellow-600" })}
                        <span className="font-semibold text-gray-900">{getSelectedReason().title}</span>
                      </div>
                      <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
                        <Target className="w-4 h-4 inline mr-2 text-yellow-600" />
                        {getSelectedReason().impact}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Donation Amount</span>
                    <span className="font-bold text-2xl text-yellow-600">${getCurrentAmount() || "0"}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Processing Fee</span>
                    <span className="text-gray-600">$0</span>
                  </div>
                </div>

                {/* PayPal Button Section */}
                {showPayPalButton && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                    <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">💛</span>
                        </div>
                        <h4 className="font-bold text-yellow-800">Complete your donation</h4>
                      </div>
                      <PayPalButton
                        amount={Number.parseFloat(getCurrentAmount())}
                        selectedReason={getSelectedReason()?.title}
                        onSuccess={handlePayPalSuccess}
                        onError={handlePayPalError}
                        onCancel={handlePayPalCancel}
                      />
                    </div>
                  </motion.div>
                )}

                {!showPayPalButton && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-gray-500 text-sm">
                      {!selectedReason && !getCurrentAmount() && "Select a cause and amount to continue"}
                      {selectedReason && !getCurrentAmount() && "Enter donation amount to continue"}
                      {!selectedReason && getCurrentAmount() && "Select a cause to continue"}
                    </p>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" />
                  Secure payment • Tax-deductible • Instant receipt
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Trusted by thousands</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-lg text-green-700">50K+</div>
                    <div className="text-xs text-green-600">Donors</div>
                  </div>
                  <div>
                    <Globe className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-lg text-green-700">40+</div>
                    <div className="text-xs text-green-600">Countries</div>
                  </div>
                  <div>
                    <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-lg text-green-700">95%</div>
                    <div className="text-xs text-green-600">To Programs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationSection