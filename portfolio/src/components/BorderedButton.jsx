import React from 'react';
import ButtonBorder from '../assets/hero/ButtonBorder';

const BorderedButton = ({ children, className = '', onClick, background, size = '1', ...props }) => {
  // Determine scale based on size prop
  const scaleClass = size === '2' ? 'scale-70 origin-center' : '';
  // Adjust border size
  const borderSize = size === '2' ? 'w-16 h-16' : 'w-16 h-16';

  return (
    <div className={`relative inline-block group ${scaleClass}`}>
      {/* Left border */}
      <div className="absolute top-[-0.45rem] left-[0.16rem] z-0
                      opacity-0 scale-30 translate-x-[2rem] 
                      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[-1.5rem]
                      transition-all duration-300 ease-out">
        <ButtonBorder className={`${borderSize}`} />
      </div>
      {/* Button */}
      <button
        className={`relative z-10 button border-2 cursor-pointer border-text text-background p-2 px-10 rounded-3xl ${className} ${background ? `bg-${background}` : 'bg-text'}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
      {/* Right border */}
      <div className="absolute top-[-0.45rem] right-[0.16rem] z-0
                      opacity-0 scale-30 translate-x-[-2rem] 
                      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[1.5rem]
                      transition-all duration-300 ease-out">
        <ButtonBorder className={`${borderSize} rotate-180`} />
      </div>
    </div>
  );
};

export default BorderedButton; 