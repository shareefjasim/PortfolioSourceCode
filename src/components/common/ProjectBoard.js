import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSquare from "./ProjectSquare";

function ProjectBoard({ projects, selectedCategory, onSquareClick }) {
  const gridRef = useRef(null);
  const [cellSize, setCellSize] = useState(0);

  // Calculate cell size based on container width
  useEffect(() => {
    const calculateCellSize = () => {
      if (gridRef.current) {
        const containerWidth = gridRef.current.clientWidth;
        const gapSize = 48; // gap size in pixels
        const columnsCount = 6; // number of columns
        const totalGapWidth = (columnsCount - 1) * gapSize;
        const calculatedCellSize = (containerWidth - totalGapWidth) / columnsCount;
        setCellSize(calculatedCellSize);
      }
    };

    calculateCellSize();
    window.addEventListener("resize", calculateCellSize);
    return () => window.removeEventListener("resize", calculateCellSize);
  }, []);

  // Helpers for grid spans
  const getColSpan = size => {
    switch (size) {
      case 'large': return 'col-span-3';
      case 'medium': return 'col-span-2';
      default: return 'col-span-1';
    }
  };
  const getRowSpan = size => {
    switch (size) {
      case 'large': return 'row-span-3';
      case 'medium': return 'row-span-2';
      default: return 'row-span-1';
    }
  };

  // Animation variants for project cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,  // Start at 70% scale (-30% from original)
    },
    visible: index => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for a nice elastic feel
        delay: index * 0.05, // Stagger effect based on index
      } 
    }),
    hover: {
      scale: 1.03, // Slight scale up on hover
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.7,
      transition: { 
        duration: 0.4, 
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <div className="px-[216px] pt-18 pb-18 max-w-[1920px] mx-auto">
      <motion.div
        ref={gridRef}
        className="grid grid-cols-6 gap-[48px]"
        style={{
          gridAutoFlow: 'dense',
          gridAutoRows: `${cellSize}px`
        }}
        layout // animate layout changes
      >
        <AnimatePresence mode="wait">
          {projects.map((project, index) => (
            <motion.div
              key={project.targetUrl || index}
              className={`${getColSpan(project.projectCardSize)} ${getRowSpan(project.projectCardSize)} relative w-full`}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              custom={index} // Passed to the variants for staggered animations
            >
              <ProjectSquare
                project={project}
                isSelected={
                  selectedCategory !== "All Work" &&
                  project.categories.includes(selectedCategory)
                }
                onClick={() => onSquareClick({ project, id: index })}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ProjectBoard;