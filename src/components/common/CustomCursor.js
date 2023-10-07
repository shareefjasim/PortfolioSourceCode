import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isInside, setIsInside] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(mobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Exit if on mobile

    const moveCursor = (e) => {
      if (isInside) {
        setPosition({ x: e.clientX, y: e.clientY });
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
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

    const links = document.querySelectorAll('a, [role="button"], img.cursor-hover');
    links.forEach(link => {
      link.addEventListener('mouseover', handleLinkHover);
      link.addEventListener('mouseout', handleLinkOut);
      link.style.cursor = 'none';
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseover', handleLinkHover);
        link.removeEventListener('mouseout', handleLinkOut);
        link.style.cursor = '';
      });
    };
  }, [isInside, isMobile]);

  const size = 20;

  if (isMobile) return null; // Don't render the cursor for mobile devices

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
