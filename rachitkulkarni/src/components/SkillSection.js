import React from "react";
import "../styles/SkillSection.css"


  const skills = [
    { name: "C", icon: "C.png"},
    { name: "C++", icon: "C++.png"},
    { name: "Java", icon: "Java.png"},
    { name: "Python", icon: "Python.png"},
    { name: "HTML", icon: "html.png" },
    { name: "CSS", icon: "css.png" },
    { name: "JavaScript", icon: "JavaScript.png" },
    { name: "ReactJS", icon: "ReactJS.png"},
    { name: "NodeJS", icon: "NodeJS.png"},
    { name: "Spring Boot", icon: "springboot.png" },
    { name: "Flask", icon: "Flask.png" },
    { name: "Junit5", icon: "Junit5.jpg"},
    { name: "PyTest", icon: "PyTest.jpg"},
    { name: "GraphDB", icon: "GraphDB.png"},
    { name: "MySQL", icon: "MySQL.png"},
    { name: "PostgreSQL", icon: "PostGreSQL.png"},
    { name: "GraphQL", icon: "GraphQL.png"},
    { name: "GitHub", icon: "github.png" },
    { name: "Git", icon: "GitLab.png" },
    { name: "CI/CD", icon: "CICD.png" },
    { name: "Docker", icon: "Docker.png"},
    { name: "Azzure", icon: "Azzure.png"},
    { name: "Jenkins", icon: "Jenkins.png"},
    { name: "netlify", icon: "Netlify.png"},
    { name: "Windows", icon: "Windows.png"},
    { name: "Linux", icon: "Linux.png"}
  ];

  const SkillSection = () => {
    return (
      <section id="skills" className="skills-container">
        <h2>Skills</h2>
        <p className="skills-description">
          With my experience, these are the skills I possess.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SkillSection;