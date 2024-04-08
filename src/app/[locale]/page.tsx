'use client'

import { BleepsProvider } from '@arwes/react';
import { Metadata } from 'next';
import React, { useState } from 'react'

import About from '@/components/about/About';
import Articles from '@/components/others/Others';
import Footer from '@/components/layouts/Footer';
import Hero from '@/components/hero/Hero';
import MobileNav from '@/components/layouts/MobileNav';
import Nav from '@/components/layouts/Nav';
import Projects from '@/components/projects/Projects';
import Services from '@/components/services/Services';
import Skills from '@/components/skills/Skills';
import MouseMoveCrosshair from '@/components/elements/background/MouseMoveCrossHair';
import { bleepsSettings } from "./config";

const metadata: Metadata = {
  title: "usma11dia0's portfolio",
  description: "introduce my skill set and products" 
}

export default function Page () {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <>
     <BleepsProvider {...bleepsSettings}>
      <div id="section-home" className="overflow-x-hidden cursor-unrock">
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
      </BleepsProvider>
    </>
  );
}
