import Breadcrumb from "../component/Breadcrumb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "../component/CustomSlider";
import { Outlet } from "react-router-dom";
const IndoorSignage = () => {
  const IndoorBenefitJson = [
    {
      id: 1,
      Outdoor_delay: "100",
      OutdoorBenefitHead: "Industrial Grade LCD Screen",
    },
    {
      id: 2,
      Outdoor_delay: "200",
      OutdoorBenefitImg: "./live-video.svg",
      OutdoorBenefitHead: "Android / Windows / Stand-alone Os Optional",
    },
    {
      id: 3,
      Outdoor_delay: "300",
      OutdoorBenefitImg: "./exhibition.svg",
      OutdoorBenefitHead: "Automatic Loop Play",
    },
    {
      id: 4,
      Outdoor_delay: "400",
      OutdoorBenefitImg: "./outdoorsignage.svg",
      OutdoorBenefitHead: "Charge level indicatoSupport Multiple Split Screen",
    },
    {
      id: 5,
      Outdoor_delay: "500",
      OutdoorBenefitImg: "./temporary.svg",
      OutdoorBenefitHead: "CMS (Managment System)",
    },
    {
      id: 6,
      Outdoor_delay: "600",
      OutdoorBenefitImg: "./temporary.svg",
      OutdoorBenefitHead: "178 Wide Viewing Angle",
    },
    {
      id: 7,
      Outdoor_delay: "700",
      OutdoorBenefitImg: "./temporary.svg",
      OutdoorBenefitHead: "Built in Loudspeaker",
    },
    {
      id: 8,
      Outdoor_delay: "800",
      OutdoorBenefitImg: "./temporary.svg",
      OutdoorBenefitHead: "Rich External Interface (Option)",
    },
    {
      id: 9,
      Outdoor_delay: "900",
      OutdoorBenefitImg: "./temporary.svg",
      OutdoorBenefitHead: "Application Scenario",
    },
  ];

  return (
    <>
      <Outlet />
    </>
  );
};

export default IndoorSignage;
