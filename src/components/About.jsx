import { useInView } from "react-intersection-observer";
import './About.css';

function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`about fade-in${inView ? " fade-in-active" : ""}`}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <img className="about-photo" src="myphoto.jpg" alt="Tomer" />
        <div>
          <p>
            Computer Science student with hands-on experience in full-stack development,
            specializing in C#, ASP.NET Core, Angular, SQL, and AWS.
            Always eager to learn new technologies and build innovative projects.
          </p>
          <ul className="about-info">
            <li><b>Name:</b> Tomer Hadas</li>
            <li><b>Phone:</b> 054-7294858</li>
            <li><b>Email:</b> thadas@gmail.com</li>
            <li>
              <b>LinkedIn:</b> <a
                className="linkedin-link"
                href="https://linkedin.com/in/tomer-hadas"
                target="_blank"
                rel="noopener noreferrer"
              >
                My LinkedIn
              </a>
            </li>
            <li>
              <b>GitHub:</b> <a
                className="github-link"
                href="https://github.com/tomerhadas"
                target="_blank"
                rel="noopener noreferrer"
              >
                My GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;
