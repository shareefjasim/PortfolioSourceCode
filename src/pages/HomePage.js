// /src/pages/HomePage.js
import React, { useState } from "react";
import projectsData from "../components/projects/projectsData";
import CategoryFilter from "../components/CategoryFilter";
import ProjectBoard from "../components/ProjectBoard";
import Menu from "../components/Menu";

// Dynamically extract unique categories from projectsData.
const uniqueCategories = Array.from(
  new Set(projectsData.flatMap((project) => project.categories))
);
const categoriesList = ["All Work", ...uniqueCategories];

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredProjects =
    activeCategory === "All Work"
      ? projectsData
      : projectsData.filter((proj) => proj.categories.includes(activeCategory));

  const handleSquareClick = (node) => {
    console.log("Square clicked:", node.project.title);
    // Add additional logic if you want to enlarge the square or navigate
  };

  return (
    <div className="min-h-screen relative">
      <CategoryFilter
        categories={categoriesList}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
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
