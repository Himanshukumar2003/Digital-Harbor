import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import img1 from "/header-1.jpg";
import img2 from "/header-2.jpg";
import img4 from "/header-3.jpg";


const ImageSlider = () => {
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
          <img src={img1} alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        
         <SwiperSlide>
          <img src={img4} alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide> 
      </Swiper>
      
      {/* Overlay Text */}
      <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center text-center text-white p-5 bg-black bg-opacity-50">
        <h1 className="mb-5 xl:leading-[70px] capitalize text-4xl font-bold">
          Easy, <span className="text-white ">affordable,</span> beautiful {" "}
          <span className="text-white">digital signage</span>
        </h1>
        <p className="text-gray-50  text-[28px] max-w-xl">Australia's premium Digital Display Board specialists!
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
