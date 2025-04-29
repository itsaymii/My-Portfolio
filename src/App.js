import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from './components/Services';
import Projects from './components/Project';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });

    const handleScroll = () => {
      AOS.refresh(); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const handleNavClick = () => {
    AOS.refresh(); 
  };

  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      <Home />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
