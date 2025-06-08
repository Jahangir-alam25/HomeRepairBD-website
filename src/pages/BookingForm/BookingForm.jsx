import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const BookingForm = () => {
  const { user } = useAuth();
  const service = useLoaderData();
  console.log(user.email);


  const [date, setDate] = useState('');
  const [instruction, setInstruction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookingData = {
      serviceId: service._id,
      serviceName: service.name,
      serviceImage: service.image,
      providerEmail: service.providerEmail,
      providerName: service.providerName,
      userEmail: user.email,
      userName: user.displayName,
      date,
      instruction,
      price: service.price,
      serviceStatus: 'pending',
    };
    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          toast.success('Service added successfully');
          form.reset();
        }
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to add service');
      });
  };

  if (!service || !user) {
    return <div className="p-6 text-red-500">Invalid Booking Request</div>;
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 bg-white shadow rounded-xl my-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Service Booking Form</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
          <label className="block mb-1 font-medium">Service ID</label>
          <input type="text" value={service._id} className="w-full input " placeholder="Service ID" />
        </fieldset>
        <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
          <label className="block mb-1 font-medium">Service Name</label>
          <input type="text" value={service.name} className="w-full input " />
        </fieldset>

        <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
          <label className="block mb-1 font-medium">Service URL</label>
          <input type="text" value={service.image} className="w-full input input-bordered" />
        </fieldset>
        {/* Image URL */}
        <fieldset className="bg-base-200 0 border border-base-300 rounded-lg p-4">
          <label className="block mb-1  font-medium">Service Provider Email</label>
          <input type="text" value={service.providerEmail} className="w-full input input-bordered" />
        </fieldset>

        {/* Price */}
        <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
          <label className="block mb-1 dark:text-white font-medium">Service Provider Name</label>
          <input type="text" value={service.providerName} className="w-full input input-bordered" />
        </fieldset>

        {/* Service Area */}
        <fieldset className="bg-base-200  border border-base-300 rounded-lg p-4">
          <label className="block mb-1  font-medium">User Email</label>
          <input type="text" value={user.email} className="w-full input input-bordered" />
        </fieldset>

        {/* Description (Full Width) */}
        <fieldset className="bg-base-200 dark:bg-gray-600 border border-base-300 rounded-lg p-4">
          <label className="block mb-1 font-medium">User Name</label>
          <input type="text" value={user.displayName} className="w-full input input-bordered" />
        </fieldset>

        <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
          <label className="block mb-1 font-medium">Service Name</label>
          <input
            type="date"
            className="w-full input input-bordered"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </fieldset>
        <fieldset className="md:col-span-2 bg-base-200 border border-base-300 rounded-lg p-4">
          <label className="block mb-1 font-medium">Service Name</label>
          <textarea
            className="w-full textarea textarea-bordered"
            placeholder="Special instructions, address, area, etc."
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            rows={4}
          />
        </fieldset>
      </div>



      <button type="submit" className="btn btn-primary w-full">Purchase</button>
    </form>
  );
};

export default BookingForm;