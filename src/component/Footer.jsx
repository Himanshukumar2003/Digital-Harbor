import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const SocialLink = [
    {
      id: 1,
      Social_links: "",
      Social_icon: <FaFacebookF />,
    },
    {
      id: 2,
      Social_links: "",
      Social_icon: <FaInstagram />,
    },
    {
      id: 3,
      Social_links: "",
      Social_icon: <FaTwitter />,
    },
    {
      id: 4,
      Social_links: "",
      Social_icon: <FaLinkedinIn />,
    },
    {
      id: 5,
      Social_links: "",
      Social_icon: <FaGoogle />,
    },
  ];
  return (
    <>
      <div className="section bg-Black">
        <div className="container">
          <div className="grid-cols-9  justify-center items-center">
            <div className="flex items-center justify-center flex-col">
              <a onClick={() => navigate("/")}>
                <img src="./white-logo.png" className="w-40 xl:w-52" />
              </a>
              <ul className="flex items-center justify-start xl:justify-center gap-x-5 mt-5 flex-wrap">
                <a className="text-White" onClick={() => navigate("/")}>
                  Home
                </a>
                <a className="text-White" onClick={() => navigate("/about-us")}>
                  About us
                </a>
                <a
                  className="text-White"
                  onClick={() => navigate("/indoorsignage")}
                >
                  Indoor Signage
                </a>
                <a
                  className="text-White"
                  onClick={() => navigate("/outdoorsignage")}
                >
                  Outdoor Signage
                </a>
                <a
                  className="text-White"
                  onClick={() => navigate("/solutions")}
                >
                  Solutions
                </a>
                <a
                  className="text-White"
                  onClick={() => navigate("/recent-work")}
                >
                  Recent Work
                </a>
                <a className="text-White" onClick={() => navigate("/contact")}>
                  Contact
                </a>
              </ul>
              <ul className="flex items-center justify-start xl:justify-center flex-wrap gap-x-5 mt-5">
                <a className="text-White" href="tel: +0434264234">
                  0434264234
                </a>
                <a
                  className="text-White"
                  href="mailto: solutions@digitalharbor.com.au"
                >
                  solutions@digitalharbor.com.au
                </a>
              </ul>
              <div className="flex items-center justify-center gap-x-0 xl:gap-x-5 mt-5">
                {SocialLink.map((val) => (
                  <a
                    key={val.id}
                    className="text-xl z-10 w-10 h-10 bg-transparent hover:bg-White text-white hover:text-Black shadow-DarkShadow flex items-center justify-center rounded-full border border-dashed border-Gray transition-all duration-1000 ease-in-out xl:mr-0 mr-5"
                    href={val.Social_icon}
                  >
                    {val.Social_icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
