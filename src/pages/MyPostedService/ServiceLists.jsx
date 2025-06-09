import React, { use, useState } from 'react';
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
                                text: "Your task has been deleted.",
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
                services.map(service => <div key={service._id}>
                    <div className=" pb-4 md:py-8">
                        <div className="bg-white mx-4 px-4 py-4 space-y-4 md:px-8 md:py-6 md:mx-12 md:space-y-8 lg:flex lg:mx-16 lg:px-6 lg:py-10 lg:gap-x-8 rounded-2xl">

                            <div className="lg:w-6/12">
                                <img className="w-full mx-auto rounded-lg" src={service.image} alt="" />
                            </div>
                            <div className="lg:w-6/12">
                                <div className="px-6 mx-auto">
                                    <div className='flex justify-between items-center mb-4'>
                                        <div className='flex gap-4'>
                                            <img src={service.providerImage} className='w-16 h-16 rounded-full' alt="" />
                                            <div>
                                                <h1 className="text-xl md:2xl lg:text-3xl font-bold">{service.providerName}</h1>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <td className=' gap-2 flex '><Link
                                                to={`/updateService/${service._id}`}

                                            >
                                                <MdOutlineEdit size={36} />
                                            </Link>
                                                <button className='cursor-pointer' onClick={() => handleDelete(service._id)}>
                                                    <MdDelete size={36} />
                                                </button>
                                            </td>
                                        </div>
                                    </div>

                                    <h1 className="text-xl md:2xl lg:text-3xl font-bold">{service.name} </h1>
                                    <p className="md:text-lg font-semibold">Service Area : {service.area}</p>
                                    <p className="py-2">{service.description}</p>
                                    <p>Price : ${service.price}</p>

                                </div>

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

