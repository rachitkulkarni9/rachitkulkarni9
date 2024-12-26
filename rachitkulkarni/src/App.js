import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillSection";
import ProjectsPage from "./components/ProjectPage";

function App() {
  return (
    <div className="app-container">
      {/* First Section with Navbar */}
      <section id="hero">
        <Navbar />
        <HeroSection />
      </section>

      {/* Second Section */}
      <section id="about">
        <AboutMeSection />
      </section>

      {/* Third Section */}
      <section id="skills">
        <SkillsSection />
      </section>
      {/* Third Section */}
      <section id="projects">
        <ProjectsPage />
      </section>
    </div>
  );
}

export default App;
