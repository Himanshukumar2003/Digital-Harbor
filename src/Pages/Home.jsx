import Features from "../component/Features";
import { GoArrowUpRight } from "react-icons/go";
import AboutCompo from "../component/AboutCompo";
import { useNavigate } from "react-router-dom";

import ImageSlider from "../component/Hero-section";
import { useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServiceCards from "../component/Our-service";
import { ClientMaping } from "@/data/ClientLogos";
import { Products } from "@/data/products";
import { WorkMaping } from "@/data/resent-work";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
  }, []);

  return (
    <>
      <ImageSlider></ImageSlider>

      <AboutCompo AboutBtn={true} />

      {Products.map((item, index) => (
        <div
          key={item.id}
          className={`section ${
            index % 2 === 1 ? 'bg-[url("./dots.png")] bg-gray-50' : "bg-white"
          }`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-5">
              {/* Image */}
              <div
                className={` mix-blend-multiply  ${
                  index % 2 === 0 ? "order-1 lg:order-2" : "order-1"
                }`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full  max-h-[500px] object-contain"
                />
              </div>

              {/* Text */}
              <div
                className={`${
                  index % 2 === 0 ? "order-2 lg:order-1" : "order-2 lg:order-2"
                } lg:text-left`}
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h2 className="lefthead">{item.title}</h2>
                <h4 className=" mb-3   text-lg">{item.subtitle}</h4>
                {item.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                <button
                  className="circlebtn"
                  onClick={() => navigate(item.slug)}
                >
                  Learn More <GoArrowUpRight className="circledesign" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="section">
        <div className="container">
          <div className="centerhead">
            <h2>Our Recent Work</h2>
          </div>
          <div className="relative mt-5">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              loop={true}
              slidesPerView={4}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="relative"
            >
              {WorkMaping.map((val) => (
                <SwiperSlide key={val.id}>
                  <div className="flex items-center justify-center rounded-2xl overflow-hidden">
                    <a href={val.WorkImg} data-fancybox="gallery">
                      <img
                        className="w-full rounded-2xl   aspect-square scale-100 transition-all duration-300 ease-linear hover:scale-125 hover:blur-[1px]"
                        src={val.WorkImg}
                        alt=""
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
              className="swiper-button-next"
              data-aos="fade-right"
              data-aos-delay="800"
            ></div>
            <div
              className="swiper-button-prev"
              data-aos="fade-left"
              data-aos-delay="1000"
            ></div>
          </div>
        </div>
      </div>

      <ServiceCards />
      <div className="section">
        <div className="container">
          <div className="centerhead">
            <h2>Explore Premium Features</h2>
          </div>
          <div className="grid grid-cols-12  mt-4">
            <Features />
          </div>
        </div>
      </div>
      <div className="section bg-gray-50">
        <div className="container">
          <h3 className=" text-red-600 text-center mb-6">Our Clients </h3>
          <div className="flex flex-wrap items-center justify-center  gap-8  max-w-6xl mx-auto"></div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 7 },
            }}
          >
            {ClientMaping.map((val) => (
              <SwiperSlide key={val.id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={val.clientdelay}
                  className="group relative flex items-center justify-center 
        w-40 h-24 p-2 
        bg-white  
        rounded-2xl 
        shadow-sm
        hover:shadow-xl 
        transition-all duration-500 
        hover:-translate-y-2"
                >
                  <img
                    src={val.Clientlogo}
                    alt="client-logo"
                    className="object-contain transition duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
