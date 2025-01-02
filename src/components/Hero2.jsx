import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  backgroundImage,
  backgroundImageMob,
  overlayColor,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  bgClass,
  circleClass,
  textClass,
  pricingTo
}) => {
  return (
    <section
      className={`relative m-0 py-10 px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48 h-[90vh] bg-cover bg-center overflow-hidden hero-section`}
    >
      {/* Overlay */}
      <div
        className={`absolute hidden lg:block inset-0 bg-${overlayColor}`}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full flex flex-col lg:flex-row items-center lg:justify-center h-[70vh] py-20" data-aos='fade-up'>
        {/* First Column */}
        <div className="w-full space-y-6">
          {/* Subtitle */}
          {subtitle && (
            <div
              className={`flex items-center rounded-md ${bgClass} px-3 py-1 w-fit`}
            >
              <div className={`mr-2 h-2 w-2 rounded-full ${circleClass}`}></div>
              <p className={`text-sm ${textClass}`}>{subtitle}</p>
            </div>
          )}

          {/* Title */}
          {title && (
            <h2 className=" text-3xl sm:text-4xl font-bold text-[#273066] md:w-1/2">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="mt-4 text-lg sm:text-lg lg:text-xl max-w-xl lg:w-1/3">
              {description}
            </p>
          )}

          {pricingTo && <Link to={`/pricing/#${pricingTo}`} className="inline-flex items-center gap-x-1 group hover:text-[#3352c6]">
            <ChevronRight />
            <span className="group-hover:translate-x-2 transition-all duration-300 ">See Pricing</span>
          </Link>}
        </div>
      </div>
      <style>
        {`
          @media (max-width: 1024px) {
            .hero-section {
              background-image: url(${backgroundImageMob});
            }
          }
          @media (min-width: 1024px) {
            .hero-section {
              background-image: url(${backgroundImage});
            }
          }
            
        `}
      </style>
    </section>
  );
};

export default Hero;
