import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react'

interface Props {
  openNav:()=> void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="
      fixed  z-[10000] top-0
      w-[100%] h-[12vh]
      bg-[#141c27] 
      shadow-md
    ">
      <div className="
        flex items-center justify-between 
        w-[80%] h-[100%]
        mx-auto
      ">
        <h1 className="
          flex-[0.6] 
          text-[25px] 
          text-white font-bold
          cursor-pointer">
          WEB
          <span className='text-yellow-300'>DEV</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">SERVICES</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">PROJECT</div>
        <div className="nav-link">BLOG</div>
        <div className="nav-link">CONTACT</div>
        <div onClick={openNav}>
          <Bars3Icon className="
            w-[2rem] h-[2rem]
            text-yellow-300
            cursor-pointer 
            md:hidden
          "/>
        </div>
      </div>
    </div>      
  );
};

export default Nav
