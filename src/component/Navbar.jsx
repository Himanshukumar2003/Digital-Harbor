import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);

  // Scroll event to change navbar background and logo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBgWhite(true);
      } else {
        setBgWhite(false);
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
        className={`shadow-DarkShadow py-2 px-5 fixed top-0 w-full z-[9999] transition-all duration-300 ${
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
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>

            {/* Signage Dropdown */}
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
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
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/outdoorsignage")}
            >
              Outdoor Signage
            </li>
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/solutions")}
            >
              Solutions
            </li>
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/recent-work")}
            >
              Recent Work
            </li>
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold capitalize cursor-pointer`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <FaBars
              className={`text-2xl cursor-pointer ${
                bgWhite ? "text-black" : "text-white"
              }`}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 md:hidden h-full bg-black p-5 transition-all duration-300 z-[9999] ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-6 right-3 text-2xl text-red-600 cursor-pointer">
          <IoClose onClick={closeMenu} />
        </div>

        <ul className="mt-10 space-y-4">
          <li
            className="text-white hover:text-red-600 font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
              closeMenu();
            }}
          >
            Home
          </li>
          <li
            className="text-white hover:text-red-600 font-bold cursor-pointer"
            onClick={() => {
              navigate("/about-us");
              closeMenu();
            }}
          >
            About
          </li>

          {/* Mobile Dropdown */}
          <li
            className="text-white hover:text-red-600 font-bold cursor-pointer"
            onClick={() => setDropdown(!dropdown)}
          >
            Signage {dropdown ? "▲" : "▼"}
          </li>
          {dropdown && (
            <ul className="ml-5 mt-2 space-y-2">
              <li
                className="text-gray-300 hover:text-red-500 cursor-pointer"
                onClick={() => {
                  navigate("/indoorsignage");
                  closeMenu();
                }}
              >
                Indoor Signage
              </li>
              <li
                className="text-gray-300 hover:text-red-500 cursor-pointer"
                onClick={() => {
                  navigate("/digitalmenudisplays");
                  closeMenu();
                }}
              >
                Digital Menu Displays
              </li>
            </ul>
          )}

          <li
            className="text-white hover:text-red-600 font-bold cursor-pointer"
            onClick={() => {
              navigate("/outdoorsignage");
              closeMenu();
            }}
          >
            Outdoor Signage
          </li>
          <li
            className="text-white hover:text-red-600 font-bold cursor-pointer"
            onClick={() => {
              navigate("/solutions");
              closeMenu();
            }}
          >
            Solutions
          </li>
          <li
            className="text-white hover:text-red-600 font-bold cursor-pointer"
            onClick={() => {
              navigate("/recent-work");
              closeMenu();
            }}
          >
            Recent Work
          </li>
          <li
            className="text-white hover:text-red-600 font-bold cursor-pointer"
            onClick={() => {
              navigate("/contact");
              closeMenu();
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
