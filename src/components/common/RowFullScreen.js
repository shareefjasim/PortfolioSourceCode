/*import React from 'react';
import Card from './Card'; // Adjust the import path as needed
import GLTFViewer from './GLTFViewer'; // Adjust the import path as needed

const RowFullScreen = ({ title, description, cardData }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center md:items-start">
      <div className="text-section w-full md:w-1/2 md:p-40 p-4 flex flex-col justify-start">
        <h1 className="intro-name text-2xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        <p className="intro-description mt-2 text-base md:text-lg lg:text-xl">{description}</p>
        { ... other text content ... }
      </div>

      <div className="card-section w-full md:w-1/2 md:p-40 p-4 flex flex-col justify-center">
        {*//* Card container with square aspect ratio }
        <div className="relative pb-[100%]">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Card 
              data-target-url={cardData.targetUrl} 
              className="w-full h-full"
              targetUrl={cardData.targetUrl} 
            >
              <GLTFViewer 
                src={cardData.src} 
                cameraType={cardData.cameraType}
                cameraPosition={cardData.cameraPosition} 
                cameraLookAt={cardData.cameraLookAt} 
                ambientIntensity={cardData.ambientIntensity} 
                directionalLightPosition={cardData.directionalLightPosition}
                directionalLightTarget={cardData.directionalLightTarget}
                directionalLightIntensity={cardData.directionalLightIntensity}
                allowPan={cardData.allowPan}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowFullScreen;
*/

// RowFullScreen.js
import React from 'react';
import Card from './Card'; // Adjust the import path as needed
import GLTFViewer from './GLTFViewer'; // Adjust the import path as needed

const RowFullScreen = ({ title, description, cardData }) => {
  const renderCardContent = () => {
    if (cardData.imageSrc) {
      // Render an image if imageSrc is provided
    
      return (
        <div className="flex justify-center items-center h-full">
          <img src={cardData.imageSrc} alt={cardData.imageAlt || 'Card Image'} className="object-contain" />
        </div>
      );
    
    } else {
      // Render GLTFViewer if imageSrc is not provided
      return (
        <GLTFViewer 
          src={cardData.src} 
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
    <div className="flex flex-col md:flex-row h-screen items-center md:items-start">
      <div className="text-section w-full md:w-1/2 md:p-40 p-6 flex flex-col justify-start">
        <h1 className="intro-name text-2xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        <p className="intro-description mt-2 text-base md:text-lg lg:text-xl">{description}</p>
        {/* ... other text content ... */}
      </div>

      <div className="card-section w-full md:w-1/2 md:p-40 p-6 flex flex-col justify-center">
        {/* Card container */}
        <div className="relative pb-[100%]">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Card 
            data-target-url={cardData.targetUrl} 
            className="w-full h-full"
            targetUrl={cardData.targetUrl} 
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
