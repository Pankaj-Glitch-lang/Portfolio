import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Quiz Application",
      description:
        "Interactive quiz application using React, Redux, and Chakra UI.",
      shortDescription: "An interactive quiz app with a modern UI.",
      liveDemo: "https://quiz-applications-reacts.netlify.app/",
      repo: "https://github.com/Pankaj-Glitch-lang/Quiz-Applications",
      image: "/quiz.png", // Image path relative to the public folder
    },
    {
      title: "Groupon Clone (MERN)",
      description:
        "Full-stack Groupon replica with MERN stack, JWT, and Chakra UI.",
      shortDescription: "A complete e-commerce solution with user authentication.",
      liveDemo: "https://fabulous-mousse-2e8630.netlify.app/",
      repo: "https://github.com/Pankaj-Glitch-lang/GroupOnClone",
      image: "/groupon.png", // Image path relative to the public folder
    },
    {
      title: "Veg/Fruits Bulk Order Platform (MERN)",
      description:
        "A user-friendly platform for ordering fresh fruits and vegetables in bulk.",
      shortDescription:
        "A bulk ordering platform for businesses, with admin access and dynamic pricing.",
      liveDemo: "https://bejewelled-banoffee-63c044.netlify.app/",
      repo: "https://github.com/Pankaj-Glitch-lang/Bulk-Vegetable-Fruit-Ordering-Platform",
      image: "/vegFruits.png", // Image path relative to the public folder
    },
  ];

  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" data-aos="fade-up">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="short-description">{project.shortDescription}</p>
              <p className="project-description">{project.description}</p>
             
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
