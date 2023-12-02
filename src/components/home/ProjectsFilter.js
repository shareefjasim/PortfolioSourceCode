// ProjectsFilter.js
import React from 'react';

const ProjectsFilter = ({ categories, currentFilter, onFilterChange, className }) => {
  return (
    <div className={`filter-container ${className}`}>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`filter-button ${currentFilter === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
