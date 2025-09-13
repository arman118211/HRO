// src/components/DonationPage.jsx

"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import jsPDF from "jspdf"
import "jspdf-autotable"
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
  MessageSquare,
  Banknote,
  QrCode,
  Wallet,
} from "lucide-react"

// Ensure EmailJS is initialized on the client side
const EMAILJS_CONFIG = {
  serviceId: "service_j5smok4",
  templateId: "template_8mqpxmi",
  publicKey: "wlRazedBdxGXG1R42",
}

if (typeof window !== "undefined") {
  emailjs.init(EMAILJS_CONFIG.publicKey)
}

const DonationPage1 = () => {
  const [step, setStep] = useState(1)
  const [selectedCause, setSelectedCause] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [donationAmount, setDonationAmount] = useState(500)
  const [isRecurring, setIsRecurring] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    recipientEmail: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [emailStatus, setEmailStatus] = useState(null)
  const [showAllCauses, setShowAllCauses] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [showPaymentDetails, setShowPaymentDetails] = useState(false)

  const initialCauses = [
    { id: 1, name: "Children Education", icon: GraduationCap },
    { id: 2, name: "Disaster Relief", icon: Home },
    { id: 3, name: "Healthcare Access", icon: Heart },
    { id: 4, name: "Environmental Conservation", icon: Leaf },
    { id: 5, name: "Food Security", icon: Utensils },
    { id: 6, name: "Community Development", icon: Users },
  ]

  const additionalCauses = [
    { id: 7, name: "Animal Welfare", icon: Shield },
    { id: 8, name: "Global Initiatives", icon: Globe },
    { id: 9, name: "Arts & Culture", icon: Award },
    { id: 10, name: "Veteran Support", icon: Target },
    { id: 11, name: "Youth Empowerment", icon: Sparkles },
    { id: 12, name: "Research & Innovation", icon: TrendingUp },
  ]

  const causes = showAllCauses
    ? [...initialCauses, ...additionalCauses]
    : initialCauses

  const amounts = [100, 500, 1000, 2500, 5000]

  const filteredCauses = causes.filter((cause) =>
    cause.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleNext = () => setStep((prev) => prev + 1)
  const handleBack = () => {
    if (showPaymentDetails) {
      setShowPaymentDetails(false)
      setPaymentMethod(null)
    } else {
      setStep((prev) => prev - 1)
    }
  }

  const handleDonorInfoChange = (field, value) => {
    setDonorInfo((prev) => ({ ...prev, [field]: value }))
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateAndProceed = () => {
    const newErrors = {}
    if (!donorInfo.name.trim()) {
      newErrors.name = "Full Name is required."
    }
    if (!validateEmail(donorInfo.email)) {
      newErrors.email = "Please enter a valid email."
    }
    if (
      donorInfo.recipientEmail &&
      !validateEmail(donorInfo.recipientEmail)
    ) {
      newErrors.recipientEmail = "Please enter a valid recipient email."
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      handleNext()
    }
  }

  const sendEmail = async (transactionId) => {
    const templateParams = {
      from_name: donorInfo.name,
      from_email: donorInfo.email,
      to_email: donorInfo.recipientEmail || donorInfo.email,
      donation_cause: selectedCause.name,
      donation_amount: donationAmount,
      is_recurring: isRecurring ? "Yes" : "No",
      message: donorInfo.message,
      transaction_id: transactionId,
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )
      console.log("Email sent successfully!")
    } catch (error) {
      console.error("Failed to send email:", error)
    }
  }

  const generateAndDownloadPDF = (transactionId) => {
    const doc = new jsPDF()

    doc.setFontSize(22)
    doc.setTextColor("#FFC107")
    doc.text("Donation Receipt", 14, 20)

    doc.setFontSize(12)
    doc.setTextColor("#333333")
    doc.text(`Transaction ID: ${transactionId}`, 14, 30)

    const tableData = [
      ["Cause", selectedCause?.name],
      ["Amount", `₹${donationAmount}`],
      ["Donation Type", isRecurring ? "Monthly" : "One-time"],
      ["Donor Name", donorInfo.name],
      ["Donor Email", donorInfo.email],
      [
        "Recipient Email",
        donorInfo.recipientEmail || "N/A",
      ],
    ]

    doc.autoTable({
      startY: 40,
      head: [
        ["Field", "Details"],
      ],
      body: tableData,
      theme: "striped",
      styles: {
        font: "helvetica",
        textColor: "#4B5563",
      },
      headStyles: {
        fillColor: "#FFC107",
        textColor: "#ffffff",
        fontStyle: "bold",
      },
    })

    if (donorInfo.message) {
      doc.text("Personal Message:", 14, doc.autoTable.previous.finalY + 10)
      doc.text(donorInfo.message, 14, doc.autoTable.previous.finalY + 17)
    }

    doc.save("donation-receipt.pdf")
  }

  const handlePayment = (method) => {
    setPaymentMethod(method)
    setShowPaymentDetails(true)

    // Simulate payment for QR and Bank
    if (method !== 'paypal') {
        const transactionId = `TXN-${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
        console.log(`Simulated payment successful with transaction ID: ${transactionId}`);
        sendEmail(transactionId);
        setTimeout(() => {
          generateAndDownloadPDF(transactionId);
        }, 1000);
    }
  }

  const stepTitleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stepTitleVariants}
          >
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                Choose a <span className="text-yellow-500">Cause</span>
              </h2>
              <p className="text-lg text-gray-600">
                Your passion, your purpose. Select where you want to make an impact.
              </p>
            </div>
            <div className="relative mt-8 max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a cause..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-full border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredCauses.map((cause) => (
                <motion.div
                  key={cause.id}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCause(cause)}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    selectedCause?.id === cause.id
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <cause.icon size={48} className="text-yellow-500 mb-2" />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-gray-800 text-center">
                    {cause.name}
                  </h3>
                </motion.div>
              ))}
            </div>
            {!showAllCauses && filteredCauses.length > 0 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllCauses(true)}
                  className="text-yellow-500 font-semibold text-lg hover:underline"
                >
                  See More Causes <ChevronDown size={20} className="inline-block" />
                </button>
              </div>
            )}
            {showAllCauses && (
                <div className="text-center mt-6">
                    <button
                        onClick={() => setShowAllCauses(false)}
                        className="text-yellow-500 font-semibold text-lg hover:underline"
                    >
                        Show Less Causes <ChevronUp size={20} className="inline-block" />
                    </button>
                </div>
            )}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleNext}
                disabled={!selectedCause}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  selectedCause
                    ? "bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Next Step
              </button>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            key="step2"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stepTitleVariants}
          >
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                Select Your <span className="text-yellow-500">Amount</span>
              </h2>
              <p className="text-lg text-gray-600">
                Choose a preset or enter a custom amount. Every bit helps.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {amounts.map((amount) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.1, translateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDonationAmount(amount)}
                  className={`px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 shadow-md ${
                    donationAmount === amount
                      ? "bg-yellow-500 text-white shadow-lg shadow-yellow-300/50"
                      : "bg-white text-gray-800 border-2 border-gray-300 hover:bg-yellow-100 hover:border-yellow-400"
                  }`}
                >
                  ₹{amount}
                </motion.button>
              ))}
            </div>
            <div className="flex flex-col items-center mt-8">
              <label className="text-gray-700 text-lg font-medium mb-3">Or enter a custom amount</label>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(Number(e.target.value))}
                className="w-full max-w-sm text-center text-4xl font-extrabold py-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-all duration-300 bg-gray-50"
                placeholder="0"
                min="1"
              />
            </div>
            <div className="flex items-center justify-center mt-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="w-5 h-5 accent-yellow-500"
                />
                <span className="text-gray-700 font-medium text-lg">
                  Make this a monthly donation
                </span>
                <Repeat size={20} className="text-gray-500" />
              </label>
            </div>
            <div className="flex justify-between mt-10">
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-full text-gray-700 font-semibold border-2 border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-full bg-yellow-500 text-white text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg"
              >
                Next Step
              </button>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            key="step3"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stepTitleVariants}
          >
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                Your <span className="text-yellow-500">Details</span>
              </h2>
              <p className="text-lg text-gray-600">
                Please provide your information for the receipt.
              </p>
            </div>
            <div className="space-y-6 max-w-lg mx-auto mt-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={donorInfo.name}
                    onChange={(e) => handleDonorInfoChange("name", e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={donorInfo.email}
                    onChange={(e) => handleDonorInfoChange("email", e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Gift size={24} className="text-yellow-500" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    Donate on someone's behalf?
                  </h4>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recipient's Email (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={donorInfo.recipientEmail}
                      onChange={(e) => handleDonorInfoChange("recipientEmail", e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
                    />
                  </div>
                  {errors.recipientEmail && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.recipientEmail}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Personal Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      value={donorInfo.message}
                      onChange={(e) => handleDonorInfoChange("message", e.target.value)}
                      rows={3}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
                      placeholder="Add a personal message..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-full text-gray-700 font-semibold border-2 border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <button
                onClick={validateAndProceed}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  donorInfo.name && donorInfo.email && !errors.name && !errors.email
                    ? "bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Review & Pay
              </button>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            key="step4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stepTitleVariants}
          >
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                Your <span className="text-yellow-500">Donation Summary</span>
              </h2>
              <p className="text-lg text-gray-600">
                Please review your details before confirming your payment.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-8 mt-8 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium text-gray-600">Cause:</span>
                  <span className="font-semibold text-gray-800">{selectedCause?.name}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium text-gray-600">Amount:</span>
                  <span className="font-extrabold text-3xl text-yellow-500">₹{donationAmount}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium text-gray-600">Donation Type:</span>
                  <span className="font-semibold text-gray-800">{isRecurring ? "Monthly" : "One-time"}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium text-gray-600">Donor Name:</span>
                  <span className="font-semibold text-gray-800">{donorInfo.name}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-800">{donorInfo.email}</span>
                </div>
              </div>
              <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Payment Method</h3>
                  <div className="space-y-4">
                      <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePayment('paypal')}
                          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-800 text-white font-semibold text-lg hover:bg-gray-900 transition-colors shadow-lg"
                      >
                          <CreditCard size={24} /> Pay with Card
                      </motion.button>
                      <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePayment('qr')}
                          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-yellow-500 text-white font-semibold text-lg hover:bg-yellow-600 transition-colors shadow-lg"
                      >
                          <QrCode size={24} /> Pay with QR
                      </motion.button>
                      <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePayment('bank')}
                          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
                      >
                          <Banknote size={24} /> Direct Bank Transfer
                      </motion.button>
                  </div>
              </div>
            </div>
            
            <AnimatePresence>
                {showPaymentDetails && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 mt-8 max-w-lg mx-auto"
                    >
                        {paymentMethod === 'qr' && (
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Scan to Pay</h3>
                                <p className="text-gray-600 mb-4">
                                    Please open your preferred UPI app and scan the QR code to complete the payment of ₹{donationAmount}.
                                </p>
                                <img
                                    src={`https://placehold.co/300x300/ffc107/fff?text=QR+Code+for+%E2%82%B9${donationAmount}`}
                                    alt="QR Code"
                                    className="mx-auto rounded-lg shadow-md"
                                />
                            </div>
                        )}
                        {paymentMethod === 'bank' && (
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Bank Account Details</h3>
                                <p className="text-gray-600 mb-4">
                                    Please make a bank transfer for ₹{donationAmount} to the account below.
                                </p>
                                <div className="space-y-2 text-left bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-between font-semibold">
                                        <span>Account Holder:</span>
                                        <span>Hope Foundation</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Bank Name:</span>
                                        <span>Humanitarian Bank</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Account Number:</span>
                                        <span>9876543210</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>IFSC Code:</span>
                                        <span>HUMA0001234</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-4 italic">
                                    *After transfer, an email receipt will be sent automatically.
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className="flex justify-start mt-8">
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-full text-gray-700 font-semibold border-2 border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  // Effect to load PayPal SDK
  useEffect(() => {
    if (paymentMethod === 'paypal' && !document.getElementById('paypal-sdk')) {
      const script = document.createElement('script');
      script.id = 'paypal-sdk';
      script.src = `https://www.paypal.com/sdk/js?client-id=ARRz1U7AMqDSLPUwKGuf10k4WEDyHjCgXg_UiNwOyJac5H_eGKnlUOqrIuwuzmTRsixh6pwXGQDP7UB-&currency=USD&intent=capture&enable-funding=venmo,paylater`;
      script.onload = () => {
        // Render PayPal buttons once the script is loaded
        if (typeof window.paypal !== 'undefined') {
          window.paypal.Buttons({
            style: {
              layout: 'vertical',
              color: 'gold',
              shape: 'pill',
              label: 'pay'
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: donationAmount,
                  },
                }],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                const transactionId = details.id;
                console.log(`Payment successful! Transaction ID: ${transactionId}`);
                sendEmail(transactionId);
                generateAndDownloadPDF(transactionId);
              });
            },
            onError: (err) => {
              console.error("PayPal checkout error", err);
            }
          }).render('#paypal-button-container');
        }
      };
      document.body.appendChild(script);
    }
  }, [paymentMethod, donationAmount]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-gray-100 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-200">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
          <div id="paypal-button-container" className="mt-8 flex justify-center"></div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js"></script>
    </>
  );
};

export default DonationPage1;