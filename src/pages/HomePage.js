import React, { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TrialGif from "../assets/TrialGIF.gif";
import RowFullScreen from '../components/common/RowFullScreen';
import projects from '../components/projects/projectsData';
import FilterButton from '../components/home/FilterButton';

function HomePage() {

  const [currentFilter, setCurrentFilter] = useState("All Projects");
  const [isSticky, setIsSticky] = useState(false);
  const categories = ["All Projects", "Architecture", "Computational Design", "Art", "Construction", "Software Development", "Web Development"];




  const filteredProjects = projects.filter(project =>
    currentFilter === "All Projects" || project.categories.includes(currentFilter)
  );


  useEffect(() => {
    const handleScroll = () => {
      const filterPosition = document.querySelector('.filter-button').getBoundingClientRect().top;
      setIsSticky(filterPosition <= 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <Header />

      <img 
        src={TrialGif} 
        alt="Descriptive alt text" 
        className="w-screen h-screen object-contain object-center object-frame z-0"
      />

<FilterButton
        categories={categories}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        isSticky={isSticky}
      />

      {filteredProjects.map(project => (
        <RowFullScreen 
          key={project.title}
          title={project.title}
          description={project.description}
          cardData={project}
        />
      ))}

      <Footer />
    </div>
  );
}

export default HomePage;
