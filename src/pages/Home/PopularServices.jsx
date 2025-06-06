import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

// const servicesPromise = fetch('http://localhost:3000/services').then(res => res.json());

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services]);


    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="  mb-6 ">
                <h2 className="text-2xl font-bold mb-3">Popular Services</h2>
                <p>Explore our most popular services, delivered by trusted professionals at great prices.</p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.slice(0, 6).map(service => (
                    <div key={service.id} className="border rounded-xl p-4 shadow hover:shadow-md transition">
                        <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold">{service.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            {service.description.length > 100
                                ? service.description.slice(0, 100) + '...'
                                : service.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                                <img src={service.providerImage} alt={service.providerName} className="w-8 h-8 rounded-full" />
                                <span className="text-sm font-medium">{service.providerName}</span>
                            </div>
                            <span className=" font-semibold">Price : ${service.price}</span>
                        </div>
                        <div className="mt-4">
                            <Link to={`/services/${service._id}`} className="btn btn-primary btn-block btn-outline">
                                View Detail
                            </Link>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='flex justify-center mt-5'>
                 <Link to="/services" className="btn btn-primary px-10">Show All</Link>
            </div>
        </section>
    );
};

export default PopularServices;
