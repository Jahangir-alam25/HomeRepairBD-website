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
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((application, index) => <tr key={application._id} className="bg-base-200">

                                <th>{index + 1}</th>
                                <td>{application.userName}</td>
                                <td>Quality Control Specialist</td>
                                <td>

                                    <select onChange={(e) => handleStatusUpdate(e, application._id)} defaultValue={application.serviceStatus} className="select">
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

