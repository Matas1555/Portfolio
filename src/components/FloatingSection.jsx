import React from 'react';
import { ScrollParallax } from 'react-just-parallax';
import useBreakpoint from '../utils/breakpoints';

const FloatingSection = ({
  children,
  className = '',
  height,
  paddingTop,
  style = {},
  slant = "left",
  ...props
}) => {
  const breakpoint = useBreakpoint();
  
  const clipPaths = {
    left: {
      mobile: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
      tablet: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
      desktop: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
    },
    right: {
      mobile: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
      tablet: "polygon(0 0, 100% 15%, 100% 100%, 0 100%)",
      desktop: "polygon(0 0, 100% 30%, 100% 100%, 0 100%)",
    },
  };

  const clipPath = clipPaths[slant][breakpoint];

  return (
    <ScrollParallax strength={0.03} zIndex={20}>
    <div className="[filter:drop-shadow(0_0_16px_rgba(0,0,0,0.25))] select-text">
      <div className={`relative w-full pt-44 bg-black ${className} ${height}`}
      style={{
        clipPath,
        ...style,
        }}
      >
        <div
            className={`absolute left-[1px] right-[1px] top-[2px] bottom-[1px] flex gap-20 justify-center pb-[5rem] bg-background px-10 z-20 shadow-2xs border-1 border-text ${paddingTop}`}
            style={{
            clipPath,
            ...style,
            }}
            {...props}
        >
            {children}
        </div>
      </div>
      </div>
    </ScrollParallax>
  );
};

export default FloatingSection;
