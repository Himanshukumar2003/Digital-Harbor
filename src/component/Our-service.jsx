import { FaSlidersH, FaMicrochip, FaTools, FaThLarge } from "react-icons/fa";

const services = [
  {
    title: "Customization",
    description:
      "We create a tailored package, determine the best menu board placement, and develop engaging content as per your requirements.",
    icon: <FaSlidersH size={24} />,
    color: "bg-yellow-100",
  },
  {
    title: "Hardware & Software",
    description:
      "We supply high-quality digital signage hardware and software, designed for professional and long-term reliability.",
    icon: <FaMicrochip size={24} />,
    color: "bg-green-100",
  },
  {
    title: "Installation",
    description:
      "We offer expert installation services along with certified electrical and data connectivity support for a hassle-free setup.",
    icon: <FaTools size={24} />,
    color: "bg-orange-100",
  },
  {
    title: "Management",
    description:
      "We can take care of your menu boards or provide complete support services if you prefer to manage them independently.",
    icon: <FaThLarge size={24} />,
    color: "bg-gray-100",
  },
];

export default function ServiceCards() {
  return (
    <div className="container mx-auto p-6">
      <div className="centerhead mb-4">
        <h2>Our Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
              className={`${service.color} p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-2`}
              data-aos="fadu-up"
              data-aos-dealy="200"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 text-red-600">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
