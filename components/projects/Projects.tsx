import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../variants"; 
import FrameCorners from '../elements/frame/FrameCorners';
import { Animator, useBleeps} from '@arwes/react';
import MovingLinesBG from '../elements/background/MovingLinesBG';
import Button from '../elements/button/Button';

type BleepsNames = 'expand';

const Projects = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false })
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [active, setActive] = useState(false);

  const bleeps = useBleeps<BleepsNames>();
  const timerPlayId = useRef<number>();
  const timerStopId = useRef<number>();

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
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0)}
            initial='hidden'
            animate= {animationPlayed ? 'show' : 'hidden'}
            exit='show'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              md:h-[300px]
            ">
              <Animator active={active}>
                <FrameCorners>
                  <Button name='transmission'>
                    <Image
                      fill
                      src="/images/p1.jpg" 
                      alt="portfolio"  
                      className="object-contain p-3"
                      sizes="(min-width: 768px) 300px, 200px"
                    />
                  </Button>
                </FrameCorners>
              </Animator>
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate= {animationPlayed ? 'show' : 'hidden'}
            exit='show'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              md:h-[300px]
            ">
              <Animator active={active}>
                <FrameCorners>
                  <Button name='transmission'>
                    <Image
                      fill
                      src="/images/p5.jpg" 
                      alt="portfolio"  
                      className="object-contain p-3"
                      sizes="(min-width: 768px) 300px, 200px"
                    />
                  </Button>
                </FrameCorners>
              </Animator>
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate= {animationPlayed ? 'show' : 'hidden'}
            exit='show'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              md:h-[300px]
            ">
              <Animator active={active}>
                <FrameCorners>
                  <Button name='transmission'>
                    <Image
                      fill
                      src="/images/p5.jpg" 
                      alt="portfolio"  
                      className="object-contain p-3"
                      sizes="(min-width: 768px) 300px, 200px"
                    />
                  </Button>
                </FrameCorners>
              </Animator>
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate= {animationPlayed ? 'show' : 'hidden'}
            exit='show'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              md:h-[300px]
            ">
              <Animator active={active}>
                <FrameCorners>
                  <Button name='transmission'>
                    <Image
                      fill
                      src="/images/p5.jpg" 
                      alt="portfolio"  
                      className="object-contain p-3"
                      sizes="(min-width: 768px) 300px, 200px"
                    />
                  </Button>
                </FrameCorners>
              </Animator>
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            animate= {animationPlayed ? 'show' : 'hidden'}
            exit='show'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              md:h-[300px]
            ">
              <Animator active={active}>
                <FrameCorners>
                  <Button name='transmission'>
                    <Image
                      fill
                      src="/images/p5.jpg" 
                      alt="portfolio"  
                      className="object-contain p-3"
                      sizes="(min-width: 768px) 300px, 200px"
                    />
                  </Button>
                </FrameCorners>
              </Animator>
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 1.0)}
            initial='hidden'
            animate= {animationPlayed ? 'show' : 'hidden'}
            exit='show'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              md:h-[300px]
            ">
              <Animator active={active}>
                <FrameCorners>
                  <Button name='transmission'>
                    <Image
                      fill
                      src="/images/p5.jpg" 
                      alt="portfolio"  
                      className="object-contain p-3"
                      sizes="(min-width: 768px) 300px, 200px"
                    />
                  </Button>
                </FrameCorners>
              </Animator>
            </div>
          </motion.div>
      </div>
    </div>
  );
}

export default Projects
