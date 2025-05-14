// /src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import AnimatedSquares from '../components/common/AnimatedSquares';
import CategoryFilter from "../components/common/CategoryFilter";
import ProjectBoard from "../components/common/ProjectBoard";
import projectsData from "../components/projects/projectsData";



// Dynamically extract unique categories from projectsData.
const uniqueCategories = Array.from(
  new Set(projectsData.flatMap((project) => project.categories))
);
const categoriesList = ["All Projects", ...uniqueCategories];

function HomePage() {
  // Initialize state from localStorage if available
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem('homePageFilter') || "All Projects";
  });

  // Save filter selection to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('homePageFilter', activeCategory);
  }, [activeCategory]);

  // Save scroll position when leaving the page
  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem('homePageScrollPosition', window.scrollY.toString());
    };

    // Save position before navigating away
    window.addEventListener('beforeunload', saveScrollPosition);
    
    return () => {
      saveScrollPosition();
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  // Restore scroll position when returning
  useEffect(() => {
    const savedPosition = localStorage.getItem('homePageScrollPosition');
    
    if (savedPosition) {
      // Use a slight delay to ensure content has loaded
      const timer = setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: 'auto' // Use 'auto' not 'smooth' to prevent visible scrolling
        });
        
        // Double-check position after a bit longer for any lazy-loaded content
        setTimeout(() => {
          if (Math.abs(window.scrollY - parseInt(savedPosition, 10)) > 5) {
            window.scrollTo({
              top: parseInt(savedPosition, 10),
              behavior: 'auto'
            });
          }
        }, 100);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsData
      : projectsData.filter((proj) => proj.categories.includes(activeCategory));

  const handleSquareClick = (node) => {
    console.log("Square clicked:", node.project.title);
  };

  // Set filter handler that updates both state and localStorage
  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section
  className="min-h-screen
             grid grid-cols-1 lg:grid-cols-[1fr_2fr]
             items-center
             px-[216px]
             gap-12
             bg-white dark:bg-black"
>
  {/* 1: Name & Tagline */}
  <div className="text-center lg:text-left space-y-4">
    <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white">
      Hi, I’m Shareef
    </h1>
    <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
      An Interdisciplinary Technologist & Designer.
    </p>
  </div>

  {/* 2: Empty spacer */}
  {/* <div /> */}

  {/* 3: Your Photo / Abstract */}
  <div className="relative  lg:w-200 lg:h-80 ">
  <AnimatedSquares
    count={18}
    minSize={4}
    maxSize={160}
    drift={250}
    minDuration={6}
    maxDuration={16}
  />
</div>
</section>


      {/* Category filter & Projects */}
      <CategoryFilter
        categories={categoriesList}
        activeCategory={activeCategory}
        onSelectCategory={handleFilterChange}
      />
      <ProjectBoard
        projects={filteredProjects}
        selectedCategory={activeCategory}
        onSquareClick={handleSquareClick}
      />
    </div>
  );
}

export default HomePage;
