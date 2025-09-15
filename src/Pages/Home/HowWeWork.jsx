import React from "react";
import { Workflow, Brain, Rocket, Users, CheckCircle } from "lucide-react";

const workFlowData = [
  {
    icon: <Workflow size={40} className="text-red-600" />,
    title: "Research & Strategy",
    subtitle: "We dive deep into your goals and craft a strategic roadmap."
  },
  {
    icon: <Brain size={40} className="text-red-600" />,
    title: "Creative Planning",
    subtitle: "Our team brainstorms ideas and innovative approaches."
  },
  {
    icon: <Rocket size={40} className="text-red-600" />,
    title: "Implementation",
    subtitle: "Turning plans into action with modern tools and expertise."
  },
  {
    icon: <Users size={40} className="text-red-600" />,
    title: "Collaboration",
    subtitle: "We work closely with clients ensuring transparency & trust."
  },
  {
    icon: <CheckCircle size={40} className="text-red-600" />,
    title: "Final Delivery",
    subtitle: "Delivering high-quality projects on time, every time."
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-red-50 py-28 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-4">
          <span className="text-red-600">How</span>{" "}
          <span className="text-gray-900">We Work</span>
        </h2>
        <p className="text-lg text-gray-700 text-left">
          Our workflow is designed to ensure efficiency, creativity, and
          transparency at every step of the process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {workFlowData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start relative overflow-hidden group transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* wave effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

            <div className="mb-4 relative z-10">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 relative z-10">
              <span className="text-red-600">{item.title.split(" ")[0]}</span>{" "}
              <span className="text-gray-900">{item.title.split(" ").slice(1).join(" ")}</span>
            </h3>
            <p className="text-gray-700 relative z-10">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
