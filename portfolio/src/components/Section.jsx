import React from 'react'
import { useState, useEffect } from 'react';
import EducationLine from '../assets/EducationLine'
import ExperienceLine from '../assets/ExperienceLine';
import useBreakpoint from '../utils/breakpoints';

const Section = ({ slant = 'left', children, title, className, id }) => {
    const breakpoint = useBreakpoint();

    // Define clip-paths for both slant directions
    const clipPaths = {
        left: {
        mobile: 'polygon(0 0, 100% 0, 100% 40%, 0% 70%)',
        tablet: 'polygon(0 0, 100% 0, 100% 48%, 0% 95%)',
        desktop: 'polygon(0 0, 100% 0, 100% 42%, 0% 95%)',
        },
        right: {
        mobile: 'polygon(0 0, 100% 0, 100% 70%, 0% 40%)',
        tablet: 'polygon(0 0, 100% 0, 100% 95%, 0% 48%)',
        desktop: 'polygon(0 0, 100% 0, 100% 95%, 0% 42%)',
        }
    };

    const clipPath = clipPaths[slant][breakpoint];

  return (
    <div className={`relative overflow-hidden z-10 ${className}`} id={id}>
      {/* Top inner shadow */}
      <div
        className="absolute top-0 left-0 w-full h-8 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.10), transparent)",
        }}
      />
      {/* Bottom inner shadow (clipped) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          clipPath: clipPath,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.14), transparent 60%)",
        }}
      />
      {/* Main section */}
      <div
        className={`relative w-full h-full z-10 ${
          slant === "left"
            ? "bg-primary text-secondary"
            : "bg-secondary text-primary"
        } text-[#F8F6F1]`}
        style={{
          clipPath,
        }}
      >
        {breakpoint !== "mobile" && (
          slant === "left" ? (
            <div className="absolute left-[-10px] bottom-[130px] -rotate-30 sm:bottom-[30px] sm:left-[-0px] sm:-rotate-15 lg:left-[150px] lg:bottom-[80px] lg:rotate-0 xl:left-[250px] xl:bottom-[80px]">
              <EducationLine className="w-110 h-100 sm:w-200 lg:w-250 xl:w-300" />
            </div>
          ) : (
            <div className="absolute left-[-0px] bottom-[-120px] rotate-25 sm:rotate-15 sm:bottom-[-140px] sm:left-[10px] md:rotate-10 md:left-[20px] md:bottom-[-160px] lg:left-[80px] lg:bottom-[-145px] lg:rotate-7 xl:left-[340px] xl:bottom-[-10px]">
              <ExperienceLine className="w-100 h-200 sm:w-170 md:w-210 lg:w-250 xl:w-300" />
            </div>
          )
        )}
        

        <h1 className="text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[12rem] xl:text-[14rem] pt-5 lg:pt-0 font-bold text-center">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default Section