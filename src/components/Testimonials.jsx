import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Tahir Aziz",
    title: "General Manager, Aptech Learning",
    feedback:
      "OSquare has truly revolutionized the way I manage my business operations. Their all-in-one platform is incredibly user-friendly and efficient. I can easily streamline processes and stay organized thanks to their innovative solutions. I highly recommend OSquare to any business owner looking to optimize their workflow.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFfhblB9k-now/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655814156072?e=2147483647&v=beta&t=WVonCRzAxrIgHzjd9XAcLm5b7ak1UMsQAUo09TQJlIs", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Rao Yaseen",
    title: "Country Manager, Aptech Learning",
    feedback:
      "OSquare has revolutionized my business efficiency by providing a platform that consolidates all my operations seamlessly. From management to communication, OSquare simplifies everything, giving me more time to focus on growth. I highly recommend OSquare for any business looking to streamline their processes.",
    image: "data:image/jpeg;base64,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", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Asad Un Nabi",
    title: "Bayview",
    feedback:
      "OSquare's platform has streamlined all aspects of my business operations. It's a game-changer for efficiency and organization. I highly recommend OSquare to any entrepreneur looking to simplify their workflow.",
    image: "data:image/jpeg;base64,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", // Replace with actual image URL
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slides every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 lgpx-14">
      <div className="relative bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="mb-12">
          <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
            CUSTOMERS STORIES
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            See how customers accomplish more with <span
              style={{
                fontFamily: "Bhineka",
                fontSize: "3.5rem",
                background: "linear-gradient(to right, #1E4FCD, #F36F7E)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              O
            </span> Square
          </h2>
        </div>
        {/* Testimonial Content */}
        <div>
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-22 h-22 mx-auto rounded-full mb-4"
          />
          <p className="text-lg font-medium text-gray-800">
            "{testimonials[currentIndex].feedback}"
          </p>
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonials[currentIndex].title}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          &gt;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
