import React from 'react';

const AllServiceCard = ({service}) => {
    return (
       <div className="w-full flex flex-col lg:flex-row md:flex-row gap-5 hover:scale-105 transition-transform duration-300 bg-white shadow-md rounded-xl overflow-hidden my-4 p-4">
                    {/* Service Image */}
                    <div className='flex-1'>
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-60 object-cover rounded-md"
                        />
                    </div>

                    <div className='flex-1'>


                        {/* Provider Info and Area/Price */}
                        <div className="flex justify-between mb-4">
                            {/* Service Name */}

                            <div className=" ">
                                <h2 className="text-3xl font-bold">{service.name}</h2>
                                <p className="text-gray-500 text-sm">{service.area},</p>
                               
                            </div>
                            {/* Provider Info */}
                            <div className="flex items-center gap-2">
                                <img
                                    src={service.providerImage}
                                    alt={service.providerName}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="text-sm font-medium">{service.providerName}</span>
                            </div>
                        </div>

                         <p className="text-green-600 font-semibold">Price : ${service.price}</p>

                        {/* Service Description */}
                        <p className="text-gray-600 mt-2">
                            {service.description.length > 100
                                ? service.description.slice(0, 100) + "..."
                                : service.description}
                        </p>

                        {/* View Details Button */}
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            View Detail
                        </button>


                    </div>
                </div>
    );
};

export default AllServiceCard;