import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';

import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
