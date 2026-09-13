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
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Award,
} from "lucide-react"

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: "service_iqusr2n", //[cite: 1]
  templateId: "template_1rdssqk", //[cite: 1]
  publicKey: "F_6wWHN285iK7ADKS", //[cite: 1]
}

emailjs.init(EMAILJS_CONFIG.publicKey) //[cite: 1]

const sendTransactionEmail = async (transactionData) => {
  try {
    const templateParams = {
      to_email: "your-email@example.com", //[cite: 1]
      donor_name: `${transactionData.donorInfo.firstName} ${transactionData.donorInfo.lastName}`, //[cite: 1]
      donor_email: transactionData.donorInfo.email, //[cite: 1]
      donor_phone: transactionData.donorInfo.phone || "Not provided", //[cite: 1]
      transaction_id: transactionData.transactionId || transactionData.orderID, //[cite: 1]
      order_id: transactionData.orderID, //[cite: 1]
      payer_id: transactionData.payerID, //[cite: 1]
      amount: transactionData.amount, //[cite: 1]
      currency: transactionData.currency || "USD", //[cite: 1]
      donation_type: transactionData.type, //[cite: 1]
      payer_name: transactionData.payerName, //[cite: 1]
      payer_email: transactionData.payerEmail, //[cite: 1]
      transaction_date: new Date().toLocaleString(), //[cite: 1]
      payment_status: transactionData.details?.status || "COMPLETED", //[cite: 1]
      payment_method: transactionData.paymentMethod || "PayPal", //[cite: 1]
    }

    const result = await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams) //[cite: 1]
    return { success: true, result } //[cite: 1]
  } catch (error) {
    return { success: false, error } //[cite: 1]
  }
}

// PayPal Integration Hook
const usePayPal = () => {
  const [isLoaded, setIsLoaded] = useState(false) //[cite: 1]
  const [isLoading, setIsLoading] = useState(false) //[cite: 1]
  const [error, setError] = useState(null) //[cite: 1]

  useEffect(() => {
    if (window.paypal) { //[cite: 1]
      setIsLoaded(true) //[cite: 1]
      return
    }

    const script = document.createElement("script") //[cite: 1]
    script.src = `https://www.paypal.com/sdk/js?client-id=AbxENDzjASgSG34ZOvjRiQDsLNTRH0aTsZKyaLCnmuwCSbai7AmvnFKE28OH8h7kgE292JGVx_2MqRE5&currency=USD&intent=capture&enable-funding=venmo,paylater,card&locale=en_US` //[cite: 1]
    script.async = true //[cite: 1]

    script.onload = () => {
      setIsLoaded(true) //[cite: 1]
      setIsLoading(false) //[cite: 1]
      setError(null) //[cite: 1]
    }

    script.onerror = () => {
      setError("Failed to load PayPal. Please try again.") //[cite: 1]
      setIsLoading(false) //[cite: 1]
    }

    setIsLoading(true) //[cite: 1]
    document.body.appendChild(script) //[cite: 1]

    return () => {
      if (document.body.contains(script)) { //[cite: 1]
        document.body.removeChild(script) //[cite: 1]
      }
    }
  }, [])

  return { isLoaded, isLoading, error } //[cite: 1]
}

// PayPal Button Component
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
  const paypalRef = useRef(null) //[cite: 1]
  const { isLoaded, isLoading, error } = usePayPal() //[cite: 1]
  const [isRendered, setIsRendered] = useState(false) //[cite: 1]
  const [buttonError, setButtonError] = useState(null) //[cite: 1]
  const [isProcessingEmail, setIsProcessingEmail] = useState(false) //[cite: 1]

  useEffect(() => {
    if (isLoaded && !isRendered && paypalRef.current && amount && window.paypal) { //[cite: 1]
      try {
        setIsRendered(true) //[cite: 1]
        setButtonError(null) //[cite: 1]

        const buttonConfig = {
          createOrder: (data, actions) => { //[cite: 1]
            return actions.order.create({ //[cite: 1]
              purchase_units: [ //[cite: 1]
                {
                  amount: { //[cite: 1]
                    value: amount.toString(), //[cite: 1]
                    currency_code: "USD", //[cite: 1]
                  },
                  description: `Donation to ${project?.title || "Human Relief Organization"}`, //[cite: 1]
                  custom_id: `${donorInfo.email}_${project?.id || "general"}_${Date.now()}`, //[cite: 1]
                  soft_descriptor: "HRO Donation", //[cite: 1]
                },
              ],
              application_context: { //[cite: 1]
                brand_name: "Human Relief Organization", //[cite: 1]
                locale: "en-US", //[cite: 1]
                landing_page: "BILLING", //[cite: 1]
                shipping_preference: "NO_SHIPPING", //[cite: 1]
                user_action: "PAY_NOW", //[cite: 1]
              },
            })
          },
          onApprove: async (data, actions) => { //[cite: 1]
            try {
              const details = await actions.order.capture() //[cite: 1]
              const transactionData = {
                orderID: data.orderID, //[cite: 1]
                payerID: data.payerID, //[cite: 1]
                type: frequency, //[cite: 1]
                amount: amount, //[cite: 1]
                currency: "USD", //[cite: 1]
                details: details, //[cite: 1]
                donorInfo: donorInfo, //[cite: 1]
                project: project, //[cite: 1]
                payerEmail: details.payer?.email_address, //[cite: 1]
                payerName: details.payer?.name //[cite: 1]
                  ? `${details.payer.name.given_name} ${details.payer.name.surname}` //[cite: 1]
                  : `${donorInfo.firstName} ${donorInfo.lastName}`, //[cite: 1]
                transactionId: details.purchase_units[0]?.payments?.captures[0]?.id, //[cite: 1]
                transactionDate: new Date().toISOString(), //[cite: 1]
                paymentMethod: paymentType === "card" ? "Credit/Debit Card (via PayPal)" : "PayPal", //[cite: 1]
              }

              setIsProcessingEmail(true) //[cite: 1]
              await sendTransactionEmail(transactionData)
              setIsProcessingEmail(false) //[cite: 1]
              onSuccess(transactionData) //[cite: 1]
            } catch (err) {
              setIsProcessingEmail(false) //[cite: 1]
              onError(err) //[cite: 1]
            }
          },
          onError: (err) => { //[cite: 1]
            setButtonError("Payment failed. Please try again.") //[cite: 1]
            onError(err) //[cite: 1]
          },
          onCancel: (data) => { //[cite: 1]
            onCancel(data) //[cite: 1]
          },
          style: { //[cite: 1]
            layout: "vertical", //[cite: 1]
            color: paymentType === "card" ? "black" : "gold",
            shape: "rect", //[cite: 1]
            label: paymentType === "card" ? "pay" : "paypal", //[cite: 1]
            height: 48,
            tagline: false, //[cite: 1]
          },
        }

        window.paypal //[cite: 1]
          .Buttons(buttonConfig)
          .render(paypalRef.current)
          .catch(() => {
            setButtonError("Unable to load payment button. Please try again.") //[cite: 1]
          })
      } catch {
        setButtonError("Payment setup failed. Please try again.") //[cite: 1]
      }
    }
  }, [isLoaded, isRendered, amount, donorInfo, project, onSuccess, onError, onCancel, paymentType]) //[cite: 1]

  useEffect(() => {
    if (isRendered && paypalRef.current) { //[cite: 1]
      paypalRef.current.innerHTML = "" //[cite: 1]
      setIsRendered(false) //[cite: 1]
    }
  }, [amount, paymentType]) //[cite: 1]

  if (error || buttonError) { //[cite: 1]
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center">
        <p className="text-red-700 font-medium text-sm">{error || buttonError}</p>
        <button
          onClick={() => window.location.reload()} //[cite: 1]
          className="mt-2 px-3 py-1 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700 transition" //[cite: 1]
        >
          Retry
        </button>
      </div>
    )
  }

  if (isLoading || !isLoaded) { //[cite: 1]
    return (
      <div className="flex items-center justify-center p-4 bg-amber-50/60 border border-amber-200/60 rounded-xl">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }} //[cite: 1]
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} //[cite: 1]
            className="w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full"
          />
          <span className="text-amber-900 font-medium text-sm">
            Initializing Gateway...
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {isProcessingEmail && (
        <div className="mb-3 p-2 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }} //[cite: 1]
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} //[cite: 1]
            className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full"
          />
          <span className="text-emerald-700 text-xs font-medium">Generating transaction record...</span>
        </div>
      )}
      <div ref={paypalRef} className="min-h-[48px]" />
    </div>
  )
}

// Receipt Modal Component
const ReceiptModal = ({ isOpen, onClose, transactionData, donorInfo, project, donationType }) => {
  const receiptRef = useRef(null) //[cite: 1]

  const handleDownloadPDF = async () => { //[cite: 1]
    try {
      const { jsPDF } = await import("jspdf") //[cite: 1]
      const doc = new jsPDF() //[cite: 1]
      const pageWidth = doc.internal.pageSize.width //[cite: 1]
      const pageHeight = doc.internal.pageSize.height //[cite: 1]
      const margin = 20 //[cite: 1]
      let yPosition = margin //[cite: 1]

      const addText = (text, x, y, options = {}) => { //[cite: 1]
        const { fontSize = 10, fontStyle = "normal", maxWidth = pageWidth - 2 * margin, align = "left" } = options //[cite: 1]
        doc.setFontSize(fontSize) //[cite: 1]
        doc.setFont("helvetica", fontStyle) //[cite: 1]

        if (maxWidth && text.length > 50) { //[cite: 1]
          const lines = doc.splitTextToSize(text, maxWidth) //[cite: 1]
          lines.forEach((line, index) => { //[cite: 1]
            if (align === "center") { //[cite: 1]
              doc.text(line, pageWidth / 2, y + index * fontSize * 0.5, { align: "center" }) //[cite: 1]
            } else {
              doc.text(line, x, y + index * fontSize * 0.5) //[cite: 1]
            }
          })
          return y + lines.length * fontSize * 0.5 //[cite: 1]
        } else {
          if (align === "center") { //[cite: 1]
            doc.text(text, pageWidth / 2, y, { align: "center" }) //[cite: 1]
          } else {
            doc.text(text, x, y) //[cite: 1]
          }
          return y //[cite: 1]
        }
      }

      doc.setFillColor(217, 160, 35)
      doc.rect(0, 0, pageWidth, 40, "F") //[cite: 1]
      doc.setTextColor(255, 255, 255) //[cite: 1]
      yPosition = 15 //[cite: 1]
      addText("Human Relief Organization Nepal", margin, yPosition, { fontSize: 16, fontStyle: "bold", align: "center" }) //[cite: 1]
      yPosition += 8 //[cite: 1]
      addText("Official Donation Receipt", margin, yPosition, { fontSize: 12, align: "center" }) //[cite: 1]
      yPosition += 8 //[cite: 1]
      addText("Tax-Exempt Organization | EIN: XX-XXXXXXX", margin, yPosition, { fontSize: 8, align: "center" }) //[cite: 1]

      doc.setTextColor(0, 0, 0) //[cite: 1]
      yPosition = 60 //[cite: 1]

      doc.setFillColor(254, 251, 235)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F") //[cite: 1]
      yPosition += 6 //[cite: 1]
      addText("TRANSACTION DETAILS", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" }) //[cite: 1]
      yPosition += 12 //[cite: 1]

      const transactionDetails = [
        ["Receipt Number:", transactionData?.orderID || "N/A"], //[cite: 1]
        ["Transaction ID:", transactionData?.transactionId || "N/A"], //[cite: 1]
        ["Date:", new Date(transactionData?.transactionDate || Date.now()).toLocaleDateString()], //[cite: 1]
        ["Time:", new Date(transactionData?.transactionDate || Date.now()).toLocaleTimeString()], //[cite: 1]
        ["Payment Method:", transactionData?.paymentMethod || "PayPal"], //[cite: 1]
        ["Status:", "Completed"], //[cite: 1]
      ]

      transactionDetails.forEach(([label, value]) => { //[cite: 1]
        addText(label, margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" }) //[cite: 1]
        addText(value, margin + 80, yPosition, { fontSize: 9 }) //[cite: 1]
        yPosition += 8 //[cite: 1]
      })

      yPosition += 10 //[cite: 1]

      doc.setFillColor(254, 251, 235)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F") //[cite: 1]
      yPosition += 6 //[cite: 1]
      addText("DONOR INFORMATION", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" }) //[cite: 1]
      yPosition += 12 //[cite: 1]

      const donorDetails = [
        ["Name:", `${donorInfo?.firstName || ""} ${donorInfo?.lastName || ""}`], //[cite: 1]
        ["Email:", donorInfo?.email || ""], //[cite: 1]
        ["Phone:", donorInfo?.phone || "Not provided"], //[cite: 1]
      ]

      donorDetails.forEach(([label, value]) => { //[cite: 1]
        addText(label, margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" }) //[cite: 1]
        addText(value, margin + 80, yPosition, { fontSize: 9 }) //[cite: 1]
        yPosition += 8 //[cite: 1]
      })

      yPosition += 10 //[cite: 1]

      doc.setFillColor(254, 251, 235)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F") //[cite: 1]
      yPosition += 6 //[cite: 1]
      addText("DONATION DETAILS", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" }) //[cite: 1]
      yPosition += 12 //[cite: 1]

      const donationDetails = [
        ["Project:", project?.title || "General Donation"], //[cite: 1]
        ["Frequency:", donationType || "One-time"], //[cite: 1]
      ]

      donationDetails.forEach(([label, value]) => { //[cite: 1]
        addText(label, margin + 5, yPosition, { fontSize: 9, fontStyle: "bold" }) //[cite: 1]
        const textY = addText(value, margin + 80, yPosition, { fontSize: 9, maxWidth: pageWidth - margin - 85 }) //[cite: 1]
        yPosition = Math.max(yPosition + 8, textY + 5) //[cite: 1]
      })

      yPosition += 10 //[cite: 1]

      doc.setFillColor(217, 160, 35)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 20, "F") //[cite: 1]
      doc.setTextColor(255, 255, 255) //[cite: 1]
      yPosition += 8 //[cite: 1]
      addText("TOTAL DONATION AMOUNT", margin + 5, yPosition, { fontSize: 10, fontStyle: "bold" }) //[cite: 1]
      yPosition += 8 //[cite: 1]
      addText(`$${transactionData?.amount || "0"}`, margin + 5, yPosition, { fontSize: 16, fontStyle: "bold" }) //[cite: 1]

      doc.setTextColor(0, 0, 0) //[cite: 1]
      yPosition += 20 //[cite: 1]

      doc.setFillColor(250, 248, 240)
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F") //[cite: 1]
      yPosition += 6 //[cite: 1]
      addText("TAX INFORMATION", margin + 2, yPosition, { fontSize: 12, fontStyle: "bold" }) //[cite: 1]
      yPosition += 12 //[cite: 1]

      const taxInfo = [
        "Tax Deductible: This donation is tax-deductible to the full extent allowed by law.", //[cite: 1]
        "No goods or services: No goods or services were provided in exchange for this contribution.", //[cite: 1]
        "Keep this receipt: Please retain this receipt for your tax records.", //[cite: 1]
      ]

      taxInfo.forEach((info) => { //[cite: 1]
        yPosition = addText(info, margin + 5, yPosition, { fontSize: 8, maxWidth: pageWidth - 2 * margin - 10 }) + 8 //[cite: 1]
      })

      yPosition += 10 //[cite: 1]

      if (yPosition > pageHeight - 60) { //[cite: 1]
        doc.addPage() //[cite: 1]
        yPosition = margin //[cite: 1]
      }

      doc.setDrawColor(230, 220, 190)
      doc.line(margin, yPosition, pageWidth - margin, yPosition) //[cite: 1]
      yPosition += 10 //[cite: 1]

      addText("Human Relief Organization Nepal", margin, yPosition, { fontSize: 12, fontStyle: "bold", align: "center" }) //[cite: 1]
      yPosition += 10 //[cite: 1]
      addText("66 Middlesex Ave Isline NJ 08830 USA", margin, yPosition, { fontSize: 9, align: "center" }) //[cite: 1]
      yPosition += 8 //[cite: 1]
      addText("Email: info@cwinonprofit.org | Website: www.cwinonprofit.org", margin, yPosition, { fontSize: 9, align: "center" }) //[cite: 1]
      yPosition += 15 //[cite: 1]
      addText("This receipt was generated electronically and is valid without signature.", margin, yPosition, { //[cite: 1]
        fontSize: 7, //[cite: 1]
        align: "center", //[cite: 1]
      })

      const fileName = `donation-receipt-${transactionData?.orderID || Date.now()}.pdf` //[cite: 1]
      doc.save(fileName) //[cite: 1]
    } catch {
      alert("Error generating PDF. Please try again.") //[cite: 1]
    }
  }

  if (!isOpen) return null //[cite: 1]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} //[cite: 1]
        animate={{ opacity: 1 }} //[cite: 1]
        exit={{ opacity: 0 }} //[cite: 1]
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose} //[cite: 1]
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-amber-100"
          onClick={(e) => e.stopPropagation()} //[cite: 1]
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 p-5 text-white flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Receipt className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Donation Receipt</h2>
                <p className="text-amber-100 text-xs">Thank you for your generous contribution</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 space-y-6">
            <div ref={receiptRef} className="border border-amber-200/60 rounded-2xl p-5 bg-[#FAF7F0] space-y-5">
              <div className="text-center pb-4 border-b border-amber-200/80">
                <h3 className="text-lg font-bold text-stone-800">Human Relief Organization Nepal</h3>
                <p className="text-xs text-stone-500">Official Donation Receipt | Tax-Exempt Status</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-stone-500 block">Receipt ID</span>
                  <span className="font-mono font-medium text-stone-800">{transactionData?.orderID || "N/A"}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Payment Date</span>
                  <span className="text-stone-800 font-medium">
                    {new Date(transactionData?.transactionDate || Date.now()).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block">Donor Name</span>
                  <span className="text-stone-800 font-medium">
                    {donorInfo?.firstName} {donorInfo?.lastName}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block">Payment Method</span>
                  <span className="text-stone-800 font-medium">{transactionData?.paymentMethod || "PayPal"}</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200 flex justify-between items-center shadow-sm">
                <div>
                  <span className="text-xs text-stone-500 block">Contribution To</span>
                  <span className="font-medium text-stone-800 text-sm">{project?.title || "General Fund"}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-500 block">Total Given</span>
                  <span className="text-xl font-bold text-amber-700">${transactionData?.amount}</span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500 leading-relaxed text-center">
                This donation is tax-deductible to the full extent allowed by law. No goods or services were provided in exchange for this contribution.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF7F0] border-t border-amber-200/60 flex gap-3">
            <button
              onClick={handleDownloadPDF}
              className="flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-amber-200/80 bg-white hover:bg-amber-50/50 text-stone-700 rounded-xl text-sm font-medium transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Success Modal Component
const SuccessModal = ({ isOpen, onClose, transactionData, donorInfo, project, donationType, onShowReceipt }) => {
  if (!isOpen) return null //[cite: 1]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} //[cite: 1]
        animate={{ opacity: 1 }} //[cite: 1]
        exit={{ opacity: 0 }} //[cite: 1]
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose} //[cite: 1]
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-3xl max-w-md w-full p-6 text-center shadow-2xl border border-amber-100"
          onClick={(e) => e.stopPropagation()} //[cite: 1]
        >
          <div className="w-16 h-16 bg-amber-50 text-amber-600 border border-amber-200/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-stone-900 mb-1">Thank You!</h3>
          <p className="text-stone-600 text-sm mb-6">
            Your {donationType === "monthly" ? "monthly pledge" : "donation"} of{" "}
            <span className="font-bold text-amber-800">${transactionData?.amount}</span> has been processed successfully.
          </p>

          {project && (
            <div className="bg-amber-50/60 border border-amber-200/70 rounded-xl p-3.5 mb-6 text-left">
              <span className="text-xs text-amber-800 font-semibold block">Designated Initiative</span>
              <p className="font-semibold text-stone-800 text-sm truncate">{project.title}</p>
            </div>
          )}

          <div className="space-y-2">
            <button
              onClick={onShowReceipt}
              className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition"
            >
              <Share2 className="w-4 h-4" /> View Detailed Receipt
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-stone-600 hover:bg-stone-50 rounded-xl font-medium text-sm transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function FundDonationSection({ project }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedAmount, setSelectedAmount] = useState(50) //[cite: 1]
  const [customAmount, setCustomAmount] = useState("") //[cite: 1]
  const [donationType, setDonationType] = useState("one-time") //[cite: 1]
  const [donorInfo, setDonorInfo] = useState({ //[cite: 1]
    firstName: "", //[cite: 1]
    lastName: "", //[cite: 1]
    email: "", //[cite: 1]
    phone: "", //[cite: 1]
  })
  const [paymentMethod, setPaymentMethod] = useState("card") //[cite: 1]
  const [paymentSuccess, setPaymentSuccess] = useState(null) //[cite: 1]
  const [showSuccessModal, setShowSuccessModal] = useState(false) //[cite: 1]
  const [showReceipt, setShowReceipt] = useState(false) //[cite: 1]
  const [errors, setErrors] = useState({}) //[cite: 1]

  const predefinedAmounts = [25, 50, 100, 250, 500] //[cite: 1]

  const getCurrentAmount = () => {
    return customAmount ? Number.parseFloat(customAmount) : selectedAmount //[cite: 1]
  }

  const validateStep1 = () => {
    const amount = getCurrentAmount()
    if (!amount || amount <= 0 || isNaN(amount)) {
      setErrors({ amount: "Please select or enter a valid donation amount" })
      return false
    }
    setErrors({})
    return true
  }

  const validateStep2 = () => {
    const stepErrors = {}
    if (!donorInfo.firstName.trim()) stepErrors.firstName = "First name is required" //[cite: 1]
    if (!donorInfo.lastName.trim()) stepErrors.lastName = "Last name is required" //[cite: 1]
    if (!donorInfo.email.trim()) {
      stepErrors.email = "Email is required" //[cite: 1]
    } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) { //[cite: 1]
      stepErrors.email = "Please enter a valid email address"
    }

    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3)
    }
  }

  const handleBack = () => {
    setErrors({})
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#FCFBF7] via-[#F9F5EC] to-[#F3ECD8] min-h-screen flex items-center justify-center font-sans text-stone-800">
      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Light Golden Warm Tone Info Section */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EA] to-[#F5ECD7] rounded-3xl p-8 lg:p-10 text-stone-800 flex flex-col justify-between shadow-xl shadow-amber-900/5 border border-amber-200/80 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Direct Impact
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight text-stone-900">
              Empower Lives with Every Giving Pledge
            </h2>

            <p className="text-stone-600 text-sm lg:text-base leading-relaxed mb-8">
              Your generosity directly funds urgent humanitarian assistance, health relief, and sustainable community empowerment programs.
            </p>

            {project && (
              <div className="p-4 rounded-2xl bg-white/90 border border-amber-200/80 backdrop-blur-sm mb-6 shadow-sm">
                <span className="text-xs uppercase text-amber-700 font-bold tracking-wider block mb-1">
                  Active Campaign
                </span>
                <h4 className="font-semibold text-stone-900 text-base">{project.title}</h4>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center gap-3.5 text-stone-700 text-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/60 flex items-center justify-center text-amber-800 shadow-sm shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-medium">100% Encrypted & Safe Payments</span>
              </div>
              <div className="flex items-center gap-3.5 text-stone-700 text-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/60 flex items-center justify-center text-amber-800 shadow-sm shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-medium">Tax Deductible Non-Profit Status</span>
              </div>
              <div className="flex items-center gap-3.5 text-stone-700 text-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/60 flex items-center justify-center text-amber-800 shadow-sm shrink-0">
                  <Receipt className="w-4 h-4" />
                </div>
                <span className="font-medium">Instant Official PDF Tax Invoices</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-amber-200/80 mt-8 relative z-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-amber-200 text-amber-900 flex items-center justify-center text-[10px] font-bold shadow-sm"
                >
                  +{i}k
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-600 font-medium">Over 10,000+ supporters have joined our mission this year.</p>
          </div>
        </div>

        {/* Right Column: Clean Light Stepped Interaction */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-amber-900/5 border border-amber-100 flex flex-col justify-between">
          <div>
            {/* Step Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between relative mb-2 ">
                <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-amber-100 -translate-y-1/2 z-0 " />
                <div
                  className="absolute top-1/3 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 -translate-y-1/2 transition-all duration-500 z-0"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                />

                {[
                  { step: 1, label: "Amount" },
                  { step: 2, label: "Your Info" },
                  { step: 3, label: "Payment" },
                ].map((s) => (
                  <div key={s.step} className="relative z-10 flex flex-col items-center ">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                        currentStep >= s.step
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/25"
                          : "bg-amber-50 text-stone-400 border border-amber-200/50"
                      }`}
                    >
                      {currentStep > s.step ? "✓" : s.step}
                    </div>
                    <span
                      className={`text-[11px] font-medium mt-1 transition-colors duration-200  ${
                        currentStep >= s.step ? "text-amber-950 font-semibold" : "text-stone-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps Container */}
            <AnimatePresence mode="wait">
              {/* STEP 1: AMOUNT SELECTION */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Select Donation Amount</h3>
                    <p className="text-xs text-stone-500 mt-1">Choose how often and how much you would like to give.</p>
                  </div>

                  {/* Frequency Toggle */}
                  <div className="grid grid-cols-2 p-1.5 bg-[#FAF6EE] rounded-2xl border border-amber-200/70">
                    <button
                      type="button"
                      onClick={() => setDonationType("one-time")} //[cite: 1]
                      className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                        donationType === "one-time" //[cite: 1]
                          ? "bg-white text-amber-900 shadow-sm border border-amber-200/70"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      One-time Gift
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType("monthly")} //[cite: 1]
                      className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                        donationType === "monthly" //[cite: 1]
                          ? "bg-white text-amber-900 shadow-sm border border-amber-200/70"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      Monthly Recurring
                    </button>
                  </div>

                  {/* Predefined Amounts */}
                  <div className="grid grid-cols-3 gap-3">
                    {predefinedAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt) //[cite: 1]
                          setCustomAmount("") //[cite: 1]
                          setErrors({})
                        }}
                        className={`py-3.5 rounded-xl border text-sm font-semibold transition-all ${
                          selectedAmount === amt && !customAmount
                            ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm"
                            : "border-stone-200 hover:border-amber-300 text-stone-700 bg-white"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider block mb-1.5">
                      Or Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-700 font-medium">$</span>
                      <input
                        type="number"
                        placeholder="Custom value"
                        value={customAmount} //[cite: 1]
                        onChange={(e) => {
                          setCustomAmount(e.target.value) //[cite: 1]
                          setSelectedAmount(null) //[cite: 1]
                          setErrors({})
                        }}
                        className={`w-full pl-8 pr-4 py-3 bg-white border rounded-xl text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none transition ${
                          errors.amount ? "border-red-500" : "border-stone-200" //[cite: 1]
                        }`}
                      />
                    </div>
                    {errors.amount && <p className="text-xs text-red-500 mt-1">{errors.amount}</p>}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DONOR INFORMATION */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Donor Information</h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Please enter your contact information to receive your official tax receipt.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="text-xs font-semibold text-stone-600 block mb-1">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        value={donorInfo.firstName} //[cite: 1]
                        onChange={(e) => setDonorInfo({ ...donorInfo, firstName: e.target.value })} //[cite: 1]
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none ${
                          errors.firstName ? "border-red-500" : "border-stone-200" //[cite: 1]
                        }`}
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-0.5">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-600 block mb-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={donorInfo.lastName} //[cite: 1]
                        onChange={(e) => setDonorInfo({ ...donorInfo, lastName: e.target.value })} //[cite: 1]
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none ${
                          errors.lastName ? "border-red-500" : "border-stone-200" //[cite: 1]
                        }`}
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-0.5">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={donorInfo.email} //[cite: 1]
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })} //[cite: 1]
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none ${
                        errors.email ? "border-red-500" : "border-stone-200" //[cite: 1]
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={donorInfo.phone} //[cite: 1]
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })} //[cite: 1]
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 3: PAYMENT GATEWAY */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Select Gateway</h3>
                    <p className="text-xs text-stone-500 mt-1">Complete your donation securely via PayPal or Credit Card.</p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 bg-[#FAF7F0] border border-amber-200/80 rounded-2xl flex justify-between items-center text-sm">
                    <div>
                      <span className="text-xs text-stone-500 block">Total Contribution ({donationType})</span>
                      <span className="font-bold text-amber-800 text-lg">${getCurrentAmount()} USD</span>
                    </div>
                    <div className="text-right text-xs text-stone-500">
                      <span>Donor: </span>
                      <span className="font-medium text-stone-800">{donorInfo.firstName} {donorInfo.lastName}</span>
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 border rounded-xl flex items-center gap-3 cursor-pointer transition ${
                        paymentMethod === "card"
                          ? "border-amber-500 bg-amber-50/70"
                          : "border-stone-200 hover:border-amber-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="hidden"
                      />
                      <CreditCard className={`w-5 h-5 ${paymentMethod === "card" ? "text-amber-700" : "text-stone-400"}`} />
                      <span className="text-xs font-semibold text-stone-800">Debit / Card</span>
                    </label>

                    <label
                      className={`p-3.5 border rounded-xl flex items-center gap-3 cursor-pointer transition ${
                        paymentMethod === "paypal"
                          ? "border-amber-500 bg-amber-50/70"
                          : "border-stone-200 hover:border-amber-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                        className="hidden"
                      />
                      <div className="w-5 h-5 bg-gradient-to-tr from-amber-500 to-amber-600 rounded text-white text-[11px] font-bold flex items-center justify-center">
                        P
                      </div>
                      <span className="text-xs font-semibold text-stone-800">PayPal</span>
                    </label>
                  </div>

                  {/* PayPal Mount */}
                  <div className="pt-2">
                    <PayPalButton
                      amount={getCurrentAmount()}
                      frequency={donationType}
                      donorInfo={donorInfo}
                      project={project}
                      paymentType={paymentMethod}
                      onSuccess={(data) => {
                        setPaymentSuccess(data)
                        setShowSuccessModal(true)
                      }}
                      onError={() => {
                        alert("Payment could not be processed. Please try again.")
                      }}
                      onCancel={() => {}}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-amber-100 flex items-center justify-between gap-4 mt-8">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition"
              >
                Continue <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
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

      <ReceiptModal
        isOpen={showReceipt}
        onClose={() => setShowReceipt(false)}
        transactionData={paymentSuccess}
        donorInfo={donorInfo}
        project={project}
        donationType={donationType}
      />
    </section>
  )
}