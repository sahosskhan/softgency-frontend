import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Softgency provide?",
    answer:
      "We provide Social Media Management, Online Business Management, Social Media Design, Professional Writing, Data Management, and Website Development.",
  },
  {
    question: "When was Softgency founded?",
    answer: "Softgency started its journey in 2025.",
  },
  {
    question: "Do you offer custom website development?",
    answer:
      "Yes, we specialize in building responsive and modern websites tailored to client needs.",
  },
  {
    question: "How do you ensure project delivery on time?",
    answer:
      "We follow a structured workflow and agile methodology to ensure timely completion.",
  },
  {
    question: "Can you handle global clients?",
    answer:
      "Absolutely! We have experience working with clients across different countries.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer post-project support and maintenance for long-term success.",
  },
  {
    question: "What makes Softgency different?",
    answer:
      "Our expert team, creative approach, and dedication to client satisfaction make us stand out.",
  },
  {
    question: "Do you offer content writing services?",
    answer:
      "Yes, our professional writing team delivers blogs, articles, and website content.",
  },
  {
    question: "Can you manage my social media accounts?",
    answer:
      "Yes, we manage complete social media campaigns including design, content, and strategy.",
  },
  {
    question: "How do I get started with Softgency?",
    answer:
      "Simply contact us through our website or email, and we will guide you through the onboarding process.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-red-50 py-28 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-red-600">Frequently</span>{" "}
          <span className="text-gray-900">Asked Questions</span>
        </h2>
        <p className="text-lg text-gray-700">
          Find answers to the most common questions about our services.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-900 hover:bg-red-50 transition"
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 text-red-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-700 text-base animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
