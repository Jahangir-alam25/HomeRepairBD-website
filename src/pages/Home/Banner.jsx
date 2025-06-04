

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

    const slides = [
        {
            image: "https://i.ibb.co/G4sgr82D/julia-zyablova-S1v7h-VUi-Cg0-unsplash.jpg",
            title: "Welcome to HealthCare Services",
            subtitle: "Providing expert medical care with compassion, commitment, and cutting-edge technology.",
        },
        {
            image: "https://i.ibb.co/GfLsjJJ2/anton-8q-U8-X1zkv-I-unsplash.jpg",
            title: "Your Health, Our Mission",
            subtitle: "We prioritize your well-being with 24/7 services, specialist support, and patient-first care.",
        },
        {
            image: "https://i.ibb.co/7d5Mh0nL/national-cancer-institute-NFvd-KIhx-Yl-U-unsplash.jpg",
            title: "Care You Can Trust",
            subtitle: "Personalized treatments and dedicated professionals—because your health deserves the best.",
        },
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true
    };

    return (
        <div className="w-11/12 mx-auto py-6">
            <div className="flex  sm:flex-row justify-center items-center mb-10 ">
                <input
                    className=" w-full lg:w-5/12 sm:w-80 px-4 py-2 rounded-l-2xl border-2  border-gray-300 shadow-sm"
                    type="text"
                    placeholder="Search "
                />
                <button className="bg-primary text-white text-lg px-10 py-2 rounded-r-2xl  transition">
                    Search
                </button>
            </div>

            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Committed to Your Health & Well-being</h2>
                <p className=" mt-2">
                    Experience compassionate care, modern medical facilities, and expert professionals—all dedicated to keeping you and your family healthy.
                </p>
            </div>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div className="relative">
                        <img
                            className="rounded-lg w-full h-120"
                            src={slide.image}
                            alt="Slide 1"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white rounded-lg">
                            <h2 className="text-3xl font-bold">{slide.title}</h2>
                            <p className="text-center my-4">{slide.subtitle}</p>
                            <button className="btn text-white bg-primary">Learn More</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;





