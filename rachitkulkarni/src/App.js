import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import ProjectPage from "./components/ProjectPage";
import ContactMePage from "./components/ContactMePage";

function App() {
  return (
    <div>
      <NavBar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="projects">
        <ProjectPage />
      </section>
      <section id="contact">
        <ContactMePage />
      </section>
    </div>
  );
}

export default App;
