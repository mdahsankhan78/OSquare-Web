import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  backgroundImage,
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
      className="relative m-0 px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48 h-[90vh] overflow-hidden grid md:grid-cols-2 items-start">
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center mt-32" data-aos='fade-up'>
        {/* First Column */}
        <div className="w-full">

          {/* Title */}
          {title && (
            <h2 className=" text-3xl sm:text-4xl font-bold text-[#273066]">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="mt-4 text-lg sm:text-lg lg:text-xl max-w-xlw-1/2">
              {description}
            </p>
          )}
        </div>
      </div>

      <img src={backgroundImage} alt="" />
    </section>
  );
};

export default Hero;
