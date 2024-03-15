import React from 'react'
import MovingLinesBG from '../elements/background/MovingLinesBG';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="section-projects" className="
      relative bg-[#09101a] pt-[3rem] pb-[1rem] 
      md:pt-[8rem] 
    ">
      <MovingLinesBG zIndex={0}/>
      <h1 className="heading relative">
        <span className="text-[28px] sm:text-[33px] md:text-[45px] text-neon-blue">PROJECTS</span>
      </h1>
      <div className="
        grid grid-cols-1 gap-[2rem] w-[80%] pt-[2rem] mx-auto 
        lg:grid-cols-2 lg:w-[80%]
        xl:grid-cols-3
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
