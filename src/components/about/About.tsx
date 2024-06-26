import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../variants"; 
import TextDecipher from '../elements/text/TextDecipher';
import FrameNefrex from '../elements/frame/FrameNefrex';
import { useTranslations } from 'next-intl';

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations('about');

  return (
    <div id="section-about" className="
      bg-[#121121] 
      pt-[4rem] pb-[8rem]
      sm:pt-[10rem] 
      md:pt-[8rem]
      mdAndLgh:pt-[12rem]
      mdAnd2Lgh:pb-[28rem]
      lg:pt-[2rem]
      lgAnd1xlh:pt-[17rem] lgAnd1xlh:pb-[25rem]
      1xl:pt-[2rem] 1xl:pb-[15rem]
      1xlAndMdh:pt-[2rem] 1xlAndMdh:pb-[16rem]
      1xlAnd1Mdh:pt-[5rem] 1xlAnd1Mdh:pb-[25rem]
      1xlAndLgh:pt-[11rem]
      2xlAndLgh:pt-[10rem]
      3xl:pt-[10rem] 3xl:pb-[20rem]
      3xlAndMdh:pt-[6rem]
      4xl:pt-[10rem]
      5xl:pt-[6rem] 5xl:pb-[20rem]
      5xlAnd1xl:pt-[20rem] 
    ">
      <div className="
        grid grid-cols-1 1xl:grid-cols-2 
        w-[80%] mx-auto gap-[3rem] items-center">
        {/* Left Side */}
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
            text-[25px] leading-[2rem] mb-[1.5rem]
            md:text-[45px] md:leading-[3rem] md:mb-[2rem]
          ">
            ABOUT
            <span className="
             text-[25px] text-neon-blue
             py-4 px-4
             md:text-[45px] md:leading-[3rem]
            ">
              ME
            </span>
          </h2>
          <div className="flex-col items-center space-y-10">
            <div className="
              flex items-center space-x-5
            ">
              <span className="
                w-[60px] hidden h-[5px] bg-slate-400 rounded-sm 
                2xl:block
              "></span>
              <TextDecipher className="
                text-[16px] text-slate-300 w-[100%] min-h-[180px]
                md:text-[20px]
                lg:min-h-[130px]
                2xl:min-h-[180px] 2xl:text-[21px] 2xl:pt-2
                3xl:text-[22px] 3xl:leading-relaxed
                5xl:text-[24px] 5xl:leading-relaxed 5xl:pt-7
              ">
                {t('details')}
              </TextDecipher>
            </div>
              <FrameNefrex>
                <div className="p-8 lg:p-9 1xl:p-7">
                  <div className="py-2 text-[20px] lg:text-[24px] text-neon-blue-without-flicker">QUALIFICATIONS</div>   
                  {t.raw('qualifications').map((qualification: string, index: number) => (
                    <div key={index} className="py-2 lg:py-4 1xl:py-2">
                      <TextDecipher className="text-[16px] lg:text-[20px] text-sf-blue">
                        - {qualification}
                      </TextDecipher>
                    </div>
                  ))}
                </div>
              </FrameNefrex>
          </div>
        </motion.div>
        {/* Right Side */}
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
              1xl:flex 1xl:w-[500px] 1xl:h-[500px] 1xl:mt-25
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
