"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImpactSection() {
    const stories = [
        {
            name: "Anjali Sharma",
            age: 11,
            location: "Nepal",
            story:
                "Thanks to your support, Anjali now receives proper nutritional meals and medical checkups, helping her stay healthy and continue her education.",
            image: "https://www.gmevents.ae/wp-content/uploads/2019/04/female-placeholder.jpg",
            program: "Nutrition Support Program",
        },
        {
            name: "Ramesh Thapa",
            age: 42,
            location: "Kathmandu, Nepal",
            story:
                "After receiving cataract surgery through our free medical camp, Ramesh regained his vision and returned to his daily livelihood.",
            image: "https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg",
            program: "Medical & Cataract Surgeries",
        },
        {
            name: "Priya Gurung",
            age: 26,
            location: "Pokhara, Nepal",
            story:
                "Priya attended our health-awareness workshop and now helps spread essential health knowledge in her community.",
            image: "https://www.gmevents.ae/wp-content/uploads/2019/04/female-placeholder.jpg",
            program: "Healthcare Access",
        },
    ];

    const tiers = [
        { amount: "$25", description: "Provides school supplies for one child for a month", icon: "📚" },
        { amount: "$50", description: "Funds medical treatment for a family of four", icon: "🏥" },
        { amount: "$100", description: "Supports clean water access for 10 people", icon: "💧" },
    ];

    // Mobile slider tracking
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollToStory = (index) => {
        if (!scrollContainerRef.current) return;
        const width = scrollContainerRef.current.offsetWidth;
        scrollContainerRef.current.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
        setActiveStoryIndex(index);
    };

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, offsetWidth } = scrollContainerRef.current;
        const newIndex = Math.round(scrollLeft / offsetWidth);
        if (newIndex !== activeStoryIndex && newIndex >= 0 && newIndex < stories.length) {
            setActiveStoryIndex(newIndex);
        }
    };

    const nextStory = () => {
        const next = (activeStoryIndex + 1) % stories.length;
        scrollToStory(next);
    };

    const prevStory = () => {
        const prev = (activeStoryIndex - 1 + stories.length) % stories.length;
        scrollToStory(prev);
    };

    return (
        <section
            id="impact"
            className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" }}
        >
            {/* Background Ambient Blooms */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>

                {/* Floating Sparkles (hidden on small mobile to reduce CPU overhead) */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="hidden sm:block absolute w-2 h-2 bg-amber-400/40 rounded-full"
                        style={{
                            left: `${(i * 18 + 10) % 100}%`,
                            top: `${(i * 22 + 15) % 100}%`,
                        }}
                        animate={{
                            y: [-8, 8, -8],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.4,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full mb-4 sm:mb-6 shadow-md shadow-amber-500/20"
                    >
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-5xl font-black mb-3 sm:mb-5 tracking-tight"
                        style={{
                            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Real Stories, Real Impact
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xs sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2"
                    >
                        Every donation creates ripples of change. Here are just a few stories of lives
                        transformed through your generosity.
                    </motion.p>
                </div>

                {/* 1. MOBILE SLIDER VIEW (Visible on mobile/tablet screens < md) */}
                <div className="block md:hidden relative mb-12">
                    {/* Snap Carousel Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 gap-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {stories.map((story, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 snap-center"
                            >
                                <div className="bg-white rounded-2xl shadow-md border border-amber-100 overflow-hidden">
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={story.image || "/placeholder.svg"}
                                            alt={story.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                        <div className="absolute top-3 right-3">
                                            <div className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                                                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-3 left-3">
                                            <span className="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                                                {story.program}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="mb-2">
                                            <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                                <Globe className="w-3 h-3 text-amber-600" />
                                                Age {story.age} • {story.location}
                                            </p>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                            {story.story}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls: Arrows + Dots */}
                    <div className="flex items-center justify-between mt-3 px-2">
                        <button
                            onClick={prevStory}
                            className="p-2 rounded-full bg-white/90 border border-amber-200 text-amber-900 shadow-sm active:scale-95 transition-all"
                            aria-label="Previous story"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-1.5">
                            {stories.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToStory(i)}
                                    className={`h-1.5 transition-all duration-300 rounded-full ${
                                        activeStoryIndex === i
                                            ? "w-6 bg-amber-600"
                                            : "w-2 bg-amber-300 hover:bg-amber-400"
                                    }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextStory}
                            className="p-2 rounded-full bg-white/90 border border-amber-200 text-amber-900 shadow-sm active:scale-95 transition-all"
                            aria-label="Next story"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* 2. DESKTOP GRID VIEW (Visible on md: and larger screens) */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden relative group border border-amber-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={story.image || "/placeholder.svg"}
                                    alt={story.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                <div className="absolute top-4 right-4">
                                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                        <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 relative">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                            <Globe className="w-3 h-3 text-amber-600" />
                                            Age {story.age} • {story.location}
                                        </p>
                                    </div>
                                    <span className="bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-800 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-amber-300 shrink-0">
                                        {story.program}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{story.story}</p>

                                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. YOUR IMPACT MATTERS STATS BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/85 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-amber-100 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full mb-3 sm:mb-4 shadow-md">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 sm:mb-3">
                            Your Impact Matters
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
                            Every dollar you donate is carefully allocated to maximize impact. See exactly how your contribution
                            makes a difference.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            {tiers.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-amber-100/90 relative overflow-hidden group hover:border-amber-300 transition-colors"
                                >
                                    <div className="text-2xl sm:text-3xl mb-1.5">{item.icon}</div>
                                    <div className="text-xl sm:text-2xl font-black text-amber-600 mb-1">
                                        {item.amount}
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">
                                        {item.description}
                                    </p>

                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}