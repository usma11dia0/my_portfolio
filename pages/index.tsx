import About from '@/components/about/About';
import Articles from '@/components/others/Others';
import Footer from '@/components/layouts/Footer';
import Hero from '@/components/hero/Hero';
import MobileNav from '@/components/layouts/MobileNav';
import Nav from '@/components/layouts/Nav';
import Projects from '@/components/projects/Projects';
import Services from '@/components/services/Services';
import Skills from '@/components/skills/Skills';
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div id="section-home" className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        <Hero />
        <div className="relative z-[30]">
          <About />
          {/* <Services /> */}
          <Skills />
          <Projects />
          <Articles />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage
