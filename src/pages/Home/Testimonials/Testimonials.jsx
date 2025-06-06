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
    image: "https://i.ibb.co/YR5zqtY/profile2.jpg"
  },
  {
    name: "Mr. Kawsar Ahmed",
    location: "Uttara",
    title: "HIGHLY RECOMMEND",
    company: "Home Repair BD",
    review: "They renovated my office floor. Clean work and great service!",
    image: "https://i.ibb.co/hZx8S0c/profile3.jpg"
  },
  {
    name: "Mrs. Nila Sultana",
    location: "Dhanmondi",
    title: "IMPRESSIVE RESULT",
    company: "Home Repair BD",
    review: "They handled everything with care. Highly satisfied!",
    image: "https://i.ibb.co/qChJwvR/profile4.jpg"
  }
];

const Testimonials = () => {
     return (
    <div>
        <div className='divider'><h1 className='text-4xl font-bold text-center mb-4'>What Our Clients Have To Say</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {testimonials.map((item, index) => (
        <TestimonialCard key={index} item={item} />
      ))}
    </div>
    </div>
  );
};

export default Testimonials;