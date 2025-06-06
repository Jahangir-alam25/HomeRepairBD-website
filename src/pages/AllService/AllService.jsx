import React from 'react';
import { useLoaderData } from 'react-router';
import AllServiceCard from '../AddServise/AllServiceCard';

const AllService = () => {
    const services = useLoaderData()
    return (
        <div className='max-w-6xl mx-auto px-5'>
            <div className="text-center my-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">All Services</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Browse through all available services offered by trusted providers in your area. 
                    From home cleaning to expert consultations, find the help you need, when you need it.
                </p>
            </div>
            {
                services.map(service => <AllServiceCard key={service._id} service={service}></AllServiceCard>)
            }
        </div>
    );
};

export default AllService;


