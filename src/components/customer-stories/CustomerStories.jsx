import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Testimonial from './Testimonial';
import TestimonialNav from './TestimonialNav';

const testimonials = [
  {
    id: 1,
    quote: "OSquare has truly revolutionized the way I manage my business operations. Their all-in-one platform is incredibly user-friendly and efficient. I can easily streamline processes and stay organized thanks to their innovative solutions. I highly recommend OSquare to any business owner looking to optimize their workflow.",
    author: "Tahir Aziz",
    // role: "General Manager, Aptech Learning",
    image: "/building.jpg",
    products: ['HR360', 'iTeam', 'EasyFee', 'iSchool'],
  },
  {
    id: 2,
    quote: "OSquare has revolutionized my business efficiency by providing a platform that consolidates all my operations seamlessly. From management to communication, OSquare simplifies everything, giving me more time to focus on growth. I highly recommend OSquare for any business looking to streamline their processes.",
    author: "Rao Yaseen",
    // role: "Country Manager, Aptech Learning",
    image: "/building-2.jpg",
    products: ['iTeam', 'EasyForms']
  },
  {
    id: 3,
    quote: "OSquare's platform has streamlined all aspects of my business operations. It's a game-changer for efficiency and organization. I highly recommend OSquare to any entrepreneur looking to simplify their workflow.",
    author: "Asad Un Nabi",
    // role: "Alpha College",
    image: "/building-3.jpg",
    products: ['iSchool', 'EasyFee']
  },
  {
    id: 4,
    quote: "As a small business owner, OSquare has been a game-changer for me. Their platform allows me to manage all aspects of my business efficiently. From invoicing to scheduling, everything is seamless. The support team is also top-notch! I highly recommend OSquare to any entrepreneur looking to streamline their operations.",
    author: "Faisal Rafique",
    // role: "ABC Creations",
    image: "/building-4.jpg",
    products: ['AMS', 'iTeam', 'HR360', 'EasyForms', 'LeadKonnekt']
  }
];

const CustomerStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-pink-50/30 py-24" id='customer-stories'>
      <div className="max-w-full mx-auto px-4 sm:px-6 xl:px-20 2xl:px-48">
        <div className="mb-12 px-4" data-aos='fade-up'>
          <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
            CUSTOMERS STORIES
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-gray-900">
            See how customers accomplish more with <span className='whitespace-nowrap'>
              <span
                className="text-5xl sm:text-6xl"
                style={{
                  fontFamily: "Bhineka", background: "linear-gradient(to right, #1E4FCD, #F36F7E)", WebkitBackgroundClip: "text", color: "transparent",
                  padding: "0 5px",
                }}>O</span>
              <span style={{ fontFamily: 'Noopla', fontWeight: '200' }}>
                Square</span>
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-1">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-1">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <TestimonialNav
          total={testimonials.length}
          current={currentSlide}
          onChange={setCurrentSlide}
        />
      </div>
    </section>
  );
};

export default CustomerStories;