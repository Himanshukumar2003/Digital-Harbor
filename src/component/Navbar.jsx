import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [indoorDropdown, setIndoorDropdown] = useState(false);
  const [outdoorDropdown, setOutdoorDropdown] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);

  // Navbar background change on scroll
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
              src={bgWhite ? "../black-logo.png" : "../white-logo.png"}
              className="w-[150px] object-cover cursor-pointer"
              alt="Logo"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-x-8">
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold cursor-pointer`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold cursor-pointer`}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>

            {/* Indoor Signage */}
            {/* Indoor Signage */}
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold cursor-pointer relative`}
              onMouseEnter={() => setIndoorDropdown(true)}
              onMouseLeave={() => setIndoorDropdown(false)}
            >
              Indoor Signage
              {indoorDropdown && (
                <div className="absolute top-full left-0 pt-3">
                  {/* child */}
                  <div className="bg-white shadow-lg border rounded-md w-56 overflow-hidden">
                    <ul>
                      <li
                        className="px-4 py-2 text-black hover:text-red-600 hover:bg-red-100cursor-pointer"
                        onClick={() =>
                          navigate("/indoorsignage/window-display")
                        }
                      >
                        Window Display
                      </li>

                      <li
                        className="px-4 py-2 text-black hover:text-red-600  hover:bg-red-100 cursor-pointer"
                        onClick={() =>
                          navigate("/indoorsignage/digital-display")
                        }
                      >
                        Digital Menu Display
                      </li>

                      <li
                        className="px-4 py-2 text-black hover:text-red-600  hover:bg-red-100 cursor-pointer"
                        onClick={() =>
                          navigate("/indoorsignage/interactive-display")
                        }
                      >
                        Interactive Display
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Outdoor Signage */}
            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold cursor-pointer relative`}
              onMouseEnter={() => setOutdoorDropdown(true)}
              onMouseLeave={() => setOutdoorDropdown(false)}
            >
              Outdoor Signage
              {outdoorDropdown && (
                <div className="absolute top-full left-0 pt-3">
                  {/* child */}
                  <div className="bg-white shadow-lg border rounded-md w-56 overflow-hidden">
                    <ul>
                      <li
                        className="px-4 py-2 text-black hover:text-red-600  hover:bg-red-100 cursor-pointer"
                        onClick={() =>
                          navigate("/outdoorsignage/portable-display")
                        }
                      >
                        Portable Display
                      </li>

                      <li
                        className="px-4 py-2 text-black hover:text-red-600  hover:bg-red-100 cursor-pointer"
                        onClick={() =>
                          navigate("/outdoorsignage/led-display-1920x640")
                        }
                      >
                        1920 × 640 LED Display
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold cursor-pointer`}
              onClick={() => navigate("/solutions")}
            >
              Solutions
            </li>

            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold cursor-pointer`}
              onClick={() => navigate("/recent-work")}
            >
              Recent Work
            </li>

            <li
              className={`${
                bgWhite ? "text-black" : "text-white"
              } hover:text-red-600 font-bold cursor-pointer`}
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 md:hidden h-full bg-black p-5 transition-all duration-300 z-[9999] ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-6 right-3 text-3xl text-red-600 cursor-pointer">
          <IoClose onClick={closeMenu} />
        </div>

        <ul className="mt-10 space-y-4">
          <li
            className="text-white font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
              closeMenu();
            }}
          >
            Home
          </li>

          <li
            className="text-white font-bold cursor-pointer"
            onClick={() => {
              navigate("/about-us");
              closeMenu();
            }}
          >
            About
          </li>

          {/* Indoor Signage Mobile */}
          <li
            className="text-white font-bold cursor-pointer"
            onClick={() => setIndoorDropdown(!indoorDropdown)}
          >
            Indoor Signage {indoorDropdown ? "▲" : "▼"}
          </li>

          {indoorDropdown && (
            <ul className="ml-5 space-y-2">
              <li
                className="text-gray-300 cursor-pointer"
                onClick={() => {
                  navigate("/indoorsignage/window-display");
                  closeMenu();
                }}
              >
                Window Display
              </li>

              <li
                className="text-gray-300 cursor-pointer"
                onClick={() => {
                  navigate("/indoorsignage/digital-display");
                  closeMenu();
                }}
              >
                Digital Menu Display
              </li>

              <li
                className="text-gray-300 cursor-pointer"
                onClick={() => {
                  navigate("/indoorsignage/interactive-display");
                  closeMenu();
                }}
              >
                Interactive Display
              </li>
            </ul>
          )}

          {/* Outdoor Signage Mobile */}
          <li
            className="text-white font-bold cursor-pointer"
            onClick={() => setOutdoorDropdown(!outdoorDropdown)}
          >
            Outdoor Signage {outdoorDropdown ? "▲" : "▼"}
          </li>

          {outdoorDropdown && (
            <ul className="ml-5 space-y-2">
              <li
                className="text-gray-300 cursor-pointer"
                onClick={() => {
                  navigate("/outdoorsignage/portable-display");
                  closeMenu();
                }}
              >
                Portable Display ( Battery Operated)
              </li>

              <li
                className="text-gray-300 cursor-pointer"
                onClick={() => {
                  navigate("/outdoorsignage/led-display-1920x640");
                  closeMenu();
                }}
              >
                1920 x 640 MM LED Display
              </li>
            </ul>
          )}

          <li
            className="text-white font-bold cursor-pointer"
            onClick={() => {
              navigate("/solutions");
              closeMenu();
            }}
          >
            Solutions
          </li>

          <li
            className="text-white font-bold cursor-pointer"
            onClick={() => {
              navigate("/recent-work");
              closeMenu();
            }}
          >
            Recent Work
          </li>

          <li
            className="text-white font-bold cursor-pointer"
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
