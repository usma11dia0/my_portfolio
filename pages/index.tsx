import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
      </div>
    </div>
  );
}

export default HomePage