import React, { useRef, useEffect, useState } from 'react';  // Added useState import
import { gsap } from 'gsap';

const Card = ({ children, style, targetUrl }) => {
  const cardRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);  // Moved useState outside of useEffect

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      if (isClicked) return;

      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;

      const verticalDis = Math.abs(e.clientX - centerX);
      const horizontalDis = Math.abs(e.clientY - centerY);
      const maxDistance = Math.max(verticalDis, horizontalDis);

      // if (maxDistance - (cardRect.width / 2) <= 50) {
        const rotateX = -(e.clientY - centerY) / 50;
        const rotateY = (e.clientX - centerX) / 50;

        gsap.to(card, {
          duration: 1,
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          ease: 'SlowMo.easeInOut'
        });
      // } else {
        gsap.to(card, {
          duration: 1,
          transform: 'none',
          ease: 'SlowMo.easeInOut'
        });
      // }
    };

    card.addEventListener('click', () => {
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
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targetUrl]);

  return (
    <div ref={cardRef}
      className="card-element"
      style={{
        border: '0px solid #e0e0e0',
        borderRadius: '0px',
        padding: '0px',
        boxShadow: '0px 0px 100px rgba(0, 0, 0, 0.1)',
        ...style
      }}>
      {children}
    </div>
  );
}

export default Card;
