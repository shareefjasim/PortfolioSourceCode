import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [isInside, setIsInside] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [firstMove, setFirstMove] = useState(true); // Flag to track the first mouse movement
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

    if (!mobile) {
      // Set initial position of the cursor using GSAP
      gsap.set(cursorRef.current, {
        x: window.innerWidth / 2 - 12,
        y: window.innerHeight / 2 - 12,
      });
    }
  }, []);

  useEffect(() => {
    if (isMobile) return; // Exit if on mobile

    const moveCursor = (e) => {
      if (isInside) {
        if (firstMove) {
          // Apply a smooth transition for the first movement
          gsap.to(cursorRef.current, {
            x: e.clientX - cursorRef.current.clientWidth / 2,
            y: e.clientY - cursorRef.current.clientHeight / 2,
            duration: 0.5, // Longer duration for the first move
            ease: "power2.out",
          });
          setFirstMove(false); // Set the flag to false after the first move
        } else {
          gsap.to(cursorRef.current, {
            x: e.clientX - cursorRef.current.clientWidth / 2,
            y: e.clientY - cursorRef.current.clientHeight / 2,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }
    };

    const handleLinkHover = () => {
      gsap.to(cursorRef.current, {
        scale: 1.8,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLinkOut = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const links = document.querySelectorAll(
      'a, [role="button"], img.cursor-hover, .card, .menu-item'
    );
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseout", handleLinkOut);
      link.style.cursor = "none";
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseout", handleLinkOut);
        link.style.cursor = "";
      });
    };
  }, [isInside, isMobile, firstMove]);

  const size = 24;

  if (isMobile) return null; // Don't render the cursor for mobile devices

  return (
    <div
      ref={cursorRef}
      className="custom-cursor bg-black dark:bg-white"
      style={{
        position: "fixed",
        top: 0, // Center vertically
        left: 0, // Center horizontally
        width: `${size}px`,
        height: `${size}px`,
        transform: "translate3d(0, 0, 0)", // Use translate3d for better performance
        willChange: 'transform', // for hardware acceleration
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default CustomCursor;
