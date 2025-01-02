import React, { useEffect } from 'react';

const ThankYou = () => {
    useEffect(() => {
        // Check if the scroll position is greater than 0 (i.e., if the page is scrolled down)
        if (window.scrollY > 0) {
          // Scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Smooth scroll
          });
        }
      }, []);
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl text-center p-8 bg-white shadow-lg rounded-lg">
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Thank You!
        </h1>
        {/* Description */}
        <p className="mt-4 text-gray-600 md:text-lg">
          Your submission has been received successfully. We appreciate your time and effort.
        </p>
        {/* Button */}
        <div className="mt-6">
          <a
            href="/"
            className="inline-block rounded bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-900 transition-colors"
          >
            Go Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
