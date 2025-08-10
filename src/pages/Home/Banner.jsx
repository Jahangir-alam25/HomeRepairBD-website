
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaPaintRoller, FaBolt } from 'react-icons/fa';
import { Link } from 'react-router';

const packages = [
  {
    icon: <FaTools className="text-6xl text-white" />,
    title: 'Trusted Home Repair Services in Bangladesh',
    description: 'From plumbing to electrical, HomeRepairBD delivers expert solutions right to your door—fast, reliable, and affordable.',
    image: 'https://i.ibb.co/qLgqk52q/service22.jpg'
  },
  {
    icon: <FaPaintRoller className="text-6xl text-white" />,
    title: 'Stylish Interior Revamp by HomeRepairBD',
    description: 'Transform your home with our expert interior design and renovation packages tailored to your budget and taste.',
    image: 'https://i.ibb.co/3YscPSzP/aaron-huber-G7s-E2-S4-Lab4-unsplash.jpg'
  },
  {
    icon: <FaBolt className="text-6xl text-white" />,
    title: 'Quick & Reliable Emergency Services',
    description: 'Need help fast? HomeRepairBD’s instant service plan gets professionals to your home in under 2 hours—anytime, anywhere in BD.',
    image: 'https://i.ibb.co/VcmMpr2H/young-cute-family-repairs-room.jpg'
  }
];


const Banner = () => {
  const [current, setCurrent] = useState(0);

 

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % packages.length);
  }, 5000); // 5 seconds
  return () => clearInterval(interval);
}, []);

 
const transition = {
  duration: 1.2, 
  ease: [0.43, 0.13, 0.23, 0.96]
};
  const currentPackage = packages[current];

  return (
    <section className="relative py-24 text-white overflow-hidden bg-black">
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
      <div className="relative z-10  mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 w-11/12 ">
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
            <Link to="/services">
            <button className="bg-linear-65 from-[#691ae3] to-pink-500 text-black font-semibold py-3 px-6 rounded-xl transition duration-300">
              Book a Service
            </button>
            </Link>
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
            className="flex-1 max-w-sm sm:max-w-md h-[200px] sm:h-[300px] rounded-xl shadow-xl"
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Banner;










