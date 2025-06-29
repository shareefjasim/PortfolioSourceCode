// FilterButton.js
import React, { useState, useEffect } from "react";
import filterIcon from "../../assets/icons/Filter Icon.svg";

const FilterButton = ({ categories, currentFilter, onFilterChange }) => {
  // Initialize showCategories based on window width
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);

    if (!showCategories) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
    }
  };
  // Handle cleanup on component unmount
  useEffect(() => {
    return () => {
      // Make sure to enable scrolling when the component is unmounted
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
{/* Large Screens Filter Menu */}
<div className={`hidden lg:flex sticky top-6 justify-center z-30`}>
      <div className="rounded-none flex flex-row h-6 cursor-hover z-30">
        {/* Categories mapping */}
        {categories.map((category) => (
          <span
            key={category}
            className={`bg-black dark:bg-white z-30 menu-item px-3 text-m flex items-center text-white hover:text-white dark:text-black ${
              currentFilter === category ? " " : " "
            }`}
            onClick={() => onFilterChange(category)}
          >
            {currentFilter === category ? `| ${category} |` : category}
          </span>
        ))}
      </div>
    </div>
  </>
);
};

export default FilterButton;
