import React, { useState, useEffect } from 'react'
import DownloadIcon from '../assets/hero/DownloadIcon';
import ButtonBorder from '../assets/hero/ButtonBorder';
import BorderedButton from './BorderedButton';
import JavascriptLogo from '../assets/hero/JavascriptLogo';
import ReactLogo from '../assets/hero/ReactLogo';
import Html5Logo from '../assets/hero/Html5Logo';
import Css3Logo from '../assets/hero/Css3Logo';
import PhpLogo from '../assets/hero/PhpLogo';
import LaravelLogo from '../assets/hero/LaravelLogo';
import SassLogo from '../assets/hero/SassLogo';
import TailwindcssLogo from '../assets/hero/TailwindcssLogo';
import NodejsLogo from '../assets/hero/NodejsLogo';
import FirebaseLogo from '../assets/hero/FirebaseLogo';
import WordpressLogo from '../assets/hero/WordpressLogo';
import Tooltip from './Tooltip';
import SkillModal from './SkillModal';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/15Vdb3gcIqLlTZo2QB8qjhzEw6I6XOOYP/view?usp=sharing'; 
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenSkillModal = () => {
    setIsSkillModalOpen(true);
  };

  const skills = [
    { name: "HTML5", icon: Html5Logo, color: "#E34F26" },
    { name: "CSS3", icon: Css3Logo, color: "#1572B6" },
    { name: "JavaScript", icon: JavascriptLogo, color: "#F7DF1E" },
    { name: "React", icon: ReactLogo, color: "#61DAFB" },
    { name: "PHP", icon: PhpLogo, color: "#777BB4" },
    { name: "Laravel", icon: LaravelLogo, color: "#FF2D20" },
    { name: "Sass", icon: SassLogo, color: "#CC6699" },
    { name: "Tailwind CSS", icon: TailwindcssLogo, color: "#06B6D4" },
    { name: "Node.js", icon: NodejsLogo, color: "#339933" },
    { name: "Firebase", icon: FirebaseLogo, color: "#FFCA28" },
    { name: "WordPress", icon: WordpressLogo, color: "#21759B" },
  ];

  return (
    <div className="relative flex flex-col w-full xl:h-[55rem] h-full m-auto p-[4.5rem] items-center bg-background overflow-hidden border-b-1 border-accent" id='home'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/5 right-1/4 w-4 h-4 border-1 border-primary bg-primary/20 rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-1/10 right-1/3 w-4 h-4 border-1 border-primary bg-primary/20 rounded-full animate-float delay-800"></div>
        <div className="absolute top-1/2 right-1/6 w-3 h-3 border-1 border-primary bg-primary/20 rounded-full animate-float delay-1200"></div>
        <div className="absolute top-1/3 left-1/7 w-4 h-4 border-1 border-primary bg-primary/20 rounded-full animate-float delay-1500" ></div>
        <div className="absolute bottom-1/5 left-1/10 w-3 h-3 border-1 border-primary bg-accent/15 rounded-full animate-float delay-200"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 border-1 border-primary bg-accent/15 rounded-full animate-float delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className={`relative flex flex-col text-center items-center mt-26 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="body2 text-primary/80 mb-4 tracking-wider">Matas Asačiovas</p>
        <h1 className="text-h1 leading-tight mb-6">
          I build web applications from{" "}
          <span className="text-primary relative">
            scratch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"></span>
          </span>
        </h1>
        <p className="body1 w-full max-w-2xl self-center items-center text-text/80 leading-relaxed">
          Hi, I am a full stack developer. I strive to create intuitive,
          responsive digital experiences that blend modern design with
          functionality.
        </p>
        
        {/* Subtle gradient overlay for depth */}
        
      </div>

      <div className={`flex gap-20 mt-35 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <BorderedButton onClick={handleOpenSkillModal}>
          <p className="button">Stack</p>
        </BorderedButton>
        <BorderedButton background="primary" onClick={handleDownload}>
          <div className='flex flex-row gap-2 items-center'>
            <p className="button">CV</p>
            <DownloadIcon />
          </div>
        </BorderedButton>
      </div>

      <div className={`w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className='flex flex-row flex-wrap gap-8 items-center justify-center mt-25'>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Tooltip key={skill.name} content={skill.name}>
                <div 
                  className={`relative group cursor-pointer skill-icon ${
                    activeSkill === skill.name ? 'scale-110' : ''
                  }`}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'fade-in-up 0.6s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <div className={`absolute inset-0 rounded-full blur-lg transition-all duration-300 ${
                    activeSkill === skill.name ? 'opacity-50' : 'opacity-0'
                  }`} style={{ backgroundColor: skill.color }}></div>
                  <IconComponent 
                    className={`w-14 h-14 transition-all duration-300
                    }`} 
                  />
                </div>
              </Tooltip>
            );
          })}
        </div>
        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <SkillModal isOpen={isSkillModalOpen} onClose={() => setIsSkillModalOpen(false)} />
    </div>
  );
}

export default Hero