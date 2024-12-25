import React from "react";
import "../styles/SkillSection.css"

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: "react.png" },
    { name: "HTML CSS JAVASCRIPT", icon: "html-css-js.png" },
    { name: "Next.js", icon: "path-to-nextjs-icon.png" },
    { name: "Bootstrap", icon: "path-to-bootstrap-icon.png" },
    { name: "Express.js", icon: "path-to-express-icon.png" },
    { name: "Firebase", icon: "path-to-firebase-icon.png" },
    { name: "GitHub", icon: "path-to-github-icon.png" },
    { name: "Git", icon: "path-to-git-icon.png" },
    { name: "Heroku", icon: "path-to-heroku-icon.png" },
    { name: "jQuery", icon: "path-to-jquery-icon.png" },
    { name: "Markdown", icon: "path-to-markdown-icon.png" },
    { name: "MongoDB", icon: "path-to-mongodb-icon.png" },
    { name: "MySQL", icon: "path-to-mysql-icon.png" },
    { name: "npm", icon: "path-to-npm-icon.png" },
    { name: "Node.js", icon: "path-to-node-icon.png" },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
