// CowesWeekPavilionPage.js
import React, { useEffect } from "react";
import CustomizableCarousel from "../components/common/CustomizableCarousel";

const CowesWeekPavilionPage = () => {
  //   useEffect(() => {
  //      window.scrollTo(0, 0);
  //   },[]);

  const Form = [
    "/projects/Cowes Week Pavilion/images/1 1.png",
    "/projects/Cowes Week Pavilion/images/2 1.png",
    "/projects/Cowes Week Pavilion/images/3 1.png",
    "/projects/Cowes Week Pavilion/images/4 1.png",
    "/projects/Cowes Week Pavilion/images/5 1.png",
    "/projects/Cowes Week Pavilion/images/6 1.png",
  ];

  const Robot = [
    "/projects/Cowes Week Pavilion/images/robot 1.png",
    "/projects/Cowes Week Pavilion/images/robot 2.png",
  ];
  return (
    <div className=" px-6 lg:px-18 mt-18 ">
      <h1 className=" hidden">Cowes Week Pavilion</h1>

      {/* <div className="flex flex-col min-h-screen z-0">
        <img
          src="/projects/Cowes Week Pavilion/images/renders/image1.png"
          alt="Exterior Architectural Render"
          className="  lg:h-[calc(100vh-144px)] object-contain lg:object-cover w-full z-0  mb-18        lg:mb-32 "
        />
      </div> */}

      <div className="flex mb-6 mt-32">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Geometry Inspiration
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-18 mb-32">       
          <div className="	 h-full">
              <CustomizableCarousel
                images={Form}
                intervalTime={2500}
                fadeTime={1200}
                containerHeight="250px"
                containerHeightSm="150px" // Height for sm screens
                containerHeightMd="200px" // Height for md screens
                containerHeightLg="200px" // Height for sm screens
                containerHeightXl="250px" // Height for md screens
                enableDarkMode={false}
                objectFit="contain"
              />
          </div>
        <div className=" grid grid-cols-1">
          <div className="lg:h-32 grid grid-cols-1 ">
            <p className=" w-full mx-auto indent-8 mb-6">
              The design provides a social pavilion for the Cowes Week sailing
              regattas, One of the oldest and largest annual sailing regattas of
              its kind in the world and an iconic feature of the British
              sporting calendar. Cowes Week takes place at Solent with 8,000
              competitors, from world champion professionals to amateurs, in
              addition to many more Spectators. For whom, the pavilion design is
              to provide an open shelter for enjoying the race and other events.
              <br></br>
              <br></br>
              The site is chosen on the northern shore of the Isle of Wight for
              the wide view and easy accessibility. From the site, spectators
              can see the sailors approaching the end line of the race.
            </p>
          </div>
        </div>
      </div>







      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-5 h-6 ">
        Robotic Tension Cables Winding
        </h2>
      </div>

      <div class="flex   gap-6 mb-18">
        <div class="w-full lg:w-2/5">
        <div className="grid grid-cols-1 mb-0 ">
          <div className="flex items-center justify-center h-full">
            <div className="w-full mx-auto">
              <CustomizableCarousel
                images={Robot}
                intervalTime={2500}
                fadeTime={1200}
                containerHeight="250px"
                containerHeightSm="150px" // Height for sm screens
                containerHeightMd="200px" // Height for md screens
                containerHeightLg="200px" // Height for sm screens
                containerHeightXl="250px" // Height for md screens
                enableDarkMode={false}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        </div>

        <div class="flex flex-col w-full lg:w-3/5  ">
          <img
            src="/projects/Cowes Week Pavilion/images/tensile wheels patternTrim.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left  md:mt-0  h-full"
          />
        </div>
      </div>












      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-5 h-6 ">
          Tensile Membrane Making
        </h2>
      </div>

      <div class="flex   gap-6 mb-18">
        <div class="w-full lg:w-1/3">
          <p className=" w-full mx-auto indent-8 mb-6">
            Each membrane goes through a process of stretching and relaxation
            with Kangaroo Physics and is then extended to account for the cable
            hosting folds.
          </p>
        </div>

        <div class="flex flex-col w-full lg:w-2/3  ">
          <img
            src="/projects/Cowes Week Pavilion/images/tensile membrane geeration steps.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left  md:mt-0  h-full"
          />
          <img
            src="/projects/Cowes Week Pavilion/images/tensile membrane pattern.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left  mt-12  h-full"
          />
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-5 h-6 ">
          Joint Detail
        </h2>
      </div>

      <div class="flex   gap-6 mb-18">
        <div class="w-full lg:w-1/3">
          <p className=" w-full mx-auto indent-8 mb-6">


          </p>
        </div>

        <div class="flex flex-col w-full lg:w-2/3  ">
          <img
            src="/projects/Cowes Week Pavilion/images/tensile detail 8.png"
            alt="Exterior Architectural Render"
            className="object-contain object-left  md:mt-0  h-full"
          />
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Conceptual Drawings
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="grid grid-cols-1  mb-6 ">
          <img
            src="/projects/Cowes Week Pavilion/images/p scaled 500Trim.jpg"
            loading="lazy"
            alt="form iterations"
            className=" w-full object-contain dark:invert object-center z-0"
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-6 ">
          <div>
            <img
              src="/projects/Cowes Week Pavilion/images/e 1 scaled 250Trim.jpg"
              loading="lazy"
              alt="form iterations"
              className="w-full object-contain dark:invert object-center z-0"
            />
          </div>
        </div>
      </div>
      <img
        src="/projects/Cowes Week Pavilion/images/e 2 scaled.jpg"
        loading="lazy"
        alt="form iterations"
        className=" w-full object-contain dark:invert object-center mb-32 z-0"
      />

      <div className="flex ml-0 m-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Renderings
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-18">
        <div className="flex justify-center items-center  ">
          <img
            src="/projects/Cowes Week Pavilion/images/renders/Image9.png"
            loading="lazy"
            alt="form iterations"
            className=" object-cover  object-center w-full h-auto z-0"
          />
        </div>
        <div className="flex justify-center items-center  ">
          <img
            src="/projects/Cowes Week Pavilion/images/renders/Image11.png"
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

export default CowesWeekPavilionPage;
