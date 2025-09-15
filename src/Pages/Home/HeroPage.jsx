import React from 'react';


const Hero = () => {
  return (
    <section className="relative bg-red-50 overflow-hidden min-h-screen">
      {/* Static background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-200 opacity-30 rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-300 opacity-20 rounded-xl transform rotate-12"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-red-100 opacity-25 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-[70%] text-left pr-8 z-10">
          <h1 className="text-5xl md:text-5xl font-bold  text-red-600 mb-6">
           Imagine. Implement. Inspire.
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At Softgency, we craft cutting-edge digital solutions tailored to your business needs. 
            From strategic planning to flawless execution, our team ensures measurable growth. 
            We specialize in designing impactful social media campaigns, developing user-friendly 
            websites, and managing digital products that resonate with your audience. 
            Partner with us to transform your vision into reality.
          </p>
     <button className="relative px-6 py-2 rounded-lg font-medium border-2 border-red-600 bg-white text-red-600 overflow-hidden group transition">
  {/* Hover Gradient Background */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
  {/* Text Layer */}
  <span className="relative z-10 text-lg transition-colors duration-500 group-hover:text-white">
    Explore Us
  </span>
</button>

        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end z-10">
          <img 
            src="hero.svg"
            alt="Hero" 
            className="w-full max-w-md md:max-w-xl lg:max-w-2xl  transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
