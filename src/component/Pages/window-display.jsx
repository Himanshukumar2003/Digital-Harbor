import Breadcrumb from "../component/Breadcrumb";
import { Monitor, Cloud, Sun, Zap, CheckCircle } from "lucide-react";
import FeatureCard from "../component/FeatureCard";

export default function WindowDisplay() {
  const features = [
    {
      icon: Monitor,
      title: "Ultra HD Resolution",
      description:
        "Crisp and clear display quality that enhances visibility and delivers a premium visual experience.",
    },
    {
      icon: Cloud,
      title: "Remote Content Management",
      description:
        "Operate the display from anywhere and update creatives instantly through cloud-based control.",
    },
    {
      icon: Sun,
      title: "High Brightness Screen",
      description:
        "Designed specifically for storefront windows to remain visible even under strong ambient light.",
    },
    {
      icon: Zap,
      title: "Plug & Play System",
      description: "Quick setup with simple installation and smooth operation.",
    },
  ];

  const highlights = [
    "Ultra Bright Display",
    "Cloud Managed",
    "Easy Installation",
  ];

  return (
    <>
      {/* <Breadcrumb PageName={"Window Display"} PageLink={"Window Display"} /> */}

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="./header-2.jpg"
                alt="Window Display"
                className="rounded-xl shadow-md col-span-2"
              />

              <img
                src="./header-2.jpg"
                alt="Window Display"
                className="rounded-xl shadow-md"
              />

              <img
                src="./header-2.jpg"
                alt="Window Display"
                className="rounded-xl shadow-md"
              />
            </div>

            {/* Product Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
                High-Brightness Advertising Screen
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Window Digital Display
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Turn your storefront glass into a powerful digital advertising
                space. Ultra-bright screens with stunning visuals ensure your
                promotions remain clearly visible — even in bright daylight.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Perfect for retail stores, showrooms, malls, and commercial
                outlets. Manage and update your content remotely anytime, from
                anywhere.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-6">
                {highlights.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <CheckCircle size={16} />
                    {item}
                  </span>
                ))}
              </div>

              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-red-600 font-semibold uppercase text-sm">
              Why Choose Us
            </span>

            <h2 className="text-3xl font-bold mt-2 mb-3">Key Features</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your storefront into a dynamic
              advertising powerhouse.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-20 bg-red-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Storefront?
          </h2>

          <p className="text-white/80 mb-6">
            Get in touch today and let us help you make a lasting impression.
          </p>

          <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Send Enquiry
          </button>
        </div>
      </section>
    </>
  );
}
