import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EnquiryForm = ({ productName, closeModal }) => {
  const formRef = useRef();

  const [form, setForm] = useState({
    business: "",
    businessType: "",
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
  });

  const businessTypes = [
    "Retail Shop",
    "Real Estate",
    "Restaurant",
    "Beauty Clinic / Salon",
    "Other",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Validation
  const validateForm = () => {
    const errors = [];

    if (!form.business.trim()) errors.push("Business Name is required");
    if (!form.businessType) errors.push("Business Type is required");
    if (!form.name.trim()) errors.push("Full Name is required");

    if (!form.email.trim()) {
      errors.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.push("Email is invalid");
    }

    if (!form.mobile.trim()) errors.push("Mobile is required");
    if (!form.city.trim()) errors.push("City is required");
    if (!form.message.trim()) errors.push("Message is required");

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (errors.length > 0) {
      errors.forEach((err) =>
        toast({
          title: "Error",
          description: err,
        })
      );
      return;
    }

    emailjs
      .sendForm(
        "service_jrae1dg",
        "template_905oaww",
        formRef.current,
        "oe1y-5jSwdMpEGWJ-"
      )
      .then(
        () => {
          toast({
            title: "Enquiry Submitted!",
            description: "We will contact you soon.",
          });

          setForm({
            business: "",
            businessType: "",
            name: "",
            email: "",
            mobile: "",
            city: "",
            message: "",
          });

          closeModal(false);
        },
        (error) => {
          toast({
            title: "Submission Failed",
            description: "Something went wrong.",
          });

          console.log(error);
        }
      );
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary px-6 py-5 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground">
          Enquiry Form
        </h2>

        <p className="text-primary-foreground/80 text-sm mt-1">
          Product: {productName}
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-5">
        {/* Hidden Inputs for EmailJS */}
        <input type="hidden" name="productName" value={productName} />
        <input type="hidden" name="businessType" value={form.businessType} />

        {/* Business Name */}
        <div className="space-y-1.5">
          <Label htmlFor="business">Business Name</Label>
          <Input
            id="business"
            name="business"
            placeholder="Your business name"
            value={form.business}
            onChange={handleChange}
            required
          />
        </div>

        {/* Business Type */}
        <div className="space-y-1.5">
          <Label>Type of Business</Label>

          <div className="flex flex-wrap gap-2">
            {businessTypes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    businessType: item,
                  }))
                }
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  form.businessType === item
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Mobile + City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="mobile">Mobile</Label>
            <Input
              id="mobile"
              name="mobile"
              placeholder="+91 98765 43210"
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              placeholder="Mumbai"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="message">Message</Label>

          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your requirements..."
            value={form.message}
            onChange={handleChange}
            rows={3}
            required
          />
        </div>

        <Button type="submit" className="w-full text-base py-5">
          Submit Enquiry
        </Button>
      </form>
    </div>
  );
};

export default EnquiryForm;
