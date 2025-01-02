import React from 'react';
import { ChevronRight } from 'lucide-react';

const Button = ({ 
  text = 'Learn more about Microsoft 365 for home',
  variant = 'dark',
  size = 'md',
  href = '',
  className = '',
  onClick
}) => {
  const variants = {
    dark: 'bg-[#172554] hover:bg-[#404040] text-white',
    light: 'bg-white hover:bg-gray-100 text-[#2f2f2f] border border-[#2f2f2f]',
    primary: 'bg-[#0067b8] hover:bg-[#005da6] text-white'
  };

  const sizes = {
    sm: 'px-1 py-1.5 text-xs rounder-md',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <a 
      href={href}
      className={`
        group inline-flex items-center
        ${variants[variant]}
        ${sizes[size]}
        rounded-sm font-semibold
        transition-all duration-200
        ${className}
        
      `}
      onClick={onClick}
    >
      <span>{text}</span>
      <ChevronRight 
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
      />
    </a>
  );
};

export default Button;