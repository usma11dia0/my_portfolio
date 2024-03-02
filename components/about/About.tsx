import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../variants"; 
import TextDecipher from '../elements/text/TextDecipher';
import FrameNefrex from '../elements/frame/FrameNefrex';

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <div id="section-about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="
        grid grid-cols-1 xl:grid-cols-2 
        w-[80%] mx-auto gap-[3rem] items-center">
        <motion.div
          ref={ref} 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='exit'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <h2 className="
            capitalize font-bold text-white
            text-[25px] leading-[2rem] mb-[3rem]
            md:text-[35px] md:leading-[3rem]
            lg:text-[45px]
          ">
            ABOUT
            <span className="
             text-[25px] text-neon-blue leading-[2rem] mb-[3rem]
             py-4 px-4
             md:text-[35px] md:leading-[3rem]
             lg:text-[45px]"
            >
              ME
            </span>
          </h2>
          <div className="mb-[3rem] flex-col items-center space-y-10">
            <div className="flex items-center space-x-5">
              <span className="w-[60px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
              <TextDecipher className="text-[19px] text-slate-300 w-[100%]">
                Web developer with several years of experience in building web applications, mobile applications, and web scraping. Proficient in leveraging latest technologies to create responsive, user-friendly, and scalable applications
              </TextDecipher>
            </div>
              <FrameNefrex>
                <div className="p-8">
                  <div className="py-2 text-[20px] text-neon-blue-without-flicker">QUALIFICATIONS</div>
                  <div className="py-2">
                    <TextDecipher className="text-[19px] text-sf-blue">- Fundamental Information Technology Engineer Examination (FE)</TextDecipher>
                  </div>
                  <div className="py-2">
                    <TextDecipher className="text-[19px] text-sf-blue">- AWS Solution Architect Associate</TextDecipher>
                  </div>
                  <div className="py-2">
                    <TextDecipher className="text-[19px] text-sf-blue">- TOEIC 905</TextDecipher>
                  </div>
                </div>
              </FrameNefrex>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <div className="
              relative hidden
              justify-center
              mx-auto mt-[2rem]
              md:mx-0
              xl:flex xl:w-[450px] xl:h-[450px] xl:mt-0
          ">
            <Image
              fill
              src="/images/about.jpg" 
              alt="user"
              className="relative z-[11] w-[100%] h-[100%] object-contain"
              sizes="(min-width: 1024px) 500px, 300px"
            />
            <div className="
              absolute top-[-2rem] right-[-2rem]
              w-[100%] h-[100%] z-[10] 
              bg-[#55e6a5]
            " />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
