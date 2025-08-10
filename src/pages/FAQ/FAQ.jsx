
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of home repair and maintenance services including plumbing, electrical, painting, and more.",
  },
  {
    question: "How can I book a service?",
    answer:
      "You can book a service through our website by filling out the booking form or calling our customer support.",
  },
  {
    question: "Do you provide emergency support?",
    answer:
      "Yes, we provide 24/7 emergency support for urgent repair needs.",
  },
  {
    question: "How can I make payment?",
    answer:
      "We accept cash, mobile payments, and online bank transfers for your convenience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-semibold">{faq.question}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white dark:bg-gray-900 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
