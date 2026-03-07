import { FaSlidersH, FaMicrochip, FaTools, FaThLarge } from "react-icons/fa";

const services = [
  {
    number: "01",
    title: "Customization",
    description:
      "We create a tailored package, determine the best menu board placement, and develop engaging content as per your requirements.",
    icon: <FaSlidersH size={22} />,
  },
  {
    number: "02",
    title: "Hardware & Software",
    description:
      "We supply high-quality digital signage hardware and software, designed for professional and long-term reliability.",
    icon: <FaMicrochip size={22} />,
  },
  {
    number: "03",
    title: "Installation",
    description:
      "We offer expert installation services along with certified electrical and data connectivity support for a hassle-free setup.",
    icon: <FaTools size={22} />,
  },
  {
    number: "04",
    title: "Management",
    description:
      "We can take care of your menu boards or provide complete support services if you prefer to manage them independently.",
    icon: <FaThLarge size={22} />,
  },
];

export default function ServiceCards() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="">How Digital Harbour Supports You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(function (service, index) {
            return (
              <div
                key={index}
                className="relative p-8 rounded-lg text-white overflow-hidden
                bg-gradient-to-br from-red-600 to-red-800
                transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Big Number */}
                <span className="absolute  italic  top-6 right-6  opacity-70 text-7xl font-bold text-white/20">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl text-white font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
