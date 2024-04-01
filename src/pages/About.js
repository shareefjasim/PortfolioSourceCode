import React from "react";

const AboutPage = () => {
  const cvLink = "/General/Shareef Jasim _ Resume.pdf";

  return (
    <div className="px-6 lg:px-18 mt-18 overflow-auto">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-18">
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
        {/* Profile Section */}
        <div className="flex flex-col self-end mb-6 lg:col-span-1">
          <p className="text-justify indent-8 ">
          Dedicated to harnessing state-of-the-art technology in parametric design, programming, and algorithm development to optimize AEC workflows and design execution. Committed to continuous, self-directed learning in emerging technologies to enrich my expertise.
          </p>
        </div>
      </div>

      {/* Second Row on large screens */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-18 mb-18">
        

            {/* Experience and Education Section */}
<div className="flex flex-col lg:col-span-1">
  <div className="text-lg font-semibold mb-2">Experience</div>
{/* Combined Experience at Imagine Computation GmbH & Rhenso */}
<div>
    <div className="font-medium">Computational Designer</div>
    <p>Imagine Computation GmbH & Rhenso (a subsidiary) - Frankfurt, Germany  02/2023 - Present</p>
    <p>Timber facade for the Venue Building SILT project (Designed by ZJA Architects and fabricated by Hess Timber):</p>
    <ul className="list-disc ml-5">
      <li>Designed a dynamic and integrated process to generate fabrication and assembly data for timber and steel components.</li>
      <li>Developed optimization processes to maximize the drill hole to edge distance, enhancing timber joints durability.</li>
      <li>Automated clash detection and devised algorithms to adjust parameters and eliminate geometric conflicts.</li>
      <li>Leveraged IronPython scripting within Rhino to append geometry outputs with essential manufacturing data, such as CNC coordinate systems and unique object, facilitating seamless data interpretation by CADWORK.</li>
      <li>Ensured clear client communication, guaranteeing a smooth flow of manufacturing, assembly, and installation data.</li>
    </ul>
    <p>Attribute Management Tool - C# Rhino Plugin project:</p>
    <ul className="list-disc ml-5">
      <li>Developed multiple plugin features employing the MVVM architectural pattern to structure the software, features enabled effortless manipulation of object attributes, significantly enhancing user productivity and software interoperability.</li>
      <li>Utilized Eto.Forms within the C# .NET framework to create an intuitive UI.</li>
      <li>Conducted extensive testing and debugging, ensuring robust plugin functionality across various edge cases.</li>
    </ul>
    <p>APE (Adaptive Parts Environment) Rhino and Grasshopper plugin project:</p>
    <ul className="list-disc ml-5">
      <li>Ideated and developed multiple parametric tools through Grasshopper and APE, simplifying design tasks for Rhino users.</li>
      <li>Assisted in the development of custom Grasshopper components integrating them into the APE plugin using C#.</li>
      <li>Engineered a binary file parser and geometry conversion algorithm to facilitate seamless geometry transition from Rhino/Grasshopper to MagicaVoxel, extending Grasshopper’s capabilities to MagicaVoxel.</li>
    </ul>
  </div>

  {/* Experience at GenX Design and Technology */}
  <div>
    <div className="font-medium">Computational Designer</div>
    <p>GenX Design and Technology - New Jersey, USA  06/2020 - 05/2021</p>
    <p>Facade Detailing workflow project:</p>
    <ul className="list-disc ml-5">
      <li>Co-designed and developed a 3DEXPERIENCE workflow to detail any planar building envelope into organized panels.</li>
      <li>Leveraged CSV files to integrate Grasshopper and xGenerative, for geometry panelization, categorization, and analysis.</li>
      <li>Employed Catia UDFs for parametric mullion creation and utilized EKL for precise assignment of mullion UDFs to panel edges producing facade cost analysis, detailing, and LOD 500 fabrication output.</li>
    </ul>
    <p>Local Facade solving algorithm:</p>
    <ul className="list-disc ml-5">
      <li>Developed an EKL algorithm to assess the feasibility of creating a facade panel from any planar surface. This involved analyzing input surface, assigning appropriate mullions to each edge, testing detail orientations and angles, detect clashing with adjacent panels, ensuring thorough design validation.</li>
      <li>Packaged the algorithm into two applications: a feasibility test tool for rapid facade rationalization, and as part of the above mentioned workflow to address irregular facade panels, integrating geometric results into the overall process.</li>
    </ul>
  </div>

  {/* Architectural Designer Experience */}
  <div>
    <div className="font-medium mt-6">Architectural Designer</div>
    <p>U+A, Dubai, UAE 06/2018 - 09/2018</p>
    <ul className="list-disc ml-5">
      <li>Assisted as an intern on the concept design of Al Zafarana Mall project leveraging Revit for BIM modeling and Collaboration.</li>
      <li>Conducted daily architectural inspections on the site of Midtown project By Deyaar focusing on detailed architectural finishing.</li>
    </ul>
  </div>

  {/* Software Developer - Full-Stack Developer Experience */}
  <div>
    <div className="font-medium">Software Developer - Full-Stack Developer</div>
    <p>Freelancing - Self employed 06/2021 - Present</p>
    <ul className="list-disc ml-5">
      <li>Developed, deployed, and maintained e-commerce, inventory, and automation solutions for businesses like Watches House and Best Garden IQ using Django to develop robust backend logic and React and Tailwind to design adaptive web applications.</li>
    </ul>
  </div>


         
        </div>

        {/* Skills and Participation Section */}
        <div className="flex flex-col lg:col-span-1">
        <div className="text-lg font-semibold mb-2">Education</div>

           {/* Education Section */}
  

  {/* Bachelor of Architecture */}
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
    <li>Focused on computational tools to rationalize designs form generation, analysis, optimization, and design detail.</li>
  </div>

          {/* Skills Section */}
<div className="flex flex-col lg:col-span-1">
  <div className="text-lg font-semibold mt-6 mb-2">Skills</div>

  {/* Proficient Skills */}
  <div>
    <div className="font-medium mb-1">Proficient</div>
    <p>Rhino, Grasshopper, C#, XGenerative, EKL, Twinmotion</p>
  </div>

  {/* Experienced Skills */}
  <div className="mt-4">
    <div className="font-medium mb-1">Experienced</div>
    <p>Revit, Dynamo, Python, Photoshop, Indesign, React, Tailwind</p>
  </div>

  {/* Familiar Skills */}
  <div className="mt-4">
    <div className="font-medium mb-1">Familiar</div>
    <p>3DExperiance Catia, Django</p>
  </div>

  {/* Language Skills */}
  <div className="text-lg font-semibold mt-6 mb-2">Languages</div>

    <ul className="list-disc ml-5">
      <li>English (Bilingual Proficiency)</li>
      <li>Arabic (Native Proficiency)</li>
      <li>Turkish (Intermediate Proficiency)</li>
    </ul>
</div>
{/* Participations and Leadership Section */}
<div className="flex flex-col lg:col-span-1">
  <div className="text-lg font-semibold  mt-6 mb-2">Leadership and Activities</div>

  <ul className="list-disc ml-5">
    <li>AA Visiting School | Urban design summer school.</li>
    <li>Club Alpbach Iraq | Cofounder and board member.</li>
    <li>PADA Labs | Computational Design Workshop.</li>
    <li>European Forum Alpbach Conference | Participant.</li>
    <li>Rise, Resist, Remember Competition | Honorable Mention.</li>
    <li>Refugees Aid Project Bilkent TDP | Organizer.</li>
  </ul>
</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
