import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSlider = ({ images, alt }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () =>
    setCurrentImage((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextImage = () =>
    setCurrentImage((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 justify-center lg:justify-start">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
              i === currentImage
                ? "border-primary shadow-lg ring-2 ring-primary/30 scale-105"
                : "border-border opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`${alt} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-square max-h-[500px] flex-1 group">
        <img
          src={images[currentImage]}
          alt={alt}
          className="w-full h-full    rounded-lg bg-gray-50  object-contain transition-all duration-500"
        />
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentImage ? "bg-primary w-6" : "bg-background/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
