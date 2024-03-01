import React, { useRef } from 'react'
import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../variants"; 

const Services = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <div id="section-services" className='pt-[4rem] pb-[5rem] bg-[#121212] md:pt-[8rem]'>
      <p className="heading">
        My<span className="text-[28px] sm:text-[33px] md:text-[45px] py-4 px-4 text-neon-blue">Services</span></p>
      <div className="
        grid grid-cols-1 items-center 
        md:grid-cols-2 
        lg:grid-cols-3 
        w-[80%] mx-auto mt-[4rem] gap-[3rem]
        text-white"
      >
        <motion.div
          ref={ref} 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <div className="
            p-[2rem] text-center 
            bg-red-700  
            uppercase font-semibold
            transform transition-all duration-300
            hover:scale-110 hover:-rotate-6
          ">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              APP DEVELOPMENT
            </h1>
            <p className="text-[15px] text-[d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur ratione officia quo est rem omnis perspiciatis maxime cumque dolorum. 
              Commodi assumenda tempore, ut ab rerum itaque molestiae. Quae, neque magni?
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref} 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <div className="
            p-[2rem] text-center 
            bg-orange-700  
            uppercase font-semibold
            transform transition-all duration-300
            hover:scale-110
          ">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              WEB SCRAPING
            </h1>
            <p className="text-[15px] text-[d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur ratione officia quo est rem omnis perspiciatis maxime cumque dolorum. 
              Commodi assumenda tempore, ut ab rerum itaque molestiae. Quae, neque magni?
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref} 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <div className="
            p-[2rem] text-center 
            bg-blue-700
            uppercase font-semibold
            transform transition-all duration-300
            hover:scale-110 hover:rotate-6
          ">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              AI Illustlation
            </h1>
            <p className="text-[15px] text-[d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur ratione officia quo est rem omnis perspiciatis maxime cumque dolorum. 
              Commodi assumenda tempore, ut ab rerum itaque molestiae. Quae, neque magni?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services