import React from "react";
import { Users, Shield, Star, Clock, ThumbsUp, Globe, Award, Heart, Monitor, Settings } from "lucide-react";

const whyChooseData = [
  {
    icon: <Users size={36} className="text-red-600" />,
    title: "Expert Team",
    subtitle: "Our experienced professionals ensure top-notch service for your business."
  },
  {
    icon: <Shield size={36} className="text-red-600" />,
    title: "Reliable & Secure",
    subtitle: "We prioritize security and reliability in every project we undertake."
  },
  {
    icon: <Star size={36} className="text-red-600" />,
    title: "Quality Service",
    subtitle: "Delivering high-quality solutions that meet your business goals."
  },
  {
    icon: <Clock size={36} className="text-red-600" />,
    title: "On-Time Delivery",
    subtitle: "We respect your time and ensure timely completion of projects."
  },
  {
    icon: <ThumbsUp size={36} className="text-red-600" />,
    title: "Customer Satisfaction",
    subtitle: "Our clients are our top priority, always aiming to exceed expectations."
  },
  {
    icon: <Globe size={36} className="text-red-600" />,
    title: "Global Reach",
    subtitle: "We provide solutions that cater to businesses across the globe."
  },
 { icon: <Monitor size={36} className="text-red-600" />, title: "Modern Solutions", subtitle: "We implement modern tools and technology to stay ahead in the market." },

  { icon: <Settings size={36} className="text-red-600" />, title: "Customized Approach", subtitle: "Tailor-made solutions designed to match each client’s unique requirements." },
  {
    icon: <Heart size={36} className="text-red-600" />,
    title: "Passionate Team",
    subtitle: "We are passionate about delivering creative and effective digital solutions."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black/90 py-28 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl text-left font-bold mb-4">
          <span className="text-red-600">Why</span>{" "}
          <span className="text-white">Choose Us</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {whyChooseData.map((item, index) => (
          <div
            key={index}
            className="bg-red-50  rounded-xl shadow-lg p-6 flex
             flex-col items-start transition transform hover:-translate-y-2 hover:shadow-2xl animate-float"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              <span className="text-red-600">{item.title.split(" ")[0]}</span>{" "}
              <span className="text-gray-900">{item.title.split(" ").slice(1).join(" ")}</span>
            </h3>
            <p className="text-gray-700">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
