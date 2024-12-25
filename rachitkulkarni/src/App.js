import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillSection";

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
    </div>
  );
}

export default App;
