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

      
      
    </div>
  );
};
export default CTEPPage;
