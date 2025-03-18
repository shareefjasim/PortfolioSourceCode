// import React, { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";

// const CustomCursor = () => {
//   const [isInside, setIsInside] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [firstMove, setFirstMove] = useState(true); // Flag to track the first mouse movement
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const userAgent =
//       typeof window.navigator === "undefined" ? "" : navigator.userAgent;
//     const mobile = Boolean(
//       userAgent.match(
//         /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//       )
//     );
//     setIsMobile(mobile);

//     if (!mobile) {
//       // Set initial position of the cursor using GSAP
//       gsap.set(cursorRef.current, {
//         x: window.innerWidth / 2 - 12,
//         y: window.innerHeight / 2 - 12,
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (isMobile) return; // Exit if on mobile

//     const moveCursor = (e) => {
//       if (isInside) {
//         if (firstMove) {
//           // Apply a smooth transition for the first movement
//           gsap.to(cursorRef.current, {
//             x: e.clientX - cursorRef.current.clientWidth / 2,
//             y: e.clientY - cursorRef.current.clientHeight / 2,
//             duration: 0.5, // Longer duration for the first move
//             ease: "power2.out",
//           });
//           setFirstMove(false); // Set the flag to false after the first move
//         } else {
//           gsap.to(cursorRef.current, {
//             x: e.clientX - cursorRef.current.clientWidth / 2,
//             y: e.clientY - cursorRef.current.clientHeight / 2,
//             duration: 0.5,
//             ease: "power2.out",
//           });
//         }
//       }
//     };

//     const handleLinkHover = () => {
//       gsap.to(cursorRef.current, {
//         scale: 1.8,
//         opacity: 0.5,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     const handleLinkOut = () => {
//       gsap.to(cursorRef.current, {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     const links = document.querySelectorAll(
//       'a, [role="button"], img.cursor-hover, .card, .menu-item'
//     );
//     links.forEach((link) => {
//       link.addEventListener("mouseover", handleLinkHover);
//       link.addEventListener("mouseout", handleLinkOut);
//       link.style.cursor = "none";
//     });

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       links.forEach((link) => {
//         link.removeEventListener("mouseover", handleLinkHover);
//         link.removeEventListener("mouseout", handleLinkOut);
//         link.style.cursor = "";
//       });
//     };
//   }, [isInside, isMobile, firstMove]);

//   const size = 24;

//   if (isMobile) return null; // Don't render the cursor for mobile devices

//   return (
//     <div
//       ref={cursorRef}
//       className="custom-cursor bg-black dark:bg-white"
//       style={{
//         position: "fixed",
//         top: 0, // Center vertically
//         left: 0, // Center horizontally
//         width: `${size}px`,
//         height: `${size}px`,
//         transform: "translate3d(0, 0, 0)", // Use translate3d for better performance
//         willChange: 'transform', // for hardware acceleration
//         pointerEvents: "none",
//         zIndex: 9999,
//       }}
//     ></div>
//   );
// };

// export default CustomCursor;




import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate, useLocation } from "react-router-dom";

// ======= CONFIGURABLE PARAMETERS =======
const SCALE_UP_FACTOR = 150;          // How big the square gets to cover the page
const SCALE_UP_DURATION = 0.6;          // Duration for scaling up
const SCALE_DOWN_DURATION = 0.6;        // Duration for scaling down
const FINAL_BORDER_RADIUS = "0rem";     // Final border radius on the small square
// ========================================

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Initial setup: detect mobile & set initial position.
  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    const mobileRegex =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
    const mobile = mobileRegex.test(userAgent);
    setIsMobile(mobile);

    if (!mobile) {
      gsap.set(cursorRef.current, {
        x: window.innerWidth / 2 - 12,
        y: window.innerHeight / 2 - 12,
      });
    }
  }, []);

  // Mouse move & hover effects.
  useEffect(() => {
    // (These effects are skipped if a transition is in progress.)
    const moveCursor = (e) => {
      //if (isTransitioning) return;
      gsap.to(cursorRef.current, {
        x: e.clientX - cursorRef.current.clientWidth / 2,
        y: e.clientY - cursorRef.current.clientHeight / 2,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleLinkHover = () => {
      if (isTransitioning) return;
      gsap.to(cursorRef.current, {
        scale: 1.8,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLinkOut = () => {
      if (isTransitioning) return;
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll(
      'a, [role="button"], img.cursor-hover, .card, .menu-item'
    );
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseout", handleLinkOut);
      link.style.cursor = "none";
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseout", handleLinkOut);
        link.style.cursor = "";
      });
    };
  }, [isMobile, isTransitioning]);

  // Click transition effect: when a link is clicked, scale up the square then navigate.
  useEffect(() => {
    if (isMobile) return;

    const handleClickTransition = (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (href && (href.startsWith("#") || href.startsWith("/"))) {
        e.preventDefault();
        setIsTransitioning(true);
        gsap.to(cursorRef.current, {
          scale: SCALE_UP_FACTOR,
          opacity: 1,
          borderRadius: 0,
          duration: SCALE_UP_DURATION,
          ease: "power2.inOut",
          onComplete: () => {
            const path = href.startsWith("#") ? href.substring(1) : href;
            // Pass a flag in location state to indicate a click-initiated transition.
            navigate(path, { state: { transitioned: true } });
          },
        });
      }
    };

    window.addEventListener("click", handleClickTransition);
    return () =>
      window.removeEventListener("click", handleClickTransition);
  }, [isMobile, navigate]);

  // Route change effect: When the route changes, animate the cursor scaling down.
  // We check if location.state.transitioned exists.
  useEffect(() => {
    if (isMobile) return;

    // If this navigation did NOT come from our click transition (e.g. via swipe/back),
    // run a two-part animation: first scale up (from 1 to full cover) then scale down.
    if (!location.state || !location.state.transitioned) {
      // Animate from current size to full screen
      gsap.to(cursorRef.current, {
        scale: SCALE_UP_FACTOR,
        duration: SCALE_UP_DURATION,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(cursorRef.current, {
            scale: 1,
            borderRadius: FINAL_BORDER_RADIUS,
            opacity: 1,
            duration: SCALE_DOWN_DURATION,
            ease: "power2.inOut",
            onComplete: () => {
              setIsTransitioning(false);
            },
          });
        },
      });
    } else {
      // If the navigation was triggered by our click, assume the cursor is already full-screen.
      // Simply animate it down.
      gsap.set(cursorRef.current, {
        scale: SCALE_UP_FACTOR,
        borderRadius: 0,
        opacity: 1,
      });
      gsap.to(cursorRef.current, {
        scale: 1,
        borderRadius: FINAL_BORDER_RADIUS,
        opacity: 1,
        duration: SCALE_DOWN_DURATION,
        ease: "power2.inOut",
        onComplete: () => {
          setIsTransitioning(false);
        },
      });
    }
  }, [location, isMobile]);

  const size = 24;
  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor bg-black dark:bg-white"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};


 export default CustomCursor;















// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { useNavigate, useLocation } from "react-router-dom";

// // ======= CONFIGURABLE PARAMETERS =======

// // -- Cursor Parameters --
// const CURSOR_SIZE = 24;                  // Base size (px) of the custom cursor
// const CURSOR_HOVER_SCALE = 1.8;          // Scale when hovering over links
// const CURSOR_HOVER_OPACITY = 0.5;        // Opacity when hovering
// const CURSOR_MOVE_DURATION = 0.5;        // Duration for moving animation
// const CURSOR_NORMAL_SCALE = 1;           // Normal scale of the cursor

// // -- Overlay Parameters --
// const OVERLAY_FADE_IN_DURATION = 0.5;    // Duration for overlay fade in
// const OVERLAY_FADE_OUT_DURATION = 0.5;   // Duration for overlay fade out

// // ========================================

// // Helper: determine theme color (white for light theme, black for dark theme)
// // This example checks if the body has a "dark" class.
// const getThemeColor = () =>
//   document.body.classList.contains("dark") ? "black" : "white";

// const CustomCursorAndOverlay = () => {
//   const cursorRef = useRef(null);
//   const overlayRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Initial setup: detect mobile & set initial cursor position.
//   useEffect(() => {
//     const userAgent = navigator.userAgent || "";
//     const mobileRegex =
//       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
//     const mobile = mobileRegex.test(userAgent);
//     setIsMobile(mobile);

//     if (!mobile && cursorRef.current) {
//       gsap.set(cursorRef.current, {
//         x: window.innerWidth / 2 - CURSOR_SIZE / 2,
//         y: window.innerHeight / 2 - CURSOR_SIZE / 2,
//       });
//     }
//   }, []);

//   // Cursor move & hover effects.
//   useEffect(() => {
//     if (isMobile) return;

//     const moveCursor = (e) => {
//       if (isTransitioning) return;
//       gsap.to(cursorRef.current, {
//         x: e.clientX - CURSOR_SIZE / 2,
//         y: e.clientY - CURSOR_SIZE / 2,
//         duration: CURSOR_MOVE_DURATION,
//         ease: "power2.out",
//       });
//     };

//     const handleLinkHover = () => {
//       if (isTransitioning) return;
//       gsap.to(cursorRef.current, {
//         scale: CURSOR_HOVER_SCALE,
//         opacity: CURSOR_HOVER_OPACITY,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     const handleLinkOut = () => {
//       if (isTransitioning) return;
//       gsap.to(cursorRef.current, {
//         scale: CURSOR_NORMAL_SCALE,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     window.addEventListener("mousemove", moveCursor);

//     const links = document.querySelectorAll(
//       'a, [role="button"], img.cursor-hover, .card, .menu-item'
//     );
//     links.forEach((link) => {
//       link.addEventListener("mouseover", handleLinkHover);
//       link.addEventListener("mouseout", handleLinkOut);
//       link.style.cursor = "none";
//     });

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       links.forEach((link) => {
//         link.removeEventListener("mouseover", handleLinkHover);
//         link.removeEventListener("mouseout", handleLinkOut);
//         link.style.cursor = "";
//       });
//     };
//   }, [isMobile, isTransitioning]);

//   // Click transition effect: when clicking a link, fade in the overlay.
//   useEffect(() => {
//     if (isMobile) return;

//     const handleClickTransition = (e) => {
//       const link = e.target.closest("a");
//       if (!link) return;

//       const href = link.getAttribute("href");
//       // Intercept internal links (href starting with "/" or "#")
//       if (href && (href.startsWith("#") || href.startsWith("/"))) {
//         e.preventDefault();
//         // Reset the cursor to its normal state before starting the overlay animation.
//         gsap.to(cursorRef.current, {
//           scale: CURSOR_NORMAL_SCALE,
//           opacity: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         setIsTransitioning(true);
//         // Set overlay background color based on theme.
//         if (overlayRef.current) {
//           overlayRef.current.style.backgroundColor = getThemeColor();
//         }
//         // Animate overlay fade in (opacity 0 -> 1).
//         gsap.to(overlayRef.current, {
//           opacity: 1,
//           duration: OVERLAY_FADE_IN_DURATION,
//           ease: "power2.inOut",
//           onComplete: () => {
//             const path = href.startsWith("#") ? href.substring(1) : href;
//             // Pass state flag if needed.
//             navigate(path, { state: { transitioned: true } });
//           },
//         });
//       }
//     };

//     window.addEventListener("click", handleClickTransition);
//     return () =>
//       window.removeEventListener("click", handleClickTransition);
//   }, [isMobile, navigate]);

//   // Route change effect: when a new page loads, fade out the overlay.
//   useEffect(() => {
//     if (isMobile) return;

//     // Fade out the overlay (opacity 1 -> 0).
//     gsap.to(overlayRef.current, {
//       opacity: 0,
//       duration: OVERLAY_FADE_OUT_DURATION,
//       ease: "power2.inOut",
//       onComplete: () => {
//         setIsTransitioning(false);
//       },
//     });
//   }, [location, isMobile]);

//   if (isMobile) return null;

//   return (
//     <>
//       {/* Custom Cursor Element */}
//       <div
//         ref={cursorRef}
//         className="custom-cursor bg-black dark:bg-white"
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: `${CURSOR_SIZE}px`,
//           height: `${CURSOR_SIZE}px`,
//           transform: "translate3d(0, 0, 0)",
//           willChange: "transform",
//           pointerEvents: "none",
//           zIndex: 10000,
//         }}
//       />

//       {/* Full-screen Overlay Element */}
//       <div
//         ref={overlayRef}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           opacity: 0,
//           pointerEvents: "none",
//           zIndex: 9999,
//         }}
//       />
//     </>
//   );
// };

// export default CustomCursorAndOverlay;
