import React from 'react'
import FloatingSection from './FloatingSection'
import BasketIcon from '../assets/experience/BacketIcon';
import WebIcon from '../assets/experience/WebIcon';
import MobileIcon from '../assets/experience/MobileIcon';
import WebDesignIcon from '../assets/experience/WebDesignIcon';

const JobCard = ({ icon, children }) => (
  <div className="flex items-start gap-4 bg-primary/15 rounded-xl p-4 min-h-[110px] shadow-sm">
    <div className="flex-shrink-0 hidden sm:flex w-20 h-20 items-center justify-center">
      {icon}
    </div>
    <div className="body2">{children}</div>
  </div>
);

const Experience = () => {
  return (
    <FloatingSection slant='right' className='mt-[-20rem] md:mt-[-15rem] lg:mt-[-20rem] xl:mt-[-25rem] mb-[-1rem]' height="h-[80rem] sm:h-[65em] lg:h-[55em]" paddingTop="pt-[7rem] sm:pt-[9rem] lg:pt-[15rem]">
        <section className="py-12 px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row mb-2 items-start md:items-end">
        <div className="flex items-center gap-2">
          <h2 className="h2">Tiny solutions</h2>
        </div>
        <div className="body3 md:mb-2 md:ml-4 ">Dec 2023 - May 2025</div>
      </div>
      <div className="text-2xl md:text-3xl font-thin tracking-wide text-primary mb-6">Web Application Programmer</div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <JobCard icon={<BasketIcon className="w-16 h-16"/>}>
          Engineered and optimized company e-commerce websites end-to-end, writing PHP for core backend functionality and extending WordPress via plugins and code (e.g., www.betonasplius.lt).
        </JobCard>
        <JobCard icon={<MobileIcon className="w-16 h-16"/>}>
          Built and shipped multiple cross-platform mobile applications, including development, testing, feature implementation, and deployment (e.g., Ecocrete Smart built with React Native, other with Java).
        </JobCard>
        <JobCard icon={<WebIcon className="w-16 h-16"/>}>
          Developed the backend for the company's internal web application using PHP and JavaScript.
        </JobCard>
        <JobCard icon={<WebDesignIcon className="w-16 h-16"/>}>
          Contributed to the UI redesign and implementation of an existing web application.
        </JobCard>
      </div>
    </div>
  </section>
    </FloatingSection>
  )
}

export default Experience