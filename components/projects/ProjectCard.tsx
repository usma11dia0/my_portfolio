import Image from 'next/image';
import { fadeIn } from '@/variants';
import { Animator, useBleeps } from '@arwes/react';
import { motion, useInView } from 'framer-motion';
import { PROJECT_PUBLIC_SET } from '@/components/projects/projectConfig';
import React, { useEffect, useRef, useState } from 'react'
import FrameCorners from '../elements/frame/FrameCorners';
import Button from '../elements/button/Button';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  projectName: string;
  fadeInSec: number;
}

type BleepsNames = 'expand' | 'fade' | 'transmission' | 'typing' | 'error' | 'click' | 'hover';

const ProjectCard = ({
    projectName,
    fadeInSec,
  }: ProjectCardProps) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false })
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bleeps = useBleeps<BleepsNames>();
  const timerPlayId = useRef<number>();
  const timerStopId = useRef<number>();

  const toggleModal = () => {
    if (!isModalOpen) {
      setTimeout(() => {
        setIsModalOpen(!isModalOpen);
        bleeps.transmission?.play();
      }, 50);
      setTimeout(() => {
        bleeps.typing?.play();
        bleeps.expand?.play();
      }, 450);
      setTimeout(() => {
        bleeps.typing?.stop();
      }, 800);
    } else {
      setIsModalOpen(!isModalOpen)
      bleeps.hover?.play()
    }
  }

  useEffect(() => {
    if (isInView && !animationPlayed) {
      setAnimationPlayed(true);
    }
  }, [isInView, animationPlayed]);

  useEffect(() => {
    if (isInView && !active) {
      setTimeout(() => setActive(true), 2000);
      timerPlayId.current = window.setTimeout(() => bleeps.expand?.play(), 2100);
      timerStopId.current = window.setTimeout(() => bleeps.expand?.stop(), 2400);
    }
    
    return () => {
      clearTimeout(timerPlayId.current);
      clearTimeout(timerStopId.current);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref} 
      variants={fadeIn('up', fadeInSec)}
      initial='hidden'
      animate= {animationPlayed ? 'show' : 'hidden'}
      exit='show'
      transition={{duration: 1, ease: 'easeInOut'}}
      className='div'
    >
      <div className="
        relative cursor-pointer
        w-[100%] h-[200px] 
        md:h-[300px]
      ">
        <Animator active={active}>
          <FrameCorners>
            <Button name='click' onClick={toggleModal}>
              <div className="
                relative w-[75vw] h-[50vh]
                md:w-[40vh] md:h-[35vh]
                lg:w-[35vw] lg:h-[25vh]
                xl:w-[25vw] xl:h-[25vh]
                5xl:w-[22vw] 5xl:h-[20vh]
              ">
              <Image
                fill
                src={PROJECT_PUBLIC_SET[projectName]['image']['mainImageSrc']}
                alt="portfolio"  
                className="object-contain p-3"
                sizes="(min-width: 768px) 300px, 200px"
              />
              </div>
            </Button>
          </FrameCorners>
          <ProjectModal 
            isOpen={isModalOpen} 
            onClose={toggleModal} 
            projectPublicSet={PROJECT_PUBLIC_SET[projectName]} 
          />
        </Animator>
      </div>
    </motion.div>
  )
}

export default ProjectCard
