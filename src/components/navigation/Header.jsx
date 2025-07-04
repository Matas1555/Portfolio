import React from 'react'
import { useState } from 'react';
import ShareIcon from '../../assets/socials/ShareIcon';
import MenuSvg from '../../assets/MenuSvg';
import MobileNavigation from './MobileNavigation';
import MailIcon from '../../assets/socials/MailIcon';
import LinkedinIcon from '../../assets/socials/LinkedinIcon';
import GithubIcon from '../../assets/socials/GithubIcon';
import AnimatedSocialButtons from './AnimatedSocialButtons';

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const [openSocials, setOpenSocials] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    }

    const closeNavigation = () => {
      setOpenNavigation(false);
    };

    const toggleSocials = () => {
        setOpenSocials(!openSocials);
    }

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 px-10 bg-primary text-background">
        <div>
          <a href="#home" >
            <h5 className="text-h5 transition-colors hover:text-secondary">MA</h5>
          </a>
        </div>
        <nav className="hidden md:flex xl:gap-25 md:gap-15 ">
          <a
            href="#home"
            className="relative button transition-colors hover:text-secondary"
          >
            Home
          </a>
          <a
            href="#education"
            className="relative button transition-colors hover:text-secondary"
          >
            Education
          </a>
          <a
            href="#experience"
            className="relative button transition-colors hover:text-secondary"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="relative button transition-colors hover:text-secondary"
          >
            Projects
          </a>
        </nav>
        <AnimatedSocialButtons />
        <button className="md:hidden ml-auto" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation}></MenuSvg>
        </button>
      </div>
      <MobileNavigation isOpen={openNavigation} onClose={closeNavigation} />
    </>
  );
};

export default Header;