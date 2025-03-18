import React, { useState, useEffect, useRef } from "react";

function HomePageV3() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const categoryColumnRef = useRef(null);
  const mediumSquareSize = useRef(0);
  
  // Calculate and set container height based on category column
  useEffect(() => {
    const updateHeight = () => {
      if (categoryColumnRef.current) {
        // Height of 6 squares + 5 gaps = width * 6 + 24px * 5
        const smallSquareWidth = categoryColumnRef.current.offsetWidth;
        const height = smallSquareWidth * 6 + (24 * 5);
        setContainerHeight(height);
        
        // Calculate medium square size = 2 * small square + gap
        mediumSquareSize.current = (smallSquareWidth * 2) + 24;
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Categories
  const categories = [
    { id: "all", name: "ALL" },
    { id: "code", name: "CODE" },
    { id: "product", name: "PRODUCT" },
    { id: "compd", name: "COMP D" },
    { id: "arch", name: "ARCH" },
    { id: "other", name: "OTHER" }
  ];

  // Sample projects
  const projects = {
    all: [
      { id: 101, name: "Project 1", url: "/projects/1" },
      { id: 102, name: "Project 2", url: "/projects/2" },
      { id: 103, name: "Project 3", url: "/projects/3" },
      { id: 104, name: "Project 4", url: "/projects/4" },
    ],
    code: [
      { id: 201, name: "Code Project 1", url: "/projects/code/1" },
      { id: 202, name: "Code Project 2", url: "/projects/code/2" },
    ],
    product: [
      { id: 301, name: "Product 1", url: "/projects/product/1" },
      { id: 302, name: "Product 2", url: "/projects/product/2" },
    ],
    // Other categories as needed
  };

  // Set "all" as the default active category
  useEffect(() => {
    setActiveCategory("all");
  }, []);

  return (
    <div className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center p-[72px]">
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "24px",
          height: containerHeight > 0 ? `${containerHeight}px` : 'auto',
          maxHeight: 'calc(100vh - 144px)',
        }}
        className="w-full"
      >
        {/* Column 1: Small category squares */}
        <div 
          ref={categoryColumnRef}
          style={{ gridColumn: "1 / 2", height: "100%" }}
          className="flex flex-col gap-6"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative aspect-square cursor-pointer transition-all
                bg-white dark:bg-white border border-black dark:border-black
                ${activeCategory === category.id 
                  ? "bg-black text-white dark:bg-black dark:text-white" 
                  : "hover:bg-gray-50 dark:hover:bg-gray-50"
                }`}
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-medium text-sm">{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Columns 2-3: Medium project squares in a single column */}
        <div 
          style={{ gridColumn: "2 / 4", height: "100%" }}
          className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
        >
          <div className="flex flex-col gap-6">
            {activeCategory &&
              projects[activeCategory]?.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative cursor-pointer
                    bg-white dark:bg-white border border-black dark:border-black"
                  style={{ 
                    willChange: "transform",
                    aspectRatio: "1/1", // Keep square aspect ratio
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span>{project.name}</span>
                  </div>
                  <a 
                    href={project.url}
                    className="absolute inset-0 z-10" 
                    aria-label="Navigate to page"
                  ></a>
                </div>
              ))}
            {!activeCategory && (
              <div className="h-32 flex items-center justify-center text-gray-400">
                Select a category
              </div>
            )}
          </div>
        </div>

        {/* Columns 4-12: Large preview rectangle */}
        <div 
          style={{ gridColumn: "4 / 13" }}
          className="relative bg-white dark:bg-white border border-black dark:border-black"
        >
          <div className="h-full w-full flex items-center justify-center">
            {hoveredProject ? (
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium mb-4 text-black dark:text-black">{hoveredProject.name}</h3>
                <p className="text-black dark:text-black">Project preview placeholder</p>
              </div>
            ) : (
              <span className="text-black dark:text-black">
                {activeCategory
                  ? "Hover over a project to see details"
                  : "Select a category and hover over a project"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageV3;