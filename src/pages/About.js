import React from "react";

const AboutPage = () => {
  const cvLink = "/General/Shareef Jasim _ Resume.pdf";

  return (
    <div className="px-6 lg:px-18 mt-18 overflow-auto">
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-18">
        {/* Combined column for Image and PDF Resume for all sizes */}
        <div className="grid grid-cols-2 mb-6 gap-6">
          {/* Sub-column for the Image */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/General/DSC_8618 cropped resized.jpg"
              alt="Profile"
              className="lg:h-full w-auto"
            />
          </div>
          {/* Sub-column for the PDF Resume */}
          <div className="flex flex-col items-center lg:items-start justify-end lg:h-full">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="bg-black dark:bg-white text-white dark:text-black px-1 h-6 lg:mt-0 self-end"
            >
              Pdf Resume
            </a>
          </div>
        </div>

        {/* Empty divs for spacing in the first row */}
        <div className="hidden lg:block lg:col-span-1"></div>
        <div className="hidden lg:block lg:col-span-1"></div>
      </div>

      {/* Second Row on large screens */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-18">
        {/* Profile Section */}
        <div className="flex flex-col items-center lg:items-start lg:col-span-1">
          <p className="text-justify">
            Highly skilled and detail-oriented architect and computational designer with a passion for utilizing technology to enhance architectural design workflow and push the boundaries of design and execution. Strongly committed to professionalism with a proven ability to meet work requirements and to conduct in-depth research and development utilizing emerging technologies. Possessing strong technical skills, including expertise in parametric design, programming, and algorithm design.
          </p>
        </div>

        {/* Experience and Education Section */}
        <div className="flex flex-col lg:col-span-1">
          <div className="text-lg font-semibold mb-2">Experience & Education</div>

          {/* Computational Designer Experience */}
          <div>
            <div className="font-medium">Computational Designer</div>
            <p>Imagine Computation, Frankfurt, Germany (06/2023 - Present)</p>
            <ul className="list-disc ml-5">
              <li>Developed an integrated process to produce fabrication and assembly data for the timber facade of the Venue Building SILT, Middelkerke, designed by ZJA Architects and fabricated by Hess Timber.</li>
              <li>Assisted in developing a custom Rhino plugin that allows users to easily manipulate object attributes with a smart UI.</li>
            </ul>
          </div>

          {/* Previous Computational Designer Experience */}
          <div>
            <div className="font-medium">Computational Designer</div>
            <p>Rhenso (a subsidiary of Imagine Computation), Frankfurt, Germany (02/2023 - 06/2023)</p>
            <ul className="list-disc ml-5">
              <li>Ideated and developed multiple tools for Rhino users through Grasshopper and the APE plugin.</li>
              <li>Assisted in the development of custom Grasshopper components to be integrated into the APE plugin using C#.</li>
            </ul>
          </div>

          {/* Additional Experience */}
          <div>
            <div className="font-medium">Computational Designer</div>
            <p>GenX Design and Technology, New Jersey, USA (06/2020 - 05/2021)</p>
            <ul className="list-disc ml-5">
              <li>Developed a seamless data-driven workflow using Grasshopper, Catia, xGenerative, and EKL to apply advanced computational concepts for facade detailing and fabrication documents production.</li>
              <li>Designed and programmed a local facade panel detailing algorithm used for feasibility testing of complex facade geometry by automatically producing 3D fabrication documents for any panel of a complex facade.</li>
            </ul>
          </div>

          {/* Education Details */}
          <div>
            <div className="font-medium">Bachelor of Architecture</div>
            <p>
              <a
                href="https://w3.bilkent.edu.tr/bilkent/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                Bilkent University
              </a>, Ankara, Turkey (09/2016 - 06/2020)
            </p>
          </div>
        </div>

        {/* Skills and Participation Section */}
        <div className="flex flex-col lg:col-span-1">
          <div className="text-lg font-semibold mb-2">Skills & Participations</div>
          <p>
            Modeling: Rhino, Revit, Catia. Visualization: Twinmotion, Photoshop, Indesign. Visual Programming: Grasshopper, Dynamo, XGenerative. Web-Development: Django, React, Tailwind. Programming languages: C#, EKL, Python. Languages: English, Arabic, Turkish.
          </p>
          <ul className="list-disc ml-5">
            <li>AA Visiting School | Urban design summer school.</li>
            <li>Club Alpbach Iraq | Co-founder and board member.</li>
            <li>PADA Labs | Computational Design Workshop.</li>
            <li>European Forum Alpbach Conference | Participant.</li>
            <li>Rise, Resist, Remember Competition | Honorable Mention.</li>
            <li>Refugees Aid Project Bilkent TDP | Organizer.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
