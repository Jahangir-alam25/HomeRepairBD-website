
import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";

const AllServiceCard = ({ service }) => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row md:flex-row gap-5 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl overflow-hidden my-4 p-4 transition-colors duration-300">
            {/* Service Image */}
            <div className='flex-1 overflow-hidden rounded-md'>
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-60 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className='flex-1'>
                {/* Service Info */}
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white">{service.name}</h2>
                        <p className="text-gray-500 dark:text-gray-300 text-sm flex items-center gap-2">
                            <FaMapMarkerAlt />{service.area}
                        </p>
                    </div>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-200">
                    Price : <span className='text-pink-500 dark:text-pink-400'>${service.price}</span>
                </p>

                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {service.description.length > 100
                        ? service.description.slice(0, 100) + "..."
                        : service.description}
                </p>

                <div className="flex items-center gap-x-4 px-6 pt-4">
                    {/* Provider Info */}
                    <div className="flex items-center gap-x-4 mt-2 dark:border dark:border-gray-600 dark:p-2 dark:rounded-lg">
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

                    <div className="divider divider-horizontal"></div>

                    {/* View Detail Button */}
                    <Link to={`/services/${service._id}`}>
                        <button className="mt-4 bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-800 hover:to-pink-600 text-white px-4 py-2 rounded shadow-md transition-colors">
                            View Detail
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;


