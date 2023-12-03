import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/icons/SJ LOGO WhiteBG 3rd 12 2023.svg';
import darkModeIcon from '../../assets/icons/darkmode.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Get the dark mode value from local storage or default to false
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || false;
  });

  useEffect(() => {
    // Apply the dark mode class based on the state
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.transition = 'background-color 500ms';
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <header className={`lg:flex lg:justify-between lg:items-center ${darkMode ? 'dark' : ''}`}>
  <div className="container mx-auto flex justify-between items-center lg:mx-0 z-10">
    <div className="flex items-center space-x-4">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoImage} alt="Logo" className="fixed top-6 left-6  z-20 dark:invert w-12 h-6" />
      </a>
      <Link to="/" style={{ left:'72px' }} className="fixed top-6 z-10">
        <h1 className="bg-black dark:bg-white text-white dark:text-black px-1 text-lg font-semibold h-6">
          SHAREEF JASIM
        </h1>
      </Link>
     
    </div>

    {/* Dark Mode Icon */}
    <img 
      src={darkModeIcon} 
      alt="Toggle Dark Mode" 
      className="cursor-hover fixed top-6 right-16 lg:right-6 z-40 w-6 h-6  dark:invert transition-colors duration-500 "
      onClick={toggleDarkMode}
    />

    {/* Mobile Menu Button */}
    <button 
      onClick={toggleMenu} 
      className="lg:hidden fixed top-6 right-6 z-50"
    >
      <div className="bg-black dark:bg-white w-6 h-6"></div>
    </button>

    {/* Mobile Navigation */}
    <nav 
      className={`
        fixed inset-0 bg-black bg-opacity-50 backdrop-blur
        ${menuOpen ? 'flex' : 'hidden'} 
        flex-col items-center justify-center space-y-6 lg:hidden z-40
        transition-all duration-500 ease-in-out
      `}
    >
      <a href="#workSection" onClick={closeMenu} className="bg-black dark:bg-white text-white dark:text-black px-3 h-6 leading-6 text-2xl">
        Work
      </a>
      <Link to="/about" onClick={closeMenu} className="bg-black dark:bg-white text-white dark:text-black px-3 h-6 leading-6 text-2xl">
        About
      </Link>
    </nav>

    {/* Large Screen Navigation */}
    <nav className="hidden lg:flex space-x-4 fixed top-6 right-16">
      <a href="#workSection" className="bg-black dark:bg-white text-white dark:text-black px-1 h-6">
        WORK
      </a>
      <Link to="/about" className="bg-black dark:bg-white text-white dark:text-black px-1 h-6 ">
        ABOUT
      </Link>
    </nav>
  </div>
</header>


  );
};

export default Header;
