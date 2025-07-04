import React from "react";
import GithubIcon from "../../assets/socials/GithubIcon";
import MailIcon from "../../assets/socials/MailIcon";
import LinkedinIcon from "../../assets/socials/LinkedinIcon";

const MobileNavigation = ({ isOpen, onClose }) => {
  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-full z-40 flex-col bg-primary text-background justify-between px-10 py-20`}
    >
      <div className="flex flex-col items-end justify-center flex-1 gap-5">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[3.5rem] tracking-wide font-extralight transition-colors hover:text-secondary"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex gap-10 items-center justify-end">
        <a
          href="https://github.com/Matas1555"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-10 h-10 transition-colors hover:text-secondary" />
        </a>
        <a href="mailto:matas.asaciovas2001@gmail.com">
          <MailIcon className="w-10 h-10 transition-colors hover:text-secondary" />
        </a>
        <a
          href="https://www.linkedin.com/in/matas-asaciovas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="w-9 h-9 transition-colors hover:text-secondary" />
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
