
import './Skills.css';
function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-icons">
        <span className="skill-text" title="C#">C#</span>
        <i className="fa-brands fa-js" title="JavaScript"></i>
        <i className="fa-brands fa-react" title="React"></i>
        <i className="fa-brands fa-angular" title="Angular"></i>
        <i className="fa-brands fa-node" title="Node.js"></i>
        <i className="fa-brands fa-python" title="Python"></i>
        <i className="fa-solid fa-database" title="SQL"></i>
        <i className="fa-brands fa-aws" title="AWS"></i>
        <i className="fa-brands fa-git-alt" title="Git"></i>
        <i className="fa-brands fa-docker" title="Docker"></i>
      </div>
    </section>
  );
}
export default Skills;
