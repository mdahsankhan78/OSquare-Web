import React from 'react';

const TestimonialNav = ({ total, current, onChange }) => {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
            current === index
              ? 'bg-[#172554] w-8'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

export default TestimonialNav;