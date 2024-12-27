import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillSection';
import ProjectsPage from './components/ProjectPage';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
    </div>
  );
}

export default App;
