import React from 'react'
import BentoBox from './BentoBox'
import Brainwave from '../assets/Brainwave.png';
import UniForum from '../assets/UniForum.png';
import LeoColorService from '../assets/LeoColorService.png';
import TeleFlix from "../assets/TeleFlix.png";
import FirebaseLogo from '../assets/hero/FirebaseLogo';

import WordpressLogo from '../assets/hero/WordpressLogo';
import ReactLogo from '../assets/hero/ReactLogo';
import TailwindcssLogo from '../assets/hero/TailwindcssLogo';
import Html5Logo from '../assets/hero/Html5Logo';
import Css3Logo from '../assets/hero/Css3Logo';
import JavascriptLogo from '../assets/hero/JavascriptLogo';
import LaravelLogo from '../assets/hero/LaravelLogo';
import ProjectBoxLine from '../assets/ProjectBoxLine';
import ProjectsLine from '../assets/ProjectsLine';

import useBreakpoint from '../utils/breakpoints';


const Projects = () => {
    const breakpoint = useBreakpoint();

  return (
    <div className='relative flex flex-col overflow-hidden gap-10 justify-center items-center m-auto w-full p-10 py-48 bg-secondary' id='projects'>
        <ProjectsLine className='absolute w-640 h-640 lg:w-440 lg:h-440 z-10'/>
        

        {breakpoint === "mobile" || breakpoint === "tablet" ? (
                    <h1 className='text-h1 text-[4rem] md:text-[8rem] tracking-wide text-primary -translate-y-15'>Projects</h1>
               ) : (<></>)}

        <div className='flex flex-col lg:flex-row gap-10 z-20'>
            <div className='flex flex-col justify-center items-center lg:justify-normal lg:items-normal gap-10'>
                <BentoBox className="w-[20rem] md:w-[40rem] lg:w-[30rem] lg:h-[32.5rem] bg-primary" image={<img src={Brainwave} className='rounded-xl'/>} href="https://brainwave-omega-mauve.vercel.app/"
                    logos={<> <ReactLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' />
                            <TailwindcssLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' /></>}
                    title="Brainwave" description="A website that I made following a tutorial, the website looks modern and presents a good idea for a modern website"/>
                <BentoBox className="w-[20rem] md:w-[40rem] lg:w-[30rem] bg-text pb-5" bg_overlay="bg-primary" href="https://all-the-dles.vercel.app/"
                    logos={<><JavascriptLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary'/>
                            <Css3Logo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary'/>
                            <Html5Logo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' /></>}
                    title="All The Dles" description="Remember Wordle? Turns out there's is a lot of daily games out there, so I created a website where i put all of my favourite ones in one place and customized each game card." />
            </div>
            <div className='flex flex-col gap-10'>
            {breakpoint === "mobile" || breakpoint === "tablet" ? (<></>) : (<div className='w-120 h-80'>
                    <h1 className='text-h1 text-[11rem] tracking-wide text-primary -translate-y-15'>Projects</h1>
                </div>)}
                
                <div className='flex flex-row gap-10'>
                    {breakpoint === "mobile" || breakpoint === "tablet" ? 
                    (<></>) : (<div className='relative flex justify-center items-center w-40 h-147 bg-text -translate-y-40 rounded-2xl'>
                        <ProjectBoxLine className='absolute w-160 h-160 bottom-[-40px]'/> 
                        <h1 className='text-h1 -rotate-90 text-secondary'>MA</h1>
                    </div>)}
                    
                    <BentoBox className="w-[20rem] md:w-[40rem] lg:w-[30rem] bg-primary lg:-translate-y-40" image={<img src={UniForum} className='rounded-xl'/>}
                        logos={<><ReactLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' />
                                <TailwindcssLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' />
                                <LaravelLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' /></>}
                        title="UniForum" description="Curently Lithuania does not have any one space where users can interact with each other in a academic setting and rate various parts of university life (universities, programs, lecturers). UniForum fixes that problem. Additionaly, if the users feels unsure about what to study, the AI reccommendation option, reccommends programs based on their preferences, forum and review data." />
                </div>
                
            </div>
        </div>
        <div className='flex gap-10 lg:mt-[-10rem] z-20'>
            <div className='flex flex-col justify-center lg:flex-row gap-10'>
                <BentoBox className="w-[20rem] md:w-[40rem] lg:w-[30rem] bg-primary" image={<img src={LeoColorService} className='rounded-xl'/>} 
                    logos={<> <WordpressLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' /></>} href="https://leocolorservice.lt/"
                    title="LeoColorService" description="Website for a client who was seeking to create a simple one page website showcasing their available services."/>
                <BentoBox className="w-[20rem] md:w-[40rem] lg:w-[42.5rem] bg-text pb-5" image={<img src={TeleFlix} className='rounded-xl'/>} bg_overlay="bg-primary"
                    logos={<><JavascriptLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary'/>
                            <ReactLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary'/>
                            <Css3Logo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' />
                            <FirebaseLogo className='w-5 h-5 lg:w-9 lg:h-9 text-secondary' /></>}
                    title="TeleFlix" description="Remember Wordle? Turns out there's is a lot of daily games out there, so I created a website where i put all of my favourite ones in one place and customized each game card." />
            </div>
            
        </div>
    </div>
  )
}

export default Projects