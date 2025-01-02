import React from "react";
import { Link } from "react-router-dom";

const Pricing = ({
  plans = [],
  heading = "Simple & Affordable Pricing",
  buttonText = "Get Started",
  buttonLink = "/enterprisepricing",
  sectionPlansRef,
}) => {
  return (
    <section
      id="plans"
      className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[url('/Middle-Image.jpg')] bg-cover bg-center"
      ref={sectionPlansRef}
    >
      {/* Container */}
      <div className="mx-auto max-w-full px-5 py-16 md:px-10 lg:px-48 md:py-20">
        {/* Heading Container */}
        <div className="mx-auto mb-8 text-center md:mb-12 lg:mb-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold" data-aos='fade-up'>{heading}</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonLink={plan.buttonLink}
              products={plan.products}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// PricingCard Component for reuse
const PricingCard = ({ title, features, buttonText, buttonLink, products }) => (
  <div className="flex flex-col items-center gap-6 rounded-md bg-white/40 p-8 text-center">
    {/* Card Title */}
    <h3 className="text-2xl font-semibold">{title}</h3>

    {/* Features List */}
    <div className="grid gap-4">
      {features.map((feature, index) => (
        <div className="flex items-center justify-center" key={index}>
          <img
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
            alt=""
            className="mr-4 h-4 w-4"
          />
          <p className="text-sm">{feature}</p>
        </div>
      ))}
    </div>

    {/* Products Section */}
    <div className="flex gap-2 overflow-x-auto mt-2">
      {products.map((product, index) => (
        <img
          key={index}
          src={product}
          alt={`Product ${index + 1}`}
          className="h-16 w-16 object-contain rounded"
        />
      ))}
    </div>

    {/* Button */}
    <Link
      to={buttonLink}
      className="inline-block w-1/2 rounded-md bg-[#172554] px-6 py-3 mt-3 font-semibold text-white"
    >
      {buttonText}
    </Link>
  </div>
);

export default Pricing;
