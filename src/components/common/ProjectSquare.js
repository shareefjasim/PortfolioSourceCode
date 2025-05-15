// /src/components/ProjectSquare.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import GLTFViewer from "../common/GLTFViewer";  // adjust path if needed

const ProjectSquare = ({ project, isSelected, onClick }) => {
  const navigate = useNavigate();
  const {
    mediaType,
    mediaSrc,
    invert,
    title,
    description,
    cameraType,
    cameraPosition,
    cameraLookAt,
    ambientIntensity,
    directionalLightPosition,
    directionalLightTarget,
    directionalLightIntensity,
    allowPan,
    targetUrl,
  } = project;

  // Handle left-click navigation and custom click logic
  const handleClick = (e) => {
    // only on left mouse button
    if (e.button === 0 && targetUrl) {
      navigate(targetUrl);
    }
    if (onClick) onClick(e);
  };

  

  // Prevent default browser context menu so right-drag works in the canvas
  const handleContextMenu = (e) => e.preventDefault();

  const renderMedia = () => {
    if (mediaType === "3dmodel") {
      return (
        <div className="absolute inset-0  dark:bg-white">
          <GLTFViewer
            src={mediaSrc}
            cameraType={cameraType}
            cameraPosition={cameraPosition}
            cameraLookAt={cameraLookAt}
            ambientIntensity={ambientIntensity}
            directionalLightPosition={directionalLightPosition}
            directionalLightTarget={directionalLightTarget}
            directionalLightIntensity={directionalLightIntensity}
            allowPan={allowPan}
          />
        </div>
      );
    }

     // static image
     if (mediaType === "image" && mediaSrc) {
      return (
        <div className="absolute  inset-0 flex items-center justify-center ">
          <img
            src={mediaSrc}
            alt={title}
            className={`w-[80%] h-[80%] object-contain ${invert ? 'dark:invert-0' : ''}`}
          />
        </div>
      );
    }

    // animated gif
    if (mediaType === "gif" && mediaSrc) {
      return (
        <div className="absolute inset-0 flex items-center  justify-center bg-black dark:bg-white">
          <img
            src={mediaSrc}
            alt={`${title} animation`}
            className="w-[80%] h-[80%] object-contain "
          />
        </div>
      );
    }

    return null;
  };

  return (
    // Attach both click and contextmenu handlers to the container
    <div
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      className={`relative w-full aspect-square flex items-center justify-center transition-transform duration-300 ease-in-out  border bg-gray 
        cursor-none project-link
        ${
        isSelected ? "border-bg-red" : ""
      }`}
    >
      {renderMedia()}

      {/* Title overlay */}
      <div className="absolute inset-0 flex items-end justify-center transition-opacity pointer-events-none">
        <span className="text-black text-center text-sm font-medium p-1">
          {title}
          {description && (
            <span className="block text-xs mt-0 text-black opacity-80">{description}</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProjectSquare;
