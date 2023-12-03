// FilterButton.js
import React, { useState } from 'react';
import filterIcon from '../../assets/icons/Filter Icon.svg';

const FilterButton = ({ categories, currentFilter, onFilterChange }) => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <>
    
      <img 
        src={filterIcon} 
        alt="Filter" 
        className="sticky z-20 filter-button cursor-hover" 
        onClick={toggleCategories}
      />
      {showCategories && (
        <div className="filter-categories">
          {categories.map(category => (
            <span
              key={category}
              className={`filter-category ${currentFilter === category ? 'active' : ''}`}
              onClick={() => onFilterChange(category)}
            >
              {category}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterButton;
