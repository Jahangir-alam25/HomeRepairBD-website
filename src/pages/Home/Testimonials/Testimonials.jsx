import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Mr. Sabuj Hawlader",
    location: "Dhaka",
    title: "GREAT SERVICE",
    company: "Home Repair BD",
    review: "Provided the best solution of my Full flat renovation work. I recommend them for this.",
    image: "https://i.ibb.co/5hGkrRxV/Stock-Cake-Attorney-at-work-1745386096.jpg"
  },
  {
    name: "Ms. Rina Akter",
    location: "Mirpur",
    title: "EXCELLENT WORK",
    company: "Home Repair BD",
    review: "Very professional team and timely delivery.",
    image: "https://i.ibb.co/DPLDrXs2/amood-oyindamola-r1e-Ws-Gi8-Aw0-unsplash.jpg"
  },
  {
    name: "Mr. Kawsar Ahmed",
    location: "Uttara",
    title: "HIGHLY RECOMMEND",
    company: "Home Repair BD",
    review: "They renovated my office floor. Clean work and great service!",
    image: "https://i.ibb.co/1G0RP2Ch/happy-male-with-satisfied-expression.jpg"
  },
  
];

const Testimonials = () => {
     return (
    <div className='mt-20 pb-20 w-11/12 mx-auto'>
        <div className='divider mb-12 '>
          <h1 className='sm:text-4xl text-xl font-bold text-center'>What Our <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]">Clients</span>  Have To Say</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {testimonials.map((item, index) => (
        <TestimonialCard key={index} item={item} />
      ))}
    </div>
    </div>
  );
};

export default Testimonials;