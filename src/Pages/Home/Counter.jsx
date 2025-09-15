import React, { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Trophy, Calendar } from "lucide-react";

const counterData = [
  {
    icon: <Briefcase size={40} className="text-red-600" />,
    title: "Projects",
    target: 120,
  },
  {
    icon: <Users size={40} className="text-red-600" />,
    title: "Clients",
    target: 85,
  },
  {
    icon: <Trophy size={40} className="text-red-600" />,
    title: "Team",
    target: 25,
  },
    {
    icon: <Calendar size={40} className="text-red-600" />,
    title: "Experience",
    target: 1,
  },
];

const Counter = () => {
  const [counts, setCounts] = useState(counterData.map(() => 0));
  const sectionRef = useRef(null);

  // Function to run counter animation
  const runCounter = () => {
    counterData.forEach((item, index) => {
      let start = 0;
      const end = item.target;
      const duration = 2000; // 2s
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start === end) clearInterval(timer);
      }, stepTime);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounts(counterData.map(() => 0)); // reset counts
            runCounter(); // start animation
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-tr from-red-100 via-white to-red-50 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-left font-bold mb-4">
          <span className="text-red-600">Our</span>{" "}
          <span className="text-gray-900">Achievements</span>
        </h2>
        <p className="text-lg text-gray-700 text-left">
          We take pride in our journey of successful projects, satisfied clients,
          and a growing dedicated team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {counterData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center relative overflow-hidden group transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* wave hover bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

            <div className="relative z-10 mb-4">{item.icon}</div>
            <h3 className="text-4xl font-bold text-red-600 relative z-10">
              {counts[index]}+
            </h3>
            <p className="text-gray-800 text-lg font-medium relative z-10">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
