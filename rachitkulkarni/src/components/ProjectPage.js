import React from 'react';
import '../styles/ProjectPage.css'; // Import the CSS file

const ProjectsPage = () => {
  const projects = [
    {
      title: "Art-Track",
      description:
        "A platform to explore and organize artwork using an ontology and graph database. Features React.js frontend and Flask backend.",
      githubLink: "https://github.com/your-username/art-track",
    },
    {
      title: "LeetCode Explorer",
      description:
        "A full-stack application to explore company-specific LeetCode questions using a relational database and dynamic search functionality.",
      githubLink: "https://github.com/your-username/leetcode-explorer",
    },
    {
      title: "Finance Tracker",
      description:
        "A finance tracking app to manage budgets and analyze expenses, built using React.js and Firebase.",
      githubLink: "https://github.com/your-username/finance-tracker",
    },
  ];

  return (
    <section className="projects-page">
      <h2 className="title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
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
