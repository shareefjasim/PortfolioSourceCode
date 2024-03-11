// Algorithm for Local Facade Geometries.js
import React, { useEffect } from "react";
import CustomizableCarousel from "../components/common/CustomizableCarousel";

const AlgorithmforLocalFacadeGeometriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" px-6 lg:px-18 mt-18 ">
      <div className="hidden">
        <h1>Ltttfocal Facade Geometries</h1>
      </div>
      <div className="mb-18 h-[calc(100vh-144px)] grid grid-cols-2 gap-18 ">
        <div className="flex items-center justify-center h-[40vh]">
          <img
            src="/projects/GENx Facade Solution/images/Non typical 11.png"
            alt="Image 45"
            className="w-auto h-full"
          />
        </div>

        <div className="flex items-center justify-center h-[40vh]">
          <img
            src="/projects/GENx Facade Solution/images/Non typical 3.png"
            alt="Image 37"
            className="w-auto h-full"
          />
        </div>
        <div className="mb-18 flex items-center justify-center h-[40vh]">
          <img
            src="/projects/GENx Facade Solution/images/Non typical 4.png"
            alt="Image 45"
            className="w-auto h-full"
          />
        </div>

        <div className="mb-18 flex items-center justify-center h-[calc(50vh-144px)]">
          <img
            src="/projects/GENx Facade Solution/images/Non typical 1.png"
            alt="Image 37"
            className="w-auto h-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mx-18 ">
          <img
            src="/projects/GENx Facade Solution/images/portfolio pages7.png"
            alt="Image 37"
            className="dark:invert w-auto h-full"
          />
        </div>
        <div className="flex items-center justify-center mx-18">
          <img
            src="/projects/GENx Facade Solution/images/portfolio pages8.png"
            alt="Image 37"
            className="dark:invert w-auto h-full"
          />
        </div>
    </div>
  );
};

export default AlgorithmforLocalFacadeGeometriesPage;
