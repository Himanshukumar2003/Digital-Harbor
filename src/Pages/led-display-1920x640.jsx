import Breadcrumb from "../component/Breadcrumb";
import { Sun, Cloud, MonitorPlay, Shield, CheckCircle } from "lucide-react";
import FeatureCard from "../component/FeatureCard";
import ProductSlider from "../component/ProductSlider";
import { useState } from "react";
import EnquiryForm from "../component/form/EnquiryDialog";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

export default function LedDisplay() {
  const [open, setOpen] = useState(false);

  const features = [
    {
      icon: Sun,
      title: "High Brightness LED Display",
      description:
        "Designed for outdoor visibility with bright and clear visuals even in direct sunlight.",
    },
    {
      icon: Cloud,
      title: "Remote Content Control",
      description:
        "Operate and update advertising content anytime from anywhere using remote management.",
    },
    {
      icon: MonitorPlay,
      title: "Dynamic Advertising Solution",
      description:
        "Easily change creatives, promotional videos, and announcements instantly.",
    },
    {
      icon: Shield,
      title: "Durable Outdoor Design",
      description:
        "Engineered for reliable performance in outdoor environments and commercial locations.",
    },
  ];

  const highlights = [
    "High Brightness LED",
    "Outdoor Advertising Display",
    "Remote Content Updates",
  ];

  const images = ["../product/1920-640.jpeg"];

  return (
    <>
      <Breadcrumb
        PageName={"1920 × 640 MM LED Display"}
        PageLink={"1920 × 640 MM LED Display"}
      />

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images */}
            <ProductSlider
              images={images}
              alt="Outdoor LED Advertising Display"
            />

            {/* Product Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
                High Visibility Outdoor Digital Signage
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                1920 × 640 MM LED Display
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                The 1920 × 640 MM LED Display is a powerful outdoor digital
                signage solution designed for high visibility advertising. Built
                to perform in outdoor environments, this display delivers
                bright, vibrant visuals that remain clearly visible even in
                daylight.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Perfect for storefronts, commercial buildings, showrooms,
                restaurants, malls, and outdoor branding locations, this LED
                display helps businesses capture attention and communicate
                promotions effectively.
              </p>

              <p>
                With advanced remote management technology, content can be
                updated instantly from anywhere. Businesses can easily change
                advertisements, promotional creatives, announcements, and videos
                in real-time with just a few clicks.
              </p>

              <p className="mt-3">
                This modern LED signage ensures maximum brand exposure while
                delivering a professional and impactful advertising experience.
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
                    productName="1920 × 640 MM LED Display"
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
              Why Choose This Display
            </span>

            <h2 className="text-3xl font-bold mt-2 mb-3">Key Features</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for outdoor advertising with powerful brightness,
              durability, and remote content management capabilities.
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
