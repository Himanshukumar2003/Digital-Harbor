import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);
  const [textBlack, setTextBlack] = useState(false);

  // Scroll event to change navbar background and text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setBgWhite(true);
        setTextBlack(true);
      } else {
        setBgWhite(false);
        setTextBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu
  const closeMenu = () => setShow(false);

  return (
    <>
      <nav
        className={`shadow-DarkShadow z-[9999] py-5 px-5 fixed top-0 w-full transition-all duration-300 ${
          bgWhite ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a onClick={() => navigate("/")}>
            <img
              src={bgWhite ? "./black-logo.png" : "./white-logo.png"}
              className="w-[150px] object-cover"
              alt="Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-x-8">
            <li
              className={`${
                textBlack ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`${
                textBlack ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>

            {/* Signage Dropdown */}
            <li
              className={`${
                textBlack ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer relative`}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              onClick={() => setDropdown(!dropdown)}
            >
              Signage
              {dropdown && (
                <div className="absolute top-full left-0 bg-white shadow-lg border rounded-md overflow-hidden w-52">
                  <ul>
                    <li
                      className="px-4 py-2 text-black hover:text-red-600 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate("/indoorsignage")}
                    >
                      Indoor Signage
                    </li>
                    <li
                      className="px-4 py-2 text-black hover:text-red-600 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate("/digitalmenudisplays")}
                    >
                      Digital Menu Displays
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li
              className={`${
                textBlack ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/outdoorsignage")}
            >
              Outdoor Signage
            </li>
            <li
              className={`${
                textBlack ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/solutions")}
            >
              Solutions
            </li>
            <li
              className={`${
                textBlack ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/recent-work")}
            >
              Recent Work
            </li>
            <li
              className={`${
                textBlack ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-[99999]">
            <FaBars className={`text-2xl cursor-pointer ${textBlack ? "text-black" : "text-white"}`} onClick={() => setShow(true)} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
