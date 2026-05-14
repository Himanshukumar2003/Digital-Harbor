import Breadcrumb from "../component/Breadcrumb";
import { Monitor, Cloud, Sun, Zap, CheckCircle } from "lucide-react";
import FeatureCard from "../component/FeatureCard";
import ProductSlider from "../component/ProductSlider";
import { useState } from "react";
import EnquiryForm from "../component/form/EnquiryDialog";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

export default function WindowDisplay() {
  const [open, setOpen] = useState(false);

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

  const images = [
    "../product/window-displays.jpeg",
    "../product/window-2.jpeg",
  ];

  return (
    <>
      <Breadcrumb PageName={"Window Display"} PageLink={"Window Display"} />

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images */}
            <ProductSlider images={images} alt="Window Digital Display" />

            {/* Product Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
                High-Brightness Advertising Screen
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Window Digital Display
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Window Digital Displays are designed to attract attention
                directly from storefront glass windows. With ultra-bright
                screens and stunning visuals, these displays ensure your
                promotions, offers, and brand messages remain clearly visible
                even in bright daylight.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Perfect for retail stores, showrooms, malls, and commercial
                outlets, the Window Display turns your glass frontage into a
                powerful digital advertising space. Manage and update your
                content remotely anytime from anywhere — all at your fingertips.
              </p>
              <p>
                Easily change creatives, promotions, videos, and announcements
                instantly without the need for manual intervention.
              </p>
              {/* Highlights */}
              <div className="flex flex-wrap gap-3 my-4">
                {highlights.map((item, i) => (
                  <span
                    key={i}
                    className="flex  items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <CheckCircle size={16} />
                    {item}
                  </span>
                ))}
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="px-6 py-3   bg-primary text-white rounded-lg hover:bg-red-700">
                    Make Enquiry
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-xl p-0">
                  <EnquiryForm
                    productName="Window Digital Display"
                    closeModal={() => setOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="bg-gray-50 py-12">
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
    </>
  );
}
