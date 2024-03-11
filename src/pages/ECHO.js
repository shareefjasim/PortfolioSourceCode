import React , { useEffect } from 'react';
import CustomizableCarousel from '../components/common/CustomizableCarousel';

const EchoPage = () => {


  useEffect(() => {
     window.scrollTo(0, 0);
  },[]);

  const images = [
    "/projects/ECHO/images/1st diag Pothoshoped.png",
    "/projects/ECHO/images/2nd diag Photoshoped.png",
    "/projects/ECHO/images/3rd diag photoshoped.png",
    "/projects/ECHO/images/4th diag photoshoped.png"
  ];
  
  const echoFormingImages = [
    "/projects/ECHO/images/ECHO Forming 1.png",
    "/projects/ECHO/images/ECHO Forming 2.png",
    "/projects/ECHO/images/ECHO Forming 3.png",
    "/projects/ECHO/images/ECHO Forming 4.png",
    "/projects/ECHO/images/ECHO Forming 5.png"
  ];

  const blockAImages = [
    "/projects/ECHO/images/12.1.png",
    "/projects/ECHO/images/13.4.png",
    "/projects/ECHO/images/14.png",
  ]

  const blockBImages = [
    "/projects/ECHO/images/22.png",
    "/projects/ECHO/images/23.png",
    "/projects/ECHO/images/24.png",
  ]

  const blockAExtensionImages = [
    "/projects/ECHO/images/32.png",
    "/projects/ECHO/images/33.png",
    "/projects/ECHO/images/34.png",
  ]

  const blockBExtensionImages = [
    "/projects/ECHO/images/42.png",
    "/projects/ECHO/images/43.png",
    "/projects/ECHO/images/44.png",
  ]

  const envAnalysis = [
    "/projects/ECHO/images/DirectSunHours.png",
    "/projects/ECHO/images/IncidentRadiation.png",
  ]


  return (

    
    
    <div className=" px-6 lg:px-18 mt-18 " >
      <h1 className=" hidden" >ECHO</h1>



      <div className="flex flex-col min-h-screen z-0">
        <img src="/projects/ECHO/images/r12.png" alt="Exterior Architectural Render" className="  lg:h-[calc(100vh-144px)] object-contain lg:object-cover w-full z-0  mb-18        lg:mb-32 " />

        
        <div className="flex ml-0" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Architectural System
        </h2>
      </div>

        <div className="flex w-full h-full  justify-center mt-18 mb-18">
          <img src="/projects/ECHO/images/ArchSysForLabels.png" alt="First Image" className=" object-contain z-0" />
          <img src="/projects/ECHO/images/ArchSysLabels.png" alt="Second Image" className="dark:invert  px-6 lg:px-18 absolute z-10" />
        </div>


        <div className="flex ml-0 mb-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Design and Formation
        </h2>
      </div>


        <div className=" grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
          <p className=" w-full mx-auto indent-8"> 
          Designed to protect the cultural heritage and natural environment of Sinop, 
          Turkey, ECHO is situated near the historical castle ruins and along 
          the northern wave breaker. Chosen for its proximity to the Sinop Castle 
          and the Black Sea, the site is significant for its environmental and historical value.<br /><br />

Turkey is home to 163 endangered marine species, including 62 
fish species and 11 amphibian species. The project's goal is 
to support these endangered species through a threefold 
approach: An Educational Institute offering hands-on learning in 
sustainable marine ecology, a Rehabilitation Center for rescuing endangered animals,
  and an Aquarium that raises public awareness and generates funding for conservation efforts.
          </p>

          <div className="w-full mx-auto">
            <CustomizableCarousel 
              images={images} 
              intervalTime={2500} 
              fadeTime={1200} 
              containerHeight="450px"
              containerHeightSm="150px" // Height for sm screens
              containerHeightMd="200px" // Height for md screens
              containerHeightLg="400px" // Height for sm screens
              containerHeightXl="400px" // Height for md screens
              enableDarkMode={false}
              objectFit="cover"
            />
          </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-18">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
            <p className="w-full mx-auto indent-8 "> 
              Castel Geometry Manipulation
              Planarity Algorithm: keeps the planarity of all surfaces 
              while randomizing them to create variations of the collapsing castle geometry.
            </p>

            <div className="w-full mx-auto">
              <CustomizableCarousel 
                images={echoFormingImages} 
                intervalTime={3000}
                fadeTime={1500}
                containerHeight="250px" // Adjust as needed
                containerHeightSm="150px"
                containerHeightMd="200px"
                containerHeightLg="250px"
                containerHeightXl="250px"
                enableDarkMode={true}
                objectFit="containr" // or "contain" based on your preference
              />
            </div>
          </div>
          <img src="/projects/ECHO/images/iterationas.png" loading="lazy" alt="form iterations" className="dark:invert object-contain object-center z-0"/>


          </div>
     
      <div className="flex ml-0" >
      <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
          Fenestration Extraction Process
        </h2>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-0 ">
        <img src="/projects/ECHO/images/ABBlocks.png" loading="lazy" alt="form iterations" className="dark:invert object-contain object-center z-0"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
        <div className="grid object-contain grid-cols-2 md:grid-cols-2 gap-6 mb-6 ">
          <div className=" object-contain "> {/* Adjust the width here */}
          <CustomizableCarousel 
            images={blockAImages} 
            intervalTime={3000} 
            fadeTime={1500} 
            containerHeight="300px"
            containerHeightSm="150px" // Height for sm screens
            containerHeightMd="200px" // Height for md screens
            containerHeightLg="300px" // Height for sm screens
            containerHeightXl="300px" // Height for md screens
            enableDarkMode={true}
            objectFit="contain"
          />
          </div>
          <div className="w-full md:w-3/4 lg:w-full mx-auto"> {/* Adjust the width here */}
          <CustomizableCarousel 
            images={blockBImages} 
            intervalTime={3000} 
            fadeTime={1500} 
            containerHeight="300px"
            containerHeightSm="150px" // Height for sm screens
            containerHeightMd="200px" // Height for md screens
            containerHeightLg="300px" // Height for sm screens
            containerHeightXl="300px" // Height for md screens
            enableDarkMode={true}
            objectFit="contain"
          />
          </div>
          <div className="w-full md:w-3/4 lg:w-full mx-auto"> {/* Adjust the width here */}
          <CustomizableCarousel 
            images={blockAExtensionImages} 
            intervalTime={3000} 
            fadeTime={1500} 
            containerHeight="300px"
            containerHeightSm="150px" // Height for sm screens
            containerHeightMd="200px" // Height for md screens
            containerHeightLg="300px" // Height for sm screens
            containerHeightXl="300px" // Height for md screens
            enableDarkMode={true}
            objectFit="contain"
          />
          </div>
          <div className="w-full md:w-3/4 lg:w-full mx-auto"> {/* Adjust the width here */}
          <CustomizableCarousel 
            images={blockBExtensionImages} 
            intervalTime={3000} 
            fadeTime={1500} 
            containerHeight="300px"
            containerHeightSm="150px" // Height for sm screens
            containerHeightMd="200px" // Height for md screens
            containerHeightLg="300px" // Height for sm screens
            containerHeightXl="300px" // Height for md screens
            enableDarkMode={true}
            objectFit="contain"
          />
          </div>
        </div>
        <div className="grid object-contain grid-cols-1 md:grid-cols-1 justify-center items-center   ">
        <img src="/projects/ECHO/images/CombinedSurfaces.png" className="w-full md:w-3/4 h-auto  dark:invert" />
        </div>



      </div>

      
      <div className="grid object-contain grid-cols-1 md:grid-cols-2 justify-items-center gap-0 mb-6 ">
        <div className="grid object-contain grid-cols-1 md:grid-cols-1 justify-items-center gap-12 mb-6 ">

        <p className="w-full mx-auto indent-8">
          The Algorithmic Process provides a stream of Structured Data to be used as an input for further detailing by the specialist Facade Engineers. The data includes: <br />
          <br />
          - Adjacent Surface to each edge<br />
          - Adjacent Surface type<br />
          - Termination Planes
        </p>

          <img src="/projects/ECHO/images/WindowFocusArea.png" className="w-full md:w-3/4 h-auto dark:invert" />
        </div>
        <div className="grid object-contain grid-cols-1 md:grid-cols-1 justify-items-center gap-6 mb-6 ">

           
        <img src="/projects/ECHO/images/MullionDetailing.png" className="w-full md:w-3/4 h-auto dark:invert" />
        </div>
      </div>


      <div className="flex ml-0 m-6" >
      <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
      Environmental Considerations
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-18 mb-6 md:mb-18">
        <img src="/projects/ECHO/images/WindSpeed.png" className="w-full h-auto dark:invert" />
        <img src="/projects/ECHO/images/DryBulbTemp.png" className="w-full h-auto dark:invert" />
        <img src="/projects/ECHO/images/UsefulHarmfulSunLight.png" className="w-full h-auto dark:invert" />      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-18 mb-6 md:mb-18">
      <img src="/projects/ECHO/images/psycocomfort.jpg" className="w-full  h-auto mb-6 mx-auto dark:invert" />
      <div className="w-full mx-auto"> {/* Adjust the width here */}
            <CustomizableCarousel 
              images={envAnalysis} 
              intervalTime={3000} 
              fadeTime={1500} 
              containerHeight="450px"
              containerHeightSm="150px" // Height for sm screens
              containerHeightMd="200px" // Height for md screens
              containerHeightLg="400px" // Height for sm screens
              containerHeightXl="400px" // Height for md screens
              enableDarkMode={true}
              objectFit="contain"
            />
          </div>

      </div>        



      <div className="flex ml-0 m-6" >
      <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
        Planning
        </h2>
      </div>

        <img src="/projects/ECHO/images/pf.jpg" alt="Architectural Plan" className="w-full md:w-1/2 h-auto mb-6 mx-auto dark:invert" />
        <img src="/projects/ECHO/images/sfb.jpg" alt="Architectural Section" className="w-full md:w-1/2 h-auto mb-6 mx-auto dark:invert" />

        <div className="flex ml-0 m-6" >
        <h2 className="bg-black dark:bg-white text-white dark:text-black lg:text-size1-5rem lg:leading-custom px-1 h-6 ">
        Renderings and Visualizations
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-18">
            <img src="/projects/ECHO/images/r31light.png" alt="Exterior Architecture Render with Lighting" className="w-full h-auto" />
            <img src="/projects/ECHO/images/ri2.png" alt="Interior Architecture Render" className="w-full h-auto" />
        </div>       


        
    </div>
 </div>
 
  );
};

export default EchoPage;
