import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    position: "CEO, TechWorld",
    review:
      "Softgency transformed our online presence. Their social media management grew our engagement by over 200%.",
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director, ShopEase",
    review:
      "Professional team with amazing design sense! Our website redesign improved both speed and user experience drastically.",
  },
  {
    name: "David Lee",
    position: "Founder, StartupX",
    review:
      "They guided us with data management and automation. Saved us hours every week and boosted productivity.",
  },
  {
    name: "Emma Brown",
    position: "Manager, BizSolutions",
    review:
      "From writing to digital strategy, everything was handled with creativity and professionalism.",
  },
  {
    name: "Michael Green",
    position: "CTO, InnovateHub",
    review:
      "Their website development team delivered a fast, secure and modern platform for our business.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-red-50 py-28 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-red-600">Client</span>{" "}
            <span className="text-gray-900">Reviews</span>
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full shadow transition ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-red-600 hover:text-white"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - 2}
            className={`p-2 rounded-full shadow transition ${
              currentIndex >= testimonials.length - 2
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-red-600 hover:text-white"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {testimonials.slice(currentIndex, currentIndex + 2).map((t, index) => {
          const actualIndex = currentIndex + index + 1; // testimonial number
          return (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Testimonial Number (top right) */}
              <span className="absolute top-4 right-6 text-4xl font-bold text-gray-300 opacity-30 select-none">
                {actualIndex}
              </span>

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-red-500 opacity-80 mb-4" />

              {/* Review Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {t.review}
              </p>

              {/* Client Info */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
