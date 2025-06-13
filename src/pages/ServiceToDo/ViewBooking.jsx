
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const ViewBooking = () => {
  const data = useLoaderData();

  // Handle status update
  const handleStatusUpdate = (e, id) => {
    const status = e.target.value;

    fetch(`http://localhost:3000/bookings/${id}`, {
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

  // Calculate days remaining
  const getRemainingDays = (dateStr) => {
    const today = new Date();
    const targetDate = new Date(dateStr);
    const diff = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
    return diff > 0 ? `${diff} day(s) remaining` : 'Today or Past';
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl my-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Booking Overview</h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-10">No bookings available yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="table w-full">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
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
                <tr key={client._id} className="hover:bg-gray-50 transition-all">
                  <td className="font-medium">{index + 1}</td>

                  <td>
                    <div className="font-semibold text-gray-800">{client.userName}</div>
                    <p className="text-sm text-gray-500">{client.instruction}</p>
                  </td>

                  <td className="text-gray-600">{client.userEmail}</td>
                  <td className="text-gray-600">{client.date}</td>

                  <td className="text-blue-600 font-medium">{getRemainingDays(client.date)}</td>

                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, client._id)}
                      defaultValue={client.serviceStatus}
                      className="select select-bordered select-sm w-36 text-sm"
                    >
                      <option disabled>Update Status</option>
                      <option value="pending">Pending</option>
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
  );
};

export default ViewBooking;


