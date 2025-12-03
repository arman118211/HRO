import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PosterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Poster data with separate desktop and mobile images
  const posters = [
    {
      id: 1,
      desktopImage: "./desktop_img/1.desktop.JPG",
      mobileImage: "./mobile_view/01.Mobile.JPG",
      alt: "Poster 1"
    },
    {
      id: 2,
      desktopImage: "./desktop_img/2.desktop.JPG",
      mobileImage: "./mobile_view/02.Mobile.JPG",
      alt: "Poster 2"
    },
    {
      id: 3,
      desktopImage: "./desktop_img/3.desktop.JPG",
      mobileImage: "./mobile_view/03.Mobile.JPG",
      alt: "Poster 3"
    },
    {
      id: 4,
      desktopImage: "./desktop_img/4.desktop.JPG",
      mobileImage: "./mobile_view/04.Mobile.JPG",
      alt: "Poster 4"
    },
    {
      id: 5,
      desktopImage: "./desktop_img/5.desktop.JPG",
      mobileImage: "./mobile_view/05.Mobile.JPG",
      alt: "Poster 5"
    },
    {
      id: 6,
      desktopImage: "./desktop_img/6.desktop.JPG",
      mobileImage: "./mobile_view/06.Mobile.JPG",
      alt: "Poster 6"
    },
    {
      id: 7,
      desktopImage: "./desktop_img/7.desktop.JPG",
      mobileImage: "./mobile_view/07.Mobile.JPG",
      alt: "Poster 7"
    },
    {
      id: 8,
      desktopImage: "./desktop_img/8.desktop.JPG",
      mobileImage: "./mobile_view/08.Mobile.JPG",
      alt: "Poster 8"
    },
    {
      id: 9,
      desktopImage: "./desktop_img/9.desktop.JPG",
      mobileImage: "./mobile_view/09.Mobile.JPG",
      alt: "Poster 9"
    },
    {
      id: 10,
      desktopImage: "./desktop_img/10.desktop.JPG",
      mobileImage: "./mobile_view/10.Mobile.JPG",
      alt: "Poster 10"
    },
    {
      id: 11,
      desktopImage: "./desktop_img/11.desktop.JPG",
      mobileImage: "./mobile_view/11.Mobile.JPG",
      alt: "Poster 11"
    },
    {
      id: 12,
      desktopImage: "./desktop_img/12.desktop.JPG",
      mobileImage: "./mobile_view/12.Mobile.JPG",
      alt: "Poster 12"
    }

  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posters.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [posters.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posters.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posters.length) % posters.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-4 mt-20 md:mt-30">
      {/* Main Carousel Container */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="w-full flex-shrink-0"
            >
              {/* Desktop Image (hidden on mobile) */}
              <img 
                src={poster.desktopImage}
                alt={poster.alt}
                className="w-full h-auto hidden md:block object-contain"
                style={{ 
                  maxHeight: 'calc(90vh - 120px)',
                  minHeight: '300px'
                }}
                loading="lazy"
              />
              
              {/* Mobile Image (hidden on desktop) */}
              <img 
                src={poster.mobileImage}
                alt={poster.alt}
                className="w-full h-auto block md:hidden object-contain"
                style={{ 
                  maxHeight: 'calc(70vh - 100px)',
                  minHeight: '200px'
                }}
                loading="lazy"
              />
            </div>
          ))}
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

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full z-20">
          {currentSlide + 1} / {posters.length}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 sm:space-x-3 mb-2">
        {posters.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 sm:w-10 h-2 sm:h-2 bg-gray-800 rounded-lg' 
                : 'w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 hover:bg-gray-600 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="mt-4 w-full h-1 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gray-800 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / posters.length) * 100}%` }}
        />
      </div> */}

      {/* Play/Pause Button */}
      {/* <button
        onClick={() => {
          // You can implement pause functionality here
          const isPaused = false; // Add state for pause if needed
          console.log(isPaused ? 'Resume' : 'Pause');
        }}
        className="mt-4 mx-auto flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
        aria-label="Toggle autoplay"
      >
        <span className="text-xs sm:text-sm">Auto-play: On</span>
      </button> */}
    </div>
  );
};

export default PosterCarousel;