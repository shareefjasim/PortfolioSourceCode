import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "../../context/TransitionContext";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectTransition = ({ children }) => {
  const { selectedProject, originRect, isTransitioning, setIsTransitioning } = useTransition();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle back navigation
  useEffect(() => {
    const handleBackNavigation = () => {
      if (selectedProject && originRect) {
        setIsTransitioning(true);
        setTimeout(() => {
          navigate("/");
        }, 600);
      }
    };
    
    // Add back button listener
    window.addEventListener("popstate", handleBackNavigation);
    
    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, [selectedProject, originRect, navigate, setIsTransitioning]);
  
  // Handle transition completion
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Give enough time for transition to complete
      
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, setIsTransitioning]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={isTransitioning && originRect ? {
          position: "fixed",
          top: originRect.top,
          left: originRect.left,
          width: originRect.width,
          height: originRect.height,
          zIndex: 100
        } : { opacity: 0 }}
        animate={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%", 
          height: "auto",
          opacity: 1
        }}
        exit={originRect ? {
          position: "fixed",
          top: originRect.top,
          left: originRect.left,
          width: originRect.width,
          height: originRect.height,
          zIndex: 100,
          opacity: 0
        } : { opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for a nice feel
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectTransition;