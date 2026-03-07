import Breadcrumb from "../component/Breadcrumb";
import { Monitor, Touchpad, Cloud, Layers, CheckCircle } from "lucide-react";
import FeatureCard from "../component/FeatureCard";
import ProductSlider from "../component/ProductSlider";
import { useState } from "react";
import EnquiryForm from "../component/form/EnquiryDialog";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

export default function InteractiveDisplay() {
  const [open, setOpen] = useState(false);

  const features = [
    {
      icon: Touchpad,
      title: "Multi-Touch Interactive Screen",
      description:
        "Smooth and responsive touch technology that allows seamless user interaction with digital content.",
    },
    {
      icon: Monitor,
      title: "4K Ultra HD Visual Quality",
      description:
        "Exceptional clarity and vibrant visuals ideal for presentations, product demos, and digital media.",
    },
    {
      icon: Cloud,
      title: "Remote Content Control",
      description:
        "Easily update presentations, applications, and digital content anytime from any location.",
    },
    {
      icon: Layers,
      title: "All-in-One Smart Display",
      description:
        "Perfect solution for meetings, showrooms, retail stores, and educational environments.",
    },
  ];

  const highlights = [
    "Multi-Touch Screen",
    "4K Ultra HD Display",
    "Remote Content Management",
  ];

  const images = ["../product/interactive-touch-display.jpg"];

  return (
    <>
      <Breadcrumb
        PageName={"Interactive Display"}
        PageLink={"Interactive Display"}
      />

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images */}
            <ProductSlider images={images} alt="Interactive Touch Display" />

            {/* Product Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
                Smart Touch-Enabled Digital Experience
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Interactive Touch Display
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Interactive Displays provide a powerful touch-enabled solution
                for businesses, educational institutions, showrooms, and
                corporate environments. These smart displays allow users to
                interact directly with digital content through a smooth touch
                interface.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Ideal for product demonstrations, presentations, directories,
                and customer engagement, interactive displays transform
                traditional screens into smart communication tools.
              </p>

              <p>
                With remote management capabilities, content and applications
                can be updated anytime from anywhere, ensuring your display
                always stays updated with the latest information.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 my-4">
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

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700">
                    Make Enquiry
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-xl p-0">
                  <EnquiryForm
                    productName="Interactive Touch Display"
                    closeModal={() => setOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-red-600 font-semibold uppercase text-sm">
              Why Choose Interactive Displays
            </span>

            <h2 className="text-3xl font-bold mt-2 mb-3">Key Features</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Engage users with powerful touch-enabled technology designed for
              presentations, product showcases, and interactive experiences.
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
