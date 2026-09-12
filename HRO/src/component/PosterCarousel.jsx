import React, { useState, useEffect, useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PosterCarousel = () => {
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== "undefined" ? window.innerWidth >= 768 : true
    );
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoPlayRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const rawPosters = [
        {
            id: 1,
            desktopImage: "",
            mobileImage: "./mobile_view/fundraiser-mob.png",
            alt: "Poster 1",
            link: "/campaign/education-fund",
        },
        {
            id: 2,
            desktopImage: "./desktop_img/1.desktop.webp",
            mobileImage: "./mobile_view/01.Mobile.webp",
            alt: "Poster 1",
            link: "/campaign/education-fund",
        },
        {
            id: 3,
            desktopImage: "./desktop_img/2.desktop.webp",
            mobileImage: "./mobile_view/02.Mobile.webp",
            alt: "Poster 2",
            link: "/campaign/build-a-school",
        },
        {
            id: 4,
            desktopImage: "./desktop_img/3.desktop.webp",
            mobileImage: "./mobile_view/03.Mobile.webp",
            alt: "Poster 3",
            link: "/campaign/orphan-support",
        },
        {
            id: 5,
            desktopImage: "./desktop_img/4.desktop.webp",
            mobileImage: "./mobile_view/04.Mobile.webp",
            alt: "Poster 4",
            link: "/campaign/cataract-surgery",
        },
        {
            id: 6,
            desktopImage: "./desktop_img/5.desktop.webp",
            mobileImage: "./mobile_view/05.Mobile.webp",
            alt: "Poster 5",
            link: "/campaign/sponsor-hafij-quran",
        },
        {
            id: 7,
            desktopImage: "./desktop_img/6.desktop.webp",
            mobileImage: "./mobile_view/06.Mobile.webp",
            alt: "Poster 6",
            link: "/campaign/medical-camp-support",
        },
        {
            id: 8,
            desktopImage: "./desktop_img/7.desktop.webp",
            mobileImage: "./mobile_view/07.Mobile.webp",
            alt: "Poster 7",
            link: "/campaign/educate-child",
        },
        {
            id: 9,
            desktopImage: "./desktop_img/8.desktop.webp",
            mobileImage: "./mobile_view/08.Mobile.webp",
            alt: "Poster 8",
            link: "/campaign/school-bus-support",
        },
        {
            id: 10,
            desktopImage: "./desktop_img/9.desktop.webp",
            mobileImage: "./mobile_view/09.Mobile.webp",
            alt: "Poster 9",
            link: "/campaign/sewing-skills-women",
        },
        {
            id: 11,
            desktopImage: "./desktop_img/10.desktop.webp",
            mobileImage: "./mobile_view/10.Mobile.webp",
            alt: "Poster 10",
            link: "/campaign/orphan-support",
        },
        {
            id: 12,
            desktopImage: "./desktop_img/11.desktop.webp",
            mobileImage: "./mobile_view/11.Mobile.webp",
            alt: "Poster 11",
            link: "/campaign/water-for-life",
        },
        {
            id: 13,
            desktopImage: "./desktop_img/12.desktop.webp",
            mobileImage: "./mobile_view/12.Mobile.webp",
            alt: "Poster 12",
            link: "/campaign/winter-relief",
        },
    ];

    const visiblePosters = useMemo(() => {
        return rawPosters.filter((poster) =>
            isDesktop ? Boolean(poster.desktopImage?.trim()) : Boolean(poster.mobileImage?.trim())
        );
    }, [isDesktop]);

    useEffect(() => {
        if (currentSlide >= visiblePosters.length) {
            setCurrentSlide(0);
        }
    }, [visiblePosters.length, currentSlide]);

    // Preload next and previous images ahead of time
    useEffect(() => {
        if (visiblePosters.length <= 1) return;
        const nextIdx = (currentSlide + 1) % visiblePosters.length;
        const prevIdx = (currentSlide - 1 + visiblePosters.length) % visiblePosters.length;

        [nextIdx, prevIdx].forEach((idx) => {
            const item = visiblePosters[idx];
            const src = isDesktop ? item?.desktopImage : item?.mobileImage;
            if (src) {
                const img = new Image();
                img.src = src;
            }
        });
    }, [currentSlide, visiblePosters, isDesktop]);

    // Auto-play timer setup
    const resetTimer = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        if (visiblePosters.length > 1) {
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % visiblePosters.length);
            }, 5000);
        }
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(autoPlayRef.current);
    }, [visiblePosters.length]);

    // Analytics
    useEffect(() => {
        const currentPoster = visiblePosters[currentSlide];
        if (!currentPoster) return;

        window.gtag?.("event", "banner_view", {
            banner_id: currentPoster.id,
            banner_name: currentPoster.alt,
            campaign_link: currentPoster.link,
        });
    }, [currentSlide, visiblePosters]);

    const nextSlide = () => {
        if (visiblePosters.length <= 1) return;
        resetTimer();
        window.gtag?.("event", "carousel_next_click");
        setCurrentSlide((prev) => (prev + 1) % visiblePosters.length);
    };

    const prevSlide = () => {
        if (visiblePosters.length <= 1) return;
        resetTimer();
        window.gtag?.("event", "carousel_previous_click");
        setCurrentSlide((prev) => (prev - 1 + visiblePosters.length) % visiblePosters.length);
    };

    const goToSlide = (index) => {
        resetTimer();
        setCurrentSlide(index);
    };

    if (visiblePosters.length === 0) return null;

    return (
        <div className="relative w-full overflow-hidden  px-4 sm:px-6 md:px-8 lg:px-4 mt-20 md:mt-30">
            {/* Main Carousel Container */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {visiblePosters.map((poster, index) => {
                        // Only mount nearby slides into the render pipeline to keep animation smooth
                        const isNearby =
                            Math.abs(currentSlide - index) <= 1 ||
                            (currentSlide === 0 && index === visiblePosters.length - 1) ||
                            (currentSlide === visiblePosters.length - 1 && index === 0);

                        return (
                            <div
                                key={poster.id}
                                className="w-full flex-shrink-0"
                                style={{ transform: "translate3d(0, 0, 0)" }}
                            >
                                <Link
                                    to={poster.link}
                                    onClick={() => {
                                        window.gtag?.("event", "banner_click", {
                                            banner_id: poster.id,
                                            banner_name: poster.alt,
                                            campaign_link: poster.link,
                                        });
                                    }}
                                >
                                    {/* Desktop Image */}
                                    <img
                                        src={isNearby && isDesktop ? poster.desktopImage : ""}
                                        alt={poster.alt}
                                        decoding="async"
                                        className="w-full h-auto hidden md:block object-contain cursor-pointer"
                                        style={{
                                            maxHeight: "calc(90vh - 120px)",
                                            minHeight: "300px",
                                        }}
                                    />

                                    {/* Mobile Image */}
                                    <img
                                        src={isNearby && !isDesktop ? poster.mobileImage : ""}
                                        alt={poster.alt}
                                        decoding="async"
                                        className="w-full h-auto block md:hidden object-contain cursor-pointer"
                                        style={{
                                            maxHeight: "calc(70vh - 100px)",
                                            minHeight: "200px",
                                        }}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 z-20 shadow-lg hover:scale-110"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 z-20 shadow-lg hover:scale-110"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 sm:space-x-3 mb-2">
                {visiblePosters.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${
                            index === currentSlide
                                ? "w-8 sm:w-10 h-2 sm:h-2 bg-gray-800 rounded-lg"
                                : "w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 hover:bg-gray-600 rounded-full"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PosterCarousel;