import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Card = ({ children, style, targetUrl, className, mediaType }) => {
  const cardRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      if (isClicked) return;

      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;

      const rotateX = -(e.clientY - centerY) / 50;
      const rotateY = (e.clientX - centerX) / 50;

      gsap.to(card, {
        duration: 1,
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        ease: 'SlowMo.easeInOut'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        duration: 0.5,
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        ease: 'SlowMo.easeInOut'
      });
    };

    const handleClick = () => {
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('click', handleClick);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('click', handleClick);
    };
  }, [targetUrl]);

  // Additional logic based on mediaType
  useEffect(() => {
    if (mediaType === '3dmodel') {
      // Apply specific interactions or styles for 3D models
    } else {
      // Apply interactions or styles for images
    }
  }, [mediaType]);

  return (
    <div ref={cardRef}
      className={`border border-gray-300 dark:border-gray-700 rounded-none p-0 shadow-none hover:shadow transition-shadow duration-300 ${className}`}
      style={{ ...style }}>
      {children}
    </div>
  );
}

export default Card;
