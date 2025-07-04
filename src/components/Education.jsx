import React from 'react'
import KTU from "../assets/KTU.jpg";
import JKM from "../assets/JKM_logo_2015.png";
import CheckmarkIcon from '../assets/CheckmarkIcon';
import FloatingSection from './FloatingSection';

const Education = () => {
  return (
    <FloatingSection className='mt-[-21rem] mb-[-1rem] md:pt-[20rem] md:mt-[-15rem] lg:mt-[-19rem]' height="h-[60rem] sm:h-[60rem] md:h-[80rem] lg:h-[65rem] xl:h-[70rem]" paddingTop="pt-[10rem] sm:pt-[15rem] lg:pt-[20rem]">
        <div className='flex flex-col gap-20'>
            <div className='flex gap-10 justify-center'>
                <div className='hidden xl:block'>
                    <img src={KTU} className="w-100 h-80 border-1 border-text"></img>
                </div>
                <div>
                <h4 className="text-h4 md:text-[3rem]">
                    Kaunas University of Technology{" "}
                    <span className="body2 text-center lg:pl-5">2020-2025</span>
                </h4>
                <h3 className="text-2xl md:text-3xl font-thin tracking-wide text-primary">
                    Bachelor of Software Systems
                </h3>
                <div className="mt-5 body3 md:text-2xl">
                    <p className="">
                    Studied Software Systems at KTU, where I gained strong skills in
                    full stack development, including:
                    </p>
                    <ul>
                    <li className="flex gap-2 items-center">
                        <span>
                        <CheckmarkIcon />
                        </span>
                        Frontend & Backend Development
                    </li>
                    <li className="flex gap-2 items-center">
                        <span>
                        <CheckmarkIcon />
                        </span>
                        Databases, Algorithms & System Design
                    </li>
                    <li className="flex gap-2 items-center">
                        <span>
                        <CheckmarkIcon />
                        </span>
                        Web and Cloud Technologies
                    </li>
                    <li className="flex gap-2 items-center">
                        <span>
                        <CheckmarkIcon />
                        </span>
                        Testing and Software Quality
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='flex gap-10 '>
                <div className='hidden xl:block relative w-100 text-right'>
                    <img src={JKM} className="absolute right-0 top-0 w-70 h-40"></img>
                </div>
                <div className='max-w-[50rem]'>
                    <h4 className="text-h4 md:text-[2.5rem]">
                    School for Young Computer Scientists{" "}
                        <span className="body2 text-center lg:pl-5">2018-2020</span>
                    </h4>
                    <h3 className="text-2xl md:text-3xl font-thin tracking-wide text-primary">Certifcation</h3>
                    <div className="mt-5 body3 md:md:text-2xl">
                    <p className="">
                        In 11th and 12th grades I learned programming during the
                        weekends, in total it was <b>272</b> academic hours:
                    </p>
                    <ul>
                        <li className="flex gap-2 items-center">
                        <span>
                            <CheckmarkIcon />
                        </span>
                        Structural programming (C++) <b>177h</b>
                        </li>
                        <li className="flex gap-2 items-center">
                        <span>
                            <CheckmarkIcon />
                        </span>
                        Internet programming (Javascript, HTML, CSS, PHP) <b>62h</b>
                        </li>
                        <li className="flex gap-2 items-center">
                        <span>
                            <CheckmarkIcon />
                        </span>
                        Video game programming (Unity) <b>24h</b>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </FloatingSection>
  );
}

export default Education