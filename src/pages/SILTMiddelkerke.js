import React, { useEffect } from "react";
import CustomizableCarousel from "../components/common/CustomizableCarousel";

const SILTMiddelkerkePage = () => {
  //   useEffect(() => {
  //      window.scrollTo(0, 0);
  //   },[]);

  const Typical = [
    "/projects/Four Seasons Facade System/images/11b.jpg",
    "/projects/Four Seasons Facade System/images/22b.jpg",
  ];

  const TypicalCorner = [
    "/projects/Four Seasons Facade System/images/11b.jpg",
    "/projects/Four Seasons Facade System/images/33b.jpg",
  ];

  const NonTypical = [
    "/projects/Four Seasons Facade System/images/11b.jpg",
    "/projects/Four Seasons Facade System/images/441b.jpg",
  ];

  return (
    <div className=" px-6 lg:px-18 mt-18 ">
      <h1 className=" hidden">SILT Middelkerke</h1>

      <div className="flex flex-col md:min-h-screen z-0">
        <img
          src="/projects/SILTMiddelkerke/images/Frame_0.png"
          alt="Exterior Architectural Render"
          className="  lg:h-[calc(100vh-144px)] object-contain lg:object-cover w-full z-0  md:mb-18        lg:mb-32 "
        />
      </div>

      <div className="flex mb-6 mt-18">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Input Driving Geometry
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 md:gap-18 md:mb-18">
        <div className=" grid grid-cols-1">
          <div className="lg:h-32 grid grid-cols-1 ">
            <p className=" w-full mx-auto indent-8 md:mb-6">
            The geometry needed to be optiomized for a very tight tolerances
             and for reducing unique parts by applying symmetry wherever it is
              possible. The requirment was that the process would output a
               series of Cadwork readable geometries that include multiple
                attribute that the Cadwork API can translate to make the
                 geometries as native as the geometries made in Cadwork itself
                  including all of the assemblies and sub-assemblies heirarchy. 
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mb-18 ">
          <div className="lg:grid lg:grid-cols-3  ">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/projects/SILTMiddelkerke/images/MasterSrf.png"
                alt="Exterior Architectural Render"
                className="object-contain lg:object-contain mb-2 "
              />
              <p className="text-center  ">Master Surface</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/projects/SILTMiddelkerke/images/SymmetryPlanes.png"
                alt="Exterior Architectural Render"
                className="object-contain lg:object-cover mt-12 md:mt-0 mb-2"
              />
              <p className="text-center">Symmetry Planes</p>
            </div>
            <div className="flex flex-col items-center  justify-center">
              <img
                src="/projects/SILTMiddelkerke/images/InitialNodes.png"
                alt="Exterior Architectural Render"
                className="object-contain lg:object-cover mt-12 md:mt-0 mb-2"
              />
              <p className="text-center">Initial Nodes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-5 h-6 ">
          Provided Details
        </h2>
      </div>

      <div class="flex  h-[calc(100vh-200px)] md:h-[calc(100vh-200px)]  gap-0 mb-18">
        <div class="w-1/3 lg:w-1/2">
          <img
            src="/projects/SILTMiddelkerke/images/InitialGrid.png"
            alt="Exterior Architectural Render"
            className="object-cover  object-right lg:object-contain h-full z-0 mb-18"
          />
        </div>

        <div class="flex flex-col w-1/3 lg:w-1/4 h-[calc(100vh-184px)] ">
          <img
            src="/projects/SILTMiddelkerke/images/D07-b.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left  md:mt-0  h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D05-c.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left md:mt-0  h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D04.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left  lg:mt-0 h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D03-d.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D02.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left  h-1/5"
          />
        </div>

        <div class="flex flex-col w-1/3 lg:w-1/4 h-[calc(100vh-184px)]">
          <img
            src="/projects/SILTMiddelkerke/images/D08-b.png"
            alt="Exterior Architectural Render"
            className="object-contain    h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D08.png"
            alt="Exterior Architectural Render"
            className="object-contain  md:mt-0  h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D05.png"
            alt="Exterior Architectural Render"
            className="object-contain   md:mt-0 h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D03-c.png"
            alt="Exterior Architectural Render"
            className="object-contain    h-1/5"
          />
          <img
            src="/projects/SILTMiddelkerke/images/D03-A.png"
            alt="Exterior Architectural Render"
            className="object-contain  md:mt-0  h-1/5"
          />
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Object Attributes
        </h2>
      </div>

      <div className="grid object-contain grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-12 mb-6 ">
        <p className="w-full mx-auto indent-8 mb-6">
          Geometry attributes are attached to each object to use the process of streamlining rhino objects 
          to Cadwork to proceed with timber and steel manufacturing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-18">
        <div className="grid grid-cols-1  mb-6 ">
          <img
            src="/projects/SILTMiddelkerke/images/ForTimberAttributes.png"
            loading="lazy"
            alt="form iterations"
            className=" lg:h-[400px] object-contain object-center z-0"
          />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 mb-6 ">
          <img
            src="/projects/SILTMiddelkerke/images/AttributesTimber.PNG"
            loading="lazy"
            alt="form iterations"
            className=" lg:h-[400px] object-contain dark:invert object-center z-0"
          />
        </div>

        <div className="grid grid-cols-1  mb-6 ">
          <img
            src="/projects/SILTMiddelkerke/images/ForSteelAttributes.png"
            loading="lazy"
            alt="form iterations"
            className=" lg:h-[400px] object-contain object-center z-0"
          />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 mb-6 ">
          <img
            src="/projects/SILTMiddelkerke/images/AttributesSteel.PNG"
            loading="lazy"
            alt="form iterations"
            className=" lg:h-[400px] object-contain dark:invert object-center z-0"
          />
        </div>


       
       
       
      </div>

      <div className="flex ml-0 m-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Final Results of Assembled Components
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-32">
        <div className="grid grid-cols-2  gap-18  ">
        <div className="flex items-center justify-center h-full">
            <div className="flex justify-center items-center ">
              <img
                src="/projects/SILTMiddelkerke/images/Output1.png"
                loading="lazy"
                alt="form iterations"
                className="lg:h-[300px] object-cover  object-center z-0"
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-full">
            <div className="flex justify-center items-center ">
              <img
                src="/projects/SILTMiddelkerke/images/Output2.png"
                loading="lazy"
                alt="form iterations"
                className="lg:h-[300px] object-cover  object-center z-0"
              />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <img
                src="/projects/SILTMiddelkerke/images/Output3.png"
                loading="lazy"
              alt="form iterations"
              className="lg:h-[300px] object-cover  object-center z-0"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
                src="/projects/SILTMiddelkerke/images/Output4.png"
                loading="lazy"
              alt="form iterations"
              className="lg:h-[300px] object-cover  object-center z-0"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
                src="/projects/SILTMiddelkerke/images/Output6.png"
                loading="lazy"
              alt="form iterations"
              className="lg:h-[300px] object-cover  object-center z-0"
            />
          </div>

          <div className="flex justify-center items-center ">
            <img
                src="/projects/SILTMiddelkerke/images/Output7.png"
                loading="lazy"
              alt="form iterations"
              className="lg:h-[300px] object-cover  object-center z-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-1  gap-18  ">
                    <img
                src="/projects/SILTMiddelkerke/images/Output8.png"
                loading="lazy"
            alt="form iterations"
            className=" lg:h-[672px] object-cover  object-center z-0"
          />
               <img
                src="/projects/SILTMiddelkerke/images/Output9.png"
                loading="lazy"
            alt="form iterations"
            className=" lg:h-[672px] object-cover  object-center z-0"
          />
        </div>
        
      </div>

      <div className="flex ml-0 m-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
         Construction and Completed Images (Credited to Studio ZJA)
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-18">
      <div className="flex justify-center items-center  ">
          <img
                src="/projects/SILTMiddelkerke/images/Construction1.png"
                loading="lazy"
            alt="form iterations"
            className=" object-cover  object-center w-full h-auto z-0"
          />
        </div>
        <div className="flex justify-center items-center  ">
          <img
                src="/projects/SILTMiddelkerke/images/Construction3.png"
                loading="lazy"
            alt="form iterations"
            className=" object-cover  object-center  z-0"
          />
        </div>
        <div className="flex justify-center items-center  ">
          <img
                src="/projects/SILTMiddelkerke/images/Built1.png"
                loading="lazy"
            alt="form iterations"
            className=" object-cover  object-center w-full h-auto z-0"
          />
        </div>
        <div className="flex justify-center items-center  ">
          <img
                src="/projects/SILTMiddelkerke/images/Built2.png"
                loading="lazy"
            alt="form iterations"
            className=" object-cover  object-center  z-0"
          />
        </div>
      </div>
      <div className="h-18"></div>
    </div>
  );
};

export default SILTMiddelkerkePage;
