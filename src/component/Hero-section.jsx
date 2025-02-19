import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ImageSlider = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate hook

  return (
    <div className="relative w-full h-[90vh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="/header-1.jpg" // ✅ Fixed image path (public folder)
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/header-2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/header-3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Overlay Text */}
      <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center text-center text-white p-5 bg-black bg-opacity-50">
        <h1 className="mb-5 xl:leading-[70px] capitalize text-4xl font-bold">
          Easy, <span className="text-white">affordable,</span> beautiful{" "}
          <span className="text-white">digital signage</span>
        </h1>
        <p className="text-gray-50 text-[28px] max-w-xl">
          Australia's premium Digital Display Board specialists!
        </p>

       
      </div>
    </div>
  );
};

export default ImageSlider;
