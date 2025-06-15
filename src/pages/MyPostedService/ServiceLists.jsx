 

import React, { use, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ServiceLists = ({ servicesCreatedByPromise }) => {
    const initialServices = use(servicesCreatedByPromise);
    const [services, setServices] = useState(initialServices);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a11-service-web-application-server.vercel.app/services/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                            const remainingServices = services.filter(service => service._id !== _id);
                            setServices(remainingServices);
                        }
                    });
            }
        });
    };

    return (
        <div className='container mx-auto my-10 max-w-6xl px-4'>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">My Posted Services</h1>

            {services.length > 0 ? (
                services.map(service => (
                    <div key={service._id} className="w-full flex flex-col lg:flex-row md:flex-row gap-5 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-xl overflow-hidden my-4 p-4 transition">
                        {/* Service Image */}
                        <div className='flex-1 overflow-hidden rounded-md'>
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full sm:h-80 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className='flex-1'>
                            {/* Provider Info and Area/Price */}
                            <div className="flex justify-between mb-4">
                                <div>
                                    <h2 className="text-3xl font-bold mb-5">{service.name}</h2>
                                    <p className="text-gray-500 dark:text-gray-300 text-sm flex items-center gap-2">
                                        <FaMapMarkerAlt />{service.area}
                                    </p>
                                </div>
                            </div>

                            <p className="font-semibold">
                                Price: <span className='text-pink-500'>${service.price}</span>
                            </p>

                            {/* Service Description */}
                            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>

                            <div className="flex items-center gap-x-4 px-6 pt-4">
                                <div className="flex items-center gap-x-4 mt-2 border dark:border-white p-2 rounded-lg">
                                    <img src={service.providerImage} alt={service.providerName} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-medium">{service.providerName}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">Author</p>
                                    </div>
                                </div>

                                <div className="divider divider-horizontal dark:divider-white"></div>

                                {/* View Details Button */}
                                <div className='flex gap-2'>
                                    <Link
                                        className='btn bg-gradient-to-r from-purple-700 to-pink-500 text-white border-none'
                                        to={`/updateService/${service._id}`}
                                    >
                                        <MdOutlineEdit size={24} />
                                    </Link>
                                    <button
                                        className='btn bg-gradient-to-r from-purple-700 to-pink-500 text-white border-none'
                                        onClick={() => handleDelete(service._id)}
                                    >
                                        <MdDelete size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-600 dark:text-gray-300">No services found</p>
            )}
        </div>
    );
};

export default ServiceLists;
