import Breadcrumb from "../component/Breadcrumb";
import { Battery, Cloud, Monitor, Zap, CheckCircle } from "lucide-react";
import FeatureCard from "../component/FeatureCard";
import ProductSlider from "../component/ProductSlider";
import { useState } from "react";
import EnquiryForm from "../component/form/EnquiryDialog";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

export default function PortableDisplay() {
  const [open, setOpen] = useState(false);

  const features = [
    {
      icon: Battery,
      title: "Portable & Battery Operated",
      description:
        "Completely wireless operation allows easy movement and flexible placement anywhere.",
    },
    {
      icon: Cloud,
      title: "Remote Content Management",
      description:
        "Update creatives, advertisements, and promotional videos anytime from anywhere.",
    },
    {
      icon: Monitor,
      title: "High Definition Display",
      description:
        "Sharp visuals and vibrant colors ensure your content grabs attention instantly.",
    },
    {
      icon: Zap,
      title: "Plug & Play Setup",
      description: "Quick installation with simple and hassle-free operation.",
    },
  ];

  const highlights = [
    "Battery Powered",
    "Portable Advertising Screen",
    "Remote Content Updates",
  ];

  const images = ["../product/Portable-Battery.jpeg"];

  return (
    <>
      <Breadcrumb PageName={"Portable Display"} PageLink={"Portable Display"} />

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images */}
            <ProductSlider
              images={images}
              alt="Portable Outdoor Digital Display"
            />

            {/* Product Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
                Battery Powered Smart Advertising Screen
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Portable Outdoor Digital Display
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                The Portable Digital Display is a smart and flexible outdoor
                advertising solution designed for businesses that require
                mobility and convenience. This battery-operated display allows
                you to place your digital signage anywhere without worrying
                about direct power connections.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Ideal for retail entrances, exhibitions, events, restaurants,
                showrooms, and outdoor promotions, this display helps businesses
                showcase offers, advertisements, announcements, and videos in a
                modern and engaging way.
              </p>

              <p>
                With cloud-based remote management, you can easily operate the
                display from anywhere and update creatives, promotions, or
                messages instantly at your fingertips.
              </p>

              <p className="mt-3">
                Its sleek portable design combined with powerful display quality
                makes it a perfect tool for dynamic outdoor marketing.
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
                    productName="Portable Outdoor Digital Display"
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
              Why Choose Portable Display
            </span>

            <h2 className="text-3xl font-bold mt-2 mb-3">Key Features</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              A flexible and powerful outdoor digital signage solution designed
              to deliver impactful advertising anywhere, anytime.
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
