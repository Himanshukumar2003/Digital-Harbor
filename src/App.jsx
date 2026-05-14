import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Solutions from "./Pages/Solutions";
import IndoorSignage from "./Pages/IndoorSignage";
import OutdoorSignage from "./Pages/OutdoorSignage";
import Work from "./Pages/Work";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import DigitalMenu from "./Pages/DigitalMenu";
import WindowDisplay from "./Pages/window-display";
import DigitalDisplay from "./Pages/digital-display";
import InteractiveDisplay from "./Pages/interactive-display";
import PortableDisplay from "./Pages/PortableDisplay";
import LedDisplay from "./Pages/led-display-1920x640";
import { Toaster } from "./components/ui/toaster";
import VideowallVideowallDisplay from "./Pages/video-wall-display-solutions";
AOS.init({
  once: true,
  duration: 800,
  easing: "ease-in-out",
});
const Outletext = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outletext />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/solutions",
          element: <Solutions />,
        },
        {
          path: "/recent-work",
          element: <Work />,
        },
        {
          path: "digitalmenudisplays",
          element: <DigitalMenu />,
        },

        // Indoor Signage
        {
          path: "indoorsignage",
          element: <IndoorSignage />,
          children: [
            {
              path: "window-display",
              element: <WindowDisplay />,
            },
            {
              path: "digital-display",
              element: <DigitalDisplay />,
            },
            {
              path: "interactive-display",
              element: <InteractiveDisplay />,
            },

            {
              path: "video-wall-display-solutions",
              element: <VideowallVideowallDisplay />,
            },
          ],
        },

        // Outdoor Signage
        {
          path: "outdoorsignage",
          element: <OutdoorSignage />,
          children: [
            {
              path: "portable-display",
              element: <PortableDisplay />,
            },
            {
              path: "led-display-1920x640",
              element: <LedDisplay />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
