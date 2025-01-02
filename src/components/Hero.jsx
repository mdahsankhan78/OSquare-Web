import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  backgroundImage,
  overlayColor = "black/20",
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  links = [],
}) => {
  return (
    <div
      className="relative py-10 bg-cover min-h-[60vh] sm:min-h-[90vh] flex flex-col justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${overlayColor} -z-10`}
        style={{ backgroundColor: overlayColor }}
      ></div>

      {/* Main Content */}
      <div  data-aos='fade-up' className="relative z-10 mx-auto w-full max-w-3xl text-center space-y-2 mt-5 px-4 sm:px-6 md:px-10">
        {/* Hero Title */}
        {subtitle && (
          <p className="inline-block rounded-full bg-[#172554]/10 px-4 py-1.5 text-sm font-medium text-[#172554]">
            {subtitle}
          </p>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
            {description}
          </p>
        )}

        {/* Hero Button */}
        {buttonText && buttonLink && (
          <div className="flex justify-center">
            <a
              href={buttonLink}
              className="inline-block rounded-md bg-blue-950 px-5 mt-4 sm:px-8 py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-900"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      {links.length > 0 && (
        <div className="tabs relative z-10 flex sm:justify-center mt-2 py-5 overflow-x-auto px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48">
          <div className="flex whitespace-nowrap items-center gap-2 sm:gap-4 bg-white p-2 rounded-full shadow-lg">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`px-6 py-4 sm:px-8 sm:py-4 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 ${link.isActive ? "bg-[#172554] text-white" : ""
                  }`}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>
        {`
        .tabs::-webkit-scrollbar-thumb {
          background: transparent;
        }
          .tabs::-webkit-scrollbar {
          height: 0px;
          background: transparent;
        }
          .tabs  ::-webkit-scrollbar-track {
          background: transparent;
        }
          
        `}
      </style>
    </div>
  );
};

export default Hero;
