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
import { GetStaticPropsContext } from 'next';
import MouseMoveCrosshair from '@/components/elements/background/MouseMoveCrossHair';

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div id="section-home" className="overflow-x-hidden none-cursor">
      <MouseMoveCrosshair>
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
      </MouseMoveCrosshair>
    </div>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}


export default HomePage
