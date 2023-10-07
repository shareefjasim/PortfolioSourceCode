import React from "react";
import Footer from "../components/common/Footer";
import GLTFViewer from '../components/common/GLTFViewer';
import Card from '../components/common/Card';
import Header from "../components/common/Header";

function HomePage() {
  return (
    <div className="home-page">
      <Header/>


      <div className=" top-48  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  Responsive Text
</div>

      <section className="intro">
        <h1 className="intro-name">Your Name</h1>
        <p className="intro-description">Computational Designer / Architect</p>
        {/* You can add your model or carousel here */}
      </section>

      <section id="work" className="work-section">
        <h2 className="work-section-title">My Work</h2>
        {/* You can list your projects or domains of work here */}
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>Details from your CV...</p>

        <a href="#" className="text-black hover:text-blue-700 hover:underline">Click me!</a>

        <p className="text-base text-gray-700 mb-4">
  This is a sample paragraph text styled with TailwindCSS. It's readable and has a modern design.
</p>
<p className="text-base text-gray-700 mb-4">
  This is a sample paragraph text styled with TailwindCSS. It's readable and has a modern design.
</p>
<p className="text-base text-gray-700 mb-4">
  This is a sample paragraph text styled with TailwindCSS. It's readable and has a modern design.
</p>
<p className="text-base text-gray-700 mb-4">
  This is a sample paragraph text styled with TailwindCSS. It's readable and has a modern design.
</p>



<h1 className="text-4xl font-bold mb-4">Header 1</h1>
<h2 className="text-3xl font-semibold mb-3">Header 2</h2>
<h3 className="text-2xl mb-2">Header 3</h3>




<div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full" src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fhtml.com%2Fattributes%2Fimg-src%2F&psig=AOvVaw35CkzlEmxn5LDrxafAdI8W&ust=1696261868811000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDUgYSa1YEDFQAAAAAdAAAAABAJ"} alt="Card image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">nah</div>
        <p className="text-gray-700 text-base">description</p>
      </div>
    </div>


      </section>

     
      <Card data-target-url="https://www.google.com/" 
  className="w-full md:w-500px max-w-sm md:mx-0 p-5 md:p-0"
  targetUrl="https://www.google.com/" >
        <GLTFViewer 
          src="MYFILE.glb" 
          cameraType="perspecti"
          cameraPosition={[100,100,100]} 
          cameraLookAt={[0, 0, 0]} 
          ambientIntensity={4} 
          directionalLightPosition={[5, 10, 5]}
          directionalLightTarget={[0, 0, 0]}
          directionalLightIntensity={0.8}
          allowPan = {false}

        />
      </Card>




      <Footer />
    </div>
  );
}

export default HomePage;
