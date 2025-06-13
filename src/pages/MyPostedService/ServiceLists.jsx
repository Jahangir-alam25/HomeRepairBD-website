import React, { use, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ServiceLists = ({ servicesCreatedByPromise }) => {
    const initialServices = use(servicesCreatedByPromise);

    const [services, setServices] = useState(initialServices);

    const handleDelete = (_id) => {
        console.log(_id);
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

                fetch(`http://localhost:3000/services/${_id}`, {
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
                            const remainingServices = services.filter((service) => service._id !== _id);
                            setServices(remainingServices);
                        }
                    })


            }
        });


    }
    return (
        <div className='container mx-auto my-10 max-w-6xl'>
            <h1 className="text-4xl font-bold mb-6">My Posted Services</h1>

            {services.length > 0 ? (
                services.map(service => <div key={service._id} className="w-full flex flex-col lg:flex-row md:flex-row gap-5  bg-white shadow-md rounded-xl overflow-hidden my-4 p-4 ">
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
                            {/* Service Name */}

                            <div className=" ">
                                <h2 className="text-3xl font-bold mb-5"> {service.name}</h2>
                                <p className="text-gray-500 text-sm flex items-center gap-2"><FaMapMarkerAlt />{service.area}</p>

                            </div>

                        </div>

                        <p className=" font-semibold">Price : <span className='text-pink-500'>${service.price}</span></p>

                        {/* Service Description */}
                        <p className="text-gray-600 mt-2">
                            { service.description}
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
                            <div className=' gap-2 flex '><Link
                                className='btn bg-linear-65 from-[#911ae3] to-pink-500 text-white'
                                to={`/updateService/${service._id}`}

                            >
                                <MdOutlineEdit size={36} />
                            </Link>
                                <button className='cursor-pointer btn bg-linear-65 from-[#911ae3] to-pink-500 text-white' onClick={() => handleDelete(service._id)}>
                                    <MdDelete size={36} />
                                </button>
                            </div>

                        </div>

                    </div>
                </div>)
            ) :
                ('No services found')}


        </div>
    );
};

export default ServiceLists;


//  <td className=' gap-2 flex '><Link
//     to={`/updateService/${service._id}`}

// >
//     <MdOutlineEdit size={36} />
// </Link>
//     <button className='cursor-pointer' onClick={() => handleDelete(service._id)}>
//         <MdDelete size={36} />
//     </button>
// </td> 

