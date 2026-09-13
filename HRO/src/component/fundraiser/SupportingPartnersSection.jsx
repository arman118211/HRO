import React from "react";
import { ExternalLink, Handshake, Globe2, ShieldCheck } from "lucide-react";

const SupportingPartnersSection = () => {
    const partners = [
        {
            id: "cwi-usa",
            name: "Community Welfare International",
            chapter: "USA Chapter",
            country: "United States",
            countryFlag: "🇺🇸",
            category: "International Outreach & Donor Alliance",
            link: "https://cwingo.org/",
            logo: "https://cwingo.org/wp-content/uploads/2026/04/cropped-cropped-Untitled-design-2026-04-18T144734.273-1-1-e1776794698933.png", // Replace with your actual logo path
            alt: "Community Welfare International USA Logo",
        },
        {
            id: "cwi-nepal",
            name: "Community Welfare International",
            chapter: "Nepal Chapter",
            country: "Nepal",
            countryFlag: "🇳🇵",
            category: "Ground Deployment & Field Response",
            link: "https://cwinp.org/",
            logo: "https://cwinp.org/assets/images/cwinp-logo-400x84.png", // Replace with your actual logo path
            alt: "Community Welfare International Nepal Logo",
        },
        {
            id: "vidya-trust-india",
            name: "Vidya Sanjeevani Educational Trust",
            chapter: "India Chapter",
            country: "India",
            countryFlag: "🇮🇳",
            category: "Education & Humanitarian Support",
            link: "https://vidyatrust.in/",
            logo: "https://vidyatrust.in/wp-content/uploads/2026/01/cropped_circle_image-9.png", // Replace with your actual logo path
            alt: "Vidya Sanjeevani Educational Trust Logo",
        },
        {
            id: "sahara-school-nepal",
            name: "Sahara Public Secondary School",
            chapter: "Nepal Chapter",
            country: "Nepal",
            countryFlag: "🇳🇵",
            category: "Community Welfare & Field Coordination",
            link: "https://sahara.edu.np/",
            logo: "https://sahara.edu.np/images/logo.png", // Replace with your actual logo path
            alt: "Sahara Public Secondary School Logo",
        },
    ];

    return (
        <section className="relative w-full py-16 sm:py-20  overflow-hidden">
            {/* Subtle Warm Amber Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-amber-100/50 via-yellow-50/20 to-transparent blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-sm">
                        <Handshake className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                            Global Humanitarian Alliance
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Our Trusted{" "}
                        <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                            Supporting Partners
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We collaborate closely with registered international non-profits, academic institutions, 
                        and grassroots trusts to ensure full transparency, fast disaster deployment, and legitimate resource mobilization.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300"
                        >
                            <div>
                                {/* Top Badges: Chapter & Country */}
                                <div className="flex items-center justify-between gap-2 mb-5">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
                                        <span>{partner.countryFlag}</span>
                                        <span>{partner.country}</span>
                                    </span>

                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                                        <Globe2 className="w-3 h-3 text-amber-600" />
                                        <span>Verified</span>
                                    </span>
                                </div>

                                {/* Partner Logo Box */}
                                <div className="w-full h-24 sm:h-28 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 mb-5">
                                    <img
                                        src={partner.logo}
                                        alt={partner.alt}
                                        className="max-h-full max-w-full object-contain filter contrast-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Partner Details */}
                                <div className="space-y-1.5">
                                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                                        {partner.name}
                                    </h3>
                                    <div className="text-xs font-semibold text-amber-700">
                                        {partner.chapter}
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium pt-1">
                                        {partner.category}
                                    </p>
                                </div>
                            </div>

                            {/* External Portal Link */}
                            <div className="pt-6 mt-4 border-t border-slate-100">
                                <a
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-700 hover:text-amber-600 group transition-colors"
                                >
                                    <span>Visit Official Website</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Assurance Bar */}
                {/* <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900">
                                Legitimate & Audited Joint Response
                            </div>
                            <div className="text-xs text-slate-500">
                                All donations are jointly monitored, legally documented, and allocated to on-ground rescue relief.
                            </div>
                        </div>
                    </div>

                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
                        Zero Intermediate Commission
                    </span>
                </div> */}

            </div>
        </section>
    );
};

export default SupportingPartnersSection;