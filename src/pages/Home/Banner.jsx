
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaPaintRoller, FaBolt } from 'react-icons/fa';

const packages = [
  {
    icon: <FaTools className="text-6xl text-white" />,
    title: 'Complete Repair Package',
    description: 'From plumbing to electrical, get everything fixed by experts.',
    image: 'https://i.ibb.co/3YscPSzP/aaron-huber-G7s-E2-S4-Lab4-unsplash.jpg'
  },
  {
    icon: <FaPaintRoller className="text-6xl text-white" />,
    title: 'Interior Revamp',
    description: 'Stylish and affordable makeovers for every room.',
    image: 'https://i.ibb.co/3YscPSzP/aaron-huber-G7s-E2-S4-Lab4-unsplash.jpg'
  },
  {
    icon: <FaBolt className="text-6xl text-white" />,
    title: 'Instant Service Plan',
    description: 'Emergency services delivered in under 2 hours.',
    image: 'https://i.ibb.co/VcmMpr2H/young-cute-family-repairs-room.jpg'
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % packages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const transition = {
    duration: 3,
    ease: [0.43, 0.13, 0.23, 0.96]
  };

  const currentPackage = packages[current];

  return (
    <section className="relative py-24 px-6 text-white overflow-hidden bg-black">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 blur-sm brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')"
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 px-0 sm:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={transition}
            className="flex-1"
          >

            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]"
            >
             Welcome to Home Repair
            </motion.h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentPackage.title}</h1>
            <p className="text-lg md:text-xl mb-6">{currentPackage.description}</p>
            <button className="bg-linear-65 from-[#691ae3] to-pink-500 text-black font-semibold py-3 px-6 rounded-xl transition duration-300">
              Book a Service
            </button>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.img
            key={`img-${current}`}
            src={currentPackage.image}
            alt={currentPackage.title}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={transition}
            className="flex-1 max-w-sm sm:max-w-md rounded-xl shadow-xl"
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Banner;










