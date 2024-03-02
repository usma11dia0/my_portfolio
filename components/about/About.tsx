import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../variants"; 

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <div id="section-about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <motion.div
          ref={ref} 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='hidden'
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
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I'm a web developer from Osaka. Captivated by the realm of IT technology, 
              I made a career shift into the IT sector at the age of 30, coming from a non-technical background. 
              My expertise spans a broad array of areas, including API development with AWS Cloud, web scraping using Python, and mobile application development with Flutter.
            </p>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Qualification
              TOEIC 905
              基本情報技術者
              AWS Solution Architect
            </p>
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
              relative
              w-[300px] h-[300px] mx-auto mt-[2rem]
              md:mx-0
              lg:w-[500px] lg:h-[500px] lg:mt-0
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
