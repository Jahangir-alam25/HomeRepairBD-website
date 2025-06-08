import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router';

const BookingForm = () => {
const {user} = useAuth();
const service = useLoaderData();
console.log(user.email);


const [date, setDate] = useState('');
  const [instruction, setInstruction] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      serviceId: service.id,
      serviceName: service.name,
      serviceImage: service.image,
      providerEmail: service.providerEmail,
      providerName: service.providerName,
      userEmail: user.email,
      userName: user.displayName,
      date,
      instruction,
      price: service.price,
    };
    console.log('Booking confirmed:', bookingData);
    // Save to database / Firebase / API call here
  };

  if (!service || !user) {
    return <div className="p-6 text-red-500">Invalid Booking Request</div>;
  }
    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl mt-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Service Booking Form</h2>

      {/* Non-editable fields */}
      <input type="text" value={service._id} disabled className="w-full input input-bordered" placeholder="Service ID" />
      <input type="text" value={service.name} disabled className="w-full input input-bordered" />
      <input type="text" value={service.image} disabled className="w-full input input-bordered" />
      <input type="text" value={service.providerEmail} disabled className="w-full input input-bordered" />
      <input type="text" value={service.providerName} disabled className="w-full input input-bordered" />
      <input type="text" value={user.email} disabled className="w-full input input-bordered" />
      <input type="text" value={user.displayName} disabled className="w-full input input-bordered" />
      <input type="text" value={service.price} disabled className="w-full input input-bordered" />

      {/* Editable fields */}
      <input
        type="date"
        className="w-full input input-bordered"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        className="w-full textarea textarea-bordered"
        placeholder="Special instructions, address, area, etc."
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        rows={4}
      />

      <button type="submit" className="btn btn-primary w-full">Purchase</button>
    </form>
    );
};

export default BookingForm;