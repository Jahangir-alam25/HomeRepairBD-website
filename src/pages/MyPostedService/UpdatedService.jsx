

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdatedService = () => {
    const navigate = useNavigate();
    const service = useLoaderData();

    const handleUpdateService = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const serviceData = Object.fromEntries(formData.entries());

        fetch(`https://a11-service-web-application-server.vercel.app/services/${service._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Updated!",
                        text: "Service updated successfully!",
                    });
                    navigate("/myPostedServices");
                }
            })
            .catch(error => {
                toast.error('Error updating service:', error);
            });
    };

    return (
        <div className="px-4 py-12 md:px-24 bg-amber-50 dark:bg-gray-800 dark:text-white min-h-screen">
            <Helmet><title>Update Service - HomeRepairBD</title></Helmet>
            <div className="text-center space-y-4 mb-10">
                <h1 className="text-4xl text-purple-600 md:text-6xl font-bold">Update Service</h1>
                <p className="text-gray-500 dark:text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
                    Fill out the form below to update your service. Include details like image URL, price, area, and description.
                </p>
            </div>

            <form onSubmit={handleUpdateService} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Service Name */}
                    <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-lg p-4">
                        <label className="block mb-1 font-medium">Service Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={service.name}
                            className="input w-full dark:bg-gray-700 dark:text-white"
                            placeholder="Enter service name"
                            required
                        />
                    </fieldset>

                    {/* Image URL */}
                    <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-lg p-4">
                        <label className="block mb-1 font-medium">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={service.image}
                            className="input w-full dark:bg-gray-700 dark:text-white"
                            placeholder="Enter image URL"
                            required
                        />
                    </fieldset>

                    {/* Price */}
                    <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-lg p-4">
                        <label className="block mb-1 font-medium">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={service.price}
                            className="input w-full dark:bg-gray-700 dark:text-white"
                            placeholder="Enter price"
                            required
                        />
                    </fieldset>

                    {/* Service Area */}
                    <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-lg p-4">
                        <label className="block mb-1 font-medium">Service Area</label>
                        <select
                            name="area"
                            defaultValue={service.area}
                            className="select w-full dark:bg-gray-700 dark:text-white"
                            required
                        >
                            <option value="">Select Area</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Barishal">Barishal</option>
                        </select>
                    </fieldset>

                    {/* Description */}
                    <fieldset className="md:col-span-2 bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-lg p-4">
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea
                            name="description"
                            defaultValue={service.description}
                            rows="4"
                            className="textarea w-full dark:bg-gray-700 dark:text-white"
                            placeholder="Describe the service in detail"
                            required
                        ></textarea>
                    </fieldset>
                </div>

                <div>
                    <input
                        type="submit"
                        className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white w-full px-8 border-none"
                        value="Update Service"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdatedService;
