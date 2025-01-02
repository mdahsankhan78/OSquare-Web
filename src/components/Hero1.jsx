import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      className="relative py-10 px-4 sm:px-6 md:px-10 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 -z-10`}
        style={{ backgroundColor: overlayColor }}
      ></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-3xl text-center space-y-4 md:space-y-6 lg:space-y-8 mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="text-xs sm:text-sm md:text-base text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {description}
          </motion.p>
        )}

        {/* Button */}
        {buttonText && buttonLink && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href={buttonLink}
              className="inline-block rounded-md bg-blue-950 px-5 sm:px-8 py-3 sm:py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-800"
            >
              {buttonText}
            </a>
          </motion.div>
        )}
      </motion.div>

      {/* Navigation Links */}
      {links.length > 0 && (
        <motion.div
          className="relative z-10 flex justify-center mt-6 sm:mt-8 md:mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 bg-white p-4 rounded-full shadow-lg">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 ${
                  link.isActive ? "bg-[#172554] text-white" : ""
                }`}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
