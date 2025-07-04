import React from 'react'
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
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1PW6G_-ytepZUvOqylMyciHMXezjyid6q/view?usp=sharing'; 
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full xl:h-[50rem] h-full m-auto p-[4.5rem] items-center bg-background" id='home'>
      <div className="relative flex flex-col text-center items-center mt-26">
        <p className="body2">Matas Asačiovas</p>
        <h1 className="text-h1">
          I build web applications from{" "}
          <span className="text-primary">scratch</span>{" "}
        </h1>
        <p className="body1 w-full max-w-2xl self-center items-center">
          Hi, i am a full stack developer, I strive to create intuitve,
          responsive digital experiences that blend modern design with
          fuctionality
        </p>
      </div>
      <div className="flex gap-20 mt-35">
        <BorderedButton>
          <p className="button">Stack</p>
        </BorderedButton>
        <BorderedButton background="primary" onClick={handleDownload}>
          <div className='flex flex-row gap-2 items-center'>
            <p className="button">CV</p>
            <DownloadIcon />
          </div>
        </BorderedButton>
      </div>
      <div>
        <div className='flex flex-row flex-wrap gap-12 items-center justify-center mt-25'>
          <Tooltip content="HTML5"><Html5Logo className="w-14 h-14" /></Tooltip>
          <Tooltip content="CSS3"><Css3Logo className="w-14 h-14" /></Tooltip>
          <Tooltip content="JavaScript"><JavascriptLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="React"><ReactLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="PHP"><PhpLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="Laravel"><LaravelLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="Sass"><SassLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="Tailwind CSS"><TailwindcssLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="Node.js"><NodejsLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="Firebase"><FirebaseLogo className="w-14 h-14" /></Tooltip>
          <Tooltip content="WordPress"><WordpressLogo className="w-14 h-14" /></Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Hero