import { useState, useEffect } from "react";

function CustomSlider({
  images = [],
  height = "450px",
  auto = true,
  delay = 3000,
}) {
  const [current, setCurrent] = useState(0);

  // Auto slide (stop at last)
  useEffect(
    function () {
      if (!auto || images.length <= 1) return;

      if (current === images.length - 1) return; // stop at last

      const interval = setInterval(function () {
        setCurrent(function (prev) {
          if (prev < images.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, delay);

      return function () {
        clearInterval(interval);
      };
    },
    [current, images, auto, delay]
  );

  function nextSlide() {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  }

  function prevSlide() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  const isFirst = current === 0;
  const isLast = current === images.length - 1;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{ height }}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map(function (img, index) {
          return (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-full object-contain flex-shrink-0"
              style={{ height }}
            />
          );
        })}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        disabled={isFirst}
        className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition
        ${
          isFirst
            ? "bg-red-300 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700 text-white"
        }`}
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        disabled={isLast}
        className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition
        ${
          isLast
            ? "bg-red-300 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700 text-white"
        }`}
      >
        ›
      </button>
    </div>
  );
}

export default CustomSlider;
