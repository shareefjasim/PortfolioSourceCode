
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Card = ({ children, style, targetUrl,className}) => {
  const cardRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isMouseMoved, setIsMouseMoved] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseDown = () => {
      setIsMouseMoved(false);
    };

    const handleMouseMove = (e) => {
      if (isClicked) return;

      setIsMouseMoved(true); // Added to track mouse movement

      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;

      const verticalDis = Math.abs(e.clientX - centerX);
      const horizontalDis = Math.abs(e.clientY - centerY);

      const rotateX = -(e.clientY - centerY) / 150;
      const rotateY = (e.clientX - centerX) / 150;

      gsap.to(card, {
        duration: 1,
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        ease: 'SlowMo.easeInOut'
      });

      gsap.to(card, {
        duration: 1,
        transform: 'none',
        ease: 'SlowMo.easeInOut'
      });
    };

    const handleMouseUp = () => {
      if (!isMouseMoved) {
        setIsClicked(true);

        const cardRect = card.getBoundingClientRect();
        const scaleXFactor = window.innerWidth / cardRect.width;
        const scaleYFactor = window.innerHeight / cardRect.height;
        const maxScaleFactor = Math.max(scaleXFactor, scaleYFactor);

        gsap.to(card, {
          duration: 0.5,
          scaleX: maxScaleFactor,
          scaleY: maxScaleFactor,
          x: window.innerWidth / 2 - cardRect.left - cardRect.width / 2,
          y: window.innerHeight / 2 - cardRect.top - cardRect.height / 2,
          opacity: 0,
          onComplete: () => {
            if (targetUrl) {
              window.location.href = targetUrl;
            }
          }
        });
      }
    };

    card.addEventListener('mousedown', handleMouseDown); // Added
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseup', handleMouseUp); // Added

    return () => {
      card.removeEventListener('mousedown', handleMouseDown); // Added
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseup', handleMouseUp); // Added
    };
  }, [targetUrl]);

  return (
    <div ref={cardRef}
      className={`border border-gray-300 rounded-none p-0 shadow-none hover:shadow-xl transition-shadow duration-300 ${className}`}
      style={{ ...style }}>
      {children}
    </div>
  );
}

export default Card;
