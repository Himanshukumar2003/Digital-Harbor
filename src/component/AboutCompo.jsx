import React, { useState } from "react";
import { GiProgression, GiThink } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";

/* ─── Inline styles for things Tailwind can't do ─── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500&display=swap');

  .dh-wrap * { font-family: 'Outfit', sans-serif; }
  .dh-display  { font-family: 'Syne', sans-serif; }

  @keyframes floatY {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    50%      { transform: translateY(-12px) rotate(3deg); }
  }
  @keyframes spinSlow { to { transform: rotate(360deg); } }
  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(220,38,38,.35); }
    70%  { box-shadow: 0 0 0 18px rgba(220,38,38,0); }
    100% { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes slideUp {
    from { opacity:0; transform: translateY(32px); }
    to   { opacity:1; transform: translateY(0); }
  }

  .float-anim  { animation: floatY 5s ease-in-out infinite; }
  .spin-slow   { animation: spinSlow 18s linear infinite; }
  .slide-up    { animation: slideUp .55s ease both; }
  .slide-up-1  { animation-delay: .1s; }
  .slide-up-2  { animation-delay: .2s; }
  .slide-up-3  { animation-delay: .35s; }
  .slide-up-4  { animation-delay: .5s; }

  .dh-card {
    background: #fff;
    border: 1.5px solid #f0f0f0;
    transition: all .38s cubic-bezier(.4,0,.2,1);
    position: relative;
    overflow: hidden;
  }
  .dh-card::before {
    content:'';
    position:absolute;
    inset:0;
    background: linear-gradient(135deg,#dc2626 0%,#991b1b 100%);
    opacity:0;
    transition: opacity .38s ease;
    z-index:0;
  }
  .dh-card:hover::before { opacity:1; }
  .dh-card:hover {
    border-color: #dc2626;
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 32px 80px rgba(220,38,38,.22), 0 8px 24px rgba(0,0,0,.08);
  }
  .dh-card > * { position: relative; z-index:1; }

  .dh-card .icon-box {
    background: #fef2f2;
    color: #dc2626;
    transition: all .38s ease;
  }
  .dh-card:hover .icon-box {
    background: rgba(255,255,255,.2);
    color: #fff;
  }

  .dh-card .card-head { color: #111; transition: color .3s; }
  .dh-card:hover .card-head { color: #fff; }

  .dh-card .card-para { color: #6b7280; transition: color .3s; }
  .dh-card:hover .card-para { color: rgba(255,255,255,.8); }

  .dh-card .card-num {
    color: #f3f4f6;
    transition: color .3s;
    font-family:'Syne',sans-serif;
  }
  .dh-card:hover .card-num { color: rgba(255,255,255,.12); }

  .dh-card .card-link { color: #dc2626; transition: color .3s; }
  .dh-card:hover .card-link { color: #fff; }

  .dh-card .card-line {
    background: #dc2626;
    transition: background .3s, width .4s ease;
    width: 40px; height: 3px; border-radius: 99px;
  }
  .dh-card:hover .card-line { background: rgba(255,255,255,.5); width: 100%; }

  .shimmer-btn {
    background: linear-gradient(135deg,#dc2626,#b91c1c);
    background-size: 400px 100%;
    transition: all .3s ease;
  }
  .shimmer-btn:hover {
    animation: shimmer 1s linear infinite;
    background: linear-gradient(90deg,#dc2626 0%,#f87171 50%,#dc2626 100%);
    background-size: 400px 100%;
    box-shadow: 0 12px 40px rgba(220,38,38,.4), 0 4px 16px rgba(0,0,0,.1);
    transform: translateY(-2px);
  }
  .pulse-btn { animation: pulse-ring 2.5s cubic-bezier(.66,0,0,1) infinite; }

  .tag-pill {
    background: linear-gradient(90deg, #fef2f2, #fff5f5);
    border: 1.5px solid #fecaca;
  }

  .bg-dots {
    background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
    background-size: 28px 28px;
  }

  .red-glow {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(220,38,38,.12) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const AboutCompo = ({ AboutBtn }) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  const AboutJSon = [
    {
      id: 1,
      About_icon: <GiThink />,
      About_head: "Imagine Captivating",
      About_para:
        "Imagine captivating your customers and visitors with stunning visuals that bring your brand's message to life. Our innovative digital signage technology does just that, transforming ordinary spaces into extraordinary experiences.",
      number: "01",
      delay: "slide-up-1",
    },
    {
      id: 2,
      About_icon: <IoIosCreate />,
      About_head: "Create & Manage",
      About_para:
        "Creating and managing your digital displays has never been easier with our user-friendly platform. Whether you want to promote products, share important information, or simply elevate the atmosphere, our customizable solutions are designed to fit your unique needs.",
      number: "02",
      delay: "slide-up-2",
    },
    {
      id: 3,
      About_icon: <GiProgression />,
      About_head: "Expert Professionals",
      About_para:
        "Our team of experienced professionals is here to guide you every step of the way. From choosing the perfect hardware to designing eye-catching content, we're committed to delivering exceptional service and ensuring your digital signage is a success.",
      number: "03",
      delay: "slide-up-3",
    },
    {
      id: 4,
      About_icon: <RiTeamFill />,
      About_head: "Audience Engagement",
      About_para:
        "Ready to take your audience engagement to the next level? Let’s work together to create unforgettable experiences. At Digital Harbor, we’re excited to help you transform your vision into reality!",
      number: "04",
      delay: "slide-up-4",
    },
  ];

  return (
    <>
      <style>{styles}</style>

      <section className="dh-wrap relative bg-white py-24 px-4 overflow-hidden bg-dots">
        {/* Decorative glows */}
        <div className="red-glow w-[600px] h-[600px] -top-40 -left-32" />
        <div className="red-glow w-[500px] h-[500px] -bottom-32 -right-24" />

        {/* Spinning ring decoration */}
        <div className="spin-slow absolute top-10 right-10 w-24 h-24 border-2 border-dashed border-red-200 rounded-full opacity-60 hidden md:block" />
        <div
          className="spin-slow absolute bottom-20 left-12 w-16 h-16 border-2 border-dashed border-red-300 rounded-full opacity-40 hidden md:block"
          style={{ animationDirection: "reverse" }}
        />

        <div className=" mx-auto relative  max-w-5xl mx-auto p-4 lg:px-8 ">
          {/* ── HEADER ── */}
          {/* Pill badge */}
          <div className="text-center">
            <h2 className="mb-5">Welcome to Digital Harbor</h2>
            <p>
              Welcome to Digital Harbor, your go-to digital signage solution in
              Australia. We are here to revolutionize the way you connect with
              your audience, making every interaction dynamic and engaging.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-300" />
            <div className="w-2.5 h-2.5 bg-red-500 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-300" />
          </div>
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {AboutJSon.map((val) => {
            const isHovered = hoveredId === val.id;
            return (
              <div
                key={val.id}
                onMouseEnter={() => setHoveredId(val.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`dh-card rounded-2xl p-7 slide-up ${val.delay}`}
              >
                {/* Card number watermark */}
                {/* <div className="card-num absolute top-4 right-5 text-7xl font-extrabold leading-none select-none">
                  {val.number}
                </div> */}

                {/* Top line that expands */}

                {/* Icon */}
                <div className="icon-box w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm">
                  {val.About_icon}
                </div>

                {/* Heading */}
                <h3 className="card-head text-lg font-bold mb-3 leading-tight">
                  {val.About_head}
                </h3>
                <div className="card-line mb-7" />

                {/* Para */}
                <p className="card-para text-sm leading-relaxed mb-6">
                  {val.About_para}
                </p>

                {/* Arrow link */}
              </div>
            );
          })}
        </div>

        {/* ── CTA BUTTON ── */}
        {AboutBtn && (
          <div className="text-center mt-14">
            <button
              onClick={() => navigate("/about-us")}
              className="shimmer-btn group inline-flex items-center gap-3 px-5 py-2 text-white font-semibold text-sm tracking-widest  rounded-full"
            >
              About us
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-600 shadow group-hover:rotate-45 transition-transform duration-400">
                <GoArrowUpRight size={16} />
              </span>
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutCompo;
