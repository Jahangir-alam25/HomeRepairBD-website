import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllServiceCard from '../AddServise/AllServiceCard';

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
    if (searchedServices.length === 0) {
      alert("No services found with that name");
    }
  };

    return (
        <div className='max-w-6xl mx-auto px-5'>
            {/* Search Box */}
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            setSearchText("");
          }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-white w-full lg:w-5/12 sm:w-80 px-4 py-2 rounded-2xl border border-gray-300 shadow-sm"
              type="text"
              placeholder="Search event by name"
            />
            <button
              type="submit"
              className="bg-[#176AE5] text-white text-lg px-6 py-2 rounded-3xl hover:bg-blue-700 transition"
            >
              Search Now
            </button>
          </div>
        </form>
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


