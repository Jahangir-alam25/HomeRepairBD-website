
import React from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const AddService = () => {
    const { user } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
         const serviceFormData = Object.fromEntries(formData.entries());

        const serviceData = {
            ...serviceFormData,
            description: formData.get('description'),
            providerName: user?.displayName,
            providerEmail: user?.email,
            providerImage: user?.photoURL,
        };

        console.log(serviceData);

        fetch('http://localhost:3000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceData),
        })
            .then(res => res.json())
            .then(data => {
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

    return (
        <div className="px-4 py-12 md:px-24">
            <div className="text-center space-y-4 mb-10">
                <h1 className="text-4xl md:text-6xl font-bold">Add Service</h1>
                <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base">
                    Fill out the form below to list your service. Include details like image URL, price, area, and description.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Service Name */}
                    <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
                        <label className="block mb-1 font-medium">Service Name</label>
                        <input type="text" name="name" className="input  w-full" placeholder="Enter service name" required />
                    </fieldset>
                     {/* Image URL */}
                    <fieldset className="bg-base-200 0 border border-base-300 rounded-lg p-4">
                        <label className="block mb-1  font-medium">Image URL</label>
                        <input type="text" name="image" className="input   w-full" placeholder="Enter image URL" required />
                    </fieldset>

                    {/* Price */}
                    <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
                        <label className="block mb-1 dark:text-white font-medium">Price ($)</label>
                        <input type="number" name="price" className="input  w-full" placeholder="Enter price" required />
                    </fieldset>

                    {/* Service Area */}
                    <fieldset className="bg-base-200  border border-base-300 rounded-lg p-4">
                        <label className="block mb-1  font-medium">Service Area</label>
                        <select name="area" className="select  w-full" required>
                            <option value="">Select Area</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Barishal">Barishal</option>
                        </select>
                    </fieldset>

                    {/* Description (Full Width) */}
                    <fieldset className="md:col-span-2 bg-base-200 dark:bg-gray-600 border border-base-300 rounded-lg p-4">
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea name="description" rows="4" className="textarea  w-full" placeholder="Describe the service in detail" required></textarea>
                    </fieldset>
                </div>

                <div>
                    <input type="submit" className="btn bg-primary w-full px-8" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;
