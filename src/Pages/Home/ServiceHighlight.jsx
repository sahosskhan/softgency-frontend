import React from "react";
import {
  Share2,
  Package,
  Briefcase,
  Palette,
  FileText,
  Database,
  Globe,
} from "lucide-react";

const services = [
    {
    icon: <Palette size={36} className="text-red-600" />,
    title: "Social Media Design",
    desc: "Creative, eye-catching visuals that stand out online.",
  },
  {
    icon: <FileText size={36} className="text-red-600" />,
    title: "Professional Writing",
    desc: "Well-crafted words to represent your brand effectively.",
  },
  {
    icon: <Database size={36} className="text-red-600" />,
    title: "Data Management",
    desc: "Organized and secure handling of your business data.",
  },
  
  {
    icon: <Globe size={36} className="text-red-600" />,
    title: "Website Development",
    desc: "Modern, responsive websites to power your business online.",
  },
  {
    icon: <Share2 size={36} className="text-red-600" />,
    title: "Social Media Management",
    desc: "Engaging content & strategy to grow your social presence.",
  },
  {
    icon: <Briefcase size={36} className="text-red-600" />,
    title: "Online Business Management",
    desc: "Streamlined solutions to manage and scale your business.",
  },

];

const ServiceHighlight = () => {
  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-red-50 py-28 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold  text-left mb-4">
          <span className="text-red-600">Our</span>{" "}
          <span className="text-gray-900">Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start transition transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden group"
          >
            {/* wave hover background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

            <div className="relative z-10 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 relative z-10">
              <span className="text-red-600">
                {service.title.split(" ")[0]}
              </span>{" "}
              <span className="text-gray-900">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </h3>
            <p className="text-gray-700 relative z-10">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlight;
