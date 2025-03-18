import React, { useRef } from 'react';
import { gsap } from 'gsap';

const SquareCard = ({ 
  children, 
  targetUrl,
  onClick,
  onMouseEnter,
  onMouseLeave: customMouseLeave,
  isActive,
  className,
  style
}) => {
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
    
    if (customMouseLeave) customMouseLeave();
  };

  return (
    <div 
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`aspect-square ${className || ''}`}
      style={{
        ...style,
        willChange: 'transform', 
        cursor: targetUrl || onClick ? 'pointer' : 'default'
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        {children}
      </div>
      {targetUrl && (
        <a 
          href={targetUrl}
          className="absolute inset-0 z-10"
          aria-label="Navigate to page"
        />
      )}
    </div>
  );
};

export default SquareCard;