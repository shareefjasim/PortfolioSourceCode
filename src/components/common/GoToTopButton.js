import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as ArrowTopIcon } from '../../assets/icons/arrow-up-340-svgrepo-com.svg';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled more than 1 viewport height
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bg-black dark:bg-white hover:bg-black dark:hover:bg-white text-white dark:text-black z-50"
          style={{ 
            left: 'calc(50% - 12px)', // Half of the screen minus half of the button width
            bottom: '24px',
            width: '24px',
            height: '24px',
            padding: '2px'
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
        >
          <ArrowTopIcon className="w-full invert dark:invert-0 h-full stroke-white dark:stroke-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTopButton;