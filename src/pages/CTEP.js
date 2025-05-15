// CTEP.js
import React , { useEffect } from 'react';
import CustomizableCarousel from '../components/common/CustomizableCarousel';
import BackToProjects from '../components/common/BackToProjects';


const CTEPPage = () => {
  useEffect(() => {
     window.scrollTo(0, 0);
  },[]);

  // Carousel images
  const assemblyGIF = [
    "/projects/CTEP/images/Gif/Frame_00000.png",
    "/projects/CTEP/images/Gif/Frame_00001.png",
    "/projects/CTEP/images/Gif/Frame_00002.png",
    "/projects/CTEP/images/Gif/Frame_00003.png",
    "/projects/CTEP/images/Gif/Frame_00004.png",
    "/projects/CTEP/images/Gif/Frame_00005.png",
    "/projects/CTEP/images/Gif/Frame_00006.png",
    "/projects/CTEP/images/Gif/Frame_00007.png",
    "/projects/CTEP/images/Gif/Frame_00008.png",
    "/projects/CTEP/images/Gif/Frame_00009.png",
    "/projects/CTEP/images/Gif/Frame_00010.png",
    "/projects/CTEP/images/Gif/Frame_00011.png",
    "/projects/CTEP/images/Gif/Frame_00012.png",
    "/projects/CTEP/images/Gif/Frame_00013.png",
    "/projects/CTEP/images/Gif/Frame_00014.png",
    "/projects/CTEP/images/Gif/Frame_00015.png",
    "/projects/CTEP/images/Gif/Frame_00016.png",
    "/projects/CTEP/images/Gif/Frame_00017.png",
    "/projects/CTEP/images/Gif/Frame_00018.png",
    "/projects/CTEP/images/Gif/Frame_00019.png",
    "/projects/CTEP/images/Gif/Frame_00020.png",
    "/projects/CTEP/images/Gif/Frame_00021.png",
    "/projects/CTEP/images/Gif/Frame_00022.png",
    "/projects/CTEP/images/Gif/Frame_00023.png",
    "/projects/CTEP/images/Gif/Frame_00024.png",
  ];

  const carouselFacade = [
    "/projects/Cliff Youth Center/images/Facade diagram/1.jpg",
    "/projects/Cliff Youth Center/images/Facade diagram/2.jpg",
    "/projects/Cliff Youth Center/images/Facade diagram/3.jpg",
    "/projects/Cliff Youth Center/images/Facade diagram/4.jpg",
  ];

  const carouselColumn = [
    "/projects/Cliff Youth Center/images/Facade diagram/column1.jpg",
    "/projects/Cliff Youth Center/images/Facade diagram/column2.jpg",
    "/projects/Cliff Youth Center/images/Facade diagram/column3LIGHTEER .jpg",
    "/projects/Cliff Youth Center/images/Facade diagram/COLUMN4 LIGHTER.jpg",
  ];

  return (
    <div className=" px-6 lg:px-18 mt-18 ">
      <h1 className=" hidden">CTEP</h1>

      <img
        src="/projects/CTEP/images/ViewCapture20211227_131540.png"
        alt="CTEP-Cover"
        className="h-full lg:h-[calc(100vh-144px)] object-contain lg:object-contain w-full z-0  mb-18 lg:mb-32"
      />

      <div className="flex ml-0 mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Design and Formation
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
        <div className="mb-6">
          <p>
            The underutilized potential of an urban node that could be turned
            into an attraction viable site where pedestrian circulation is
            enhanced and the potential of the urban node could be realized into
            a social function in adjacency to the rainwater canal and the rocky
            cliff topography.
          </p>
          <p>
            The project was initiated to make use of that urban node by forming
            a public library and youth center to attract citizens for a social
            interactive environment. as well as responding to the water canal by
            providing a ramp that crosses over it providing a separate path for
            pedestrians rather than having their path with the cars’ road.
          </p>
        </div>
        <div className="w-full mx-auto">
          <CustomizableCarousel
            images={assemblyGIF}
            intervalTime={200}
            fadeTime={1}
            containerHeight="450px"
            containerHeightSm="150px" // Height for sm screens
            containerHeightMd="200px" // Height for md screens
            containerHeightLg="400px" // Height for sm screens
            containerHeightXl="600px" // Height for md screens
            enableDarkMode={false}
            objectFit="cover"
          />
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Facade and Louvers System
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
        <div className="grid grid-cols-1  ">
          <p>
          Role: Research, design, testing, and execution.
          Collaborators: None

          Customizable Tangible Experience Platform , a Three dimensional modular robotic system. CTEP is an instance of the rolling cube model of self reconfigurable modular robots.
          Each module consists of:
          - Skeleton
          - 12 Alnico5 magnets inside a coil 
          - 24 Flux directing Iron parts
          - A flexible PCB that operates as an enclosure in addition to being the circuit board at the same time.
          </p>
          <p>
            The project was initiated to make use of that urban node by forming
            a public library and youth center to attract citizens for a social
            interactive environment. as well as responding to the water canal by
            providing a ramp that crosses over it providing a separate path for
            pedestrians rather than having their path with the cars’ road.
          </p>

          <div className="relative bottom-2 w-full h-full mt-12 ">
            <img
              src="/projects/Cliff Youth Center/images/Louvers.png"
              alt="Louvers"
              className="object-contain z-0 w-full h-auto"
            />
            <img
              src="/projects/Cliff Youth Center/images/LouversLabels.png"
              alt="Louvers Labels"
              className="dark:invert absolute z-10 top-0 left-0 w-full h-auto"
            />
          </div>
        </div>

        <div className="relative bottom-0 w-full h-full mt-18 ">
          <img
            src="/projects/Cliff Youth Center/images/ArchSystem.png"
            alt="Architectural System"
            className="object-contain z-0 w-full h-auto"
          />
          <img
            src="/projects/Cliff Youth Center/images/ArchSystemLabels.png"
            alt="Architectural System Labels"
            className="dark:invert  absolute z-10 top-0 left-0 w-full h-auto"
          />
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Facade Geometry Making
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
        <div className=" grid grid-cols-1  ">
          <img
            src="/projects/Cliff Youth Center/images/Facade Making Diagram.png"
            alt="Louvers"
            className="object-contain dark:invert z-0 w-full h-auto"
          />

          <div className=" grid grid-cols-2  ">
            <div className="w-full mx-auto">
              <CustomizableCarousel
                images={carouselFacade}
                intervalTime={2500}
                fadeTime={1200}
                containerHeight="450px"
                containerHeightSm="150px" // Height for sm screens
                containerHeightMd="200px" // Height for md screens
                containerHeightLg="400px" // Height for sm screens
                containerHeightXl="400px" // Height for md screens
                enableDarkMode={true}
                objectFit="contain"
              />
            </div>
            <div className="w-full mx-auto">
              <CustomizableCarousel
                images={carouselColumn}
                intervalTime={2500}
                fadeTime={1200}
                containerHeight="450px"
                containerHeightSm="150px" // Height for sm screens
                containerHeightMd="200px" // Height for md screens
                containerHeightLg="400px" // Height for sm screens
                containerHeightXl="250px" // Height for md screens
                enableDarkMode={true}
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className=" flex justify-center w-auto h-screen ">
          <img
            src="/projects/Cliff Youth Center/images/Facade systemCNC Pattern.png"
            alt="Architectural System"
            className="flex justify-center items-center h-[calc(100vh-300px)] dark:invert object-contain   z-0 "
          />
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Louvers Angle Optimization{" "}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
        ​The optimized angles are chosen based on a genetic algorithm
        optimization process using Galapagos
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
        <div className=" grid grid-cols-1  ">
          <img
            src="/projects/Cliff Youth Center/images/Animated Graph.gif"
            alt="Animated Graph"
            className="w-full h-auto dark:invert"
          />

          <img
            src="/projects/Cliff Youth Center/images/Animated Mesh.gif"
            alt="Animated Mesh"
            className="w-full h-auto dark:invert"
          />
        </div>

        <div className=" flex justify-center w-auto h-screen ">
          <img
            src="/projects/Cliff Youth Center/images/Animated Parameters.gif"
            alt="Animated Parameters"
            className=" h-auto lg:h-[calc(100vh-144px)]  dark:invert"
          />
        </div>
      </div>

      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Architectural Systems Detailing{" "}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
        <img
          src="/projects/Cliff Youth Center/images/Better detail 2.jpg"
          alt="Detail 1"
          className="w-full h-auto dark:invert"
        />
        <img
          src="/projects/Cliff Youth Center/images/Better detail 1 .jpg"
          alt="Detail 2"
          className="w-full h-auto dark:invert"
        />
      </div>
      <div className="flex mb-6">
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Architectural Drawings{" "}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-18 ">
        <img
          src="/projects/Cliff Youth Center/images/last site plan.jpg"
          alt="Last Site Plan"
          className="lg:h-[calc(100vh-144px)] justify-center mx-auto my-18 w-auto h-auto dark:invert"
        />
        <img
          src="/projects/Cliff Youth Center/images/last plan.jpg"
          alt="Last Plan"
          className="md:w-1/2 w-full mx-auto my-18 h-auto dark:invert"
        />
        <img
          src="/projects/Cliff Youth Center/images/last section.jpg"
          alt="Last Section"
          className="md:w-1/2 w-full mx-auto my-18 h-auto dark:invert"
        />
        <img
          src="/projects/Cliff Youth Center/images/Image5_002.png"
          alt="Image5_002"
          className="lg:h-[calc(100vh-144px)] w-full h-auto  mb-18"
        />
      </div>
    </div>
  );
};
export default CTEPPage;
