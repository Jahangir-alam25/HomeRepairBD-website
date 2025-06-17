
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const services = [
  {
    title: "Home Interior",
    image: "https://i.ibb.co/3YscPSzP/aaron-huber-G7s-E2-S4-Lab4-unsplash.jpg",
    description:
      "Transform your living spaces with elegant and functional interior design tailored to your taste and lifestyle.",
  },
  {
    title: "Flooring & Tiling",
    image: "https://i.ibb.co/qY6mY0mt/tile-merchant-ireland-v9o-Btv-RCKHk-unsplash.jpg",
    description:
      "Enhance the beauty and durability of your home with expert flooring and tiling services—perfectly installed, long-lasting, and stylish.",
  },
  {
    title: "Painting and Polishing",
    image: "https://i.ibb.co/ksbWSPCN/young-woman-painting-house-wall-full-shot.jpg",
    description:
      "Give your home a fresh new look with our expert painting and polishing services for walls, furniture, and more.",
  },
  {
    title: "Maintenance—Plumbing",
    image: "https://i.ibb.co/prjB1CNq/service-maintenance-worker-repairing.jpg",
    description:
      "We fix leaks, replace fixtures, and provide comprehensive plumbing solutions to keep your home running smoothly.",
  },
  {
    title: "Electrical",
    image: "https://i.ibb.co/Hfk9Cz7Z/emmanuel-ikwuegbu-0-kl1-Bjv-Fc-unsplash.jpg",
    description:
      "From wiring and lighting to appliance installation, our certified electricians ensure safe and efficient electrical services.",
  },
  {
    title: "Cleaning",
    image: "https://i.ibb.co/VYGGVzxR/everdrop-gmbh-Sq-OMDOQb3ws-unsplash.jpg",
    description:
      "Enjoy a spotless and hygienic home with our thorough and reliable cleaning services tailored to your schedule.",
  },
];

const FeaturedSection = () => {
  return (
    <div className="bg-amber-50 w-11/12 mx-auto dark:bg-gray-800 transition-colors duration-300">
      <section className="py-16 ">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="divider mb-3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Features
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Your one-stop solution for trusted and timely home repair services across Bangladesh.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]">
              Reliable Home Repairs, Right When You Need Them
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mt-4 mb-6">
              HomeRepairBD connects you with certified professionals for all types of home maintenance—plumbing, electrical, cleaning, and more. Fast, affordable, and trusted by thousands across Bangladesh.
            </p>
            <Link to="/services">
              <button className="bg-gradient-to-r from-[#911ae3] to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-medium">
                Book a Service Now
              </button>
            </Link>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <img
              src="https://i.ibb.co/9mGmTNCc/4322372.jpg"
              alt="Home Repair Illustration"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className=" pb-16">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSection;




