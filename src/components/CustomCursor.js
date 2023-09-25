import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursorRef = useRef(null);
  const [mouseHasLeft, setMouseHasLeft] = useState(false);


  useEffect(() => {
    gsap.set(cursorRef.current, {
      x: position.x,
      y: position.y
    });

    const moveCursor = (e) => {
      if (mouseHasLeft) {
        setMouseHasLeft(false);
        return;
      }
      setPosition({ x: e.clientX, y: e.clientY });
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleLinkHover = () => {
      gsap.to(cursorRef.current, {
        scale: 1.8,
        opacity: 0.5,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleLinkOut = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      console.log("Mouse left the window");
      setMouseHasLeft(true);
      gsap.to(cursorRef.current, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        duration: 0.3,
        ease: 'power2.out'
      });
    };
    

    const links = document.querySelectorAll('[data-target-url], .card-element');
    links.forEach(link => {
      link.addEventListener('mouseover', handleLinkHover);
      link.addEventListener('mouseout', handleLinkOut); // Added this line
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', handleMouseLeave);
      links.forEach(link => {
        link.removeEventListener('mouseover', handleLinkHover);
        link.removeEventListener('mouseout', handleLinkOut);
      });
    };
    
  }, []);

  const size = 20;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'black',
        borderRadius: '0%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    ></div>
  );
};

export default CustomCursor;
