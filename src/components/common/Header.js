import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../assets/icons/logoSJ 24th 3 2024.svg';
import darkModeIcon from '../../assets/icons/darkmode.jpg';


const Header = ({ categories, currentFilter, onFilterChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Get the dark mode value from local storage or default to false
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ;
  });

  useEffect(() => {
    // Apply the dark mode class based on the state
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.transition = 'background-color 500ms';
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      // Disable scrolling
      document.body.classList.add('overflow-hidden');
    } else {
      // Enable scrolling
      document.body.classList.remove('overflow-hidden');
    }
  };
    const closeMenu = () => setMenuOpen(false);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <header className={`lg:flex lg:justify-between z-50 lg:items-center ${darkMode ? 'dark' : ''}`}>
  <div className="container mx-auto flex justify-between items-center lg:mx-0 z-50">
    <div className="flex items-center space-x-6 z-40">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoImage} alt="Logo" className=" cursor-hover fixed top-6 left-6  dark:invert w-12 h-6" />
      </a>
    </div>

    {/* Dark Mode Icon */}
    <img 
      src={darkModeIcon} 
      alt="Toggle Dark Mode" 
      className="cursor-hover fixed top-6 right-18 lg:right-6 z-50  w-6 h-6  dark:invert transition-colors duration-500 "
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
    <nav className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur
      ${menuOpen ? 'flex' : 'hidden'} 
      flex-col items-center justify-center space-y-6 lg:hidden z-40
      transition-all duration-500 ease-in-out`}>



      <Link to="/About" onClick={closeMenu} className="bg-black dark:bg-white text-white dark:text-black text-center min-w-[290px] px-3 h-6 leading-6 text-2xl ">
        ABOUT
      </Link>
   
      <a>        
      </a>
      {/* Filter Categories for Mobile */}
      {categories.map(category => (
        <a
          key={category}
          href="#"
          className="bg-black text-white dark:bg-white dark:text-black px-3 h-6 leading-6 text-center text-xl min-w-[290px]"
          onClick={() => { onFilterChange(category); closeMenu(); }}
        >
          {category}
        </a>
      ))}



    </nav>

    {/* Large Screen Navigation */}
    <nav className="hidden lg:flex space-x-6 fixed top-6 ">

   
      <NavLink to="/"  className="fixed left-[96px] text-black dark:text-white px-0 text-[14px] leading-6 h-6">
      SHAREEF JASIM
        </NavLink>
    
      <NavLink to="About" className="fixed right-[72px] text-black dark:text-white px-0 text-[14px] leading-6 h-6">
      ABOUT
        </NavLink>
        <NavLink to="/" className="fixed right-[152px] text-black dark:text-white px-0 text-[14px] leading-6 h-6">
      WORK
        </NavLink>
    </nav>
  </div>
</header>


  );
};

export default Header;
