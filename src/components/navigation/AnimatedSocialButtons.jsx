import React, { useState } from "react";
import ShareIcon from "../../assets/socials/ShareIcon";
import LinkedinIcon from "../../assets/socials/LinkedinIcon";
import MailIcon from "../../assets/socials/MailIcon";
import GithubIcon from "../../assets/socials/GithubIcon";
import Tooltip from "../Tooltip";

const AnimatedSocialButtons = () => {
  const [openSocials, setOpenSocials] = useState(false);

  const toggleSocials = () => {
    setOpenSocials(!openSocials);
  };

  const socialButtons = [
    {
      icon: <LinkedinIcon className="w-5 h-5 text-primary" />,
      href: "https://www.linkedin.com/in/matas-asaciovas/",
      delay: "delay-75",
      tooltip: "https://www.linkedin.com/in/matas-asaciovas/",
    },
    {
      icon: <MailIcon className="w-5 h-5 text-primary" />,
      href: "mailto:matas.asaciovas2001@gmail.com",
      delay: "delay-150",
      tooltip: "matas.asaciovas2001@gmail.com",
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-primary" />,
      href: "https://github.com/Matas1555",
      delay: "delay-300",
      tooltip: "https://github.com/Matas1555",
    },
  ];

  return (
    <div className="relative flex flex-col items-center">
      <button
        className={`hidden md:block border-2 rounded-full bg-background p-1.5 relative z-50 hover:bg-secondary hover:border-secondary transition-transform duration-300 ${
          openSocials ? "rotate-90" : "rotate-0"
        }`}
        onClick={toggleSocials}
      >
        <ShareIcon className="relative w-6 h-6 text-primary right-0.5" />
      </button>

      <div className="absolute top-10 flex flex-col items-center">
        {socialButtons.map((social, index) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:block border-2 rounded-full bg-background p-1.5 border-primary hover:bg-secondary transition-all duration-100 ease-out{
              social.delay
            } ${
              openSocials
                ? `opacity-100 scale-100`
                : "opacity-0 scale-75 pointer-events-none"
            }`}
              style={{
                transform: openSocials
                  ? `translateY(${(index + 1) * 1}rem)`
                  : "translateY(-1rem)",
                transitionDelay: openSocials
                  ? `${index * 100}ms`
                  : `${(2 - index) * 100}ms`,
                zIndex: 40 - index,
              }}
            >
              {social.icon}
            </a>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSocialButtons;
