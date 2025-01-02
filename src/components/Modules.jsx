import React from "react";

const Modules = ({ title, subtitle, features, moduleRef, className }) => {
  return (
    <section ref={moduleRef} id='modules'>
      {/* Container */}
      <div className="mx-auto w-full py-6 md:py-8">
        {/* Title */}
        <div className="flex flex-col" >
          <h2 className="font-semibold text-3xl sm:text-4xl" data-aos='fade-up'>{title}</h2>
          <p className="mb-8 mt-4 text-base text-gray-500 md:mb-8 md:text-lg" data-aos='fade-up'>
            {subtitle}
          </p>
        </div>
        {/* Features Content */}
        <div className={`grid gap-5 ${className} md:gap-4 lg:gap-6`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid gap-6 rounded-md border border-solid border-gray-300 py-8 px-4"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="inline-block h-16 w-16 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
