import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <a href="#home" style={styles.link}>Home</a>
      <a href="#about" style={styles.link}>About</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    zIndex: 1000,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
