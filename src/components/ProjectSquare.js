// /src/components/ProjectSquare.js
import React from "react";
import { Link, NavLink } from 'react-router-dom';

const ProjectSquare = ({ project, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full aspect-square flex transition-transform duration-300 ease-in-out border-3 ${
        isSelected ? "bg-black" : "bg-white border-black"
      }`}
    >
      {project.mediaType === "image" && project.mediaSrc && (
        <div className="absolute inset-0 ">
          <img 
            src={project.mediaSrc} 
            alt={project.title}
            className={`w-full aspect-square object-contain ${project.invert ? 'dark:invert' : ''}`}
          />
        </div>
      )}
      
      <div className="absolute inset-0 flex items-end justify-center border hover:bg-opacity-50 transition-opacity">
        <span className="text-white text-center font-medium p-4">
          {project.title}
          {project.description && (
            <span className="block text-sm mt-2 opacity-80">{project.description}</span>
          )}
        </span>
      </div>
      
      {project.targetUrl && (
        <Link
          to={project.targetUrl} 
          className="absolute inset-0 z-10"
          aria-label={`View ${project.title} project`}
        />
        
      )}
    </div>
  );
};

export default ProjectSquare;
