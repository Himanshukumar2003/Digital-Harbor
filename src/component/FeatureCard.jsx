import React from "react";

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="group min-h-[220px]  bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
        <Icon size={26} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
