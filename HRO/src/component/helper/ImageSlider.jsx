import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  console.log("images", images);

  // 🔥 Autoplay Fix
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  // Manual Controls
  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-72 sm:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src || image}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      {showArrows && images.length > 1 && (
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
          bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full 
          p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </button>
      )}

      {/* Next Button */}
      {showArrows && images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
          bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full 
          p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </button>
      )}

      {/* Dots */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6 sm:w-8 h-2"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75 w-2 h-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
