import { handleScroll } from '@/utils';
import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react'

interface Props {
  openNav:()=> void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div 
      className="
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
          usma11dia0's
          <span className='text-[25px] py-4 px-2 text-neon-blue'>PORTFOLIO</span>
        </h1>
        <a href="#section-home"
          className="nav-link"
          onClick={(e) => handleScroll(e, "section-home")}
        >
          HOME
        </a>
        <a href="#section-about" 
          className="nav-link"
          onClick={(e) => handleScroll(e, "section-about")}
        >
          ABOUT
        </a>
        <a href="#section-services"
          className="nav-link"
          onClick={(e) => handleScroll(e, "section-services")}
        >
          SERVICES
        </a>
        <a href="#section-skills"
          className="nav-link"
          onClick={(e) => handleScroll(e, "section-skills")}
        >
          EDUCATION＆SKILLS
        </a>
        <a href="#section-projects"
          className="nav-link"
          onClick={(e) => handleScroll(e, "section-projects")}
        >
          PROJECTS
        </a>
        <a
          href="#section-others"
          className="nav-link"
          onClick={(e) => handleScroll(e, "section-others")}
        >
          OTHERS
        </a>
        <div onClick={openNav}>
          <Bars3Icon className="
            w-[2rem] h-[2rem]
            text-[#1FFFFF]
            cursor-pointer 
            xl:hidden
          "/>
        </div>
      </div>
    </div>      
  );
};

export default Nav
