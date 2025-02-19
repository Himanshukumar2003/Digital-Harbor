import React, { useState, useRef } from "react";
import {
  FaPhoneVolume,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Breadcrumb from "../component/Breadcrumb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    userphone: "",
    usercity: "",
    usermsg: "",
  });

  const ContactJson = [
    {
      id: 1,
      Contact_icon: <FaPhoneVolume />,
      Contact_para: "+0434264234",
      Contact_link: "tel:+0434264234",
    },
    {
      id: 2,
      Contact_icon: <MdMarkEmailUnread />,
      Contact_para: "solutions@digitalharbor.com.au",
      Contact_link: "mailto: solutions@digitalharbor.com.au",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.username.trim()) errors.push("Name is required");
    if (!formData.useremail.trim()) {
      errors.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(formData.useremail)) {
      errors.push("Email is invalid");
    }
    if (!formData.userphone.trim()) errors.push("Phone is required");
    if (!formData.usercity.trim()) errors.push("City is required");
    if (!formData.usermsg.trim()) errors.push("Message is required");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length === 0) {
      console.log("Form data:", formData);
      toast.success("Form submitted successfully!");
    } else {
      errors.forEach((error) => toast.error(error));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_khexx1d", "template_m0cw48o", form.current, {
        publicKey: "n1t417qsxsGusEBnm",
      })
      .then(
        () => {
          setFormData({
            username: "",
            useremail: "",
            userphone: "",
            usercity: "",
            usermsg: "",
          });
          alert("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Breadcrumb PageName={"Contact"} PageLink={"contact"} />
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-5">
            <div
              className="xl:col-span-5 md:col-span-5 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="bg-gray-100 py-20 px-10 rounded-lg shadow-DarkShadow h-full">
                <h4 className="mb-3">Contact Details</h4>
                <p>
                  We are here to help! If you have any questions or would like to
                  discuss how our Outdoor Signage & Indoor Signage services can
                  benefit your business.
                </p>
                <div className="mt-10">
                  {ContactJson.map((val) => (
                    <div className="grid grid-cols-12 my-5" key={val.id}>
                      <div className="col-span-2 w-10 h-10 bg-red-600 shadow-LightShadow rounded-full text-center flex items-center justify-center text-White text-xl">
                        {val.Contact_icon}
                      </div>
                      <div className="col-span-10">
                        <a href={val.Contact_link}>{val.Contact_para}</a>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between mt-10">
                    <a className="text-xl text-red-600" href="#" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a className="text-xl text-red-600" href="#" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                    <a className="text-xl text-red-600" href="#" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a className="text-xl text-red-600" href="#" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                    <a className="text-xl text-red-600" href="#" aria-label="Google">
                      <FaGoogle />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xl:col-span-7 md:col-span-7 col-span-12"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="bg-white shadow-DarkShadow py-10 px-10 rounded-lg mt-3 xl:mt-0">
                <h3 className="mb-5">Get In Touch</h3>
                <form onSubmit={sendEmail} ref={form}>
                  <div>
                    <input
                      className="w-full py-4 px-5 border-2 border-solid border-gray-200 text-Black focus:border-red-600 rounded-lg mb-4 bg-gray-50"
                      placeholder="Name*"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-4 px-5 border-2 border-solid border-gray-200 text-Black focus:border-red-600 rounded-lg mb-4 bg-gray-50"
                      placeholder="Email*"
                      type="email"
                      name="useremail"
                      value={formData.useremail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-4 px-5 border-2 border-solid border-gray-200 text-Black focus:border-red-600 rounded-lg mb-4 bg-gray-50"
                      placeholder="Phone*"
                      type="text"
                      name="userphone"
                      value={formData.userphone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="w-full py-4 px-5 border-2 border-solid border-gray-200 text-Black focus:border-red-600 rounded-lg mb-4 bg-gray-50"
                      placeholder="City*"
                      type="text"
                      name="usercity"
                      value={formData.usercity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full py-4 px-5 border-2 border-solid border-gray-200 text-Black focus:border-red-600 rounded-lg mb-4 bg-gray-50 h-28 resize-none"
                      placeholder="Message*"
                      name="usermsg"
                      value={formData.usermsg}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    className="bg-transparent text-red-600 shadow-DarkShadow text-center font-HeadFont rounded-full border border-red-600 border-solid py-3 px-10 hover:border-transparent hover:bg-red-600 hover:text-White transition-all duration-700 ease-in-out text-lg"
                    type="submit"
                    name="submit"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
