import React from "react";
import '../App.css';


function ProjectPage() {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1 className="project-title">Project Name - Year</h1>
        {/* Additional project info can be added here */}
      </header>

      <section className="project-description-section">
        <img src="path_to_main_image.jpg" alt="Main Project" />
        <p className="project-description">Brief description of the project...</p>
        {/* Links or technical info can be added here */}
      </section>

      <section className="project-media-section">
        {/* Images, models, gifs, videos related to the project */}
        <img src="path_to_image.jpg" alt="Project Detail" />
        <p className="project-media-title">Title for the media (if needed)</p>
        <p>Text related to the media...</p>
      </section>

      {/* Additional sections can be added as needed */}
    </div>
  );
}

export default ProjectPage;
