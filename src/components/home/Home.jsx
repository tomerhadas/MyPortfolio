import './Home.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const [showFullstack, setShowFullstack] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-tags">
        <motion.span
          className="tag"
          initial={{ x: '-150vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2 }}
          onAnimationComplete={() => setShowFullstack(true)}
        >
          Backend Developer
        </motion.span>

        <img
          className="avatar"
          src="myphoto.jpg"
          alt="Tomer Hadas"
        />

        <motion.span
          className="tag"
          initial={{ x: '150vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Frontend Developer
        </motion.span>
      </div>

      <h1>
        Hi, I'm <span className="highlight">Tomer Hadas</span>
      </h1>

      <AnimatePresence>
        {showFullstack && (
          <motion.h3
            key="fullstack"
            className="hero-subtitle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            Full Stack Web Developer
          </motion.h3>
        )}
      </AnimatePresence>

      <p className="hero-desc">
        Web development enthusiast, seeking growth and learning opportunities.
      </p>
    </section>
  );
}

export default Home;
