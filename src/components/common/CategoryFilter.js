// /src/components/CategoryFilter.js
import React, { useState, useEffect } from "react";

function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFilter(window.scrollY >= (window.innerHeight - 500));
    };
    window.addEventListener("scroll", handleScroll);
    // initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`
      sticky top-0 z-10
      flex justify-center items-center
      w-full
      transition-all duration-500 ease-in-out
      ${showFilter ? 'opacity-100' : 'opacity-0'}
      h-18
    `}>
      {/* Blurred background */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-xl"></div>
      
      {/* Content above the blur */}
      <div className="relative z-10 flex flex-wrap gap-x-8 gap-y-3 justify-center px-6 py-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`
              text-sm transition-all duration-300
              hover:opacity-100
              ${cat === activeCategory ? 
                'font-bold opacity-100' : 
                'font-normal opacity-60 hover:opacity-80'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}

export default CategoryFilter;