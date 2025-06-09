import React, { use } from 'react';
import { Link } from 'react-router';

const BookingList = ({servicesCreatedByPromise}) => {
    const services = use(servicesCreatedByPromise);
    return (
        <div className='container mx-auto my-10 max-w-6xl'>
            <h1 className="text-4xl font-bold mb-6">My Posted Services</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th>No.</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>BookingsCount</th>
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
                                <td>${service.price}</td>
                                <td>{service.booking_count}</td>
                                
                                <td className=' gap-2 flex '>
                                    <Link to={`/bookings/${service._id}`}>view Bookings</Link>
                                    
                            </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;