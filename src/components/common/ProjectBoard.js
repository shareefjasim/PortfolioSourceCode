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
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={project.targetUrl || index}
              className={`${getColSpan(project.projectCardSize)} ${getRowSpan(project.projectCardSize)} relative w-full`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeInOut' } }}
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
