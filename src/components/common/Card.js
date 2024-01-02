import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Card = ({ children, targetUrl, mediaType }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) / 100;
    const deltaY = (e.clientY - centerY) / 100;

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

  return (
    <a 
      href={targetUrl} 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
        className={`${mediaType === '3dmodel' ? '3d-model-class' : ''} 
        shadow-custom dark:shadow-customDark`}

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
      <div className="menu-item absolute inset-0 flex justify-center items-center">
        {children}
      </div>
    </a>
  );
};

export default Card;
