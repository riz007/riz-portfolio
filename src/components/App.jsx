import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
// import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, experienceData, contactData, footerData, skillsData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience([...experienceData]);
    setSkills([...skillsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, experience, skills, contact, footer }}>
      <Hero />
      <About />
      <Experience />
      {/* <Skills/> */}
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
