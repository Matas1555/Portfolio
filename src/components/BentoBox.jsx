import React from 'react'

const BentoBox = ({className, image, title, description, logos, bg_overlay="bg-text", href}) => {
  return (
    <>
    <a href={href} target='_blank'>
    <div className={`relative flex flex-col rounded-xl p-4 cursor-pointer group overflow-hidden ${className}`}>
        <div 
            className={`absolute w-full h-full ${bg_overlay} rounded-xl bottom-[5rem] left-0 z-10 [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)] group-hover:translate-y-20 transition-all duration-500 ease-in-out`}
        ></div>
        <div className='z-20'>
            {image}
        </div>
        <div className='flex flex-col w-full z-20'>
            <div className='flex justify-between px-3 py-3 '>
                <h3 className='flex-1/2 h4 text-secondary align-middle text-2xl lg:text-[2rem]'>{title}</h3>
                <div className='border-1 border-secondary mr-5 ml-5'/>
                <div className='flex-1 flex gap-5 justify-center items-center'>
                    {logos}
                </div>
            </div>
        </div>
        <p className='px-3 body2 text-secondary z-20'>{description}</p>
    </div>
    </a>
    </>
  )
}

export default BentoBox