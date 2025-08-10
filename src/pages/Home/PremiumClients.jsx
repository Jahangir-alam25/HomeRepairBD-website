
import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: "Halal", logo: "https://i.ibb.co/tpYTthyJ/indonesian-halal-logo-2022.jpg" },
  { name: "Business tagline", logo: "https://i.ibb.co/KcSfm5ZP/preview.jpg" },
  { name: "City Bank", logo: "https://i.ibb.co/spxk8Q2n/5464588.jpg" },
  { name: "Dynasty", logo: "https://i.ibb.co/tMqPRJSc/9929102.jpg" },
  { name: "Jamuna", logo: "https://i.ibb.co/S4LqPy45/Whats-App-Image-2025-06-15-at-20-38-40-5cf6a69c.jpg" },
  { name: "Walton", logo: "https://i.ibb.co/21VLVPQK/Whats-App-Image-2025-06-15-at-20-38-40-e7c7445c.jpg" },
];

const PremiumClients = () => {
  return (
    <section className="dark:bg-gray-800 pb-12 sm:pb-16 w-11/12 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
          OUR PREMIUM CLIENTS
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Trusted by the best brands across Bangladesh
        </p>
        <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded"></div>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {clients.map((client, idx) => (
          <div key={idx} className="dark:bg-gray-900 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={client.logo}
              alt={client.name}
              className="w-full h-20 object-contain mx-auto"
            />
            <p className="mt-2 text-center text-sm font-semibold text-gray-200">
              {client.name}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default PremiumClients;
