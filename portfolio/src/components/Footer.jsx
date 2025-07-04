import React from 'react'
import GithubIcon from '../assets/socials/GithubIcon';
import MailIcon from '../assets/socials/MailIcon';
import LinkedinIcon from '../assets/socials/LinkedinIcon';

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-primary p-4 px-10 text-secondary'>
        <div className='flex flex-col'>
            <h3 className='h5'>Socials</h3>
            <div className='flex gap-4 items-center'>
                <a href="https://github.com/Matas1555" target='_blank'>
                    <GithubIcon />
                </a>
                <a href="mailto:matas.asaciovas2001@gmail.com">
                    <MailIcon className='w-8 h-8 ml-1'/>
                </a>
                <a href="https://www.linkedin.com/in/matas-asaciovas/" target='_blank'>
                    <LinkedinIcon className='w-9 h-9'/>
                </a>
            </div>
        </div>
        <div>
            <h3 className='body2'>Designed & built by Matas Asačiovas © 2025</h3>
        </div>
    </div>
  )
}

export default Footer