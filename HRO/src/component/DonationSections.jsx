"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  Heart,
  CreditCard,
  Shield,
  Users,
  Mail,
  Phone,
  User,
  CheckCircle,
  X,
  Download,
  Share2,
  Receipt,
  MapPin,
  Globe,
  Target,
} from "lucide-react"

// Add this import after the existing imports
// Note: jsPDF will be dynamically imported in the function

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
      donor_name: `${transactionData.donorInfo.firstName} ${transactionData.donorInfo.lastName}`,
      donor_email: transactionData.donorInfo.email,
      donor_phone: transactionData.donorInfo.phone || "Not provided",
      transaction_id: transactionData.transactionId || transactionData.orderID,
      order_id: transactionData.orderID,
      payer_id: transactionData.payerID,
      amount: transactionData.amount,
      currency: transactionData.currency || "USD",
      donation_type: transactionData.type,
      payer_name: transactionData.payerName,
      payer_email: transactionData.payerEmail,
      transaction_date: new Date().toLocaleString(),
      payment_status: transactionData.details?.status || "COMPLETED",
      payment_method: transactionData.paymentMethod || "PayPal",
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
    script.src = `https://www.paypal.com/sdk/js?client-id=AbxENDzjASgSG34ZOvjRiQDsLNTRH0aTsZKyaLCnmuwCSbai7AmvnFKE28OH8h7kgE292JGVx_2MqRE5&currency=USD&intent=capture&enable-funding=venmo,paylater,card&locale=en_US`
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

// PayPal Button Component - Updated to handle both PayPal and Credit Card
const PayPalButton = ({
  amount,
  onSuccess,
  onError,
  onCancel,
  frequency = "one-time",
  donorInfo,
  project,
  paymentType = "paypal",
}) => {
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

        // Configure button based on payment type
        const buttonConfig = {
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount.toString(),
                    currency_code: "USD",
                  },
                  description: `Donation to ${project?.title || "Human Relief Organization"}`,
                  custom_id: `${donorInfo.email}_${project?.id || "general"}_${Date.now()}`,
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
                type: frequency,
                amount: amount,
                currency: "USD",
                details: details,
                donorInfo: donorInfo,
                project: project,
                payerEmail: details.payer?.email_address,
                payerName: details.payer?.name
                  ? `${details.payer.name.given_name} ${details.payer.name.surname}`
                  : `${donorInfo.firstName} ${donorInfo.lastName}`,
                transactionId: details.purchase_units[0]?.payments?.captures[0]?.id,
                transactionDate: new Date().toISOString(),
                paymentMethod: paymentType === "card" ? "Credit/Debit Card (via PayPal)" : "PayPal",
              }

              // Send email notification
              setIsProcessingEmail(true)
              const emailResult = await sendTransactionEmail(transactionData)
              setIsProcessingEmail(false)

              if (emailResult.success) {
                console.log("Transaction email sent successfully")
              } else {
                console.error("Failed to send transaction email:", emailResult.error)
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
            color: paymentType === "card" ? "black" : "blue",
            shape: "rect",
            label: paymentType === "card" ? "pay" : "paypal",
            height: 50,
            tagline: false,
          },
        }

        // For card payments, we don't need to set fundingSource
        // PayPal will automatically show appropriate payment options

        window.paypal
          .Buttons(buttonConfig)
          .render(paypalRef.current)
          .catch((err) => {
            console.error("Error rendering PayPal button:", err)
            setButtonError("Unable to load payment button. Please try again.")
          })
      } catch (error) {
        console.error("PayPal button setup error:", error)
        setButtonError("Payment setup failed. Please try again.")
      }
    }
  }, [isLoaded, isRendered, amount, donorInfo, project, onSuccess, onError, onCancel, paymentType])

  // Clear and re-render when amount or payment type changes
  useEffect(() => {
    if (isRendered && paypalRef.current) {
      paypalRef.current.innerHTML = ""
      setIsRendered(false)
    }
  }, [amount, paymentType])

  if (error || buttonError) {
    return (
      <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="text-center">
          <div className="text-red-600 mb-2">⚠️</div>
          <p className="text-red-700 font-medium text-sm">{error || buttonError}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (isLoading || !isLoaded) {
    return (
      <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
          />
          <span className="text-blue-600 font-medium text-sm">
            Loading {paymentType === "card" ? "Card Payment" : "PayPal"}...
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {isProcessingEmail && (
        <div className="mb-3 p-2 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-3 h-3 border-2 border-green-500 border-t-transparent rounded-full"
            />
            <span className="text-green-700 text-xs font-medium">Sending receipt...</span>
          </div>
        </div>
      )}

      <div ref={paypalRef} className="min-h-[50px]" />

      <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-700 text-xs">
          <strong>🔒 Secure:</strong> {paymentType === "card" ? "Card payment" : "PayPal payment"} processed securely.
          Receipt sent to your email.
        </p>
      </div>
    </div>
  )
}

// Receipt Modal Component
const ReceiptModal = ({ isOpen, onClose, transactionData, donorInfo, project, donationType }) => {
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
        ["Name:", `${donorInfo?.firstName || ""} ${donorInfo?.lastName || ""}`],
        ["Email:", donorInfo?.email || ""],
        ["Phone:", donorInfo?.phone || "Not provided"],
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
        ["Project:", project?.title || "General Donation"],
        ["Frequency:", donationType || "One-time"],
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
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 top-16"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl max-h-[89vh] overflow-hidden"
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
            <div ref={receiptRef} className="p-6">
              {/* Organization Header */}
              <div className="text-center border-b-2 border-blue-500 pb-6 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">Human Relief Organization Nepal</div>
                <div className="text-lg text-gray-600 mb-2">Official Donation Receipt</div>
                <div className="text-sm text-gray-500">Tax-Exempt Organization | EIN: XX-XXXXXXX</div>
              </div>

              {/* Receipt Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Transaction Information */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-blue-600 border-b border-blue-200 pb-2">Transaction Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Receipt Number:</span>
                      <span className="font-mono">{transactionData?.orderID || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-mono">{transactionData?.transactionId || "N/A"}</span>
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
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-blue-600 border-b border-blue-200 pb-2">Donor Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span>
                        {donorInfo?.firstName} {donorInfo?.lastName}
                      </span>
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
                  </div>
                </div>
              </div>

              {/* Donation Details */}
              <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                <h3 className="text-lg font-bold text-blue-600 mb-3">Donation Details</h3>
                <div className="space-y-2">
                  {project && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Project:</span>
                      <span className="font-semibold">{project.title}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="capitalize">{donationType}</span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
                      <span className="text-2xl font-bold text-blue-600">${transactionData?.amount || "0"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Information */}
              <div className="bg-green-50 rounded-2xl p-4 mb-6">
                <h3 className="text-lg font-bold text-green-600 mb-3">Tax Information</h3>
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
              <div className="border-t-2 border-gray-200 pt-4 text-center">
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
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={handleDownloadPDF}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-[#2979FF] to-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Receipt PDF
              </motion.button>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
              >
                <X className="w-4 h-4" />
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Success Modal Component
const SuccessModal = ({ isOpen, onClose, transactionData, donorInfo, project, donationType, onShowReceipt }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
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
          className="bg-white rounded-3xl max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-gray-900 mb-2"
            >
              Thank You!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mb-4"
            >
              Your {donationType === "monthly" ? "monthly " : ""}donation of{" "}
              <span className="font-bold text-[#2979FF]">${transactionData?.amount}</span>
              {donationType === "monthly" && <span className="text-gray-500">/month</span>} has been processed
              successfully.
            </motion.p>

            {project && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-blue-50 rounded-lg p-3 mb-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#2979FF]" />
                  <p className="font-semibold text-gray-800 text-sm">Supporting:</p>
                </div>
                <p className="text-[#2979FF] font-medium text-sm">{project.title}</p>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs text-gray-500 mb-4"
            >
              A receipt has been sent to {donorInfo.email}
              {transactionData?.orderID && (
                <span className="block mt-1 text-blue-600 font-medium">Transaction ID: {transactionData.orderID}</span>
              )}
            </motion.p>

            <div className="flex flex-col gap-2">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onShowReceipt}
                className="w-full bg-gradient-to-r from-[#2979FF] to-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                View Receipt
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 px-4 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300"
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function DonationSections({ project }) {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [showPayPalButton, setShowPayPalButton] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [errors, setErrors] = useState({})

  const predefinedAmounts = [25, 50, 100, 250, 500]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handleInputChange = (field, value) => {
    setDonorInfo((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const getCurrentAmount = () => {
    return customAmount ? Number.parseFloat(customAmount) : selectedAmount
  }

  const validateForm = () => {
    const newErrors = {}

    if (!donorInfo.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!donorInfo.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!donorInfo.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
      newErrors.email = "Please enter a valid email"
    }

    const amount = getCurrentAmount()
    if (!amount || amount <= 0) {
      newErrors.amount = "Please enter a valid donation amount"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Show PayPal button when PayPal OR Card is selected
  useEffect(() => {
    setShowPayPalButton(paymentMethod === "paypal" || paymentMethod === "card")
  }, [paymentMethod])

  // PayPal payment handlers
  const handlePayPalSuccess = (paymentData) => {
    console.log("PayPal payment successful:", paymentData)
    setPaymentSuccess(paymentData)
    setIsProcessing(false)
    setShowSuccessModal(true)
  }

  const handlePayPalError = (error) => {
    console.error("PayPal payment error:", error)
    setIsProcessing(false)
    alert("Payment failed. Please try again or choose a different payment method.")
  }

  const handlePayPalCancel = (data) => {
    console.log("PayPal payment cancelled:", data)
    setIsProcessing(false)
  }

  const handleDonateClick = () => {
    if (!validateForm()) {
      return
    }

    if (paymentMethod === "paypal" || paymentMethod === "card") {
      setIsProcessing(true)
      // PayPal button will handle the payment flow
    } else {
      // Handle other payment methods (mock for now)
      setIsProcessing(true)

      // Simulate payment processing
      setTimeout(() => {
        const mockTransactionData = {
          orderID: `ORDER_${Date.now()}`,
          transactionId: `TXN_${Date.now()}`,
          type: donationType,
          amount: getCurrentAmount(),
          currency: "USD",
          donorInfo: donorInfo,
          project: project,
          paymentMethod: paymentMethod === "card" ? "Credit Card" : "Stripe",
          transactionDate: new Date().toISOString(),
        }

        setPaymentSuccess(mockTransactionData)
        setIsProcessing(false)
        setShowSuccessModal(true)
      }, 2000)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden "
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFD700] to-amber-600 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6" />
            <h3 className="text-xl font-bold">Make a Donation</h3>
          </div>
          <p className="text-yellow-100">Your contribution makes a real difference in people's lives</p>
        </div>

        <div className="p-6">
          {/* Donation Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setDonationType("one-time")}
                className={`p-3 rounded-lg border-2 transition-all ${
                  donationType === "one-time"
                    ? "border-[#FFD700] bg-yellow-50 text-[#FFD700]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="font-medium">One-time</div>
                <div className="text-sm text-gray-500">Single donation</div>
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`p-3 rounded-lg border-2 transition-all ${
                  donationType === "monthly"
                    ? "border-[#FFD700] bg-yellow-50 text-[#FFD700]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="font-medium">Monthly</div>
                <div className="text-sm text-gray-500">Recurring</div>
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount</label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                      : "border-gray-200 hover:border-yellow-300"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                  errors.amount ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>

          {/* Donor Information */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Donor Information
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={donorInfo.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2979FF] focus:border-transparent ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={donorInfo.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2979FF] focus:border-transparent ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={donorInfo.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2979FF] focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={donorInfo.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2979FF] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6 ">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2 ">
              <CreditCard className="w-5 h-5" />
              Payment Method
            </h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#2979FF]"
                />
                <CreditCard className="w-5 h-5 text-gray-400" />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#2979FF]"
                />
                <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  P
                </div>
                <span>PayPal</span>
              </label>
              {/* <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  checked={paymentMethod === "stripe"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#2979FF]"
                />
                <div className="w-10 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  Stripe
                </div>
                <span>Stripe</span>
              </label> */}
            </div>
          </div>

          {/* PayPal/Card Payment Button */}
          {showPayPalButton &&
            getCurrentAmount() > 0 &&
            donorInfo.firstName &&
            donorInfo.lastName &&
            donorInfo.email && (
              <div className="mb-6  relative z-0">
                <div
                  className={`rounded-lg p-4 border ${
                    paymentMethod === "card" ? "bg-gray-50 border-gray-200  " : "bg-blue-50 border-blue-100 "
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3  ">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center  ${
                        paymentMethod === "card" ? "bg-gray-500" : "bg-blue-500"
                      }`}
                    >
                      {paymentMethod === "card" ? (
                        <CreditCard className="w-3 h-3 text-white " />
                      ) : (
                        <span className="text-white text-xs">💙</span>
                      )}
                    </div>
                    <h4 className={`font-bold ${paymentMethod === "card" ? "text-gray-800 " : "text-blue-800"}`}>
                      {paymentMethod === "card" ? "Pay with Credit/Debit Card" : "Complete your PayPal donation"}
                    </h4>
                  </div>
                  <PayPalButton
                    amount={getCurrentAmount()}
                    frequency={donationType}
                    donorInfo={donorInfo}
                    project={project}
                    paymentType={paymentMethod}
                    onSuccess={handlePayPalSuccess}
                    onError={handlePayPalError}
                    onCancel={handlePayPalCancel}
                  />
                </div>
              </div>
            )}

          {/* Security Notice */}
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-800">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Secure Donation</span>
            </div>
            <p className="text-sm text-green-700 mt-1">
              Your payment information is encrypted and secure. We never store your card details.
            </p>
          </div>

          {/* Donation Summary */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-2">Donation Summary</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Donation Amount:</span>
                <span className="font-medium">${getCurrentAmount()}</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Fee:</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-[#2979FF]">${getCurrentAmount()}</span>
              </div>
            </div>
          </div>

          {/* Donate Button - Only show if not using PayPal processing or form is incomplete */}
         {!(
           (paymentMethod === "paypal" || paymentMethod === "card") &&
           getCurrentAmount() > 0 &&
           donorInfo.firstName &&
           donorInfo.lastName &&
           donorInfo.email
         ) && (
           <motion.button
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             onClick={handleDonateClick}
             disabled={isProcessing}
             className="w-full bg-yellow-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
           >
             {isProcessing ? (
               <>
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                   className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                 />
                 Processing...
               </>
             ) : (
               <>
                 <Heart className="w-5 h-5" />
                 Donate ${getCurrentAmount()} {donationType === "monthly" ? "/month" : "now"}
               </>
             )}
           </motion.button>
         )}

          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Join thousands of donors supporting this cause
            </p>
            <p className="text-xs text-gray-500">
              Your donation is tax-deductible. You'll receive a receipt via email.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        transactionData={paymentSuccess}
        donorInfo={donorInfo}
        project={project}
        donationType={donationType}
        onShowReceipt={() => {
          setShowSuccessModal(false)
          setShowReceipt(true)
        }}
      />

      {/* Receipt Modal */}
      <ReceiptModal
        isOpen={showReceipt}
        onClose={() => setShowReceipt(false)}
        transactionData={paymentSuccess}
        donorInfo={donorInfo}
        project={project}
        donationType={donationType}
      />
    </>
  )
}
