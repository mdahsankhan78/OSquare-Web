import React from 'react';

const About = ({
  subtitle,
  title,
  description,
  details,
  bgClass = 'bg-[#172554]', // Default background class for the badge
  imageComponent = null, // Optional image or custom component
}) => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            {/* Subtitle */}
            <div className={`flex items-center rounded-md ${bgClass} px-3 py-1`}>
              <div className="mr-1 h-2 w-2 rounded-full bg-white"></div>
              <p className="text-sm text-white">{subtitle}</p>
            </div>
            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold md:text-4xl lg:mb-4">{title}</h1>
            {/* Description */}
            <p className="text-sm text-gray-500 sm:text-xl">{description}</p>
            {/* Divider */}
            {/* <div className="mb-8 mt-8 h-px w-full bg-[#172554]"></div> */}
            {/* Details */}
            <div className="mb-6 flex flex-col gap-2 text-sm text-gray-500 sm:text-xl lg:mb-8">
              <p>{details}</p>
            </div>
          </div>
          {/* Image */}
          <div className="min-h-[350px] overflow-hidden rounded-md">
            {imageComponent && imageComponent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;