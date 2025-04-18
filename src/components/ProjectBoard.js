import React, { useEffect, useRef, useState } from "react";
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

  // Helper function to determine grid column span based on projectCardSize
  const getColSpan = (size) => {
    switch (size) {
      case 'large': return 'col-span-3 '; // 1/2 board width
      case 'medium': return 'col-span-2 '; // 1/3 board width
      case 'small': 
      default: return 'col-span-1 '; // 1/6 board width
    }
  };

  // Helper function to determine grid row span based on projectCardSize
  const getRowSpan = (size) => {
    switch (size) {
      case 'large': return 'row-span-3 '; // Takes up 2 rows
      case 'medium': return 'row-span-2 '; // Takes up 1.5 rows
      case 'small': 
      default: return 'row-span-1 '; // Takes up 1 row
    }
  };

  return (
    <div className="px-[168px] pt-[72px] pb-12 max-w-[1920px] mx-auto">
      <div 
        ref={gridRef}
        className="grid grid-cols-6 gap-[48px]" 
        style={{ 
          gridAutoFlow: 'dense',
          gridAutoRows: `${cellSize}px` // Set row height to match column width
        }}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`${getColSpan(project.projectCardSize)} ${getRowSpan(project.projectCardSize)} relative w-full`}
          >
            <div className="w-full h-full">
              <ProjectSquare
                project={project}
                isSelected={
                  selectedCategory !== "All Work" &&
                  project.categories.includes(selectedCategory)
                }
                onClick={() => onSquareClick({ project, id: index })}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectBoard;