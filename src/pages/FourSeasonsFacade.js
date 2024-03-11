import React, { useEffect } from "react";
import CustomizableCarousel from "../components/common/CustomizableCarousel";

const FourSeasonsFacadePage = () => {
  useEffect(() => {
     window.scrollTo(0, 0);
  },[]);

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
      <div className=" px-6 lg:px-18 lg:h-[calc(100vh-144px)] my-18 ">
        <h1 className=" hidden">FourSeasonsFacade</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 h-full z-0">
          <div className="flex items-center justify-center h-full lg:h-[calc(100vh-144px)] ">
            <img
              src="/projects/Four Seasons Facade System/images/1collected.jpg"
              alt="Exterior Architectural Render"
              className="dark:invert lg:h-[calc(100vh-244px)] object-contain lg:object-cover z-0 mb-18 lg:mb-32"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src="/projects/Four Seasons Facade System/images/2 collected.jpg"
              alt="Exterior Architectural Render"
              className="dark:invert lg:h-[calc(100vh-244px)] object-contain lg:object-cover z-0 mb-18 lg:mb-32"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src="/projects/Four Seasons Facade System/images/3collected.jpg"
              alt="Exterior Architectural Render"
              className="dark:invert lg:h-[calc(100vh-244px)] object-contain lg:object-cover z-0 mb-18 lg:mb-32"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src="/projects/Four Seasons Facade System/images/diagram 11-Photoshopped.png"
              alt="Exterior Architectural Render"
              className="dark:invert lg:h-[calc(100vh-244px)] object-contain lg:object-cover z-0 mb-18 lg:mb-32"
            />
          </div>
        </div>
      </div>

      <div className="flex mb-6 mt-18">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Geometries provided by Architect
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-18 mb-18">
        <div className=" grid grid-cols-1 mb-18">
          <div className="lg:h-32 grid grid-cols-1 ">
            <p className=" w-full mx-auto indent-8 mb-6">
              In addition to the primary surfces of the building and floor
              heights the architect provided 2D drawings of mullion types
              Parametric Mullion UDFs (User Defined Features) are made beased on
              mullion drawings
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/projects/Four Seasons Facade System/images/details to udfs.png"
              alt="Exterior Architectural Render"
              className="  object-contain lg:object-cover z-0 mb-18 "
            />
          </div>
        </div>
        <div className=" grid grid-cols-1 mb-18">
          <div className="lg:h-32 grid grid-cols-1 ">
            <p className=" w-full mx-auto indent-8 ">
              UDFs are adaptive to the slope angle of the facade
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="/projects/Four Seasons Facade System/images/Changing Mullion.png"
              alt="Exterior Architectural Render"
              className="  object-contain lg:object-cover z-0 mb-18 "
            />
          </div>
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Repanalization and primary panel variation study
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-18">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6 ">
          <p className="w-full mx-auto indent-8 ">
            An automated process takes in the primary geometry of the facades
            and panalize them providing two useful steps of the process:{" "}
            <br></br>
            <br></br>- Structured data that can be used for further processing
            and detailing<br></br>
            <br></br>- Primary analysis of the varaity of panels for the entire
            project which predicts the cost of the facade system
          </p>

          <div className="flex items-center justify-center h-full">
            <img
              src="/projects/Four Seasons Facade System/images/diagram 11-Photoshopped.png"
              alt="Exterior Architectural Render"
              className="dark:invert lg:h-[calc(40vh)] object-contain lg:object-cover z-0 mb-18 lg:mb-32"
            />
          </div>
        </div>
        <img
          src="/projects/Four Seasons Facade System/images/types highlight.png"
          loading="lazy"
          alt="form iterations"
          className="dark:invert object-contain object-center z-0"
        />
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Facade breakdown system
        </h2>
      </div>

      <div className="grid object-contain grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-12 mb-6 ">
        <p className="w-full mx-auto indent-8 mb-6">
          Breaking each Facade independently to its panels categories to be
          processed using their a category spesific process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-18">
        <div className="grid grid-cols-2  gap-6 mb-6 ">
          <p className="w-full mx-auto indent-8 ">
            Typical Panels Instantiation<br></br>
            <br></br>
            Required Inputs:<br></br>
            Panel Surface
          </p>

          <div className="flex items-center justify-center h-full">
            <div className="w-full mx-auto">
              <CustomizableCarousel
                images={Typical}
                intervalTime={2500}
                fadeTime={1200}
                containerHeight="450px"
                containerHeightSm="250px" // Height for sm screens
                containerHeightMd="200px" // Height for md screens
                containerHeightLg="300px" // Height for sm screens
                containerHeightXl="350px" // Height for md screens
                enableDarkMode={true}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  bg-white mb-6 ">
          <div className="flex justify-center items-center bg-white">
            <img
              src="/projects/Four Seasons Facade System/images/image.png"
              loading="lazy"
              alt="form iterations"
              className=" lg:h-[400px] object-contain object-center z-0"
            />
          </div>
          <div className="flex justify-center items-center bg-white">
            <img
              src="/projects/Four Seasons Facade System/images/typical example.png"
              loading="lazy"
              alt="form iterations"
              className=" lg:h-[400px]  object-contain object-center z-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-2  gap-6 mb-6 ">
          <p className="w-full mx-auto indent-8 ">
            Typical Corner Panels<br></br>
            <br></br>
            Required Inputs:<br></br>
            Panel Surface<br></br>
            Corner Type (inward, Outward)<br></br>
            Angle with Adjacent Surface
          </p>

          <div className="flex items-center justify-center h-full">
            <div className="w-full mx-auto">
              <CustomizableCarousel
                images={TypicalCorner}
                intervalTime={2500}
                fadeTime={1200}
                containerHeight="450px"
                containerHeightSm="250px" // Height for sm screens
                containerHeightMd="200px" // Height for md screens
                containerHeightLg="300px" // Height for sm screens
                containerHeightXl="350px" // Height for md screens
                enableDarkMode={true}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  bg-white  mb-6 ">
          <img
            src="/projects/Four Seasons Facade System/images/corner-PSed.png"
            loading="lazy"
            alt="form iterations"
            className=" lg:h-[400px] object-contain object-center z-0"
          />
        </div>
        <div className="grid grid-cols-2  gap-6 mb-6 ">
          <p className="w-full mx-auto indent-8 ">
            Non-Typical Panels:<br></br>
            <br></br>
            (Solved Using a special local solving algorithm discussed later)
            <br></br>
            Required Inputs:<br></br>
            Panel Surface<br></br>
            Close-by panel surfaces
          </p>

          <div className="flex items-center justify-center h-full">
            <div className="w-full mx-auto">
              <CustomizableCarousel
                images={NonTypical}
                intervalTime={2500}
                fadeTime={1200}
                containerHeight="450px"
                containerHeightSm="250px" // Height for sm screens
                containerHeightMd="200px" // Height for md screens
                containerHeightLg="300px" // Height for sm screens
                containerHeightXl="350px" // Height for md screens
                enableDarkMode={true}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center bg-white  mb-6 ">
          <div className="flex justify-center items-center bg-white">
            <img
              src="/projects/Four Seasons Facade System/images/nontypical example 2PSed.png"
              loading="lazy"
              alt="form iterations"
              className="lg:h-[400px] object-contain object-center z-0"
            />
          </div>
          <div className="flex justify-center items-center bg-white">
            <img
              src="/projects/Four Seasons Facade System/images/Non typical 1.png"
              loading="lazy"
              alt="form iterations"
              className="lg:h-[400px] object-contain  object-center z-0"
            />
          </div>
        </div>
      </div>

      <div className="flex ml-0 m-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Final Results of Assembled Components
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-32">
        <div className="grid grid-cols-2  gap-18  ">
          <p className="w-full mx-auto indent-8 ">
            The instantiated types are combined together into one facade
            assembly. <br></br> <br></br>
            The resulting geometries can be seen in the views below where
            different panels and different mullion types are matching each other
            accuratly to form a complete facade.
          </p>

          <div className="flex items-center justify-center h-full">
            <div className="flex justify-center items-center bg-white">
              <img
                src="/projects/Four Seasons Facade System/images/image (10)Photoshopped.png"
                loading="lazy"
                alt="form iterations"
                className="lg:h-[300px] object-cover  object-center z-0"
              />
            </div>
          </div>
          <div className="flex justify-center items-center bg-white">
            <img
              src="/projects/Four Seasons Facade System/images/WhatsApp Image 2020-10-15 at 14.38.45-Photoshopped.png"
              loading="lazy"
              alt="form iterations"
              className="lg:h-[300px] object-cover  object-center z-0"
            />
          </div>

          <div className="flex justify-center items-center bg-white">
            <img
              src="/projects/Four Seasons Facade System/images/image (15)-PSed.png"
              loading="lazy"
              alt="form iterations"
              className="lg:h-[300px] object-cover  object-center z-0"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/projects/Four Seasons Facade System/images/image (12).png"
            loading="lazy"
            alt="form iterations"
            className=" lg:h-[672px] object-cover  object-center z-0"
          />
        </div>
      </div>

      <div className="flex ml-0 m-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Renderings and Visualizations (Credited to Studio Libeskind)
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-18">
        <div className="grid grid-cols-2  gap-18  ">
          <div className="flex justify-center ">
            <img
              src="/projects/Four Seasons Facade System/images/nl-1-night-view.jpg"
              loading="lazy"
              alt="form iterations"
              className=" object-cover  object-center z-0"
            />
          </div>
          <div className="flex justify-center ">
            <img
              src="/projects/Four Seasons Facade System/images/el-3-up-close-view.jpg"
              loading="lazy"
              alt="form iterations"
              className=" object-cover  object-center z-0"
            />
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <img
            src="/projects/Four Seasons Facade System/images/AL-1-Beach-View.jpg"
            loading="lazy"
            alt="form iterations"
            className=" object-cover  object-center w-full h-auto z-0"
          />
        </div>
      </div>
      <div className="h-18"></div>
    </div>
  );
};

export default FourSeasonsFacadePage;
