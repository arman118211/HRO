import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, ShieldCheck, Droplets, Users, Tent } from "lucide-react";

const NepalFloodEmergencySection = () => {
    return (
        <section className="relative w-full py-16 lg:py-24 overflow-hidden border-b border-slate-200">
            {/* 1. Full-Bleed Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    // src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=2000&q=80"
                    src="./mobile_view/nepal-bg.png"
                    alt="Nepal Flash Flood Background"
                    className="w-full h-full object-cover object-[75%_center] md:object-center"
                />
                
                {/* 2. Readability Gradient Overlay: Solid white on left, revealing image softly towards the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/90 to-white/40" />

                {/* 3. Subtle Warm Ambient Lighting accents */}
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Content Layer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl flex flex-col items-start space-y-6">
                    {/* Live Emergency Badge in Golden Yellow */}
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/90 shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-amber-800">
                            Urgent Appeal: Nepal Flash Floods
                        </span>
                    </div>

                    {/* Heading with Golden Yellow Highlight */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                        Urgent Relief for Families{" "}
                        <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                            Stranded by Flash Floods
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                        Relentless monsoon cloudbursts and landslides have severed access to communities 
                        across Nepal. Families have lost homes and access to potable water. Your timely support delivers 
                        clean drinking supplies, dry ration packs, and emergency shelters to cut-off areas.
                    </p>

                    {/* Quick Stats Grid with Frosted Backing */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-1">
                        <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm hover:border-amber-300 transition-colors">
                            <Users className="w-5 h-5 text-amber-500 mb-1" />
                            <div className="text-xl sm:text-2xl font-bold text-slate-900">25,000+</div>
                            <div className="text-xs text-slate-600 font-medium">Displaced Souls</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm hover:border-amber-300 transition-colors">
                            <Droplets className="w-5 h-5 text-amber-500 mb-1" />
                            <div className="text-xl sm:text-2xl font-bold text-slate-900">10,000+</div>
                            <div className="text-xs text-slate-600 font-medium">Water Purifiers</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm hover:border-amber-300 transition-colors">
                            <Tent className="w-5 h-5 text-amber-500 mb-1" />
                            <div className="text-xl sm:text-2xl font-bold text-slate-900">Immediate</div>
                            <div className="text-xs text-slate-600 font-medium">Temporary Shelters</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
                        <Link
                            to="/donate"
                            className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform active:scale-95 border border-yellow-300"
                        >
                            <Heart className="w-5 h-5 fill-slate-900 text-slate-900" />
                            <span className="font-extrabold">Donate Relief Now</span>
                        </Link>
                        
                        <Link
                            to="/causes/nepal-fundraiser"
                            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white/90 hover:bg-white border border-slate-300 transition-all duration-200 shadow-sm backdrop-blur-sm"
                        >
                            <span>View Field Reports</span>
                            <ArrowRight className="w-4 h-4 text-amber-600" />
                        </Link>
                    </div>

                    {/* Trust Check */}
                    <div className="flex items-center space-x-2 text-xs text-slate-600 pt-1 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>100% Tax Deductible & Verified Rapid Ground Deployment</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NepalFloodEmergencySection;