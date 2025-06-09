import React from 'react';
import { use } from 'react';
import { Link } from 'react-router';

const BookingList = ({ bookingsCreatedByPromise }) => {
  const services = use(bookingsCreatedByPromise);

  return (
    <div className="p-4">
      {/* Title and Description */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Your Bookings</h1>
        <p className="text-gray-600">
          Here is a list of all the services you have booked. You can view their details including provider, instructions, and status.
        </p>
      </div>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="border rounded-lg shadow p-4">
            <img
              src={service.serviceImage}
              alt={service.serviceName}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{service.serviceName}</h2>
            <p><strong>Provider:</strong> {service.providerName} ({service.providerEmail})</p>
            <p><strong>Instructions:</strong> {service.instruction}</p>
            <p><strong>Date:</strong> {service.date}</p>
            <p><strong>Price:</strong> ${service.price}</p>
            <p><strong>Status:</strong> <span className="capitalize">{service.serviceStatus}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
