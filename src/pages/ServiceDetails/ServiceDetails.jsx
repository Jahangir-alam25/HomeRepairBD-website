
import React from 'react';
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaTools,
  FaShieldAlt,
  FaUserCheck,
} from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const ServiceDetails = () => {
  const {
    _id,
    image,
    name,
    description,
    price,
    providerName,
    area,
    providerImage,
  } = useLoaderData();

  const organizedFeatures = [
    {
      icon: <FaClock className="text-3xl text-purple-600 dark:text-purple-400" />,
      title: 'Fast Response',
      desc: 'Our providers reach you within hours of booking.',
    },
    {
      icon: <FaTools className="text-3xl text-green-600 dark:text-green-400" />,
      title: 'Professional Tools',
      desc: 'All services done using modern tools and methods.',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500 dark:text-red-400" />,
      title: 'Safety Guaranteed',
      desc: 'We ensure complete safety and hygiene during work.',
    },
    {
      icon: <FaUserCheck className="text-3xl text-blue-500 dark:text-blue-400" />,
      title: 'Verified Providers',
      desc: 'Every provider is background checked and approved.',
    },
  ];

  return (
    <div className='dark:bg-gray-800 py-6 dark:text-white bg-amber-50'>
      {/* Main Service Details */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 py-6 rounded-md  px-4 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Left Section */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-md">
            <img
              src={image}
              alt={name}
              className="w-full h-60 sm:h-96 object-cover rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-3xl font-bold mb-3">{name}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mb-2">
              <FaMapMarkerAlt />
              {area}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">
              Service Features
            </h3>
            <ul className="list-none space-y-2 mb-6">
              {[
                '100% Satisfaction Guarantee',
                'Experienced & Verified Provider',
                'Quick Response Time',
                'Affordable Pricing',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500 dark:text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-x-4 mt-4 dark:border dark:border-white dark:p-2 dark:rounded-lg">
              <img
                src={providerImage}
                alt={providerName}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{providerName}</p>
                <p className="text-sm dark:text-white">Author</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-80">
          <div className="sticky top-24 bg-white dark:bg-gray-800 shadow-md rounded-md p-6 border dark:border-gray-600">
            <p className="text-lg font-semibold mb-2">Service Price</p>
            <p className="text-2xl text-pink-600 dark:text-pink-400 font-bold mb-4">
              ${price}
            </p>
            <Link to={`/bookingServices/${_id}`}>
              <button className="w-full bg-gradient-to-r from-[#911ae3] to-pink-500 text-white py-2 rounded">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 my-6">
          Service Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizedFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md dark:shadow-sm rounded-xl p-5 text-center hover:shadow-lg transition-shadow duration-300 border dark:border-gray-600"
            >
              <div className="mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

