import Image from 'next/image';
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../variants"; 

const Projects = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <div id="section-projects" className="bg-[#02050a] pt-[4rem] pb-[1rem] md:pt-[8rem]">
      <h1 className="heading">
        PRO<span className="text-[28px] sm:text-[33px] md:text-[45px] text-neon-blue">JECTS</span>
      </h1>
      <div className="
        grid grid-cols-1 gap-[2rem]
        md:grid-cols-2 
        lg:grid-cols-3
        w-[80%] pt-[2rem] mx-auto">
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0)}
            initial='hidden'
            animate= {isInView ? 'show' : 'hidden'}
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                fill
                src="/images/p1.jpg" 
                alt="portfolio"  
                className="object-contain"
                sizes="(min-width: 1024px) 33.3vw, (min-width: 768px)"
              />
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
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                fill
                src="/images/p2.jpg" 
                alt="portfolio"
                className="object-contain"
                sizes="(min-width: 768px) 300px, 200px"
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate= {isInView ? 'show' : 'hidden'}
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image
                fill
                src="/images/p3.jpg" 
                alt="portfolio"
                className="object-contain"
                sizes="(min-width: 768px) 300px, 200px"
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate= {isInView ? 'show' : 'hidden'}
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image
                fill
                src="/images/p4.jpg" 
                alt="portfolio"
                className="object-contain"
                sizes="(min-width: 768px) 300px, 200px"
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            animate= {isInView ? 'show' : 'hidden'}
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image
                fill
                src="/images/p5.jpg" 
                alt="portfolio"
                className="object-contain"
                sizes="(min-width: 768px) 300px, 200px"
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref} 
            variants={fadeIn('up', 1.0)}
            initial='hidden'
            animate= {isInView ? 'show' : 'hidden'}
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}}
            className='div'
          >
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image
                fill
                src="/images/p2.jpg" 
                alt="portfolio"
                className="object-contain"
                sizes="(min-width: 768px) 300px, 200px"
              />
            </div>
          </motion.div>
      </div>
    </div>
  );
}

export default Projects