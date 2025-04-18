import React, { useState, useRef } from "react";
import projectsData from "../components/projects/projectsData";

// Extract unique categories from the projects data.
const uniqueCategories = Array.from(
  new Set(projectsData.flatMap((project) => project.categories))
);
// Add "All Work" as the first option.
const categoriesList = ["All Work", ...uniqueCategories];

// Example of what ProjectSquare might need to look like
function ProjectSquare({ project, isSelected, onClick }) {
  return (
    <div 
      className={`relative overflow-hidden cursor-pointer transition-all duration-300
        ${isSelected ? 'scale-105 z-10' : ''}`}
      onClick={onClick}
    >
      {project.mediaType === "image" && (
        <img 
          src={project.mediaSrc}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h3 className="text-white font-medium text-xl">{project.title}</h3>
      </div>
    </div>
  );
}

function HomePage() {
  // Set default active category to "All Work"
  const [activeCategory, setActiveCategory] = useState("All Work");
  const projectsContainerRef = useRef(null);
  const mediumSquareSize = 300; // project square dimension in pixels

  // Calculate the active category index based on the full list.
  const activeIndex = categoriesList.findIndex((cat) => cat === activeCategory);
  // Assume each list item is 24px tall with 24px gap.
  const totalHeight = (2 * categoriesList.length - 1) * 24; // in px

  // Compute marker style for the selected category.
  const markerStyle =
    activeIndex >= 0
      ? {
          position: "fixed",
          left: "48px", // marker placed 48px from the left edge
          top: `calc(50% - ${totalHeight / 2}px + ${activeIndex * 48}px)`,
          width: "24px",
          height: "24px",
          transition: "top 0.5s ease", // smooth vertical transition
        }
      : {};

  // Filter projects based on active category.
  // If "All Work" is active, show all projects.
  const filteredProjects =
    activeCategory === "All Work"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <div className="min-h-screen ">

   
    {/* Animated marker for the selected category (only on md+ screens) */}
    {activeCategory && (
      <div
        style={markerStyle}
        className="hidden md:block bg-black dark:bg-white"
      />
    )}

    {/* Fixed sidebar with categories (hidden on small screens) */}
    <aside className="hidden md:block fixed left-[96px] top-1/2 transform -translate-y-1/2">
      <ul className="space-y-6 px-1">
        {categoriesList.map((cat) => (
          <li
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className=" menu-item text-left h-6"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>






   
      {/* Centered Projects Container */}
      <main className=" flex items-center justify-center p-6 mt-12 ">
        <div
          ref={projectsContainerRef}
          className=" h-screen flex items-center justify-center overflow-auto"
          style={{
            maxHeight:
              filteredProjects.length > 0
                ? filteredProjects.length * mediumSquareSize +
                  (filteredProjects.length - 1) * 24
                : mediumSquareSize,
          }}
        >
          <div className="flex flex-col gap-18">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectSquare
                  key={project.title}
                  project={project}
                  isSelected={false} // Placeholder for selection logic
                  onClick={() => {}}
                />
              ))
            ) : (
              <div
                className="flex items-center justify-center text-white"
                style={{
                  width: `${mediumSquareSize}px`,
                  height: `${mediumSquareSize}px`,
                }}
              >
           
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
