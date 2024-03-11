// About.js
import React from "react";

const AboutPage = () => {
  return (
    <div className="px-6 lg:px-18 mt-18 mb-18">
      <div className="grid lg:grid-cols-3 gap-18">
        {/* First Column: Profile and Contact Information */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Replace 'profileImage.jpg' with your actual profile image path */}
          <img
            src="/General/DSC_8618.JPG"
            alt="Profile"
            className="w-50 h-80 content-center mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Profile</h2>
          <p className="text-justify">
            Highly skilled and detail-oriented architect and computational designer with a passion for utilizing technology to enhance architectural design workflow. Strong technical skills in parametric design, programming, and algorithm design. Experienced in applying emerging technologies in professional environments.
          </p>
        </div>

        {/* Second Column: Experience and Education */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <div>
            <h4 className="font-semibold">Computational Designer</h4>
            <p>Rhenso - Imagine Computation, Frankfurt, Germany (02/2023 - Present)</p>
            <ul className="list-disc ml-5">
              <li>Developed tools for Rhino users via Grasshopper and APE plugin.</li>
              <li>Assisted in custom Grasshopper components for APE plugin using C#.</li>
              <li>Integrated process for timber facade production for the Venue Building SILT.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Computational Designer</h4>
            <p>GenX Design and Technology, New Jersey, USA (06/2020 - 05/2021)</p>
            <ul className="list-disc ml-5">
              <li>Developed data-driven workflows using Grasshopper and Catia for facade detailing.</li>
              <li>Programmed a local facade panel detailing algorithm for complex geometries.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Full-Stack Developer (Freelancing)</h4>
            <p>(01/2022 - Present)</p>
            <ul className="list-disc ml-5">
              <li>Developed e-commerce web applications using Django and React.</li>
              <li>Managed entire development lifecycle from concept to deployment.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Software Developer</h4>
            <p>Watches House, Erbil, Iraq (06/2021 - 09/2022)</p>
            <ul className="list-disc ml-5">
              <li>Developed inventory system and e-commerce integration using Django.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Education</h3>
            <p>Bachelor of Architecture - Bilkent University, Ankara, Turkey (09/2016 - 06/2020)</p>
          </div>
        </div>

        {/* Third Column: Skills, Languages, and Participations */}
        <div className="lg:col-span-1 mb-18">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <p>Rhino, Revit, Catia, Fusion360, Autocad, Twinmotion, Lumion, Photoshop, Indesign, Premiere Pro, Grasshopper, Dynamo, XGenerative, C#, EKL, Python, SLA Printing, PLA Printing, Hand Modeling, Web Development (Django, React, Bootstrap, Tailwind), Languages (English, Arabic, Turkish).</p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2">Participations and Leadership</h3>
          <ul className="list-disc ml-5 mb-18">
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
