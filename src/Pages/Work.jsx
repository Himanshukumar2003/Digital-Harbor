import { ClientMaping } from "@/data/ClientLogos";
import Breadcrumb from "../component/Breadcrumb";
import { WorkMaping } from "@/data/resent-work";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
const Work = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
  }, []);
  return (
    <>
      <Breadcrumb PageName={"Recent Work"} PageLink={"recent-work"} />
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-12">
            {WorkMaping.map((val) => (
              <div
                key={val.id}
                className="col-span-12 md:col-span-4 lg:col-span-4  my-2 mx-2"
                data-aos="fade-right"
                data-aos-delay={val.workdelay}
              >
                <div className="  rounded-2xl overflow-hidden">
                  <a href={val.WorkImg} data-fancybox="gallery">
                    <img
                      className="w-full rounded-2xl object-cover   aspect-square transition-all duration-300 ease-linear hover:scale-125 hover:blur-[1px]"
                      src={val.WorkImg}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section bg-gray-50">
        <div className="container">
          <h3 className=" text-red-600 text-center mb-6">Our Clients </h3>
          <div className="flex flex-wrap items-center justify-center  gap-8  max-w-6xl mx-auto">
            {ClientMaping.map((val) => (
              <div
                key={val.id}
                data-aos="fade-up"
                data-aos-delay={val.clientdelay}
                className="group relative flex items-center justify-center 
                 w-40 h-24 p-2 
                 bg-white  
                 rounded-2xl 
                 shadow-sm
                 hover:shadow-xl 
                 transition-all duration-500 
                 hover:-translate-y-2"
              >
                {/* Logo */}
                <img
                  src={val.Clientlogo}
                  alt="client-logo"
                  className=" object-contain 
               
                   group-hover:opacity-100 
                   transition duration-500"
                />

                {/* Optional subtle hover glow */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
