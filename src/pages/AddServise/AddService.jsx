
import React from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { GiLifeSupport } from 'react-icons/gi';
import { MdOutlinePeople } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';

const AddService = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

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

        fetch('https://a11-service-web-application-server.vercel.app/services', {
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
                    navigate('/myPostedServices');
                }
            })
            .catch(err => {
                console.error(err);
                toast.error('Failed to add service');
            });
    };

    return (
        <div className="px-4 py-12 md:px-24 bg-amber-50 dark:bg-gray-800 dark:text-white transition-colors duration-300">
            <Helmet>
                <title>Add Service - HomeRepairBD</title>
            </Helmet>

            {/* Section Title */}
            <div className="text-center mb-12">
                <p className="uppercase text-sm tracking-wider text-gray-400 dark:text-gray-400 mb-2">
                    HomeRepairBD Provider Panel
                </p>
                <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                    Add Your Service
                </h1>
                <p className="text-gray-500 dark:text-gray-300 max-w-xl mx-auto mt-2 text-sm">
                    Let customers find and hire you for your skills. Fill in the details carefully.
                </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                    {
                        icon: (
                            <svg className="w-8 h-8 mx-auto text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m1-5H5a2 2 0 00-2 2v14l4-4h12a2 2 0 002-2V6a2 2 0 00-2-2z" />
                            </svg>
                        ),
                        title: 'Verified Listings',
                        desc: 'Ensure customer trust with our verified provider system.',
                    },
                    {
                        icon: (
                            <MdOutlinePeople className="w-8 h-8 mx-auto text-purple-600" />
                        ),
                        title: 'Local Reach',
                        desc: 'Get visible in your selected city and reach real customers.',
                    },
                    {
                        icon: (
                            <GiLifeSupport className="w-8 h-8 mx-auto text-purple-600" />
                        ),
                        title: '24/7 Support',
                        desc: 'We’re here to assist you anytime with any technical issue.',
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-base-100 dark:bg-gray-800 border border-base-300 dark:border-gray-700 p-6 rounded-xl text-center shadow hover:shadow-md transition">
                        {item.icon}
                        <h4 className="font-semibold mt-4 mb-1 text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]">
                            {item.title}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Provider Info */}
            <div className="flex items-center gap-4 bg-base-200  dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-lg p-4 max-w-md mx-auto mb-10">
                <img src={user?.photoURL} alt="Provider" className="w-12 h-12 rounded-full object-cover border" />
                <div>
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400">{user?.displayName}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-300">{user?.email}</p>
                </div>
            </div>

            <div className='bg-white rounded-xl'>
                <form onSubmit={handleSubmit} className="space-y-6  dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-xl shadow-xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Service Name */}
                        <fieldset className="bg-base-200 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg p-4">
                            <label className="block mb-1 font-medium dark:text-white">Service Name</label>
                            <input type="text" name="name" className="input w-full dark:text-white dark:bg-gray-800" placeholder="Enter service name" required />
                        </fieldset>

                        {/* Image URL */}
                        <fieldset className="bg-base-200 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg p-4">
                            <label className="block mb-1 font-medium dark:text-white">Image URL</label>
                            <input type="text" name="image" className="input w-full dark:text-white dark:bg-gray-800" placeholder="Enter image URL" required />
                        </fieldset>

                        {/* Price */}
                        <fieldset className="bg-base-200 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg p-4">
                            <label className="block mb-1 font-medium dark:text-white">Price ($)</label>
                            <input type="number" name="price" className="input w-full dark:text-white dark:bg-gray-800" placeholder="Enter price" required />
                        </fieldset>

                        {/* Service Area */}
                        <fieldset className="bg-base-200 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg p-4">
                            <label className="block mb-1 font-medium dark:text-white">Service Area</label>
                            <select name="area" className="select w-full dark:text-white dark:bg-gray-800" required>
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
                        <fieldset className="md:col-span-2 bg-base-200 dark:bg-gray-700 border border-base-300 dark:border-gray-600 rounded-lg p-4">
                            <label className="block mb-1 font-medium dark:text-white">Description</label>
                            <textarea name="description" rows="4" className="textarea w-full dark:text-white dark:bg-gray-800" placeholder="Describe the service in detail" required></textarea>
                        </fieldset>
                    </div>

                    <div>
                        <input type="submit" className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full px-8 text-white" value="Add Service" />
                    </div>
                </form>
            </div>

            {/* CTA Banner */}
            <div className="mt-20 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10 px-6 rounded-xl shadow-lg max-w-5xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Manage All Your Services in One Place</h3>
                <p className="text-sm mb-4 max-w-xl mx-auto">Track bookings, update listings, and boost your business performance with our dashboard.</p>
                <a href="/dashboard" className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 transition mt-3">
                    Go to Dashboard
                </a>
            </div>
        </div>
    );
};

export default AddService;
