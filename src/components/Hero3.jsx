import React from "react";

const Hero = ({
  backgroundImage,
  overlayColor = "black/20",
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  bgClass,
  circleClass,
  textClass,
  rightImage,
}) => {
  return (
    <section
      className="mx-auto bg-gradient-to-r from-[#C1C1C3] to-[#E9E9E9] text-black w-full px-6 lg:px-48 min-h-screen flex items-center relative"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full flex flex-col lg:flex-row items-center justify-between h-full">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 text-left space-y-6">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="mt-4 text-sm sm:text-lg lg:text-xl max-w-xl">
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {buttonText && buttonLink && (
              <a
                className="block rounded border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href={buttonLink}
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex items-center justify-center h-full">
          {rightImage && (
            <img
              src={rightImage}
              alt="Hero Right"
              className="w-[90%] lg:w-[100%] h-auto max-h-[700px] object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
