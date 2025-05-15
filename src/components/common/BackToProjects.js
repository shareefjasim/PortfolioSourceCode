import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackToProjects = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate back to the homepage
    navigate('/');
    // The scroll position and filter will be automatically restored
    // by the existing localStorage code in HomePage.js
  };

  return (
    <div className="mt-0 mb-6 h-6 flex left">
      <motion.button
        onClick={handleClick}
        className="text-sm inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to all projects
      </motion.button>
    </div>
  );
};

export default BackToProjects;