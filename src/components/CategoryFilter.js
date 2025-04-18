// /src/components/CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  const activeIndex = categories.findIndex((cat) => cat === activeCategory);
  // Assume each list item is 24px tall with 24px gap.
  const totalHeight = (2 * categories.length - 1) * 24;
  const markerStyle =
    activeIndex >= 0
      ? {
          position: "fixed",
          left: "24px", // marker positioned 48px from the left edge
          top: `calc(50% - ${totalHeight / 2}px + ${activeIndex * 48}px + ${1}px)`,
          width: "24px",
          height: "24px",
          transition: "top 0.5s ease",
        }
      : {};

  return (
    <>
      {activeCategory && (
        <div style={markerStyle} className="hidden md:block bg-black dark:bg-white" />
      )}
      <aside className="hidden md:block fixed left-[48px] top-1/2 transform -translate-y-1/2">
        <ul className="space-y-6 px-1">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className=" text-left h-6 menu-item "
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default CategoryFilter;
