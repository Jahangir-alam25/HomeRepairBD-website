
import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import { Link } from 'react-router';
import noData from '../../assets/lotties/notFound.json';

const BookingList = ({ servicesCreatedByPromise }) => {
  const services = use(servicesCreatedByPromise);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.area.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalServices = services.length;

  return (
    <div className="container mx-auto my-10 max-w-6xl px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Your Offered Services
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base max-w-2xl">
          Manage and monitor all the services you’ve listed. Track bookings, update service statuses, and take action directly from your dashboard.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="flex justify-between items-center gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow text-center">
          <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
            Total Services <span className="text-purple-500">{totalServices}</span>
          </h2>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400"></p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search by name or area"
            className="input input-bordered border-purple-500 w-full md:max-w-sm dark:bg-gray-900 dark:text-white dark:border-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Services Cards */}
      {filteredServices.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-300 my-10">
          <h2 className="text-2xl font-semibold">No services found</h2>
          <p>Please try a different search term.</p>
          <Lottie animationData={noData} loop={true} className="w-48 h-48 mx-auto" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service._id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 relative hover:shadow-lg transition-all"
            >
              {/* Image + Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded overflow-hidden border dark:border-gray-600">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold dark:text-white">{service.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{service.area}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Price:</strong> ${service.price}
                </p>
                <p>
                  <strong>Bookings:</strong> {service.booking_count}
                </p>
                <Link to={`/bookings/${service._id}`}>
                  <button className="btn btn-block bg-gradient-to-r from-[#911ae3] to-pink-500 text-white">
                    View Bookings
                  </button>
                </Link>
              </div>

              {/* Dropdown Actions */}
              <div className="absolute top-4 right-4 dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-sm btn-ghost dark:text-white">
                  •••
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 dark:bg-gray-900 rounded-box w-40"
                >
                  <li>
                    <button className="dark:text-white">Edit Service</button>
                  </li>
                  <li>
                    <button className="text-red-500">Remove Service</button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingList;


