
import './Hero.css';
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-tags">
        <span className="tag">Backend Developer</span>
        <img
          className="avatar"
          src="myphoto.jpg"
          alt="Tomer Hadas"
        />
        <span className="tag">Frontend Developer</span>
      </div>
      <h1>
        Hi, I'm <span className="highlight">Tomer Hadas</span>
      </h1>
      <h3>Full Stack Web Developer</h3>
      <p className="hero-desc">
        Web development enthusiast, seeking growth and learning opportunities.
      </p>
    </section>
  );
}

export default Hero;
