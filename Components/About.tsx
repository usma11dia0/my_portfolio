import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h2 className="
            capitalize font-bold text-white
            text-[25px] leading-[2rem] mb-[3rem]
            md:text-[35px] md:leading-[3rem]
            lg:text-[45px]
          ">
            ABOUT
            <span className="
             text-[25px] text-neon-blue leading-[2rem] mb-[3rem]
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
          </div>
            <button className="
              px-[2rem] py-[1rem]
              bg-[#55e6a5] hover:bg-yellow-400
              text-[18px] font-bold uppercase text-black
              flex items-center space-x-2
              transition-all duration-200
            ">
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
        </div>
        <div data-aos="fade-left"
          className="
            relative
            w-[300px] h-[300px] mx-auto mt-[2rem]
            md:mx-0
            lg:w-[500px] lg:h-[500px] lg:mt-0
        ">
          <Image
            src="/images/about.jpg" 
            alt="user" 
            layout="fill" 
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain" 
          />
          <div className="
            absolute top-[-2rem] right-[-2rem]
            w-[100%] h-[100%] z-[10] 
            bg-[#55e6a5]
          "></div>
        </div>
      </div>
    </div>
  )
}

export default About