import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "framer-motion";
import { PROJECT_IMAGE_SET } from '@/components/projects/projectConfig';
import { fadeIn } from "../../variants"; 
import FrameCorners from '../elements/frame/FrameCorners';
import { Animator, useBleeps} from '@arwes/react';
import MovingLinesBG from '../elements/background/MovingLinesBG';
import Button from '../elements/button/Button';
import ProjectModal from './ProjectModal'; 
import ProjectCard from './ProjectCard';

type BleepsNames = 'expand' | 'fade' | 'transmission' | 'typing' | 'error' | 'click' | 'hover';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false })
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bleeps = useBleeps<BleepsNames>();
  const timerPlayId = useRef<number>();
  const timerStopId = useRef<number>();

  return (
    <div id="section-projects" className="bg-[#09101a] pt-[4rem] pb-[1rem] md:pt-[8rem] relative">
      <MovingLinesBG zIndex={0}/>
      <h1 className="heading relative">
        <span className="text-[28px] sm:text-[33px] md:text-[45px] text-neon-blue">PROJECTS</span>
      </h1>
      <div className="
        grid grid-cols-1 gap-[2rem]
        lg:grid-cols-2 
        xl:grid-cols-3
        w-[50%] pt-[2rem] mx-auto lg:w-[80%]"
        >
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
