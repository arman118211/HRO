"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  GraduationCap,
  Heart,
  Home,
  Leaf,
  Shield,
  Utensils,
  DollarSign,
  ArrowRight,
  Users,
  Globe,
  Award,
  Search,
  CreditCard,
  Lock,
  CheckCircle,
  ArrowLeft,
  Mail,
  Phone,
  User,
  Sparkles,
  Target,
  TrendingUp,
  AlertCircle,
  Info,
  X,
  Gift,
  Repeat,
  ChevronDown,
  ChevronUp,
  CreditCardIcon,
  Download,
  MapPin,
  Receipt,
} from "lucide-react"


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
      donor_name: transactionData.donorInfo.name,
      donor_email: transactionData.donorInfo.email,
      donor_phone: transactionData.donorInfo.phone || "Not provided",
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
      anonymous: transactionData.donorInfo.anonymous ? "Yes" : "No",
      dedicated_gift: transactionData.donorInfo.dedicateGift ? "Yes" : "No",
      recipient_name: transactionData.donorInfo.recipientName || "N/A",
      recipient_email: transactionData.donorInfo.recipientEmail || "N/A",
      message: transactionData.donorInfo.message || "No message",
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

// PayPal Integration Hook with better error handling
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
    // Using your client ID with proper parameters for donations
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

// Enhanced PayPal Button Component with EmailJS integration
const PayPalButton = ({ amount, onSuccess, onError, onCancel, frequency = "one-time", donorInfo, selectedReason }) => {
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

        // For simplicity, we'll only implement one-time payments
        // Recurring payments require subscription plans to be set up in PayPal dashboard
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
                    custom_id: `${donorInfo.email}_${selectedReason}_${Date.now()}`,
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
                  donorInfo: donorInfo,
                  selectedReason: selectedReason,
                  payerEmail: details.payer?.email_address,
                  payerName: details.payer?.name
                    ? `${details.payer.name.given_name} ${details.payer.name.surname}`
                    : donorInfo.name,
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
  }, [isLoaded, isRendered, amount, donorInfo, selectedReason, onSuccess, onError, onCancel])

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

      {frequency !== "one-time" && (
        <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-amber-700 text-sm">
            <strong>Note:</strong> Recurring donations require manual setup. This will process as a one-time payment of
            ${amount}.
          </p>
        </div>
      )}

      <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-700 text-sm">
          <strong>📧 Email Notification:</strong> Transaction details will be automatically sent to your registered
          email address upon successful payment.
        </p>
      </div>
    </div>
  )
}

// Receipt Modal Component
const ReceiptModal = ({ isOpen, onClose, transactionData, donorInfo, selectedReason, donationFrequency }) => {
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
      addText("Human Relief Organization Nepal", margin, yPosition, { fontSize: 16, fontStyle: "bold", align: "center" })
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
        ["Name:", donorInfo?.anonymous ? "Anonymous Donor" : donorInfo?.name],
        ["Email:", donorInfo?.email],
        ["Phone:", donorInfo?.phone || "Not provided"],
        ["Anonymous:", donorInfo?.anonymous ? "Yes" : "No"],
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
        ["Frequency:", donationFrequency || "One-time"],
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

      // Dedicated Gift Section (if applicable)
      if (donorInfo?.dedicateGift) {
        yPosition += 5
        doc.setFillColor(250, 245, 255)
        doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F")
        yPosition += 6
        addText("DEDICATED GIFT", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" })
        yPosition += 12

        const dedicatedDetails = [
          ["Recipient:", donorInfo.recipientName],
          ["Recipient Email:", donorInfo.recipientEmail],
        ]

        dedicatedDetails.forEach(([label, value]) => {
          addText(label, margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" })
          addText(value, margin + 80, yPosition, { fontSize: 9 })
          yPosition += 8
        })

        if (donorInfo.message) {
          yPosition += 5
          addText("Message:", margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" })
          yPosition += 8
          yPosition =
            addText(`"${donorInfo.message}"`, margin + 5, yPosition, {
              fontSize: 9,
              maxWidth: pageWidth - 2 * margin - 10,
            }) + 5
        }

        yPosition += 10
      }

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

      addText("Human Relief Organization Nepal", margin, yPosition, { fontSize: 12, fontStyle: "bold", align: "center" })
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
                <div className="text-3xl font-bold text-blue-600 mb-2">Human Relief Organization Nepal</div>
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
                      <span>{donorInfo?.anonymous ? "Anonymous Donor" : donorInfo?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="text-sm">{donorInfo?.email}</span>
                    </div>
                    {donorInfo?.phone && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span>{donorInfo.phone}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Anonymous:</span>
                      <span>{donorInfo?.anonymous ? "Yes" : "No"}</span>
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
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="capitalize">{donationFrequency}</span>
                  </div>
                  <div className="border-t border-blue-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
                      <span className="text-3xl font-bold text-blue-600">${transactionData?.amount || "0"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dedicated Gift Information */}
              {donorInfo?.dedicateGift && (
                <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    Dedicated Gift
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recipient:</span>
                      <span className="font-semibold">{donorInfo.recipientName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recipient Email:</span>
                      <span className="text-sm">{donorInfo.recipientEmail}</span>
                    </div>
                    {donorInfo.message && (
                      <div className="mt-3">
                        <span className="text-gray-600 block mb-1">Message:</span>
                        <div className="bg-white p-3 rounded-lg border border-purple-200">
                          <p className="text-sm italic">"{donorInfo.message}"</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

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
                  <h4 className="font-bold text-gray-800 mb-2">Human Relief Organization Nepal</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>66 Middlesex Ave Isline NJ 08830 USA</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@cwinonprofit.org</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Globe className="w-4 h-4" />
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

const DonationPage = () => {
  // Add this function near the top of the component
  const scrollToMainContent = () => {
    if (mainContentRef.current) {
      const offset = 100 // Offset from top
      const elementPosition = mainContentRef.current.offsetTop - offset
      window.scrollTo({
        top: Math.max(elementPosition, 0),
        behavior: "smooth",
      })
    }
  }

  const [currentStep, setCurrentStep] = useState(1)
  const [selectedReason, setSelectedReason] = useState("")
  const [selectedAmount, setSelectedAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [showDonateCard, setShowDonateCard] = useState(false)
  const [donationFrequency, setDonationFrequency] = useState("one-time")
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    anonymous: false,
    dedicateGift: false,
    recipientName: "",
    recipientEmail: "",
    message: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [showBankingDetails, setShowBankingDetails] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(null)
  const [showPayPalButton, setShowPayPalButton] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)

  // Refs for scrolling
  const amountSectionRef = useRef(null)
  const paymentSectionRef = useRef(null)
  const searchRef = useRef(null)
  const donateCardRef = useRef(null)
  const mainContentRef = useRef(null)
  const formRefs = {
    name: useRef(null),
    email: useRef(null),
  }

  const donationReasons = [
    {
      id: "education",
      title: "Education",
      description: "Empower through learning",
      icon: GraduationCap,
      impact: "Fund 5 children's education for a month",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      raised: 12500,
      goal: 25000,
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Save lives, restore hope",
      icon: Heart,
      impact: "Provide medical care for 10 families",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      raised: 18750,
      goal: 30000,
    },
    {
      id: "hunger",
      title: "End Hunger",
      description: "Nourish communities",
      icon: Utensils,
      impact: "Feed 50 people for a week",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      raised: 8200,
      goal: 15000,
    },
    {
      id: "shelter",
      title: "Shelter",
      description: "Build safe homes",
      icon: Home,
      impact: "House 3 families safely",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      raised: 22000,
      goal: 40000,
    },
    {
      id: "environment",
      title: "Environment",
      description: "Protect our planet",
      icon: Leaf,
      impact: "Plant 100 trees in communities",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      raised: 15800,
      goal: 20000,
    },
    {
      id: "emergency",
      title: "Emergency Aid",
      description: "Crisis response",
      icon: Shield,
      impact: "Emergency supplies for 20 families",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      raised: 35000,
      goal: 50000,
    },
  ]

  const additionalReasons = [
    {
      id: "water",
      title: "Clean Water",
      description: "Provide access to safe drinking water",
      impact: "Clean water for 25 families for a year",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      raised: 9800,
      goal: 18000,
    },
    {
      id: "disability",
      title: "Disability Support",
      description: "Support people with disabilities",
      impact: "Accessibility equipment for 8 individuals",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      raised: 12300,
      goal: 25000,
    },
    {
      id: "elderly",
      title: "Elderly Care",
      description: "Care for senior citizens",
      impact: "Monthly care package for 15 seniors",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      raised: 7500,
      goal: 15000,
    },
    {
      id: "mental-health",
      title: "Mental Health",
      description: "Mental health support services",
      impact: "Counseling sessions for 12 people",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      raised: 11200,
      goal: 20000,
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment",
      description: "Empower women through skills and education",
      impact: "Skill training for 20 women",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      raised: 14500,
      goal: 30000,
    },
    {
      id: "animal-welfare",
      title: "Animal Welfare",
      description: "Protect and care for animals",
      impact: "Care for 30 rescued animals",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      raised: 8900,
      goal: 12000,
    },
  ]

  const allReasons = [...donationReasons, ...additionalReasons]
  const amountOptions = [25, 50, 100, 250, 500, 1000]

  const paymentMethods = [
    {
      id: "paypal",
      name: "PayPal",
      description: "Pay with your PayPal account",
      icon: "💙",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "stripe",
      name: "Credit/Debit Card",
      description: "Visa, Mastercard, American Express (via PayPal)",
      icon: "💳",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "bank-nepal",
      name: "Bank Transfer (Nepal)",
      description: "Direct bank deposit in Nepal",
      icon: "🏦",
      color: "from-green-500 to-green-600",
    },
    {
      id: "bank-usa",
      name: "Bank Transfer (USA)",
      description: "Direct bank deposit in USA",
      icon: "🏛️",
      color: "from-red-500 to-red-600",
    },
    {
      id: "paypal-qr",
      name: "PayPal QR Code",
      description: "Scan QR code to donate via PayPal",
      icon: "📱",
      color: "from-blue-600 to-indigo-600",
    },
  ]

  const frequencyOptions = [
    { id: "one-time", label: "One-time" },
    { id: "monthly", label: "Monthly" },
    { id: "quarterly", label: "Quarterly" },
    { id: "annually", label: "Annually" },
  ]

  const isMobile = () => window.innerWidth <= 1024

  // PayPal payment handlers
  const handlePayPalSuccess = (paymentData) => {
    console.log("PayPal payment successful:", paymentData)
    setPaymentSuccess(paymentData)
    setIsProcessing(false)
    setCurrentStep(4)

    // Clear saved progress after successful donation
    localStorage.removeItem("donationProgress")

    // You can send this data to your backend for record keeping
    // Example: sendPaymentDataToBackend(paymentData)
  }

  const handlePayPalError = (error) => {
    console.error("PayPal payment error:", error)
    setIsProcessing(false)
    alert("Payment failed. Please try again or choose a different payment method.")
  }

  const handlePayPalCancel = (data) => {
    console.log("PayPal payment cancelled:", data)
    setIsProcessing(false)
    // Don't show alert for cancellation as it's user-initiated
  }

  // Show PayPal button when PayPal OR Credit/Debit Card is selected and we're on step 3
  useEffect(() => {
    setShowPayPalButton((paymentMethod === "paypal" || paymentMethod === "stripe") && currentStep === 3)
  }, [paymentMethod, currentStep])

  // Only scroll to specific sections when needed, not on step changes
  const scrollToAmountSection = () => {
    if (amountSectionRef.current) {
      setTimeout(() => {
        amountSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 300)
    }
  }

  const scrollToDonateCard = () => {
    if (donateCardRef.current && showDonateCard) {
      setTimeout(() => {
        donateCardRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }, 500)
    }
  }

  const getCurrentAmount = () => customAmount || selectedAmount
  const getSelectedReason = () => allReasons.find((reason) => reason.id === selectedReason)

  const getFilteredReasons = () => {
    if (!searchQuery.trim()) return []
    return allReasons
      .filter(
        (reason) =>
          reason.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          reason.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .slice(0, 8)
  }

  // Form validation
  useEffect(() => {
    const newErrors = {}

    if (currentStep === 3) {
      if (touched.name && !donorInfo.name.trim()) {
        newErrors.name = "Name is required"
      }

      if (touched.email) {
        if (!donorInfo.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
          newErrors.email = "Please enter a valid email"
        }
      }

      if (touched.phone && donorInfo.phone.trim() && !/^[0-9+\-\s()]{10,15}$/.test(donorInfo.phone)) {
        newErrors.phone = "Please enter a valid phone number"
      }

      if (donorInfo.dedicateGift) {
        if (touched.recipientName && !donorInfo.recipientName.trim()) {
          newErrors.recipientName = "Recipient name is required"
        }

        if (touched.recipientEmail) {
          if (!donorInfo.recipientEmail.trim()) {
            newErrors.recipientEmail = "Recipient email is required"
          } else if (!/\S+@\S+\.\S+/.test(donorInfo.recipientEmail)) {
            newErrors.recipientEmail = "Please enter a valid email"
          }
        }
      }
    }

    setErrors(newErrors)
  }, [donorInfo, touched, currentStep])

  // Show donate card when amount is selected
  useEffect(() => {
    if (getCurrentAmount() && selectedReason) {
      setShowDonateCard(true)
      // Only scroll to donate card if we're on step 1 and on mobile
      if (currentStep === 1) {
        scrollToDonateCard()
      }
    } else {
      setShowDonateCard(false)
    }
  }, [selectedAmount, customAmount, selectedReason, currentStep])

  // Save progress to localStorage
  useEffect(() => {
    const saveProgress = () => {
      const progress = {
        selectedReason,
        selectedAmount,
        customAmount,
        paymentMethod,
        donationFrequency,
        donorInfo,
        currentStep,
      }
      localStorage.setItem("donationProgress", JSON.stringify(progress))
    }

    saveProgress()
  }, [selectedReason, selectedAmount, customAmount, paymentMethod, donationFrequency, donorInfo, currentStep])

  // Load saved progress
  useEffect(() => {
    const loadProgress = () => {
      try {
        const savedProgress = localStorage.getItem("donationProgress")
        if (savedProgress) {
          const progress = JSON.parse(savedProgress)
          setSelectedReason(progress.selectedReason || "")
          setSelectedAmount(progress.selectedAmount || "")
          setCustomAmount(progress.customAmount || "")
          setPaymentMethod(progress.paymentMethod || "")
          setDonationFrequency(progress.donationFrequency || "one-time")
          setDonorInfo(
            progress.donorInfo || {
              name: "",
              email: "",
              phone: "",
              anonymous: false,
              dedicateGift: false,
              recipientName: "",
              recipientEmail: "",
              message: "",
            },
          )
          // Only restore step if we're on step 1 (don't jump ahead)
          if (currentStep === 1 && progress.currentStep > 1) {
            // Don't restore step, just show a notification
          }
        }
      } catch (error) {
        console.error("Error loading saved progress:", error)
      }
    }

    loadProgress()
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Allow Enter key to proceed to next step when on the continue button
      if (e.key === "Enter" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
        if (currentStep < 4) {
          handleNextStep()
        }
      }

      // Allow Escape key to close confirmation modal
      if (e.key === "Escape" && showConfirmation) {
        setShowConfirmation(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentStep, showConfirmation])

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowDropdown(value.trim().length > 0)
  }

  const handleSearchSelect = (reason) => {
    setSelectedReason(reason.id)
    setSearchQuery(reason.title)
    setShowDropdown(false)
    scrollToAmountSection()
  }

  const handleReasonSelect = (reasonId) => {
    setSelectedReason(reasonId)
    scrollToAmountSection()
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value)
      if (value) {
        setSelectedAmount("")
      }
    }
  }

  const handlePresetAmountChange = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleFieldBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleDonorInfoChange = (field, value) => {
    setDonorInfo((prev) => ({ ...prev, [field]: value }))
  }

  const validateStep = () => {
    if (currentStep === 1) {
      if (!selectedReason) {
        alert("Please select a cause")
        return false
      }
      if (!getCurrentAmount()) {
        alert("Please select or enter a donation amount")
        return false
      }
      return true
    }

    if (currentStep === 2) {
      if (!paymentMethod) {
        alert("Please select a payment method")
        return false
      }
      return true
    }

    if (currentStep === 3) {
      // Mark all required fields as touched to trigger validation
      setTouched({
        ...touched,
        name: true,
        email: true,
        recipientName: donorInfo.dedicateGift,
        recipientEmail: donorInfo.dedicateGift,
      })

      // Check if there are any validation errors
      const newErrors = {}

      if (!donorInfo.name.trim()) {
        newErrors.name = "Name is required"
      }

      if (!donorInfo.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
        newErrors.email = "Email is required"
      }

      if (donorInfo.phone.trim() && !/^[0-9+\-\s()]{10,15}$/.test(donorInfo.phone)) {
        newErrors.phone = "Please enter a valid phone number"
      }

      if (donorInfo.dedicateGift) {
        if (!donorInfo.recipientName.trim()) {
          newErrors.recipientName = "Recipient name is required"
        }

        if (!donorInfo.recipientEmail.trim()) {
          newErrors.recipientEmail = "Recipient email is required"
        } else if (!/\S+@\S+\.\S+/.test(donorInfo.recipientEmail)) {
          newErrors.recipientEmail = "Email is required"
        }
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length > 0) {
        // Focus the first field with an error
        const firstErrorField = Object.keys(newErrors)[0]
        if (formRefs[firstErrorField] && formRefs[firstErrorField].current) {
          formRefs[firstErrorField].current.focus()
        }
        return false
      }

      return true
    }

    return true
  }

  const handleNextStep = () => {
    if (!validateStep()) {
      return
    }

    // Store current scroll position relative to the main content
    const mainContentTop = mainContentRef.current?.offsetTop || 0

    if (currentStep === 3) {
      // For PayPal or Credit/Debit Card, don't show confirmation modal, let PayPal handle the flow
      if (paymentMethod === "paypal" || paymentMethod === "stripe") {
        setIsProcessing(true)
        // PayPal button will handle the payment flow
        return
      } else {
        // Show confirmation modal for other payment methods
        setShowConfirmation(true)
      }
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }

    // Restore scroll position to keep the main content visible
    setTimeout(() => {
      const newScrollY = Math.max(mainContentTop - 100, 0) // 100px offset from top
      window.scrollTo({
        top: newScrollY,
        behavior: "smooth",
      })
    }, 100)
  }

  const handlePrevStep = () => {
    // Store current scroll position relative to the main content
    const mainContentTop = mainContentRef.current?.offsetTop || 0

    setCurrentStep((prev) => Math.max(prev - 1, 1))

    // Restore scroll position to keep the main content visible
    setTimeout(() => {
      const newScrollY = Math.max(mainContentTop - 100, 0) // 100px offset from top
      window.scrollTo({
        top: newScrollY,
        behavior: "smooth",
      })
    }, 100)
  }

  const handleSubmit = async () => {
    setIsProcessing(true)
    setShowConfirmation(false)

    // Simulate payment processing for non-PayPal methods
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create mock transaction data for non-PayPal payments
    const mockTransactionData = {
      orderID: `ORDER_${Date.now()}`,
      transactionId: `TXN_${Date.now()}`,
      type: donationFrequency,
      amount: getCurrentAmount(),
      currency: "USD",
      donorInfo: donorInfo,
      selectedReason: getSelectedReason()?.title,
      paymentMethod: paymentMethods.find((m) => m.id === paymentMethod)?.name,
      transactionDate: new Date().toISOString(),
    }

    setPaymentSuccess(mockTransactionData)
    setIsProcessing(false)
    setCurrentStep(4)

    // Clear saved progress after successful donation
    localStorage.removeItem("donationProgress")
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const calculateProgress = (raised, goal) => {
    return Math.min(Math.round((raised / goal) * 100), 100)
  }

  const getRecurringLabel = () => {
    switch (donationFrequency) {
      case "monthly":
        return "per month"
      case "quarterly":
        return "per quarter"
      case "annually":
        return "per year"
      default:
        return ""
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const StepIndicator = () => (
    <div className="sticky top-4 z-20 flex items-center justify-center mb-8 px-4">
      <div className="flex items-center bg-white rounded-full p-2 shadow-lg border border-gray-100 backdrop-blur-sm">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <motion.div
              animate={{
                scale: currentStep >= step ? 1.1 : 1,
                backgroundColor: currentStep >= step ? "#eab308" : "#e5e7eb",
              }}
              transition={{ duration: 0.3 }}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                ${currentStep >= step ? "text-white shadow-lg" : "text-gray-500"}
              `}
            >
              {step === 4 && currentStep >= 4 ? <CheckCircle className="w-5 h-5" /> : step}
            </motion.div>
            {step < 4 && (
              <motion.div
                animate={{
                  backgroundColor: currentStep > step ? "#eab308" : "#e5e7eb",
                }}
                transition={{ duration: 0.3 }}
                className="w-8 sm:w-12 h-1 mx-1 sm:mx-2 rounded-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )

  // Enhanced Donate Card Component
  const DonateCard = () => (
    <AnimatePresence>
      {showDonateCard && (
        <motion.div
          ref={donateCardRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          className="sticky top-4 z-10"
        >
          <div className="bg-gradient-to-br from-white via-yellow-50 to-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-yellow-100 backdrop-blur-sm">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-20"
              />
              <motion.div
                animate={{
                  x: [0, -80, 0],
                  y: [0, 120, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-300 rounded-full opacity-20"
              />
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Your Impact</h3>
                  <p className="text-sm text-gray-600">Ready to make a difference</p>
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                {selectedReason && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="mb-6"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${getSelectedReason()?.color || "from-yellow-500 to-yellow-600"}`}
                      >
                        {React.createElement(getSelectedReason()?.icon || Heart, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{getSelectedReason()?.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{getSelectedReason()?.description}</p>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-yellow-600" />
                          <p className="text-sm font-medium text-yellow-600">{getSelectedReason()?.impact}</p>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-medium text-gray-700">
                              {formatCurrency(getSelectedReason()?.raised)} raised
                            </span>
                            <span className="font-medium text-gray-700">
                              Goal: {formatCurrency(getSelectedReason()?.goal)}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${calculateProgress(getSelectedReason()?.raised, getSelectedReason()?.goal)}%`,
                              }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Donation frequency selector */}
              <div className="mb-6">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {frequencyOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setDonationFrequency(option.id)}
                        className={`
                          py-2 px-3 rounded-lg text-sm font-medium transition-all
                          ${
                            donationFrequency === option.id
                              ? "bg-yellow-500 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div>
                    <span className="text-gray-600 font-medium">Donation Amount</span>
                    {donationFrequency !== "one-time" && (
                      <span className="text-xs text-gray-500 block">{getRecurringLabel()}</span>
                    )}
                  </div>
                  <motion.div
                    key={getCurrentAmount()}
                    initial={{ scale: 1.2, color: "#eab308" }}
                    animate={{ scale: 1, color: "#eab308" }}
                    transition={{ duration: 0.3 }}
                    className="font-bold text-2xl sm:text-3xl flex items-center"
                  >
                    ${getCurrentAmount() || "0"}
                    {donationFrequency !== "one-time" && (
                      <span className="text-sm text-gray-500 ml-1">{getRecurringLabel()}</span>
                    )}
                  </motion.div>
                </motion.div>

                {paymentMethod && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center text-sm p-3 bg-green-50 rounded-xl border border-green-100"
                  >
                    <span className="text-green-700 font-medium">Payment Method</span>
                    <span className="text-green-800 font-semibold">
                      {paymentMethods.find((m) => m.id === paymentMethod)?.name}
                    </span>
                  </motion.div>
                )}

                <div className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="text-gray-600 font-medium">$0</span>
                </div>
              </div>

              {/* PayPal Button Section */}
              {showPayPalButton && getCurrentAmount() && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                  <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">💳</span>
                      </div>
                      <h4 className="font-bold text-yellow-800">
                        {paymentMethod === "paypal" ? "Complete your PayPal donation" : "Complete your card payment"}
                      </h4>
                    </div>
                    <div className="mb-3 p-3 bg-white rounded-lg border border-yellow-200">
                      <p className="text-yellow-700 text-sm">
                        <strong>💡 Payment Options:</strong> You can pay with your PayPal account, credit card, debit
                        card, or other available payment methods.
                      </p>
                    </div>
                    <PayPalButton
                      amount={Number.parseFloat(getCurrentAmount())}
                      frequency={donationFrequency}
                      donorInfo={donorInfo}
                      selectedReason={getSelectedReason()?.title}
                      onSuccess={handlePayPalSuccess}
                      onError={handlePayPalError}
                      onCancel={handlePayPalCancel}
                    />
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                {currentStep > 1 && (
                  <motion.button
                    onClick={handlePrevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-all duration-300"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </motion.button>
                )}

                {/* Only show continue button if not PayPal/Card payment or not on step 3 */}
                {!((paymentMethod === "paypal" || paymentMethod === "stripe") && currentStep === 3) && (
                  <motion.button
                    onClick={currentStep === 3 ? handleNextStep : handleNextStep}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isProcessing}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-4 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 group disabled:opacity-50 relative overflow-hidden"
                  >
                    {/* Button shine effect */}
                    <motion.div
                      animate={{
                        x: [-100, 200],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />

                    {isProcessing ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Processing...
                      </>
                    ) : currentStep === 3 ? (
                      <>
                        <Lock className="w-5 h-5" />
                        Review Donation
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                )}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-2"
              >
                <Lock className="w-3 h-3" />
                Secure payment • Tax-deductible • Instant receipt
              </motion.p>
            </div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
          >
            <div className="flex items-center gap-2 mb-4 justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-gray-900">Trusted by thousands</h4>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-green-700">50K+</div>
                <div className="text-xs text-green-600">Donors</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Globe className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-green-700">40+</div>
                <div className="text-xs text-green-600">Countries</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-green-700">95%</div>
                <div className="text-xs text-green-600">To Programs</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Confirmation Modal
  const ConfirmationModal = () => (
    <AnimatePresence>
      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowConfirmation(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#2979FF]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Confirm Your Donation</h3>
              </div>
              <button onClick={() => setShowConfirmation(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-3">
                  {React.createElement(getSelectedReason()?.icon || Heart, { className: "w-5 h-5 text-[#2979FF]" })}
                  <span className="font-medium text-gray-800">{getSelectedReason()?.title}</span>
                </div>
                <span className="text-[#2979FF] font-semibold">${getCurrentAmount()}</span>
              </div>

              {donationFrequency !== "one-time" && (
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Repeat className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-800">Recurring Donation</span>
                  </div>
                  <span className="text-purple-600 font-semibold">
                    {frequencyOptions.find((f) => f.id === donationFrequency)?.label}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <CreditCardIcon className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-800">Payment Method</span>
                </div>
                <span className="text-green-600 font-semibold">
                  {paymentMethods.find((m) => m.id === paymentMethod)?.name}
                </span>
              </div>

              {donorInfo.dedicateGift && (
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-amber-600" />
                    <span className="font-medium text-gray-800">Dedicated to</span>
                  </div>
                  <span className="text-amber-600 font-semibold">{donorInfo.recipientName}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 py-3 px-6 rounded-xl border-2 border-gray-200 font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Edit Donation
              </button>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#2979FF] to-blue-600 text-white font-medium hover:shadow-lg transition-all duration-300"
              >
                Confirm & Donate
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Banking Details Component
  const BankingDetailsModal = ({ paymentMethod, onClose }) => (
    <AnimatePresence>
      {(paymentMethod === "bank-nepal" || paymentMethod === "bank-usa" || paymentMethod === "paypal-qr") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="bg-white rounded-3xl p-0 max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient background */}
            <div className="relative bg-gradient-to-r from-[#FFD700] via-yellow-500 to-amber-600 p-6 sm:p-8">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-white/15 rounded-full"
                />
                <motion.div
                  animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/15 rounded-full"
                />
              </div>

              <div className="relative flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    {paymentMethod === "bank-nepal" && <span className="text-3xl">🏦</span>}
                    {paymentMethod === "bank-usa" && <span className="text-3xl">🏛️</span>}
                    {paymentMethod === "paypal-qr" && <span className="text-3xl">📱</span>}
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-md"
                    >
                      {paymentMethod === "bank-nepal" && "Nepal Banking Details"}
                      {paymentMethod === "bank-usa" && "USA Banking Details"}
                      {paymentMethod === "paypal-qr" && "PayPal QR Donation"}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-yellow-50 text-sm sm:text-base"
                    >
                      {paymentMethod === "bank-nepal" && "Direct bank transfer to Nepal"}
                      {paymentMethod === "bank-usa" && "Transfer via our USA strategic partner"}
                      {paymentMethod === "paypal-qr" && "Quick donation via QR code"}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={onClose}
                  className="w-10 h-10 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-all duration-300 shadow-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Content area with scroll */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6 sm:p-8">
              {paymentMethod === "bank-nepal" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  {/* Organization Info Card */}
                  <div className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 rounded-3xl p-6 sm:p-8 border border-yellow-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200/30 rounded-full translate-y-12 -translate-x-12" />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">🇳🇵</span>
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-yellow-800 mb-1">
                            Human Relief Organization Nepal
                          </h4>
                          <p className="text-yellow-600 font-medium">Direct Bank Transfer</p>
                        </div>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-yellow-200">
                        <p className="text-yellow-700 leading-relaxed">
                          <strong>📋 Instructions:</strong> You can make a donation directly through depositing donation
                          in our account. Please include your <strong>full name and address</strong> to receive your
                          receipt.
                        </p>
                      </div>

                      {/* Banking Details Grid */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { label: "Account Holder", value: "Human Relief Organization Nepal", icon: "👤" },
                          { label: "Bank Name", value: "Nepal Investment Mega Bank Ltd.", icon: "🏦" },
                          { label: "Branch Name", value: "Krishnanagar", icon: "📍" },
                          { label: "Account Number", value: "03402050250443", icon: "💳", mono: true },
                          { label: "SWIFT Code", value: "NIBLNPKTXXX", icon: "🌐", mono: true },
                          { label: "Bank Address", value: "Krishnanagar, District: Kapilvastu", icon: "📮" },
                        ].map((item, index) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-yellow-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
                            onClick={() => navigator.clipboard?.writeText(item.value)}
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <div className="flex-1 min-w-0">
                                <label className="text-sm font-medium text-yellow-600 block mb-1">{item.label}</label>
                                <p
                                  className={`font-bold text-gray-900 break-all group-hover:text-yellow-700 transition-colors ${item.mono ? "font-mono text-lg" : ""}`}
                                >
                                  {item.value}
                                </p>
                                <p className="text-xs text-yellow-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  Click to copy
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-6 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-4 text-white"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-xl">🇳🇵</span>
                          </div>
                          <div>
                            <p className="font-bold">Country: Nepal</p>
                            <p className="text-yellow-100 text-sm">All transactions in Nepalese Rupees (NPR)</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {paymentMethod === "bank-usa" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  {/* USA Partner Info Card */}
                  <div className="relative bg-gradient-to-br from-red-50 via-blue-50 to-red-100 rounded-3xl p-6 sm:p-8 border border-red-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200/30 rounded-full translate-y-12 -translate-x-12" />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">🇺🇸</span>
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-red-800 mb-1">Strategic Partner in USA</h4>
                          <p className="text-red-600 font-medium">Human Relief Organization Nepal</p>
                        </div>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-red-200">
                        <p className="text-red-700 leading-relaxed">
                          <strong>🤝 Partnership:</strong> Donate through our trusted USA strategic partner. Please
                          include your <strong>full name and address</strong> to receive your receipt.
                        </p>
                      </div>

                      {/* Banking Details Grid */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { label: "Account Holder", value: "Human Relief Organization Nepal", icon: "👥" },
                          { label: "Bank Name", value: "Wells Fargo", icon: "🏛️" },
                          { label: "Account Number", value: "5304058059", icon: "💳", mono: true },
                          { label: "Routing Number", value: "021200025", icon: "🔢", mono: true },
                        ].map((item, index) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-red-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
                            onClick={() => navigator.clipboard?.writeText(item.value)}
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <div className="flex-1 min-w-0">
                                <label className="text-sm font-medium text-red-600 block mb-1">{item.label}</label>
                                <p
                                  className={`font-bold text-gray-900 break-all group-hover:text-red-700 transition-colors ${item.mono ? "font-mono text-lg" : ""}`}
                                >
                                  {item.value}
                                </p>
                                <p className="text-xs text-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  Click to copy
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-6 bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl p-4 text-white"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-xl">🇺🇸</span>
                          </div>
                          <div>
                            <p className="font-bold">United States Banking</p>
                            <p className="text-blue-100 text-sm">All transactions in US Dollars (USD)</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {paymentMethod === "paypal-qr" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  {/* PayPal QR Section */}
                  <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 rounded-3xl p-6 sm:p-8 border border-blue-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/20 rounded-full -translate-y-20 translate-x-20" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200/20 rounded-full translate-y-16 -translate-x-16" />

                    <div className="relative">
                      <div className="text-center mb-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
                          className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                        >
                          <span className="text-4xl">📱</span>
                        </motion.div>
                        <h4 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">PayPal QR Code Donation</h4>
                        <p className="text-blue-600 text-lg">Scan with your phone for instant donation</p>
                      </div>

                      {/* Instructions Card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-200"
                      >
                        <h5 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                          <span className="text-xl">💡</span>
                          How to donate with QR code:
                        </h5>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {[
                            { step: "1", icon: "📱", text: "Open your phone camera or PayPal app" },
                            { step: "2", icon: "📷", text: "Point camera at any QR code below" },
                            { step: "3", icon: "💝", text: "Follow prompts to complete donation" },
                          ].map((item, index) => (
                            <motion.div
                              key={item.step}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className="text-center"
                            >
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="font-bold text-blue-600">{item.step}</span>
                              </div>
                              <span className="text-2xl block mb-2">{item.icon}</span>
                              <p className="text-sm text-blue-700 font-medium">{item.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* QR Codes Grid */}
                      <div className="grid sm:grid-cols-2 gap-8">
                        {[
                          {
                            title: "Primary PayPal QR",
                            subtitle: "Main donation portal",
                            color: "from-blue-500 to-blue-600",
                          },
                          {
                            title: "Alternative PayPal QR",
                            subtitle: "Backup donation option",
                            color: "from-indigo-500 to-purple-600",
                          },
                        ].map((qr, index) => (
                          <motion.div
                            key={qr.title}
                            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ delay: 0.8 + index * 0.2, type: "spring", bounce: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100 text-center group hover:shadow-2xl transition-all duration-500"
                          >
                            <div
                              className={`w-16 h-16 bg-gradient-to-r ${qr.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <span className="text-2xl text-white">💙</span>
                            </div>

                            <h5 className="font-bold text-gray-900 mb-2 text-lg">{qr.title}</h5>
                            <p className="text-blue-600 text-sm mb-6">{qr.subtitle}</p>

                            {/* QR Code Container */}
                            <div className="relative">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", bounce: 0.3 }}
                                className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-4 shadow-inner border-4 border-white group-hover:border-blue-100 transition-all duration-300"
                              >
                                <img
                                  src="https://hro.org.np/wp-content/uploads/2025/02/qrcode.png"
                                  alt={qr.title}
                                  className="w-40 h-40 object-contain rounded-xl"
                                />
                                {/* Scanning animation overlay */}
                                <motion.div
                                  animate={{
                                    y: [-80, 80, -80],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                  }}
                                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/30 to-transparent h-2 opacity-0 group-hover:opacity-100"
                                />
                              </motion.div>

                              {/* Scan indicator */}
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.2 }}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                              >
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  className="w-3 h-3 bg-white rounded-full"
                                />
                              </motion.div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-3">
                              <p className="text-xs text-blue-700 font-medium">📱 Scan with camera or PayPal app</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Security Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white text-center"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Lock className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold">Secure PayPal Transaction</p>
                            <p className="text-green-100 text-sm">Protected by PayPal's security guarantee</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer with action button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-6 sm:p-8 bg-gray-50 border-t border-gray-200"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>All transactions are secure and encrypted</span>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#2979FF] to-blue-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Got it, thanks!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
  useEffect(() => {
  if (currentStep === 4) {
    // Scroll smoothly to 200px from the top when step 4 is shown
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Optional: prevent scroll during modal
    // document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }
}, [currentStep]);

  if (currentStep === 4) {
    
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
            Your {donationFrequency !== "one-time" ? "recurring " : ""}donation of{" "}
            <span className="font-bold text-[#2979FF] text-xl">${getCurrentAmount()}</span>
            {donationFrequency !== "one-time" && <span className="text-gray-500"> {getRecurringLabel()}</span>} to{" "}
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

            {/* Updated progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-gray-700">
                  {formatCurrency(getSelectedReason()?.raised + Number.parseInt(getCurrentAmount() || 0))} raised
                </span>
                <span className="font-medium text-gray-700">Goal: {formatCurrency(getSelectedReason()?.goal)}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: `${calculateProgress(getSelectedReason()?.raised, getSelectedReason()?.goal)}%` }}
                  animate={{
                    width: `${calculateProgress(
                      getSelectedReason()?.raised + Number.parseInt(getCurrentAmount() || 0),
                      getSelectedReason()?.goal,
                    )}%`,
                  }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-green-500 to-green-600"
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-gray-500 mb-6"
          >
            A receipt has been sent to {donorInfo.email}
            {paymentSuccess && paymentSuccess.type === "subscription" && (
              <span className="block mt-1 text-blue-600 font-medium">
                Subscription ID: {paymentSuccess.subscriptionID}
              </span>
            )}
            {paymentSuccess && paymentSuccess.orderID && (
              <span className="block mt-1 text-blue-600 font-medium">Transaction ID: {paymentSuccess.order}</span>
            )}
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
        </motion.div>

        {/* Receipt Modal */}
        <ReceiptModal
          isOpen={showReceipt}
          onClose={() => setShowReceipt(false)}
          transactionData={paymentSuccess}
          donorInfo={donorInfo}
          selectedReason={getSelectedReason()}
          donationFrequency={donationFrequency}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white  mt-10 md:mt-15">
      {/* Confirmation Modal */}
      <ConfirmationModal />

      {/* Banking Details Modal */}
      <BankingDetailsModal
        paymentMethod={showBankingDetails ? paymentMethod : null}
        onClose={() => setShowBankingDetails(false)}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Make a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-500 to-amber-600">
                {" "}
                Difference
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4"
            >
              Join thousands of changemakers creating lasting impact in communities worldwide. Every donation, no matter
              the size, transforms lives.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16" ref={mainContentRef}>
        <StepIndicator />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Add a container with consistent height and positioning */}
              <div className="min-h-[600px] flex flex-col">
                {/* Step 1: Cause Selection */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    <div className="scroll-mt-24">
                      {" "}
                      {/* Add scroll margin for better positioning */}
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Choose Your Cause</h2>
                      <p className="text-gray-600 mb-6 sm:mb-8">Select the area where you'd like to make an impact</p>
                      {/* Search Bar */}
                      <div className="relative mb-6 sm:mb-8" ref={searchRef}>
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                            placeholder="Search for more causes (e.g., water, mental health, women empowerment)"
                            className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl text-base sm:text-lg bg-white focus:border-[#FFD700] focus:outline-none transition-all duration-300"
                          />
                        </div>

                        <AnimatePresence>
                          {showDropdown && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto"
                            >
                              {getFilteredReasons().map((reason) => (
                                <motion.div
                                  key={reason.id}
                                  whileHover={{ backgroundColor: "#fefce8" }}
                                  onClick={() => handleSearchSelect(reason)}
                                  className="p-4 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-yellow-50 transition-colors"
                                >
                                  <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                                  <p className="text-sm text-gray-600 mb-2">{reason.description}</p>
                                  <p className="text-xs text-[#FFD700] font-medium">
                                    ${getCurrentAmount() || "100"}: {reason.impact}
                                  </p>
                                </motion.div>
                              ))}

                              {getFilteredReasons().length === 0 && searchQuery.trim() && (
                                <div className="p-4 text-center text-gray-500">
                                  No causes found matching "{searchQuery}"
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mb-8 sm:mb-12">
                        {donationReasons.map((reason, index) => {
                          const IconComponent = reason.icon
                          const progress = calculateProgress(reason.raised, reason.goal)

                          return (
                            <motion.div
                              key={reason.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + index * 0.1 }}
                              whileHover={{ y: -4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="group cursor-pointer"
                              onClick={() => handleReasonSelect(reason.id)}
                            >
                              <div
                                className={`
                              p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 h-full relative overflow-hidden
                              ${
                                selectedReason === reason.id
                                  ? "border-[#FFD700] bg-gradient-to-br from-[#FFD700] to-amber-600 text-white shadow-2xl shadow-yellow-200"
                                  : "border-gray-200 bg-white hover:border-[#FFD700] hover:shadow-xl"
                              }
                            `}
                              >
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10">
                                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-current" />
                                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-current" />
                                </div>

                                <div className="relative">
                                  <IconComponent
                                    className={`w-10 h-10 sm:w-12 sm:h-12 mb-4 ${selectedReason === reason.id ? "text-white" : "text-[#FFD700]"}`}
                                  />
                                  <h3
                                    className={`font-bold text-lg sm:text-xl mb-2 ${selectedReason === reason.id ? "text-white" : "text-gray-900"}`}
                                  >
                                    {reason.title}
                                  </h3>
                                  <p
                                    className={`text-sm mb-3 ${selectedReason === reason.id ? "text-yellow-100" : "text-gray-600"}`}
                                  >
                                    {reason.description}
                                  </p>
                                  <p
                                    className={`text-xs font-medium ${selectedReason === reason.id ? "text-yellow-200" : "text-[#FFD700]"}`}
                                  >
                                    ${getCurrentAmount() || "100"}: {reason.impact}
                                  </p>

                                  {/* Progress bar */}
                                  <div className="mt-4">
                                    <div className="flex justify-between text-xs mb-1">
                                      <span
                                        className={`font-medium ${selectedReason === reason.id ? "text-yellow-100" : "text-gray-700"}`}
                                      >
                                        {formatCurrency(reason.raised)} raised
                                      </span>
                                      <span
                                        className={`font-medium ${selectedReason === reason.id ? "text-yellow-100" : "text-gray-700"}`}
                                      >
                                        {progress}%
                                      </span>
                                    </div>
                                    <div
                                      className={`h-1.5 rounded-full overflow-hidden ${
                                        selectedReason === reason.id ? "bg-yellow-300/30" : "bg-gray-200"
                                      }`}
                                    >
                                      <div
                                        className={`h-full ${
                                          selectedReason === reason.id
                                            ? "bg-white"
                                            : "bg-gradient-to-r from-[#FFD700] to-amber-600"
                                        }`}
                                        style={{ width: `${progress}%` }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                      {/* Amount Selection */}
                      <motion.div
                        ref={amountSectionRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: selectedReason ? 1 : 0.5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Choose Amount</h3>
                        <p className="text-gray-600 mb-6">Select a preset amount or enter your own</p>

                        {/* Donation frequency selector */}
                        <div className="mb-6">
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {frequencyOptions.map((option) => (
                                <button
                                  key={option.id}
                                  onClick={() => setDonationFrequency(option.id)}
                                  className={`
                                py-2 px-3 rounded-lg text-sm font-medium transition-all
                                ${
                                  donationFrequency === option.id
                                    ? "bg-[#FFD700] text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }
                              `}
                                >
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                          {amountOptions.map((amount) => (
                            <motion.button
                              key={amount}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handlePresetAmountChange(amount)}
                              disabled={!selectedReason}
                              className={`
                            py-3 sm:py-4 px-3 sm:px-4 rounded-xl font-bold text-base sm:text-lg border-2 transition-all duration-300 relative overflow-hidden
                            ${
                              selectedAmount === amount
                                ? "border-[#FFD700] bg-gradient-to-r from-[#FFD700] to-amber-600 text-white shadow-lg"
                                : "border-gray-200 bg-white text-gray-700 hover:border-[#FFD700] disabled:opacity-50 disabled:cursor-not-allowed"
                            }
                          `}
                            >
                              <span className="relative z-10">${amount}</span>
                              {donationFrequency !== "one-time" && (
                                <span className="text-xs block mt-1 opacity-80">{getRecurringLabel()}</span>
                              )}
                              {selectedAmount === amount && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-20"
                                />
                              )}
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
                            disabled={!selectedReason}
                            className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl text-base sm:text-lg bg-white focus:border-[#FFD700] focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          {donationFrequency !== "one-time" && (
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                              {getRecurringLabel()}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Payment Method */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    <div className="scroll-mt-24">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Choose Payment Method</h2>
                      <p className="text-gray-600 mb-6 sm:mb-8">Select how you'd like to make your donation</p>
                      <div className="space-y-4">
                        {paymentMethods.map((method) => (
                          <motion.div
                            key={method.id}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setPaymentMethod(method.id)
                              if (method.id === "bank-nepal" || method.id === "bank-usa" || method.id === "paypal-qr") {
                                setShowBankingDetails(true)
                              }
                            }}
                            className={`
                          p-4 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden
                          ${
                            paymentMethod === method.id
                              ? "border-[#2979FF] bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-[#2979FF] hover:shadow-md"
                          }
                        `}
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`
                              w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl
                              bg-gradient-to-r ${method.color} shadow-lg
                            `}
                              >
                                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1">{method.name}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{method.description}</p>
                              </div>
                              <motion.div
                                animate={{
                                  scale: paymentMethod === method.id ? 1.2 : 1,
                                  backgroundColor: paymentMethod === method.id ? "#2979FF" : "#e5e7eb",
                                }}
                                className={`
                              w-6 h-6 rounded-full border-2 flex items-center justify-center
                              ${paymentMethod === method.id ? "border-[#2979FF]" : "border-gray-300"}
                            `}
                              >
                                {paymentMethod === method.id && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-3 h-3 bg-white rounded-full"
                                  />
                                )}
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <Lock className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-green-800 text-base sm:text-lg">Secure Payment</p>
                            <p className="text-sm text-green-600">Your payment information is encrypted and secure</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Donor Information */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    <div className="scroll-mt-24">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Your Information</h2>
                      <p className="text-gray-600 mb-6 sm:mb-8">We'll send you a receipt and updates on your impact</p>
                      <div className="space-y-4 sm:space-y-6">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            ref={formRefs.name}
                            type="text"
                            value={donorInfo.name}
                            onChange={(e) => handleDonorInfoChange("name", e.target.value)}
                            onBlur={() => handleFieldBlur("name")}
                            placeholder="Full Name *"
                            className={`
                          w-full pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-base sm:text-lg bg-white 
                          focus:outline-none transition-all duration-300
                          ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#2979FF]"}
                        `}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            ref={formRefs.email}
                            type="email"
                            value={donorInfo.email}
                            onChange={(e) => handleDonorInfoChange("email", e.target.value)}
                            onBlur={() => handleFieldBlur("email")}
                            placeholder="Email Address *"
                            className={`
                          w-full pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-base sm:text-lg bg-white 
                          focus:outline-none transition-all duration-300
                          ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#2979FF]"}
                        `}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            value={donorInfo.phone}
                            onChange={(e) => handleDonorInfoChange("phone", e.target.value)}
                            onBlur={() => handleFieldBlur("phone")}
                            placeholder="Phone Number (Optional)"
                            className={`
                          w-full pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-base sm:text-lg bg-white 
                          focus:outline-none transition-all duration-300
                          ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#2979FF]"}
                        `}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="anonymous"
                            checked={donorInfo.anonymous}
                            onChange={(e) => handleDonorInfoChange("anonymous", e.target.checked)}
                            className="w-5 h-5 text-[#2979FF] border-2 border-gray-300 rounded focus:ring-[#2979FF]"
                          />
                          <label htmlFor="anonymous" className="text-gray-700 text-sm sm:text-base">
                            Make this donation anonymous
                          </label>
                        </div>

                        <div className="mt-8">
                          <button
                            onClick={() => handleDonorInfoChange("dedicateGift", !donorInfo.dedicateGift)}
                            className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-xl border border-blue-100 text-left"
                          >
                            <div className="flex items-center gap-3">
                              <Gift className="w-5 h-5 text-[#2979FF]" />
                              <div>
                                <h4 className="font-medium text-gray-900">Dedicate this gift</h4>
                                <p className="text-sm text-gray-600">
                                  Make this donation in honor or memory of someone
                                </p>
                              </div>
                            </div>
                            {donorInfo.dedicateGift ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </button>

                          <AnimatePresence>
                            {donorInfo.dedicateGift && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="p-4 pt-6 space-y-4 border-2 border-t-0 border-blue-100 rounded-b-xl">
                                  <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                      type="text"
                                      value={donorInfo.recipientName}
                                      onChange={(e) => handleDonorInfoChange("recipientName", e.target.value)}
                                      onBlur={() => handleFieldBlur("recipientName")}
                                      placeholder="Recipient Name *"
                                      className={`
                                    w-full pl-12 pr-4 py-3 border-2 rounded-xl text-base bg-white 
                                    focus:outline-none transition-all duration-300
                                    ${errors.recipientName ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#2979FF]"}
                                  `}
                                    />
                                    {errors.recipientName && (
                                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.recipientName}
                                      </p>
                                    )}
                                  </div>

                                  <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                      type="email"
                                      value={donorInfo.recipientEmail}
                                      onChange={(e) => handleDonorInfoChange("recipientEmail", e.target.value)}
                                      onBlur={() => handleFieldBlur("recipientEmail")}
                                      placeholder="Recipient Email *"
                                      className={`
                                    w-full pl-12 pr-4 py-3 border-2 rounded-xl text-base bg-white 
                                    focus:outline-none transition-all duration-300
                                    ${errors.recipientEmail ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#2979FF]"}
                                  `}
                                    />
                                    {errors.recipientEmail && (
                                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.recipientEmail}
                                      </p>
                                    )}
                                  </div>

                                  <div>
                                    <textarea
                                      value={donorInfo.message}
                                      onChange={(e) => handleDonorInfoChange("message", e.target.value)}
                                      placeholder="Add a personal message (optional)"
                                      rows={3}
                                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-base bg-white focus:border-[#2979FF] focus:outline-none transition-all duration-300"
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </AnimatePresence>
          </div>

          {/* Right Column - Enhanced Donate Card */}
          <div className="lg:col-span-1">
            <DonateCard />
          </div>
        </div>
      </div>
      {/* <DonateFinal/> */}
    </div>
  )
}

export default DonationPage
