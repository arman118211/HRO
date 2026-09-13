import React, { useState } from "react";
import {
    Copy,
    Check,
    QrCode,
    Building2,
    Landmark,
    ShieldCheck,
    Smartphone,
    Globe,
    AlertCircle,
} from "lucide-react";

// Crisp SVG Country Flags for reliable cross-platform rendering
const NepalFlag = () => (
    <svg
        className="w-5 h-6 shrink-0 drop-shadow-sm"
        viewBox="0 0 50 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flag of Nepal"
    >
        <path
            d="M2 2L42 27L18 27L46 54L2 54Z"
            fill="#DC143C"
            stroke="#003893"
            strokeWidth="3.5"
            strokeLinejoin="round"
        />
        <circle cx="15" cy="18" r="4.5" fill="white" />
        <path
            d="M10 42C10 45 14 47 16 47C18 47 22 45 22 42C20 44 12 44 10 42Z"
            fill="white"
        />
    </svg>
);

const IndiaFlag = () => (
    <svg
        className="w-6 h-4 shrink-0 rounded-[2px] shadow-sm border border-slate-200/60"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flag of India"
    >
        <path fill="#f93" d="M0 0h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path fill="#128807" d="M0 320h640v160H0z" />
        <circle cx="320" cy="240" r="52" fill="#008" />
        <circle cx="320" cy="240" r="44" fill="#fff" />
        <circle cx="320" cy="240" r="10" fill="#008" />
    </svg>
);

const USAFlag = () => (
    <svg
        className="w-6 h-4 shrink-0 rounded-[2px] shadow-sm border border-slate-200/60"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flag of United States"
    >
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
        <path fill="#192f5d" d="M0 0h260v258H0z" />
        <circle cx="40" cy="35" r="7" fill="#fff" />
        <circle cx="95" cy="35" r="7" fill="#fff" />
        <circle cx="150" cy="35" r="7" fill="#fff" />
        <circle cx="205" cy="35" r="7" fill="#fff" />
        <circle cx="67" cy="70" r="7" fill="#fff" />
        <circle cx="122" cy="70" r="7" fill="#fff" />
        <circle cx="177" cy="70" r="7" fill="#fff" />
        <circle cx="40" cy="105" r="7" fill="#fff" />
        <circle cx="95" cy="105" r="7" fill="#fff" />
        <circle cx="150" cy="105" r="7" fill="#fff" />
        <circle cx="205" cy="105" r="7" fill="#fff" />
        <circle cx="67" cy="140" r="7" fill="#fff" />
        <circle cx="122" cy="140" r="7" fill="#fff" />
        <circle cx="177" cy="140" r="7" fill="#fff" />
        <circle cx="40" cy="175" r="7" fill="#fff" />
        <circle cx="95" cy="175" r="7" fill="#fff" />
        <circle cx="150" cy="175" r="7" fill="#fff" />
        <circle cx="205" cy="175" r="7" fill="#fff" />
        <circle cx="67" cy="210" r="7" fill="#fff" />
        <circle cx="122" cy="210" r="7" fill="#fff" />
        <circle cx="177" cy="210" r="7" fill="#fff" />
    </svg>
);

const DirectDonationSection = () => {
    const [copiedKey, setCopiedKey] = useState(null);

    const handleCopy = (text, key) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    return (
        <section className="w-full py-20 bg-slate-50/60 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 1. SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                            Zero Intermediary Fees
                        </span>
                    </div>

                    {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                        Prefer to Transfer Directly?
                    </h2> */}

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Prefer to{" "}
                        <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                            Transfer Directly?
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Use our verified bank accounts for direct wire transfers or scan the official QR codes
                        for instant, zero-commission donations.
                    </p>
                </div>

                {/* 2. INSTANT QR CODE PAYMENTS (NEPAL & INDIA) */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Smartphone className="w-5 h-5 text-amber-600" />
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                            Instant Scan & Pay (Mobile Banking & UPI)
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Nepal FonePay QR */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                            <div>
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                                    <div className="flex items-center gap-2.5">
                                        <NepalFlag />
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
                                            Nepal • FonePay Network
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                                        Instant NPR
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                    {/* QR Code Container */}
                                    <div className="w-48 h-48 sm:w-44 sm:h-44 rounded-2xl bg-white border-2 border-slate-100 p-3 shadow-sm flex items-center justify-center shrink-0">
                                        <img
                                            src="/fonepay.png"
                                            alt="Nepal FonePay QR Code"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-3 w-full text-center sm:text-left">
                                        <div>
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                Recipient Entity
                                            </div>
                                            <div className="text-sm font-bold text-slate-900 leading-snug">
                                                Human Relief Organization Nepal
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                Branch
                                            </div>
                                            <div className="text-sm font-medium text-slate-800">
                                                KRISHNANAGAR 034
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                Terminal Number
                                            </div>
                                            <div className="flex items-center justify-center sm:justify-start gap-2 pt-0.5">
                                                <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-md">
                                                    2222440017725843
                                                </span>
                                                <button
                                                    onClick={() => handleCopy("2222440017725843", "term-nepal")}
                                                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                                                    title="Copy Terminal ID"
                                                >
                                                    {copiedKey === "term-nepal" ? (
                                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                    ) : (
                                                        <Copy className="w-3.5 h-3.5" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 text-center sm:text-left">
                                <span className="text-[11px] text-slate-500 font-medium">
                                    Supported Apps: eSewa, Khalti, IME Pay, Global Smart Plus & all FonePay mobile banking apps.
                                </span>
                            </div>
                        </div>

                        {/* India UPI QR (IndusInd Bank / Vidya Trust) */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                            <div>
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                                    <div className="flex items-center gap-2.5">
                                        <IndiaFlag />
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
                                            India • BHIM UPI & IndusInd Bank
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                                        Instant INR
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                    {/* QR Code Container */}
                                    <div className="w-48 h-48 sm:w-44 sm:h-44 rounded-2xl bg-white border-2 border-slate-100 p-3 shadow-sm flex items-center justify-center shrink-0">
                                        <img
                                            src="/indianupi.png"
                                            alt="India UPI QR Code"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-3 w-full text-center sm:text-left">
                                        <div>
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                Verified Partner
                                            </div>
                                            <div className="text-sm font-bold text-slate-900 leading-snug">
                                                Vidya Sanjeevani Educational Trust
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                Banking Partner
                                            </div>
                                            <div className="text-sm font-medium text-slate-800">
                                                IndusInd Bank
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                Official UPI ID
                                            </div>
                                            <div className="flex items-center justify-center sm:justify-start gap-2 pt-0.5">
                                                <span className="font-mono text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                                                    Pos.11425557@indus
                                                </span>
                                                <button
                                                    onClick={() => handleCopy("Pos.11425557@indus", "upi-india")}
                                                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                                                    title="Copy UPI ID"
                                                >
                                                    {copiedKey === "upi-india" ? (
                                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                    ) : (
                                                        <Copy className="w-3.5 h-3.5" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 text-center sm:text-left">
                                <span className="text-[11px] text-slate-500 font-medium">
                                    Supported Apps: Google Pay, PhonePe, Paytm, BHIM UPI, Amazon Pay, and all Indian mobile banking apps.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. OFFICIAL BANK WIRE ACCOUNTS */}
                <div>
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Landmark className="w-5 h-5 text-amber-600" />
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                            Official Direct Wire Accounts
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* 1. Human Relief Organization Nepal Account */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <NepalFlag />
                                        <div>
                                            <div className="text-xs font-bold text-amber-700 uppercase tracking-widest">
                                                Direct Nepal Account
                                            </div>
                                            <div className="text-sm font-extrabold text-slate-900">
                                                Nepal Investment Mega Bank Ltd.
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                                        NPR Currency
                                    </span>
                                </div>

                                <div className="space-y-3.5 text-xs sm:text-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Account Holder:</span>
                                        <span className="font-bold text-slate-900">
                                            Human Relief Organization Nepal
                                        </span>
                                    </div>

                                    {/* Account Number with Copy */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Account Number:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono font-bold text-amber-950 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                                                03402050250443
                                            </span>
                                            <button
                                                onClick={() => handleCopy("03402050250443", "acc-nepal")}
                                                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                                                title="Copy Account Number"
                                            >
                                                {copiedKey === "acc-nepal" ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                ) : (
                                                    <Copy className="w-3.5 h-3.5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* SWIFT Code with Copy */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">SWIFT Code:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono font-bold text-slate-900">
                                                NIBLNPKTXXX
                                            </span>
                                            <button
                                                onClick={() => handleCopy("NIBLNPKTXXX", "swift-nepal")}
                                                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                                                title="Copy SWIFT"
                                            >
                                                {copiedKey === "swift-nepal" ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                ) : (
                                                    <Copy className="w-3.5 h-3.5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Branch:</span>
                                        <span className="font-semibold text-slate-800">Krishnanagar</span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Address & Country:</span>
                                        <span className="font-medium text-slate-800">
                                            Krishnanagar, Dist. Kapilvastu, Nepal
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                                <span>Designated for domestic and direct SWIFT transfers inside Nepal.</span>
                            </div>
                        </div>

                        {/* 2. USA Wells Fargo USD Account */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <USAFlag />
                                        <div>
                                            <div className="text-xs font-bold text-amber-700 uppercase tracking-widest">
                                                Strategic Partner in USA
                                            </div>
                                            <div className="text-sm font-extrabold text-slate-900">
                                                Wells Fargo Bank
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                                        USD Currency
                                    </span>
                                </div>

                                <div className="space-y-3.5 text-xs sm:text-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Account Holder:</span>
                                        <span className="font-bold text-slate-900">
                                            Community Welfare International
                                        </span>
                                    </div>

                                    {/* Account Number with Copy */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Account Number:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono font-bold text-amber-950 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                                                5304058059
                                            </span>
                                            <button
                                                onClick={() => handleCopy("5304058059", "acc-usa")}
                                                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                                                title="Copy Account Number"
                                            >
                                                {copiedKey === "acc-usa" ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                ) : (
                                                    <Copy className="w-3.5 h-3.5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Routing Number with Copy */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Routing Number (ABA):</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono font-bold text-slate-900">
                                                021200025
                                            </span>
                                            <button
                                                onClick={() => handleCopy("021200025", "route-usa")}
                                                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                                                title="Copy Routing Number"
                                            >
                                                {copiedKey === "route-usa" ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                ) : (
                                                    <Copy className="w-3.5 h-3.5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* SWIFT Code with Copy */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">SWIFT Code:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono font-bold text-slate-900">
                                                WFBIUS6SXXX
                                            </span>
                                            <button
                                                onClick={() => handleCopy("WFBIUS6SXXX", "swift-usa")}
                                                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                                                title="Copy SWIFT"
                                            >
                                                {copiedKey === "swift-usa" ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                ) : (
                                                    <Copy className="w-3.5 h-3.5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-slate-50 gap-1">
                                        <span className="text-slate-500 font-medium">Banking Type & Country:</span>
                                        <span className="font-medium text-slate-800">
                                            US Domestic Wire / ACH • United States
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                                <Globe className="w-3.5 h-3.5 text-slate-400" />
                                <span>Recommended for international, transatlantic, and USD tax-efficient wire transfers.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. DONOR RECEIPT & REFERENCE NOTE */}
                <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start gap-3 text-xs leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                        <span className="font-bold">Notice on Direct Wire & QR Transfers: </span>
                        Kindly include your name or campaign reference in the transfer remarks. Once transferred, please email or WhatsApp your transfer receipt to our team so we can issue your verified official donation receipt.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectDonationSection;