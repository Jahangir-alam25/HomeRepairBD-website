import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const ViewBooking = () => {
  const data = useLoaderData();
    console.log(data);

    const handleStatusUpdate = (e, id) => {
        const status = e.target.value;
        console.log(status, id);

        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "successfullyStatus updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    
    return (
        <div>
            <h1>ViewApplications {data.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((client, index) => <tr key={client._id} className="bg-base-200">

                                <th>{index + 1}</th>
                                <td>
                                    <div className='font-bold'>
                                        {client.userName}
                                    </div>
                                    <div>
                                        <p>Address : {client.instruction}</p>
                                    </div>
                                </td>
                                <td>{client.userEmail}</td>
                                <td>{client.date}</td>
                                <td>

                                    <select onChange={(e) => handleStatusUpdate(e, client._id)} defaultValue={client.serviceStatus} className="select w-36">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>working</option>
                                        <option>completed</option>
                                        
                                    </select>


                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewBooking;

