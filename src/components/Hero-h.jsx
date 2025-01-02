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
            className="relative flex items-center justify-center py-10 px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48 bg-cover bg-center min-h-screen"
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
            <div className="relative z-10 mx-auto w-full max-w-3xl text-center space-y-4 md:space-y-6 lg:space-y-8">
                {/* Hero Title */}
                {subtitle && (
                    <p className="inline-block rounded-full bg-[#172554]/10 px-4 py-1.5 text-sm font-medium text-[#172554] mb-4">
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
                            className="inline-block rounded-md bg-blue-950 px-5 sm:px-8 py-3 sm:py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-800"
                        >
                            {buttonText}
                        </a>
                    </div>
                )}

                {/* Navigation Links */}
                {links.length > 0 && (
                    <div className="relative z-10 flex justify-center mt-6 sm:mt-8 md:mt-12">
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;