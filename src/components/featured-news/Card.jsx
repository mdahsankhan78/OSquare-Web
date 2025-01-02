import React from 'react';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';

const Card = ({icon, logo, description, buttonText, onButtonClick, slides, redirectTo }) => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    } else if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

      <div className="lg:grid lg:grid-cols-2 gap-8 p-4">
        {/* Content Side */}
        <div className="p-8 lg:p-12 flex flex-col items-center justify-center text-center space-y-6">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" width={250} />
          </div>
          <p className="text-lg text-gray-600">{description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleButtonClick}
              className="inline-flex items-center px-6 py-3 bg-[#0F1B4C] text-white font-semibold rounded-md hover:bg-[#1a2b6d] transition-colors"
            >
              {buttonText}
            </button>
          </div>
        </div>

        {/* Slider Side */}
        <div className="relative py-8 lg:p-12 flex items-center justify-center">
          <Slider slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Card;
