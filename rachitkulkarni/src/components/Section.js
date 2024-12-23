import React from 'react';

const Section = ({ id, title, content, backgroundColor }) => {
  return (
    <section id={id} style={{ ...styles.section, backgroundColor }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    textAlign: 'center',
    color: '#333',
  },
};

export default Section;
