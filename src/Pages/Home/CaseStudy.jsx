import React from "react";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Growth",
    desc: "We helped an online store boost sales by 150% with targeted ads and UX improvements.",
    image: "/case-study.png",
  },
  {
    title: "Social Media Impact",
    desc: "Our strategy increased engagement for a brand by 300% in just 3 months.",
    image: "/case-study.png",
  },
  {
    title: "Website Revamp",
    desc: "Redesigned a corporate website to be faster, mobile-friendly, and more user-focused.",
    image: "/case-study.png",
  },
];

const CaseStudy = () => {
  return (
    <section className="bg-black/90 py-28 px-6">
      <div className="max-w-7xl mx-auto text-left mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-red-600">Case</span>{" "}
          <span className="text-white">Studies</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        {caseStudies.map((caseItem, index) => (
          <div
            key={index}
            className="relative bg-white animate-float rounded-2xl shadow-lg overflow-hidden group transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col"
          >
            {/* Image */}
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-red-600">
                    {caseItem.title.split(" ")[0]}
                  </span>{" "}
                  <span className="text-gray-900">
                    {caseItem.title.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
                <p className="text-gray-700 mb-6">{caseItem.desc}</p>
              </div>

              {/* Button stays at bottom */}
              <div className="mt-auto">
                <button className="relative flex items-center justify-center gap-2 w-full px-6 py-2 rounded-lg font-medium border-2 border-red-600 bg-red-600 text-white overflow-hidden group transition">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10 text-lg flex items-center gap-2">
                    Read More <ArrowRight size={18} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

  {/* See More button center */}
<div className="flex justify-center">
  <button className="relative flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-medium border-2 border-red-600 bg-red-600 text-white overflow-hidden group transition">
    <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
    <span className="relative z-10 text-lg flex items-center gap-2">
      See More
    </span>
  </button>
</div>

    </section>
  );
};

export default CaseStudy;
