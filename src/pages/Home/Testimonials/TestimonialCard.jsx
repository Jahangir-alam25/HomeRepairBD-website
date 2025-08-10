
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ item }) => {
    const { name, location, title, company, review, image } = item;

    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 5 }}
            className=" mx-auto rounded-xl shadow-lg p-4 text-center border border-purple-300 dark:border-gray-700 bg-gradient-to-b from-purple-300 to-white dark:from-gray-700 dark:to-gray-900 transition-colors duration-300"
        >
            {/* Logo */}
            <div className="flex justify-start mb-2">
                <img
                    src="https://i.ibb.co/GvH5Nmzf/mortgage.png"
                    alt="Home Repair BD Logo"
                    className="w-16 h-16"
                />
            </div>

            {/* Image and Name */}
            <div className="relative">
                <div className="flex justify-center mb-4">
                    <div className="rounded-full overflow-hidden border-4 border-blue-500 w-24 h-24 absolute -top-8">
                        <img
                            src={image}
                            alt={name}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div className="pt-14 rounded-md bg-white dark:bg-gray-800 transition-colors duration-300  h-78">
                    {/* Name and Location */}
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{location}</p>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                    <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]">
                        {company}
                    </p>

                    {/* Review Text */}
                    <p className="text-gray-700 dark:text-gray-300 mt-2 px-4">
                        {review.split("Full flat renovation work")[0]}
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]">
                            Full flat renovation work
                        </span>
                        {review.split("Full flat renovation work")[1]}
                    </p>

                    {/* Star Rating */}
                    <div className="mt-3 text-yellow-500 text-xl">★★★★★</div>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
