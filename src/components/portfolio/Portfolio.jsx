import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      <p>Here are some of the projects I’ve built:</p>

      <div className="projects-grid">
        {/* אפשר להכניס כאן כרטיסיות של פרויקטים */}
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Another cool project you made.</p>
        </div>
        {/* תוכל לשכפל ולהוסיף עוד כרטיסיות */}
      </div>
    </section>
  );
}

export default Portfolio;
