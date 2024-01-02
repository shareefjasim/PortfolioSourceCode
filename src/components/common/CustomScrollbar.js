import React, { useEffect, useState } from 'react';

const CustomScrollbar = () => {
  const [scrollBarTop, setScrollBarTop] = useState(0);
  const scrollbarHeight = 48; // Height of your scrollbar in pixels
  const windowHeight = window.innerHeight; // Viewport height

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollPercent = (scrollTop / totalHeight) * 100;
    const adjustedTop = Math.min(scrollPercent, 100 - (scrollbarHeight / windowHeight * 100));
    setScrollBarTop(adjustedTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 right-0 w-2 h-12 bg-black dark:bg-white z-50 transform-gpu"
      style={{ transform: `translateY(${scrollBarTop}vh)` }}
    />
  );
};

export default CustomScrollbar;
