import './Skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import reactLogo from "../../assets/react.png";
import angularLogo from "../../assets/angular-logo.png";
import nodeLogo from "../../assets/node-js-logo.png";
import pythonLogo from "../../assets/Python-logo.png";
import dockerLogo from "../../assets/docker.png";
import csharpLogo from "../../assets/csharp-logo.png";
import awsLogo from "../../assets/Amazon_Web_Services-Logo.png";
import jsLogo from "../../assets/JavaScript-logo.png";
import sqlLogo from "../../assets/Sql-logo.png";

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const skills = [
    { src: csharpLogo, alt: "C#" },
    { src: jsLogo, alt: "JavaScript", className: "icon-big" },
    { src: reactLogo, alt: "React" },
    { src: angularLogo, alt: "Angular" },
    { src: nodeLogo, alt: "Node.js" },
    { src: pythonLogo, alt: "Python" },
    { src: sqlLogo, alt: "SQL" },
    { src: awsLogo, alt: "AWS" },
    { src: dockerLogo, alt: "Docker" },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <h2>Skills</h2>
      <div className="skills-icons">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.alt}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: inView ? index * 0.15 : 0, duration: 0.5 }}
          >
            <img
              src={skill.src}
              alt={skill.alt}
              title={skill.alt}
              className={skill.className || ''}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: skills.length * 0.15, duration: 0.5 }}
        >
          <i className="fa-brands fa-git-alt" title="Git"></i>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
