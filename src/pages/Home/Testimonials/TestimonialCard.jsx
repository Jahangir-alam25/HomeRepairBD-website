import React from 'react';
import { motion  } from 'framer-motion';
const TestimonialCard = ({ item }) => {
    const { name, location, title, company, review, image } = item;
    return (
        <motion.div
        initial={{ x: -1000 }}
        animate={{x: [-1000, 0]}}
        transition={{duration: 5, }}
        className="max-w-sm mx-auto rounded-xl shadow-lg p-4 text-center border bg-gradient-to-b from-purple-300 to-white">
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

                <div className="pt-14 rounded-md bg-white">
                    {/* Name and Location */}
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-gray-600 mb-2">{location}</p>

                    {/* Title */}
                    <h3 className="text-xl font-bold  mb-1">{title}</h3>
                    <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]">{company}</p>

                    {/* Review Text */}
                    <p className="text-gray-700 mt-2 px-4">
                        {review.split("Full flat renovation work")[0]}
                        <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]">
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