import React from 'react'
import Header from './components/navigation/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <Section slant="left" title="Education" id="education" className="h-[30rem]" />
        <Education />
        <Section slant="right" title="Experience" id="experience" className="h-[30rem] xl:h-[40rem]" />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default App;
