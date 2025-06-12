import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllServiceCard from '../AddServise/AllServiceCard';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import noData from '../../assets/lotties/notFound.json';

const AllService = () => {
  const servicesData = useLoaderData()

  const [services, setServices] = useState(servicesData);

  // State for search text
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setServices(servicesData);
    const searchedServices = servicesData.filter((service) =>
      service.name.toLowerCase().includes(text.toLowerCase())
    );
    setServices(searchedServices);

  };

  return (
    <div className='max-w-6xl mx-auto px-5 mb-12'>
      {/* Search Box */}
      <form
        onSubmit={(e) => {
          handleSearch(e, searchText);
          setSearchText("");
        }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center my-10">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-white w-full lg:w-5/12 sm:w-80 px-4 py-2 rounded border border-gray-300 shadow-sm"
            type="text"
            placeholder="Search services by name"
          />
          <motion.button
            type="submit"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="btn text-white rounded bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]"
          >
            Search Now
          </motion.button>

        </div>
      </form>
      {services.length === 0 ? (
        <div className="text-center text-gray-500 my-10">
          <h2 className="text-2xl font-semibold">No services found</h2>
          <p>Please try a different search term.</p>
          <Lottie animationData={noData} loop={true} className="w-48 h-48 mx-auto" />
        </div>
      ) :
        (<div className="text-center my-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">All Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through all available services offered by trusted providers in your area.
            From home cleaning to expert consultations, find the help you need, when you need it.
          </p>
        </div>)
      }

      {
        services.map(service => <AllServiceCard key={service._id} service={service}></AllServiceCard>)
      }
    </div>
  );
};

export default AllService;


