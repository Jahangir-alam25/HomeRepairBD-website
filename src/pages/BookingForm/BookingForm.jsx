
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

// Reusable readonly input field
const ReadOnlyInput = ({ label, value }) => (
  <fieldset className="mb-4">
    <legend className="font-semibold mb-1 dark:text-gray-200">{label}</legend>
    <input
      type="text"
      value={value}
      readOnly
      className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-not-allowed"
      aria-readonly="true"
    />
  </fieldset>
);

const BookingForm = () => {
  const { user } = useAuth();
  const service = useLoaderData();
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [instruction, setInstruction] = useState('');
  const [loading, setLoading] = useState(false);
  const [dateError, setDateError] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate < today) {
      setDateError('Please select today or a future date.');
    } else {
      setDateError('');
      setDate(selectedDate);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || dateError) {
      toast.error('Please provide a valid booking date.');
      return;
    }
    setLoading(true);

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
      serviceStatus: 'Pending',
    };

    try {
      const res = await fetch('https://a11-service-web-application-server.vercel.app/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success('Service booked successfully!');
        e.target.reset();
        navigate('/dashboard/bookedServices');
      } else {
        throw new Error('Booking failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!service || !user) {
    return <div className="p-6 text-red-500 dark:text-red-400">Invalid Booking Request</div>;
  }

  return (
    <div className='bg-purple-100 dark:bg-gray-800 min-h-screen py-10'>
      <Helmet>
        <title>Booking Form - HomeRepairBD</title>
      </Helmet>
      <div className="w-11/12 mx-auto  px-4 flex flex-col lg:flex-row gap-10">
      {/* Sidebar */}
      <aside className="hidden lg:block lg:w-1/3 h-fit sticky top-20 bg-base-100 dark:bg-gray-900 border border-base-300 dark:border-gray-700 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Booking Summary</h3>
        <div className="mb-3">
          <img
            src={service.image}
            alt={service.name}
            className="rounded-lg w-full h-40 object-cover mb-4"
          />
          <p className="font-semibold text-lg dark:text-white">{service.name}</p>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Provider: {service.providerName}</p>
          <p className="text-green-600 font-semibold mt-2 text-lg">${parseFloat(service.price).toFixed(2)}</p>
          <span className="badge badge-warning mt-2">Status: Pending</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You can safely book your preferred service. After booking, the provider will contact you to confirm details.
        </p>
      </aside>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="lg:w-2/3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg border border-base-300 dark:border-gray-700 rounded-xl p-8 space-y-8"
        aria-label="Service Booking Form"
      >
        <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">Service Booking Form</h2>

        {/* Service Info */}
        <fieldset className="border border-base-300 dark:border-gray-700 rounded-lg p-4">
          <legend className="font-semibold px-2 text-lg dark:text-gray-200">Service Information</legend>
          <ReadOnlyInput label="Service ID" value={service._id} />
          <ReadOnlyInput label="Service Name" value={service.name} />
          <ReadOnlyInput label="Service Image URL" value={service.image} />
          <ReadOnlyInput label="Service Price" value={service.price} />
          <ReadOnlyInput label="Provider Name" value={service.providerName} />
          <ReadOnlyInput label="Provider Email" value={service.providerEmail} />
        </fieldset>

        {/* User Info */}
        <fieldset className="border border-base-300 dark:border-gray-700 rounded-lg p-4">
          <legend className="font-semibold px-2 text-lg dark:text-gray-200">Your Information</legend>
          <ReadOnlyInput label="Your Name" value={user.displayName} />
          <ReadOnlyInput label="Your Email" value={user.email} />
        </fieldset>

        {/* Booking Details */}
        <fieldset className="border border-base-300 dark:border-gray-700 rounded-lg p-4 space-y-4">
          <legend className="font-semibold px-2 text-lg dark:text-gray-200">Booking Details</legend>

          <div>
            <label htmlFor="bookingDate" className="label font-medium dark:text-gray-300">
              Select Booking Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="bookingDate"
              className={`input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white ${dateError ? 'input-error' : ''}`}
              min={today}
              value={date}
              onChange={handleDateChange}
              required
              aria-describedby="dateError"
            />
            {dateError && (
              <p className="text-red-500 text-sm mt-1" id="dateError">
                {dateError}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="instructions" className="label font-medium dark:text-gray-300">
              Special Instructions / Address
            </label>
            <textarea
              id="instructions"
              className="textarea textarea-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              rows={4}
              placeholder="Provide any special instructions or your address"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              aria-multiline="true"
              required
            />
          </div>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn w-full bg-gradient-to-r from-[#911ae3] to-pink-500 text-white text-lg font-semibold tracking-wide disabled:opacity-70 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Booking...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default BookingForm;
