
import React from 'react';
import { FaTools, FaUserCheck, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  const yearsOfService = new Date().getFullYear() - 2018;

  return (
    <div className='dark:bg-gray-800 bg-purple-100'>
      <div className="max-w-6xl mx-auto px-4 py-12 ">
      <h2 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
        About HomeRepairBD
      </h2>

      {/* Years of Service */}
      <div className="text-center mb-10">
        <h4 className="text-2xl font-semibold mb-2 text-pink-600">
          {yearsOfService}+ Years of Trusted Service
        </h4>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Since 2018, HomeRepairBD has proudly served thousands of households across Bangladesh with reliable, professional, and affordable home repair services. Our long-standing commitment to quality and customer satisfaction has made us a household name in the industry.
        </p>
      </div>

      {/* Overview Paragraph */}
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-10">
        HomeRepairBD is your trusted partner for reliable and affordable home repair and maintenance services across Bangladesh. Whether it's plumbing, electrical work, painting, or handyman tasks — we connect you with verified professionals to get the job done right.
      </p>

      {/* Service Features */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <FaTools className="text-5xl text-purple-800 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Wide Range of Services</h3>
          <p className="text-gray-600 dark:text-gray-300">
            From minor fixes to major renovations, we cover all home repair needs with skilled experts.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <FaUserCheck className="text-5xl text-purple-800 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Verified Professionals</h3>
          <p className="text-gray-600 dark:text-gray-300">
            All service providers are thoroughly vetted to ensure quality, safety, and reliability.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <FaHandshake className="text-5xl text-purple-800 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Customer-Centric Approach</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We prioritize your satisfaction by offering transparent pricing, timely service, and responsive support.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Our Mission</h4>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our mission is to simplify home repairs by bringing trustworthy professionals and homeowners together on one seamless platform. At HomeRepairBD, we are committed to quality, convenience, and customer happiness.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

