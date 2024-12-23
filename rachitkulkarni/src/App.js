import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Section
        id="home"
        title="Welcome to My Portfolio"
        content="Hi, I'm a passionate developer creating amazing web applications!"
        backgroundColor="#f4f4f4"
      />
      <Section
        id="about"
        title="About Me"
        content="I'm a software engineer with expertise in React.js and modern web technologies."
        backgroundColor="#eaeaea"
      />
      <Section
        id="projects"
        title="My Projects"
        content="Here are some of the amazing projects I've worked on. Click below to see more!"
        backgroundColor="#f4f4f4"
      />
      <Section
        id="contact"
        title="Contact Me"
        content="Feel free to reach out for collaborations or just a friendly chat!"
        backgroundColor="#eaeaea"
      />
    </div>
  );
}

export default App;
