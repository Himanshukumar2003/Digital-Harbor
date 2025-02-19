import React from "react";
import Features from "../component/Features";
import { GoArrowUpRight } from "react-icons/go";
import AboutCompo from "../component/AboutCompo";
import { useNavigate } from "react-router-dom";
import screen1 from "/screen3.webp";
import outdoor from "/outdoor-img.png";
import screen2 from "/public/indoorsignage.png";
import ImageSlider from "../component/Hero-section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();
  const WorkMaping = [
    {
      id: 1,
      workdelay: "100",
      WorkImg: "./work/work1.webp",
    },
    {
      id: 2,
      workdelay: "200",
      WorkImg: "./work/work2.webp",
    },
    {
      id: 3,
      workdelay: "300",
      WorkImg: "./work/work3.webp",
    },
  ];

  return (
    <>
      <ImageSlider></ImageSlider>

      <AboutCompo AboutBtn={true} />
      <div className='section bg-[url("./dots.png")] bg-gray-50'>
        <div className="container">
          {/* First Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            {/* Left Side (Text in Large Screens, Below Image in Small Screens) */}
            <div
              className="order-2 lg:order-1 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <h2 className="lefthead">
                43" Smart Outdoor Signage Portable Screen
              </h2>
              <p>
                Inheriting the exquisite craftsmanship and advanced special
                effects of this product series, the appearance design is more
                beautiful, the piano paint is matched with the wire drawing
                process, the ultra-thin frame, and seven new colors are added.
              </p>
              <button
                className="circlebtn"
                onClick={() => navigate("/outdoorsignage")}
              >
                Learn More <GoArrowUpRight className="circledesign" />
              </button>
            </div>

            {/* Right Side (Image in Large Screens, Above Text in Small Screens) */}
            <div
              className="order-1 lg:order-2"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={outdoor} alt="Outdoor Signage" className="w-full" />
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-5">
            {/* Left Side (Image in Large Screens, Above Text in Small Screens) */}
            <div
              className="order-1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <img src={screen2} alt="Screen 2" className="w-full" />
            </div>

            {/* Right Side (Text in Large Screens, Below Image in Small Screens) */}
            <div
              className="order-2 lg:order-1 text-center lg:text-left"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h2 className="lefthead">
                Indoor Full Screen LCD Digital Signage
              </h2>
              <p>
                The Indoor Double-Sided Full-Screen LCD Digital Signage is a
                powerful tool for businesses looking to enhance their
                advertising efforts. Its double-sided display, high-resolution
                visuals, and sleek design make it an effective and attractive
                solution for engaging your audience. Invest in this advanced
                digital signage to maximize your advertising reach and impact.
              </p>
              <button
                className="circlebtn"
                onClick={() => navigate("/indoorsignage")}
              >
                Learn More <GoArrowUpRight className="circledesign" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="centerhead">
            <h2>Our Recent Work</h2>
          </div>
          <div className="relative mt-5">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
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
                <SwiperSlide
                  key={val.id}
                  data-aos="fade-right"
                  data-aos-delay={val.workdelay}
                >
                  <div className="flex items-center justify-center rounded-2xl overflow-hidden">
                    <img
                      className="w-full rounded-2xl scale-100 transition-all duration-300 ease-linear hover:scale-125 hover:blur-[1px]"
                      src={val.WorkImg}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
              class="swiper-button-next"
              data-aos="fade-right"
              data-aos-delay="800"
            ></div>
            <div
              class="swiper-button-prev"
              data-aos="fade-left"
              data-aos-delay="1000"
            ></div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="centerhead">
            <h2>Explore Premium Features</h2>
          </div>
          <div className="grid grid-cols-12 xl:mt-20 md:mt-20 mt-10">
            <Features />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
