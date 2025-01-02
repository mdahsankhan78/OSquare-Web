import React, { useState } from 'react';
import { Bot, Palette } from 'lucide-react';

const FeatureCard = ({
  category,
  title,
  description,
  buttonText = 'Read More',
  buttonVariant = 'dark',
  bgColor = 'bg-white',
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = category === 'Designer' ? Palette : Bot;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className={`rounded-lg flex flex-col overflow-hidden ${bgColor} transition-transform hover:scale-[1.02] duration-300 shadow-md`} data-aos='fade-up'>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover" // Adjusted height for blog archive style
        />
      )}

      <div className="flex flex-col p-6 h-full">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-semibold text-gray-500">{category}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">{title}</h3>

          {/* Animated Description */}
          <div
            className={`text-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden`}
            style={{
              maxHeight: isExpanded ? '500px' : '60px',
            }}
          >
            {description}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleDescription}
          className="mt-auto text-[#233983] underline font-semibold transition-colors duration-200 hover:text-[#172554]"
        >
          {isExpanded ? 'Show Less' : buttonText}
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
