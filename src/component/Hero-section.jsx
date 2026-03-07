import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ImageSlider = () => {
  return (
    <div className="relative w-full h-[97vh] overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {[1, 2, 3, 4, 5].map(function (num) {
          return (
            <SwiperSlide key={num}>
              <img
                src={`/header-${num}.jpg`}
                alt={`Slide ${num}`}
                className="w-full h-full object-cover  transition-transform duration-[4000ms] ease-linear"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-bold tracking-wide 
      text-3xl sm:text-4xl md:text-5xl xl:text-6xl 
       mb-6  italic"
        >
          Easy, <span className="text-white">affordable,</span> beautiful <br />
          <span className="text-red-600 ">digital signage</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mb-8"
        >
          Australia’s premium Digital Display Board specialists!
        </p>

        {/* Optional CTA Button */}
        <div data-aos="fade-up" data-aos-delay="500">
          <a
            href="/about-us"
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-red-500/40"
          >
            About us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
