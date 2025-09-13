import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PosterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Replace these URLs with your actual poster image URLs
  const posters = [
    {
      id: 1,
      // imageUrl: "/slider7.png"
      imageUrl: "./Slider/Picture24a.jpg"
    },
    {
      id: 2,
      // imageUrl: "/slider-p-1-2.png"
      imageUrl: "./Slider/Picture19a.jpg"
    },
    {
      id: 3,
      // imageUrl: "/slider8.png"
      imageUrl: "./Slider/Picture29a.jpg"
    },
    {
      id: 4,
      // imageUrl: "/sliderq-1.png"
      imageUrl: "./Slider/Picture30a.jpg"
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
    <div className="relative w-full min-h-[100px] max-h-[90vh] overflow-hidden bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-4 mt-15 md:mt-25 ">
      {/* Main Carousel Container */}
      <div className="relative w-full  overflow-hidden rounded-xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="w-full h-auto flex-shrink-0 "
            >
              {/* Image */}
              <img 
                src={poster.imageUrl}
                alt={`Poster ${poster.id}`}
                className="w-full h-auto object-contain max-h-[60vh] sm:max-h-[70vh] md:object-cover md:h-[400px] lg:h-[500px] xl:h-[600px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 z-20 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 z-20 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {posters.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gray-800 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute -bottom-12 sm:-bottom-14 left-0 w-full h-1 bg-gray-300 z-20 rounded-full">
        <div 
          className="h-full bg-gray-800 transition-all duration-300 rounded-full"
          style={{ width: `${((currentSlide + 1) / posters.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PosterCarousel;