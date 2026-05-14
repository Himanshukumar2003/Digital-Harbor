import Breadcrumb from "@/component/Breadcrumb";
import FeatureCard from "@/component/FeatureCard";
import EnquiryForm from "@/component/form/EnquiryDialog";
import ProductSlider from "@/component/ProductSlider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { Monitor, Sun, Video, Grid, Wrench, Cpu } from "lucide-react";
export default function VideowallVideowallDisplay() {
  const [open, setOpen] = useState(false);

  const highlights = [
    "* Digital menus",
    "* Promotional campaigns",
    "* Live event displays",
    "* Brand storytelling",
    "* Immersive customer experiences",
  ];

  const images = ["../product/Video-Wall.jpeg", "../product/Video-Wall2.jpeg"];

  const features = [
    {
      icon: Monitor,
      title: "Seamless Multi-Screen Display",
      description:
        "Ultra-narrow bezels create a smooth, unified visual surface.",
    },
    {
      icon: Sun,
      title: "Brilliant High-Brightness Panels",
      description:
        "Perfect for restaurants, retail, and high-traffic environments where clarity matters.",
    },
    {
      icon: Video,
      title: "4K-Ready Playback",
      description:
        "Optimised for dynamic animations, motion graphics, and rich promotional content.",
    },
    {
      icon: Grid,
      title: "Flexible Configurations",
      description:
        "From 2×2 grids to custom layouts, each installation is tailored to your space.",
    },
    {
      icon: Wrench,
      title: "Professional Mounting Options",
      description:
        "Ceiling-to-floor, wall-mounted, or custom framing for a premium finish.",
    },
    {
      icon: Cpu,
      title: "Reliable 24/7 Performance",
      description:
        "Built for continuous operation with advanced cooling and commercial-grade components.",
    },
  ];

  return (
    <>
      <Breadcrumb
        PageName={"Video Wall Display Solutions"}
        PageLink={"Video Wall Display Solutions"}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images */}
            <ProductSlider images={images} alt="Interactive Touch Display" />

            {/* Product Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
                VIDEO WALL DISPLAY SOLUTIONS
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Video Wall Display
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Video Wall Displays are engineered to transform any commercial
                space into a bold, high-impact visual experience. With seamless
                panel alignment, exceptional colour accuracy, and ultra-thin
                bezels, these displays create one uninterrupted canvas that
                commands attention from every corner of the room.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Designed for continuous 24/7 operation, video walls are perfect
                for retail stores, corporate lobbies, restaurants, showrooms,
                and entertainment venues. Deliver menus, promotions, live
                content, and immersive brand storytelling — all on a display
                built to perform without compromise.
              </p>

              <p>
                Easily update and manage your content remotely in real time,
                without any manual intervention or technical expertise required.
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
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-red-600 font-semibold uppercase text-sm">
              Why Choose Video Wall Display
            </span>

            <h2 className="text-3xl font-bold mt-2 mb-3">Key Features</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Engineered for 24/7 performance, our video walls deliver
              exceptional brightness, colour accuracy, and ultra-thin bezels for
              a seamless display.
            </p>
          </div>

          <div className=" flex  justify-center   flex-wrap gap-6 justify-items-center">
            {features.map((feature, index) => (
              <div key={index} className="w-full md:w-[300px]   lg:w-[330px]">
                <FeatureCard
                  Icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
