

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularServices = () => {
  const [services, setServices] = useState([]);

  // FIX: Removed `services` from dependency array to avoid infinite loop
  useEffect(() => {
    fetch('https://a11-service-web-application-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <section className="w-11/12 mx-auto px-4 py-8 bg-amber-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">Popular Services</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Explore our most popular services, delivered by trusted professionals at great prices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.slice(0, 6).map(service => (
          <div
            key={service._id}
            className="border bg-white dark:bg-gray-800 dark:border-gray-700 rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300 rounded-md mb-4"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              {service.description.length > 100
                ? service.description.slice(0, 100) + '...'
                : service.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-x-4 mt-2 border dark:border-gray-600 p-2 rounded-lg">
                        <img
                            src={service.providerImage}
                            alt={service.providerName}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="font-medium text-gray-800 dark:text-white">{service.providerName}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
                        </div>
                    </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Price: ${service.price}
              </span>
            </div>
            <div className="mt-4">
              <Link
                to={`/services/${service._id}`}
                className="btn text-white bg-gradient-to-r from-[#911ae3] to-pink-500 btn-block"
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Link
          to="/services"
          className="btn text-white bg-gradient-to-r from-[#911ae3] to-pink-500 px-10"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default PopularServices;

