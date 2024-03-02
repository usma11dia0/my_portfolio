import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect';
import Image from 'next/image';
import ProjectsBtn from './ProjectsBtn';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"; 

const Hero = () => {
  return (
    <div 
      className="h-[88vh] bg-banner mt-[10vh] bg-cover bg-center"
    >
      <Particle />
      <div className="
        w-[80%] h-[100%] mx-auto
        grid-cols-1 grid gap-[3rem] items-center
        lg:grid-cols-2">
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I'm <span className="text-[35px] md:text-[50px] text-[#1FFFFF]">usma11dia0</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Let me give you a quick introduction to who I am and share with you the fields I'm deeply passionate about working in.
          </p>
          <div className="
            mt-[2rem] flex-col space-y-6 items-center justify-center
            sm:space-y-0 sm:flex sm:flex-row sm:space-x-6"
          >
            <ProjectsBtn />
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
          >
          <div className="
              relative hidden
              w-[500px] h-[500px] 
              bg-[#55e6a5]
              rounded-full 
              lg:flex items-center
            ">
            <Image
              fill
              src="/images/u1.jpg" 
              alt="user" 
              className="object-cover rounded-full"
              sizes="(min-width: 500px) 100vw"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
