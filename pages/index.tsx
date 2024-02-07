import Nav from '@/Components/Nav';
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(true)

  return (
    <div className="overflow-x-hidden">
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default HomePage