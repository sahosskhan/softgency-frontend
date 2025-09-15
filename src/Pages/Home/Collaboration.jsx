import React from "react";

const collaborations = [
  { name: "Sapanish City FC", logo: "/spc.png", status: "Running" },
  { name: "CSEssence", logo: "/cse.png", status: "Running" },
  { name: "Bharakoto.com", logo: "/bk.png", status: "Running" },
  { name: "SSN Internet", logo: "/ssn.png", status: "Done" },
  { name: "Bheramara Fiber Link", logo: "/bfl.jpg", status: "Done" },
];

const Collaboration = () => {
  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-red-50 py-28 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-left font-bold mb-4">
          <span className="text-red-600">Our</span>{" "}
          <span className="text-gray-900">Collaborations</span>
        </h2>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {collaborations.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6"
          >
            {/* Logo with status dot */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className={`w-28 h-28 object-contain ${
                  item.status === "Done" ? "grayscale" : ""
                }`}
              />
              {/* Status dot */}
              <span
                className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${
                  item.status === "Running" ? "bg-green-500 animate-pulse" : "bg-gray-500"
                }`}
              ></span>
            </div>

            {/* Brand name */}
            <p className="mt-3 text-lg font-semibold text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaboration;
