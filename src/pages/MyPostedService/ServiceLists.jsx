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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Provider Email</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            services.map((service, index) => <tr key={service._id}>
                                <th>{index + 1}</th>
                                <td>          <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" rounded h-12 w-12">
                                            <img
                                                src={service.image}
                                                alt="Service Image" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service.name}</div>
                                        <div className="text-sm opacity-50">{service.area}</div>
                                    </div>
                                </div>
                                </td>
                                <td>{service.providerEmail}</td>
                                <td>${service.price}</td>
                                <td className=' gap-2 flex '><Link
                                    to={`/updateService/${service._id}`}
                                   
                                >
                                    <MdOutlineEdit size={36} />
                                </Link>
                                <button className='cursor-pointer' onClick={() => handleDelete(service._id)}>
                                    <MdDelete size={36} />
                                </button>
                            </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceLists;