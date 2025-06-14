
import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { FaCheckCircle, FaRegStar } from 'react-icons/fa';
import { ShieldCheck, Clock, PhoneCall, BadgeDollarSign } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="text-green-600 dark:text-green-400 w-6 h-6" />,
        title: "Verified Experts",
        desc: "All service providers are background-checked and skilled in their trade.",
    },
    {
        icon: <Clock className="text-blue-600 dark:text-blue-400 w-6 h-6" />,
        title: "On-Time Service",
        desc: "We value your time. Punctuality is our promise.",
    },
    {
        icon: <PhoneCall className="text-purple-600 dark:text-purple-400 w-6 h-6" />,
        title: "24/7 Customer Support",
        desc: "Get help anytime through chat, phone, or email.",
    },
    {
        icon: <BadgeDollarSign className="text-yellow-600 dark:text-yellow-400 w-6 h-6" />,
        title: "Transparent Pricing",
        desc: "No hidden fees — clear, upfront estimates for every job.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5 },
    }),
};

const WhyChoose = () => {
    return (
        <div className="mt-12 bg-white dark:bg-gray-900 transition-colors duration-300">
            <section className="py-12 text-center px-4">
                <div className="divider mb-12">
                    <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 dark:text-white">
                        Why Choose HomeRepair
                        <motion.span
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]"
                        >
                            BD
                        </motion.span>
                        ?
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="p-8 bg-amber-50 dark:bg-gray-100 rounded-full relative">
                            <FaRegStar size={10} className="text-green-500 animate-ping text-4xl absolute right-7" />
                            <img
                                className="w-16 h-16"
                                src="https://i.ibb.co/GvH5Nmzf/mortgage.png"
                                alt="Home Icon"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                        Trusted Expertise, Crafted for Your Home
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        At HomeService, we take great pride in being a reliable name in home solutions. Since 2017, we've been connecting thousands of homeowners with skilled professionals — and have built a strong reputation for dependable, quality service.
                    </p>

                    {/* Stats */}
                    <div className="text-lg text-gray-700 dark:text-gray-200">
                        <span className="italic mr-2">Trusted By</span>
                        <motion.span
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
                            <CountUp start={0} delay={3} duration={5} end={39000} />+
                        </motion.span>
                        <span className="italic ml-2">Happy Customers</span>
                    </div>
                </div>
            </section>

            <section className="pb-12 px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition flex items-start space-x-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            variants={fadeUp}
                        >
                            <div>{item.icon}</div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;






