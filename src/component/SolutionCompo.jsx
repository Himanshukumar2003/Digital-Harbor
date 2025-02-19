import React from "react";
import { FaCartShopping } from "react-icons/fa6";
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
  ];
  return (
    <>
      {SolutionsJson.map((val) => (
        <div
          className="xl:col-span-4 md-col-span-6 col-span-12"
          key={val.id}
          data-aos="fade-right"
          data-aos-delay={val.Solution_delay}
          data-aos-duration="1000"
        >
          <div className="py-10 px-10 bg-gray-100 rounded-lg my-2 mx-2 h-full hover:-translate-y-2 transition-all duration-700 ease-linear">
            <div className="w-20 h-20 flex items-center justify-center bg-red-600 hover:bg-white hover:text-Black text-white rounded-full text-4xl shadow-DarkShadow border-8 border-solid border-White transition-all duration-700 ease-linear">
              {val.Solution_icon}
            </div>
            <div>
              <h6 className="my-4">{val.Solution_head}</h6>
              <p>{val.Solution_para}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SolutionCompo;
