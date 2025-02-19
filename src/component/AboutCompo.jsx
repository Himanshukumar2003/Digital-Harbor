import React from "react";
import { GiProgression } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";
import { GiThink } from "react-icons/gi";
const AboutCompo = ({ AboutBtn }) => {
  const navigate = useNavigate();
  const AboutJSon = [
    {
      id: 1,
      About_icon: <GiThink />,
      About_head: "Imagine captivating",
      About_para:
        "Imagine captivating your customers and visitors with stunning visuals that bring your brand's message to life. Our innovative digital signage technology does just that, transforming ordinary spaces into extraordinary experiences.",
    },
    {
      id: 2,
      About_icon: <IoIosCreate />,
      About_head: "Creating and managing",
      About_para:
        "Creating and managing your digital displays has never been easier with our user-friendly platform. Whether you want to promote products, share important information, or simply elevate the atmosphere, our customizable solutions are designed to fit your unique needs.",
    },
    {
      id: 3,
      About_icon: <GiProgression />,
      About_head: "Experienced professionals",
      About_para:
        "Our team of experienced professionals is here to guide you every step of the way. From choosing the perfect hardware to designing eye-catching content, we're committed to delivering exceptional service and ensuring your digital signage is a success.",
    },
    {
      id: 4,
      About_icon: <RiTeamFill />,
      About_head: "Audience Engagement",
      About_para:
        "Ready to take your audience engagement to the next level? Let’s work together to create unforgettable experiences. At Digital Harbor, we’re excited to help you transform your vision into reality!",
    },
  ];
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-12 place-items-center">
            <div
              className="xl:col-span-6 md:col-span-7 col-span-12"
              data-aos="fade-right"
              data-aosduration="1000"
              data-aos-delay="200"
            >
              <div>
                <div>
                  <h2 className="mb-5">Welcome to Digital Harbor</h2>
                  <p>
                    Welcome to Digital Harbor, your go-to digital signage
                    solution in Australia. We are here to revolutionize the way
                    you connect with your audience, making every interaction
                    dynamic and engaging.
                  </p>
                </div>
                <div className="mt-10">
                  {AboutJSon.map((val) => (
                    <div
                      className="grid grid-cols-12 items-start mb-10"
                      key={val.id}
                    >
                      <div className="xl:col-span-2 md:col-span-2 col-span-12 w-16 h-16 rounded-xl bg-gray-100 py-1 px-2 flex items-center justify-center text-[40px] text-Black">
                        {val.About_icon}
                      </div>
                      <div className="xl:col-span-10 md:col-span-10 col-span-12">
                        <h6 className="mb-2 text-Black">{val.About_head}</h6>
                        <p>{val.About_para}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {AboutBtn ? (
                  <button
                    className="circlebtn"
                    onClick={() => navigate("/about")}
                  >
                    Learn More <GoArrowUpRight className="circledesign" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className="xl:col-span-6 md:col-span-5 col-span-12"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <img src="./about.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompo;
