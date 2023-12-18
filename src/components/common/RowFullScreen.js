import React from 'react';
import Card from './Card'; // Adjust the import path as needed
import GLTFViewer from './GLTFViewer'; // Adjust the import path as needed

const RowFullScreen = ({ title, description, cardData }) => {
  const renderCardContent = () => {
    if (cardData.mediaType === 'image') {
      return (
        <img src={cardData.mediaSrc} alt={cardData.imageAlt || 'Card Image'} className="object-contain dark:invert-0 z-30" />
      );
    } else if (cardData.mediaType === '3dmodel') {
      return (
        <GLTFViewer 
          src={cardData.mediaSrc} 
          cameraType={cardData.cameraType}
          cameraPosition={cardData.cameraPosition} 
          cameraLookAt={cardData.cameraLookAt} 
          ambientIntensity={cardData.ambientIntensity} 
          directionalLightPosition={cardData.directionalLightPosition}
          directionalLightTarget={cardData.directionalLightTarget}
          directionalLightIntensity={cardData.directionalLightIntensity}
          allowPan={cardData.allowPan}
        />
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center md:items-start ">
      <div className="text-section w-full md:w-1/2 md:p-20 lg:p-40 p-6 flex flex-col justify-start">
        <h1 className="intro-name text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white">{title}</h1>
        <p className="intro-description mt-2 text-base md:text-lg lg:text-xl dark:grey-300">{description}</p>
        {/* ... other text content ... */}
      </div>

      <div className="card-section w-full md:w-1/2 md:p-20 lg:p-40 p-6 flex flex-col justify-center">
        <div className="relative pb-[100%]">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Card 
              className="w-full h-full "
              targetUrl={`#${cardData.targetUrl}`} 
            >
              {renderCardContent()}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowFullScreen;
