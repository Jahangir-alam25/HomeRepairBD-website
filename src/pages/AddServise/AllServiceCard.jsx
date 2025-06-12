import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const AllServiceCard = ({ service }) => {
    return (
        <div className="w-full flex flex-col lg:flex-row md:flex-row gap-5  bg-white shadow-md rounded-xl overflow-hidden my-4 p-4">
            {/* Service Image */}
            <div className='flex-1 overflow-hidden rounded-md'>
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-60 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className='flex-1'>


                {/* Provider Info and Area/Price */}
                <div className="flex justify-between mb-4">
                    {/* Service Name */}

                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-5"> {service.name}</h2>
                        <p className="text-gray-500 text-sm flex items-center gap-2"><FaMapMarkerAlt />{service.area}</p>

                    </div>

                </div>

                <p className=" font-semibold">Price : <span className='text-pink-500'>${service.price}</span></p>

                {/* Service Description */}
                <p className="text-gray-600 mt-2">
                    {service.description.length > 100
                        ? service.description.slice(0, 100) + "..."
                        : service.description}
                </p>


                <div className="flex items-center gap-x-4 px-6 pt-4">
                    <div className="flex items-center gap-x-4 mt-2 dark:border dark:border-white dark:p-2 dark:rounded-lg">
                        <img src={service.providerImage} alt={service.providerName} className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="font-medium">{service.providerName}</p>
                            <p className="text-sm dark:text-white">Author</p>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    {/* View Details Button */}
                    <Link to={`/services/${service._id}`}>
                        <button className="mt-4 bg-linear-65 from-[#911ae3] to-pink-500 text-white px-4 py-2 rounded ">
                            View Detail
                        </button>
                    </Link>

                </div>

            </div>
        </div>


    );
};

export default AllServiceCard;

