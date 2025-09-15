import React from "react";

const Hero = () => {
  return (
 
      <div className="max-w-7xl mx-auto px-6 lg:px-10 lg:py-52  py-16 flex flex-col justify-center h-full">
        <h2 className="text-6xl md:text-7xl font-semibold text-red-600 mb-6">
          Imagine. Implement. Inspire.
        </h2>
        <p className="text-gray-800 text-lg md:text-xl mb-6 leading-relaxed max-w-3xl">
          At Softgency, we craft cutting-edge digital solutions tailored to your business needs. 
          From strategic planning to flawless execution, our team ensures measurable growth. 
          We specialize in designing impactful social media campaigns, developing user-friendly 
          websites, and managing digital products that resonate with your audience.
        </p>
        <button className="relative px-6 py-3 rounded-lg font-medium border-2 border-red-600 bg-white text-red-600 overflow-hidden group transition w-max">
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10 text-lg transition-colors duration-500 group-hover:text-white">
            Explore Us
          </span>
        </button>
      </div>
  
  );
};

export default Hero;
