
import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import noBooking from '../../assets/lotties/notFound.json';
import { toast } from 'react-toastify';

const BookedServicesList = ({ bookingsCreatedByPromise }) => {
  const initialServices = use(bookingsCreatedByPromise);
  const [services, setServices] = useState(initialServices);
  const [modalData, setModalData] = useState(null);
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = () => {
    toast.success('Review submitted!');
    setModalData(null);
    setReviewText('');
  };

  const handleCancel = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://a11-service-web-application-server.vercel.app/bookings/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Cancelled!",
                text: "Your service has been cancelled.",
                icon: "success"
              });
              const remainingServices = services.filter((service) => service._id !== _id);
              setServices(remainingServices);
            }
          });
      }
    });
  };

  const getRemainingDays = (dateStr) => {
    const today = new Date();
    const targetDate = new Date(dateStr);
    const diff = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
    return diff > 0 ? `${diff} day(s) remaining` : 'Today or Past';
  };

  return (
    <div className='bg-purple-100 dark:bg-gray-800 dark:text-white'>
      <div className="py-4 sm:py-12 w-11/12 mx-auto   min-h-screen">
      {/* Title and Description */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2 text-purple-600">Your Bookings</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Below is the list of all services you’ve booked. You can review details, track status, and cancel if it’s still pending.
        </p>
      </div>

      {services.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-300">
          <div>
            <Lottie loop={true} animationData={noBooking} className="w-48 mx-auto" />
          </div>
          <p className="text-xl">You haven’t booked any services yet.</p>
          <Link to="/services" className="btn bg-gradient-to-r from-purple-500 to-indigo-500 mt-4 text-white">Go to Services</Link>
        </div>
      ) : (
        <div>
          {/* Service List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const isPending = service.serviceStatus === 'Pending';
              return (
                <div key={service.id} className="border rounded-lg shadow p-4 dark:bg-gray-900 dark:border-gray-700">
                  <img
                    src={service.serviceImage}
                    alt={service.serviceName}
                    className="w-full h-48 object-cover rounded"
                  />
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold">{service.serviceName}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      📅 <strong>Date:</strong> {service.date} ({getRemainingDays(service.date)})
                    </p>
                    <p className="text-sm">
                      👨‍🔧 <strong>Provider:</strong> {service.providerName} ({service.providerEmail})
                    </p>
                    <p className="text-sm">
                      💬 <strong>Instructions:</strong> {service.instruction || 'N/A'}
                    </p>
                    <p className="text-sm">
                      💵 <strong>Price:</strong> ${parseFloat(service.price).toFixed(2)}
                    </p>
                  </div>

                  <p className="mt-2"><strong>Status:</strong> <span>{service.serviceStatus}</span></p>

                  <button
                    onClick={() => handleCancel(service._id)}
                    disabled={!isPending}
                    className={`btn btn-sm w-full mt-4 text-white font-medium ${
                      !isPending ? 'bg-gray-400  cursor-not-allowed' : 'btn-error hover:bg-red-600'
                    }`}
                  >
                    Cancel Booking
                  </button>

                  {service.serviceStatus === 'completed' && (
                    <button
                      onClick={() => setModalData(service)}
                      className="btn btn-block mt-2 bg-gradient-to-r from-purple-700 to-pink-500 text-white"
                    >
                      Review
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Review Modal */}
          {modalData && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 space-y-4 dark:text-white">
                <h2 className="text-xl font-bold">Leave a Review</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  For: <strong>{modalData.serviceName}</strong>
                </p>
                <textarea
                  className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white"
                  rows="4"
                  placeholder="Write your review here..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                ></textarea>
                <div className="flex justify-end gap-3">
                  <button className="btn btn-ghost dark:text-white" onClick={() => setModalData(null)}>
                    Cancel
                  </button>
                  <button
                    className="btn bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-500 text-white"
                    onClick={handleReviewSubmit}
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default BookedServicesList;
