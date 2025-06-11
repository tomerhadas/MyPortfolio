import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/projects';
import './index.css'; // Assuming you have some global styles
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


