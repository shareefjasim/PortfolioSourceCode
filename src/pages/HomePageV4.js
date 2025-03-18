import React, { useState, useEffect, useRef } from "react";
import BackgroundVideoBlackZoomed from "../assets/SILT Slow Animation White.mp4";
import projectsData from "../components/projects/projectsData";

function HomePageV4() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [smallSquareSize, setSmallSquareSize] = useState(0);
  const containerRef = useRef(null);
  const categoryColumnRef = useRef(null);
  const videoRef = useRef(null);
  const projectsContainerRef = useRef(null);
  
  // Extract unique categories from project data
  const uniqueCategories = ["ALL"];
  projectsData.forEach(project => {
    project.categories.forEach(category => {
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    });
  });
  
  // Format categories for display
  const categories = uniqueCategories.map((category, index) => ({
    id: index === 0 ? "all" : category.replace(/\s+/g, '').toLowerCase(),
    name: category === "ALL" ? "ALL" : category.substring(0, 6)
  }));
  
  // Group projects by category
  const projectsByCategory = {
    all: projectsData
  };
  
  uniqueCategories.forEach(category => {
    if (category !== "ALL") {
      const categoryId = category.replace(/\s+/g, '').toLowerCase();
      projectsByCategory[categoryId] = projectsData.filter(project => 
        project.categories.includes(category)
      );
    }
  });
  
  // Video play/pause functionality
  const togglePlayPause = (videoRef) => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  
  // Play video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);
  
  // Calculate sizes based on available height
  useEffect(() => {
    const calculateSizes = () => {
      if (containerRef.current) {
        const totalHeight = containerRef.current.clientHeight;
        // Calculate small square size: (total height - (5 gaps * 24px)) / 6 squares
        const calculatedSize = (totalHeight - (5 * 24)) / 6;
        setSmallSquareSize(calculatedSize);
      }
    };
    
    calculateSizes();
    window.addEventListener('resize', calculateSizes);
    return () => window.removeEventListener('resize', calculateSizes);
  }, []);

  // Handle global scroll to control projects scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      if (projectsContainerRef.current && activeCategory) {
        // Prevent default scroll behavior
        e.preventDefault();
        
        // Scroll the projects container
        projectsContainerRef.current.scrollTop += e.deltaY;
      }
    };
    
    // Add wheel event listener to the whole document
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [activeCategory]);

  // Set "all" as the default active category
  useEffect(() => {
    setActiveCategory("all");
  }, []);

  // Calculate medium square size based on small square size and gap
  const mediumSquareSize = smallSquareSize > 0 ? (smallSquareSize * 3) + 48 : 0;
  
  // Calculate the leftward shift: half of small square width + 12px
  const leftShift = smallSquareSize > 0 ? (smallSquareSize / 2) + 12 : 0;

  return (
    <div className="fixed inset-0">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef} 
          onClick={() => togglePlayPause(videoRef)} 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={BackgroundVideoBlackZoomed} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Blur overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      ></div>
      
      {/* Main content - using absolute positioning with explicit top/bottom margins */}
      <div 
        ref={containerRef}
        className="fixed top-[72px] bottom-[72px] left-[72px] right-[72px] z-20 flex items-center justify-center"
      >
        {/* Centered layout with medium squares as the focus, shifted left */}
        <div 
          className="flex gap-6"
          style={{ transform: `translateX(-${leftShift}px)` }}
        >
          {/* Small category squares on the left */}
          <div 
            ref={categoryColumnRef}
            className="flex flex-col justify-between"
            style={{ height: categories.length * smallSquareSize + (categories.length - 1) * 24 }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative cursor-pointer transition-all
                  bg-white dark:bg-white border border-black dark:border-black
                  ${activeCategory === category.id 
                    ? "bg-black text-white dark:bg-black dark:text-white" 
                    : "hover:bg-gray-50 dark:hover:bg-gray-50"
                  }`}
                style={{ 
                  width: `${smallSquareSize}px`, 
                  height: `${smallSquareSize}px`,
                  willChange: "transform" 
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Medium project squares in center */}
          <div 
            ref={projectsContainerRef}
            className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
            style={{ maxHeight: categories.length * smallSquareSize + (categories.length - 1) * 24 }}
          >
            <div className="flex flex-col gap-6">
              {activeCategory && projectsByCategory[activeCategory] &&
                projectsByCategory[activeCategory].map((project) => (
                  <div
                    key={project.title}
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="relative cursor-pointer
                      bg-white dark:bg-white border border-black dark:border-black"
                    style={{ 
                      width: `${mediumSquareSize}px`,
                      height: `${mediumSquareSize}px`,
                      willChange: "transform",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-center p-2">{project.title}</span>
                    </div>
                    <a 
                      href={project.targetUrl}
                      className="absolute inset-0 z-10" 
                      aria-label="Navigate to page"
                    ></a>
                  </div>
                ))}
              {!activeCategory && (
                <div 
                  className="flex items-center justify-center text-white"
                  style={{
                    width: `${mediumSquareSize}px`,
                    height: `${mediumSquareSize}px`
                  }}
                >
                  Select a category
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageV4;