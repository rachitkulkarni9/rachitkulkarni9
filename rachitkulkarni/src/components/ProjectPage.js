import React from 'react';
import '../styles/ProjectPage.css'; // Import the CSS file

const ProjectsPage = () => {
  const projects = [
    {
      title: "Art-Track",
      description:
        "A platform to explore and organize artwork using an ontology and graph database. Features React.js frontend and Flask backend.",
      githubLink: "https://github.com/rachitkulkarni9/ArtTrack"
    },
    {
      title: "LeetCode Explorer",
      description:
        "A full-stack application to explore company-specific LeetCode questions using a relational database and dynamic search functionality."
    },
    {
      title: "Finance Tracker",
      description:
        "A finance tracking app to manage budgets and analyze expenses, built using React.js",
      githubLink: "https://github.com/rachitkulkarni9/Finance_Tracker"
    },
  ];

  return (
    <section className="projects-page">
      <h2 className="title">Projects</h2>
      <p className="projects-intro">Here are some of my projects showcasing my skills and expertise.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
