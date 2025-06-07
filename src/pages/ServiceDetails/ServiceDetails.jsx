import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const { image, name, description, price, providerName, area, providerImage, } = useLoaderData();



    return (
        <div className=" bg-gray-100 pb-4 md:py-8">
            <div className="bg-white mx-4 px-4 py-4 space-y-4 md:px-8 md:py-6 md:mx-12 md:space-y-8 lg:flex lg:mx-16 lg:px-6 lg:py-10 lg:gap-x-8 rounded-2xl">
              
                <div className="lg:w-6/12">
                    <img className="w-full mx-auto rounded-lg" src={image} alt="" />
                </div>
                <div className="lg:w-6/12">
                    <div className="px-6 mx-auto">
                        <div className='flex gap-4'>
                            <img src={providerImage} className='w-16 h-16 rounded-full' alt="" />
                            <div>
                                <h1 className="text-xl md:2xl lg:text-3xl font-bold">{providerName}</h1>
                                <p className="md:text-lg">{area}</p>
                            </div>
                        </div>

                        <h1 className="text-xl md:2xl lg:text-3xl font-bold">{name} </h1>
                        <p className="py-2">{description}</p>
                        <p>Price : ${price}</p>
                        
                    
                        <button className='btn btn-primary px-10 mt-3'>Book Now</button>
                    </div>
                    <div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;