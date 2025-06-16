

import Lottie from 'lottie-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import noBooking from '../../assets/lotties/notFound.json';

const ViewBooking = () => {
  const data = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    const status = e.target.value;

    fetch(`https://a11-service-web-application-server.vercel.app/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Status updated successfully',
            showConfirmButton: false,
            timer: 1500,
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
    <div className='bg-amber-50 dark:bg-gray-800 min-h-screen'>
      <div className="w-11/12 mx-auto px-4 py-10 ">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Booking Overview</h1>

        {data.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-300">
            <div>
              <Lottie loop={true} animationData={noBooking} className="w-48 mx-auto" />
            </div>
            <p className="text-xl">No bookings available yet.</p>
            <button onClick={() => window.history.back()} className="btn bg-gradient-to-r from-purple-500 to-indigo-500 mt-4 text-white">Go Back</button>
          </div>

        ) : (
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
            <table className="table w-full">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm uppercase">
                <tr>
                  <th>No.</th>
                  <th>Client</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Days Left</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {data.map((client, index) => (
                  <tr key={client._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                    <td className="font-medium dark:text-white">{index + 1}</td>

                    <td>
                      <div className="font-semibold text-gray-800 dark:text-white">{client.userName}</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{client.instruction}</p>
                    </td>

                    <td className="text-gray-600 dark:text-gray-300">{client.userEmail}</td>
                    <td className="text-gray-600 dark:text-gray-300">{client.date}</td>

                    <td className="text-blue-600 dark:text-blue-400 font-medium">
                      {getRemainingDays(client.date)}
                    </td>

                    <td>
                      <select
                        onChange={(e) => handleStatusUpdate(e, client._id)}
                        defaultValue={client.serviceStatus}
                        className="select select-bordered select-sm w-36 text-sm dark:bg-gray-900 dark:text-white dark:border-gray-600"
                      >
                        <option disabled>Update Status</option>
                        <option value="Pending">Pending</option>
                        <option value="working">Working</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBooking;



