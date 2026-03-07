import Breadcrumb from "../component/Breadcrumb";
import {
  Monitor,
  Cloud,
  CalendarClock,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import FeatureCard from "../component/FeatureCard";
import ProductSlider from "../component/ProductSlider";
import { useState } from "react";
import EnquiryForm from "../component/form/EnquiryDialog";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

export default function DigitalMenuDisplay() {
  const [open, setOpen] = useState(false);

  const features = [
    {
      icon: Monitor,
      title: "4K Ultra HD Display",
      description:
        "Sharp and vibrant visuals that make food items and menu graphics more attractive and engaging.",
    },
    {
      icon: Cloud,
      title: "Instant Remote Updates",
      description:
        "Update menu items, prices, offers, and promotions instantly from any location.",
    },
    {
      icon: CalendarClock,
      title: "Smart Content Scheduling",
      description:
        "Automatically display breakfast, lunch, and dinner menus with scheduled content management.",
    },
    {
      icon: Sparkles,
      title: "Modern & Professional Look",
      description:
        "Enhances restaurant ambience while delivering a premium brand presentation.",
    },
  ];

  const highlights = [
    "4K Ultra HD Display",
    "Remote Menu Updates",
    "Smart Scheduling",
  ];

  const images = ["../product/temperature-glass.jpeg"];

  return (
    <>
      <Breadcrumb
        PageName={"Digital Menu Display"}
        PageLink={"Digital Menu Display"}
      />

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images */}
            <ProductSlider images={images} alt="Digital Menu Display" />

            {/* Product Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
                Smart Restaurant Display
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Digital Menu Board Display
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Digital Menu Displays provide restaurants, cafés, food courts,
                and quick service outlets with a modern way to showcase menus
                and promotions. Replace traditional printed menu boards with
                dynamic digital screens that are easy to update and visually
                engaging.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Change menu items, prices, offers, and combos instantly from
                anywhere using remote control software. Whether it’s daily
                specials or seasonal offers, your menu can be updated in
                seconds.
              </p>

              <p>
                These displays improve customer experience while helping
                businesses promote high-margin items with attractive visuals.
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
                    productName="Digital Menu Display"
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
              Why Choose Digital Menu Display
            </span>

            <h2 className="text-3xl font-bold mt-2 mb-3">Key Features</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your restaurant menu into a dynamic digital experience
              that engages customers and makes menu management effortless.
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
