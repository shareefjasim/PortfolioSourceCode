// /src/components/common/CustomCursor.js
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const location = useLocation();
  const prevLocation = useRef(location.pathname);

  // Page transition: expand square to cover viewport, then shrink back
  const pageTransition = () => {
    const el = cursorRef.current;
    if (!el) return;
    const size = el.clientWidth;
    const maxDim = Math.max(window.innerWidth, window.innerHeight);
    const scaleFactor = (maxDim / size) * 2;

    const tl = gsap.timeline();
    // scale up
    tl.to(el, {
      scale: scaleFactor,
      duration: 0.5,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });
    // mid-animation: force black background
    tl.call(() => {
      el.style.backgroundColor = "#000";
    }, null, 0.25);
    // scale down
    tl.to(el, {
      scale: 1,
      duration: 0.5,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });
  };

  useEffect(() => {
    // Detect mobile
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    setIsMobile(mobile);

    if (!mobile && cursorRef.current) {
      // Center the cursor
      gsap.set(cursorRef.current, {
        x: window.innerWidth / 2 - cursorRef.current.clientWidth / 2,
        y: window.innerHeight / 2 - cursorRef.current.clientHeight / 2,
        scale: 1,
        opacity: 1,
      });
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - cursorRef.current.clientWidth / 2,
        y: e.clientY - cursorRef.current.clientHeight / 2,
        duration: 0.2,
        ease: "cubic-bezier(0.4,0,0.2,1)",
      });
    };

    // Hover scale + opacity
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

    // Only attach click on project and about links
    const selectors = '.project-link, .about-link';
    const elems = document.querySelectorAll(selectors);

    elems.forEach(el => {
      el.addEventListener("click", () => {
        pageTransition();
      });
      el.addEventListener("mouseover", handleHover);
      el.addEventListener("mouseout", handleLeave);
      el.style.cursor = "none";
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      elems.forEach(el => {
        el.removeEventListener("click", pageTransition);
        el.removeEventListener("mouseover", handleHover);
        el.removeEventListener("mouseout", handleLeave);
        el.style.cursor = "";
      });
    };
  }, [isMobile]);

  // Trigger on route change, only if navigating to project/about pages
  useEffect(() => {
    const path = location.pathname;
    if (prevLocation.current !== path && (path.startsWith("/project") || path === "/About")) {
      pageTransition();
    }
    prevLocation.current = path;
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
