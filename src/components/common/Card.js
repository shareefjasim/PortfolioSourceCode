import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card = ({ children, targetUrl, mediaType, invertInDarkMode }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) / 40;
    const deltaY = (e.clientY - centerY) / 40;

    gsap.to(cardRef.current, {
      rotationY: deltaX,
      rotationX: -deltaY,
      transformPerspective: 1000,
      ease: 'power1.out',
      duration: 0.5
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: 'power1.out',
      duration: 0.5
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const offset = window.scrollY / 10;
      gsap.to(cardRef.current, {
        y: offset,
        duration: 0.5,
        ease: 'power1.out'
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <a 
      href={targetUrl} 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
        className={`shadow-none dark:shadow-none hover:shadow-custom hover:dark:shadow-customDark`}

        style={{ 
        width: '100%', 
        paddingBottom: '100%', 
        position: 'relative',
        willChange: 'transform', // for hardware acceleration
        display: 'block', // ensures the <a> tag behaves as a block element
        textDecoration: 'none', // optional, removes the underline
        color: 'inherit' // optional, ensures text color matches your design
      }}
    >
      <div className={`menu-item absolute inset-0 flex justify-center items-center ${invertInDarkMode ? 'dark:invert' : ''}`}>
        {children}
      </div>
    </a>
  );
};

export default Card;
