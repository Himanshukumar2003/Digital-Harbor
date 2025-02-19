import React from "react";
import { FaCartShopping, FaBookOpen } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { PiHairDryerFill } from "react-icons/pi";
import { MdFitnessCenter } from "react-icons/md";
import { BiSolidInjection } from "react-icons/bi";

const SolutionCompo = () => {
  const SolutionsJson = [
    {
      id: 1,
      Solution_delay: "100",
      Solution_bgcolor: "#F1DEE0",
      Solution_bordercolor: "#F5939A",
      Solution_icon: <FaCartShopping />,
      Solution_head: "Retail Digital Signage",
      Solution_para:
        "Increase sales at your retail store with professional signs designed using Digital Harbor digital signage software.",
    },
    {
      id: 2,
      Solution_delay: "200",
      Solution_bgcolor: "#F4E9DD",
      Solution_bordercolor: "#EFC293",
      Solution_icon: <ImSpoonKnife />,
      Solution_head: "Hospitality Digital Signage",
      Solution_para:
        "Digital Harbor digital signage software powers screens at hospitality venues around the world.",
    },
    {
      id: 3,
      Solution_delay: "300",
      Solution_bgcolor: "#D0D8DB",
      Solution_bordercolor: "#ABBCC6",
      Solution_icon: <PiHairDryerFill />,
      Solution_head: "Hair Salon Digital Signage",
      Solution_para:
        "Digital Harbor digital signage software powers digital displays for many retail businesses worldwide, including the best hair salons",
    },
    {
      id: 4,
      Solution_delay: "400",
      Solution_bgcolor: "#DCD8F0",
      Solution_bordercolor: "#A797F5",
      Solution_icon: <BiSolidInjection />,
      Solution_head: "Pharmacy Digital Signage",
      Solution_para:
        "Pharmacies worldwide trust Digital Harbor digital signage software to create eye-catching signage for their stores",
    },
    {
      id: 5,
      Solution_delay: "500",
      Solution_bgcolor: "#E2EFF0",
      Solution_bordercolor: "#88EAF4",
      Solution_icon: <MdFitnessCenter />,
      Solution_head: "Fitness",
      Solution_para:
        "Deploy your newly crafted digital messages to your gym's screens with just a few clicks. You can use our software to deploy the same message or different messaging to multiple screens at the same time.",
    },
    {
      id: 6,
      Solution_delay: "500",
      Solution_bgcolor: "#E2EFF0",
      Solution_bordercolor: "#88EAF4",
      Solution_icon: <FaBookOpen />, // Changed icon
      Solution_head: "Education Digital Signage",
      Solution_para:
        "Enhance learning experiences with dynamic digital displays in schools, colleges, and training centers using Digital Harbor digital signage software.",
    },
  ];

  return (
      <div className="grid grid-cols-12 gap-5">
        {SolutionsJson.map((val) => (
          <div
            className=" md:col-span-4 col-span-12 h-full"
            key={val.id}
            data-aos="fade-right"
            data-aos-delay={val.Solution_delay}
            data-aos-duration="1000"
          >
            {/* Card Container */}
            <div className="flex h-full flex-col  py-10 px-6 bg-gray-100 rounded-lg shadow-lg transition-all duration-700 ease-linear hover:-translate-y-2">
              {/* Icon Wrapper */}
              <div className="w-20 h-20 flex items-center justify-center bg-red-600 text-white rounded-full text-4xl shadow-lg border-8 border-white transition-all duration-700 ease-linear hover:bg-white hover:text-black">
                {val.Solution_icon}
              </div>
              {/* Text Content */}
              <div className="mt-4">
                <h6 className="text-lg font-semibold text-black">{val.Solution_head}</h6>
                <p className="text-gray-500 mt-2">{val.Solution_para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default SolutionCompo;
