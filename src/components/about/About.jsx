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
            I'm a third-year Computer Science student at the Academic College of Ramat Gan (GPA: 90),
            with strong foundations in data structures, OOP, algorithms, and machine learning.
          </p>
          <p>
            Alongside my studies, I completed a Full Stack Development course at John Bryce College,
            where I gained practical skills in C#, ASP.NET Core, Angular, REST APIs, SQL, EF Core, Microservices, RabbitMQ, Docker, and Postman.
          </p>
          <p>
            My development stack includes both frontend and backend technologies:
            React, JavaScript, .NET Core, Angular, SQL, and Python. I enjoy building clean, scalable, and responsive applications.
          </p>
          <p>
            I'm passionate about software architecture, cloud technologies like AWS, and creating seamless user experiences.
            Outside of development, I bring leadership and focus from my service in Yahalom (elite IDF unit).
          </p>
          <ul className="about-info">
          
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
