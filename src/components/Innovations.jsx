import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const Innovations = () => {
  return (
    <>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12" id='demos'>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
          Innovate with <span
            style={{
              fontFamily: 'Bhineka',
              fontSize: '3.5rem',
              background: 'linear-gradient(to right, #1E4FCD, #F36F7E)', // Replace with your desired colors
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            className='mr-0'
          >
            O
          </span>Square
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Turn ideas into reality anytime, anywhere with powerful apps and cloud storage.
        </p>
      </div>

      <div className="flex justify-center">
        <div
          className="w-full max-w-4xl aspect-video border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden mb-5 flex justify-center items-center"
        >
          <Spline
            scene="https://prod.spline.design/V1-rpuARnj-Y6Tbp/scene.splinecode"
            style={{ width: "100%", height: "100%" }} // Ensures Spline takes up full container space
          />
        </div>
      </div>
    </>
  );
};

export default Innovations;
