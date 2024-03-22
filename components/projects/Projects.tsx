import React from 'react'
import MovingLinesBG from '../elements/background/MovingLinesBG';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="section-projects" className="
      relative bg-[#09101a] pt-[3rem] pb-[8rem] 
      md:pt-[8rem]
      mdAnd2Lgh:pt-[5rem]
      lg:pt-[2.5rem]
      2xl:pt-[1.5rem]
      2xlAndLgh:pt-[5rem]
      3xl:pt-[7rem] 3xl:pb-[20rem]
      3xlAndMdh:pt-[2rem]
      4xl:pt-[5rem]
      5xl:pt-[3rem]
      5xlAnd1xl:pt-[12rem]
    ">
      <MovingLinesBG zIndex={0}/>
      <h1 className="heading relative">
        <span className="text-[28px] sm:text-[33px] md:text-[45px] text-neon-blue">PROJECTS</span>
      </h1>
      <div className="
        grid grid-cols-1 gap-[2rem] w-[80%] pt-[2rem] mx-auto
        md:pt-[4rem] 
        lg:grid-cols-2 lg:w-[80%]
        xl:grid-cols-3
        2xl:pt-[1rem]
        2xlAndLgh:pt-[5rem]
        3xl:pt-[3rem]
        4xl:pt-[5rem]
        5xl:pt-[3rem]
        5xlAnd1xl:pt-[6rem]
       ">
        <ProjectCard 
          projectName='portfolio'
          fadeInSec={0}
        />
        <ProjectCard 
          projectName='portfolio'
          fadeInSec={0.2}
        />
        <ProjectCard 
          projectName='portfolio'
          fadeInSec={0.4}
        />
        <ProjectCard 
          projectName='portfolio'
          fadeInSec={0.6}
        />
        <ProjectCard 
          projectName='portfolio'
          fadeInSec={0.8}
        />
        <ProjectCard 
          projectName='portfolio'
          fadeInSec={1}
        />
      </div>
    </div>
  );
}

export default Projects
