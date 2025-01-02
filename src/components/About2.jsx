import React from 'react';

const About = ({
  subtitle,
  title,
  description,
  details,
  bgClass, // Default background class for the badge
  circleClass,
  textClass,
  imageComponent = null, // Optional image or custom component
  moduleRef
}) => {
  return (
    <section ref={moduleRef} id='about'>
      {/* Container */}
      <div className="mx-auto w-full py-10 md:py-14 lg:py-12">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            {/* Subtitle */}
            <div data-aos='fade-up' className={`flex items-center rounded-md ${bgClass} px-3 py-1`}>
              <div className={`mr-1 h-2 w-2 rounded-full ${circleClass}`}></div>
              <p className={`text-sm ${textClass}`}>{subtitle}</p>
            </div>
            {/* Title */}
            <h1 className="mb-6 font-semibold text-3xl sm:text-4xl lg:mb-4" data-aos='fade-up'>{title}</h1>
            {/* Description */}
            <p className="text-sm text-gray-500 sm:text-xl">{description}</p>
            {/* Divider */}
            {/* <div className="mb-8 mt-8 h-px w-full bg-[#172554]"></div> */}
            {/* Details */}
            <div className="mb-4 flex flex-col gap-2 text-sm text-gray-500 sm:text-xl lg:mb-6">
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
