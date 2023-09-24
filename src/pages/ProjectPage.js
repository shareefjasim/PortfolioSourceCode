import React from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
  // Extract the project ID from the URL
  const { id } = useParams();

  return (
    <div>
      {/* Display the details of the project with ID = id */}
      {/* ... */}
    </div>
  );
}

export default ProjectPage;
