import React, { useState, useEffect, useRef } from "react";


function HomePageV2() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const largeSquareRef = useRef(null);
  
  // Calculate and set container height based on large square
  useEffect(() => {
    const updateHeight = () => {
      if (largeSquareRef.current) {
        const height = largeSquareRef.current.offsetWidth; // Square height = width
        setContainerHeight(height);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Updated categories with text instead of icons
  const categories = [
    { id: 1, name: "CODE" },
    { id: 2, name: "PROD" },
    { id: 3, name: "ARCH" },
    { id: 4, name: "CD" },
    { id: 5, name: "ML" },
    { id: 6, name: "STRA" },
    { id: 7, name: "ABST" },
    { id: 8, name: "BLOG" },
    { id: 9, name: "ECOM" },
  ];

  const projects = {
    1: [
      { id: 101, name: "Portfolio Site", url: "/projects/portfolio" },
      { id: 102, name: "E-commerce App", url: "/projects/ecommerce" },
      { id: 103, name: "Dashboard", url: "/projects/dashboard" },
      { id: 104, name: "Blog Platform", url: "/projects/blog" },
      { id: 101, name: "Portfolio Site", url: "/projects/portfolio" },
      { id: 102, name: "E-commerce App", url: "/projects/ecommerce" },
      { id: 103, name: "Dashboard", url: "/projects/dashboard" },
      { id: 104, name: "Blog Platform", url: "/projects/blog" },
      // More projects...
    ],
    // Other categories' projects...
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center p-[72px]">
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gap: "24px",
          height: containerHeight > 0 ? `${containerHeight}px` : 'auto',
          maxHeight: 'calc(100vh - 144px)',
        }}
        className="w-full"
      >
        {/* Small squares column */}
        <div 
          style={{ gridColumn: "1 / 2", height: "100%" }}
          className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
        >
          <div className="grid grid-cols-1 gap-6">
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
        </div>

        {/* Medium squares spanning columns 2-5 */}
        <div 
          style={{ gridColumn: "2 / 6", height: "100%" }}
          className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
        >
          <div className="grid grid-cols-2 gap-6">
            {activeCategory &&
              projects[activeCategory]?.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative aspect-square cursor-pointer
                    bg-white dark:bg-white border border-black dark:border-black"
                  style={{ willChange: "transform" }}
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
              <div className="col-span-2 h-32 flex items-center justify-center text-gray-400">
                Select a category
              </div>
            )}
          </div>
        </div>

        {/* Large square spanning columns 6-9 */}
        <div 
          ref={largeSquareRef}
          style={{ gridColumn: "6 / 10" }}
          className="aspect-square relative bg-white dark:bg-white border border-black dark:border-black"
        >
          <div className="h-full w-full flex items-center justify-center">
            {hoveredProject ? (
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium mb-4">{hoveredProject.name}</h3>
                <p>Project preview placeholder</p>
              </div>
            ) : (
              <span className="text-gray-400">
                {activeCategory
                  ? "Hover over a project"
                  : "Select a category and hover over a project"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageV2;