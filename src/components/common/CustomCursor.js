// /src/components/common/CustomCursor.js
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const location = useLocation();
  const prevLocation = useRef(location.pathname);


  
  // Function to apply cursor behavior to elements
  const applyCustomCursorBehavior = () => {
    if (isMobile) return;
    
    // Comprehensive selector for all clickable elements
    const selectors = `
      a, button, [role="button"], 
      input[type="submit"], input[type="button"], 
      .clickable, [data-cursor="pointer"],
      .project-link, .about-link,
      .category-button,
      .nav-item, .menu-item,
      [tabindex="0"]
    `;
    
    // Clean up old event listeners first
    document.querySelectorAll(selectors).forEach(el => {
      el.removeEventListener("mouseover", handleHover);
      el.removeEventListener("mouseout", handleLeave);
    });
    
    // Add new event listeners
    document.querySelectorAll(selectors).forEach(el => {
      if (el.classList.contains('cursor-default')) {
        return; // Skip elements with cursor-default class
      }
      
      el.addEventListener("mouseover", handleHover);
      el.addEventListener("mouseout", handleLeave);
      el.addEventListener("click", handleClick);
      el.style.cursor = "none";
    });
  };
  
  // Event handlers
  const handleHover = () => {
    gsap.to(cursorRef.current, {
      scale: 2,
      opacity: 0.5,
      duration: 0.3,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });
  };
  
  const handleLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });
  };
  
  // Modify the handleClick function to reset cursor state
  const handleClick = (e) => {
    // Reset cursor to normal state when clicking any link
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });
    
 
  };

  
  const moveCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX - cursorRef.current.clientWidth / 2,
      y: e.clientY - cursorRef.current.clientHeight / 2,
      duration: 0.2,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });
  };

  // Initialize cursor
  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    setIsMobile(mobile);

    if (!mobile) {
      // Add class to body when custom cursor is active
      document.body.classList.add('has-custom-cursor');
      
      // Center the cursor
      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: window.innerWidth / 2 - cursorRef.current.clientWidth / 2,
          y: window.innerHeight / 2 - cursorRef.current.clientHeight / 2,
          scale: 1,
          opacity: 1,
        });
      }
      
      // Set up mouse move listener
      window.addEventListener("mousemove", moveCursor);
      
      // Initial application
      applyCustomCursorBehavior();
      
      // Set up mutation observer to catch dynamically added elements
      const observer = new MutationObserver((mutations) => {
        applyCustomCursorBehavior();
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.body.classList.remove('has-custom-cursor');
        observer.disconnect();
      };
    }
  }, [isMobile]);

  // Handle route changes
  useEffect(() => {
    if (location.pathname !== prevLocation.current) {
      prevLocation.current = location.pathname;
      
      // Reset cursor state when navigation happens
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "cubic-bezier(0.4,0,0.2,1)",
        });
      }
      
      // Re-apply cursor behavior after navigation
      setTimeout(applyCustomCursorBehavior, 300);
    }
  }, [location]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor bg-black dark:bg-white rounded-none"
      style={{
        position: "fixed",
        width: "24px",
        height: "24px",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
