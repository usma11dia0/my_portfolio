import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect';
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="
        w-[80%] h-[100%] mx-auto
        grid-cols-1 grid gap-[3rem] items-center
        lg:grid-cols-2">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I'm <span className="text-[35px] md:text-[50px] text-[#1FFFFF]">usma11dia0</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Let me give you a quick introduction to who I am and share with you the fields I'm deeply passionate about working in.
          </p>
          <div className="
            mt-[2rem] flex-col space-y-6
            sm:space-y-0 sm:flex sm:flex-row sm:space-x-6"
            item-center
          >
            {/* <button className="
              px-[2rem] py-[1rem]
              bg-[#55e6a5] hover:bg-yellow-400
              text-[18px] font-bold uppercase text-black
              flex items-center space-x-2
              transition-all duration-200
            ">
              <p>Download Cv</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] text-[#55e6a5] hover:text-neon-blue transition-all duration-200" />
              <p className="text-[20px] font-semibold text-white">
                Watch The Video
              </p>
            </button> */}
          </div>
        </div>
        <div className="
            relative hidden
            w-[500px] h-[500px] 
            bg-[#55e6a5]
            rounded-full 
            lg:flex items-center
          ">
          <Image 
            src="/images/u1.jpg" 
            alt="user" 
            layout="fill" 
            className="object-cover rounded-full"
            rounded-full 
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;