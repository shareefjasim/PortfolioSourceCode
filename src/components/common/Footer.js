import React from 'react';
import linkedInIcon from '../../assets/icons/linkedin.jpg';
import githubIcon from '../../assets/icons/github.jpg';
import emailIcon from '../../assets/icons/email.jpg';
import copyrightIcon from '../../assets/icons/copyright.jpg';


const Footer = () => {
  return (
    <footer className="text-black dark:text-white tra fixed bottom-0 w-full z-30 flex justify-between items-center bg-transparent">
      <p>
        <img src={copyrightIcon} alt="Copyright" className="dark:invert absolute bottom-6 left-6 w-6 h-6 mr-1" />
        
      </p>
      <div className="flex space-x-4 absolute bottom-6 right-6">
        <a href="https://www.linkedin.com/in/shareef-jasim/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} className="filter dark:invert w-6 h-6" alt="LinkedIn" />
        </a>
        <a href="https://github.com/shareefjasim" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} className="filter dark:invert w-6 h-6" alt="GitHub" />
        </a>
        <a href="mailto:shareef.abdulnafaa@gmail.com">
          <img src={emailIcon} className="filter dark:invert w-6 h-6" alt="Email" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
