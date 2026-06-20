import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import SectionNav from './components/SectionNav/SectonNav'
import Projects from './components/Projects/Projects'

import Lenis from "lenis";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);


  return (
    <main>
      <Header />
      <div className='container'>
      <Hero />
      <SectionNav />
      <About />
      <Projects />
      <Skills />
      
      </div>
      <Footer />
    </main>
  )
}

export default App
