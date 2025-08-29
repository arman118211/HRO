"use client"

import { useState } from "react"
import { CreditCard, Smartphone, Building, Check, Sparkles, Heart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function DonationSection() {
  const [selectedCause, setSelectedCause] = useState(null)
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedPayment, setSelectedPayment] = useState("card")
  const [donationType, setDonationType] = useState("one-time")
  const [step, setStep] = useState(1) // 1: causes, 2: amount, 3: payment

  const causes = [
    {
      id: "education",
      title: "Education for All",
      description: "Help children access quality education and build brighter futures",
      icon: "🎓",
      color: "from-[#2979FF] to-[#1565C0]",
      bgColor: "from-[#2979FF]/10 to-[#1565C0]/5",
    },
    {
      id: "healthcare",
      title: "Healthcare Access",
      description: "Provide essential medical care to underserved communities",
      icon: "🏥",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      id: "water",
      title: "Clean Water",
      description: "Bring safe, clean water to communities in need",
      icon: "💧",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
    },
    {
      id: "shelter",
      title: "Emergency Relief",
      description: "Provide shelter and aid during disasters and crises",
      icon: "🏠",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
  ]

  const presetAmounts = [25, 50, 100, 250, 500]

  const donationReasons = [
    {
      amount: 25,
      title: "School Supplies",
      description: "Provides books, pencils, and materials for one child for a month",
      icon: "📚",
    },
    {
      amount: 50,
      title: "Medical Care",
      description: "Funds essential medical treatment for a family of four",
      icon: "🏥",
    },
    {
      amount: 100,
      title: "Clean Water",
      description: "Supports clean water access for 10 people for a year",
      icon: "💧",
    },
    {
      amount: 250,
      title: "Education Support",
      description: "Sponsors a child's education for an entire semester",
      icon: "🎓",
    },
    {
      amount: 500,
      title: "Community Project",
      description: "Helps build infrastructure like wells or classrooms",
      icon: "🏗️",
    },
  ]

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "mobile", name: "Mobile Payment", icon: Smartphone },
    { id: "bank", name: "Bank Transfer", icon: Building },
  ]

  const getCurrentReason = () => {
    const amount = customAmount ? Number.parseInt(customAmount) : selectedAmount
    return donationReasons.find((reason) => reason.amount <= amount) || donationReasons[0]
  }

  const selectedCauseData = causes.find((cause) => cause.id === selectedCause)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2979FF]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full blur-xl animate-bounce"></div>

      {/* Floating sparkles */}
      <div className="absolute top-20 left-20 text-[#2979FF]/30 animate-pulse">
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="absolute bottom-32 right-32 text-[#1565C0]/30 animate-pulse delay-1000">
        <Heart className="h-8 w-8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#2979FF] to-[#1565C0] bg-clip-text text-transparent mb-6"
          >
            Make a Difference Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Your generosity creates lasting change. Choose a cause close to your heart and see the immediate impact
            you'll make.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-6xl mx-auto"
        >
          {/* Left side - Image */}
          <div className="relative h-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-2 overflow-hidden h-full flex flex-col">
              <img
                src="/money.svg"
                alt="People helping in community"
                className="w-full h-64 lg:h-80  rounded-xl flex-grow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>

              {/* Floating impact stats */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-[#2979FF]">50K+</div>
                      <div className="text-xs text-slate-600">Lives Changed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-600">150+</div>
                      <div className="text-xs text-slate-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-600">25</div>
                      <div className="text-xs text-slate-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Donation flow */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 relative overflow-hidden h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2979FF]/5 to-[#1565C0]/5 pointer-events-none"></div>

            {/* Step 1: Cause Selection */}
            {step === 1 && (
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Choose Your Cause</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {causes.map((cause) => (
                    <button
                      key={cause.id}
                      onClick={() => {
                        setSelectedCause(cause.id)
                        setStep(2)
                      }}
                      className="p-4 rounded-xl border-2 border-slate-200 hover:border-[#2979FF] transition-all duration-300 text-left group hover:shadow-lg transform hover:scale-105"
                    >
                      <div className="text-2xl mb-2">{cause.icon}</div>
                      <h4 className="text-base font-bold text-slate-800 mb-1 group-hover:text-[#2979FF] transition-colors">
                        {cause.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{cause.description}</p>
                      <div className="flex items-center justify-end mt-3 text-[#2979FF] opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Amount Selection */}
            {step === 2 && selectedCauseData && (
              <div className="relative z-10 flex-grow">
                <button
                  onClick={() => setStep(1)}
                  className="text-[#2979FF] hover:text-[#1565C0] mb-3 flex items-center gap-2 transition-colors text-sm"
                >
                  ← Back to causes
                </button>

                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${selectedCauseData.bgColor} border border-[#2979FF]/20 mb-4`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{selectedCauseData.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{selectedCauseData.title}</h4>
                      <p className="text-slate-600 text-xs">{selectedCauseData.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  <div className="bg-slate-100 p-1 rounded-lg flex">
                    <button
                      onClick={() => setDonationType("one-time")}
                      className={`px-3 py-1.5 rounded-md font-semibold transition-all duration-200 text-sm ${
                        donationType === "one-time"
                          ? "bg-gradient-to-r from-[#2979FF] to-[#1565C0] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setDonationType("monthly")}
                      className={`px-3 py-1.5 rounded-md font-semibold transition-all duration-200 text-sm ${
                        donationType === "monthly"
                          ? "bg-gradient-to-r from-[#2979FF] to-[#1565C0] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">Choose Your Impact</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount("")
                      }}
                      className={`p-2.5 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
                        selectedAmount === amount && !customAmount
                          ? "border-[#2979FF] bg-gradient-to-br from-[#2979FF]/10 to-[#1565C0]/10 text-[#2979FF] shadow-lg"
                          : "border-slate-200 hover:border-[#2979FF]/50 text-slate-700 hover:shadow-md"
                      }`}
                    >
                      <div className="text-base font-bold">${amount}</div>
                    </button>
                  ))}
                </div>

                <div className="relative mb-4">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                    className="w-full p-2.5 border-2 border-slate-200 rounded-lg text-base font-semibold text-center focus:border-[#2979FF] focus:outline-none transition-colors duration-200 bg-white/50"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 text-base">$</span>
                </div>

                <div className="mb-4 p-3 bg-gradient-to-br from-[#2979FF]/10 to-[#1565C0]/10 rounded-xl border border-[#2979FF]/20">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{getCurrentReason().icon}</div>
                    <h4 className="text-base font-bold text-slate-800 mb-1">{getCurrentReason().title}</h4>
                    <p className="text-slate-600 text-xs">{getCurrentReason().description}</p>
                  </div>
                </div>

                <button
                  onClick={() => setStep(3)}
                  className="w-full bg-gradient-to-r from-[#2979FF] to-[#1565C0] hover:from-[#1565C0] hover:to-[#0D47A1] text-white py-2.5 rounded-lg text-base font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Continue to Payment
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Step 3: Payment Method */}
            {step === 3 && (
              <div className="relative z-10 flex-grow">
                <button
                  onClick={() => setStep(2)}
                  className="text-[#2979FF] hover:text-[#1565C0] mb-3 flex items-center gap-2 transition-colors text-sm"
                >
                  ← Back to amount
                </button>

                <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Payment Method</h3>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-between transform hover:scale-105 ${
                        selectedPayment === method.id
                          ? "border-[#2979FF] bg-gradient-to-br from-[#2979FF]/10 to-[#1565C0]/10 text-[#2979FF] shadow-lg"
                          : "border-slate-200 hover:border-[#2979FF]/50 text-slate-700 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <method.icon className="h-4 w-4" />
                        <span className="font-medium text-sm">{method.name}</span>
                      </div>
                      {selectedPayment === method.id && <Check className="h-4 w-4" />}
                    </button>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-[#2979FF] to-[#1565C0] hover:from-[#1565C0] hover:to-[#0D47A1] text-white py-3 rounded-lg text-base font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Heart className="h-4 w-4" />
                  Donate ${customAmount || selectedAmount} {donationType === "monthly" ? "Monthly" : "Now"}
                </button>

                {/* Trust Indicators */}
                <div className="mt-4 text-center text-xs text-slate-500">
                  <p className="mb-1">🔒 Your donation is secure and encrypted</p>
                  <p>95% of your donation goes directly to our programs • Tax-deductible receipt provided</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
