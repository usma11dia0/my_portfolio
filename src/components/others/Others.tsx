import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Others = () => {
  return (
    <div id="section-others" className="
      pt-[3rem] pb-[8rem] bg-[rgb(2,5,10)]
      md:pt-[8rem]
      mdAndLgh:pt-[4rem]
      lg:pt-[2.5rem]
      2xlAndLgh:pt-[5rem]
      3xl:pt-[7rem]
      3xlAndMdh:pt-[2rem]
      4xl:pt-[5rem]
      5xl:pt-[3rem]
      5xlAnd1xl:pt-[12rem] 5xlAnd1xl:pb-[20rem]
    ">
      <h1 className="heading">
         <span className="text-[28px] sm:text-[33px] md:text-[45px] text-neon-blue"> Others</span>
      </h1>
      <div className="
        grid grid-cols-1 w-[80%] mt-[2.5rem] gap-[3rem] mx-auto
        md:mt-[4rem] 
        4xl:pt-[5rem]
        5xl:pt-[2rem]
        lg:grid-cols-2 
        xl:grid-cols-3">
        <div>
          <div className="relative w-[100%] h-[400px]">
            <Image
              fill
              src="/images/blog1.jpg" 
              alt="blog"
              className="object-cover"
              sizes="(min-width: 1280px) 33.3vw, (min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative text-center w-[90%] p-[2rem] mt-[-1rem] mx-auto bg-[#09101a]">
            <div className="relative px-[2rem] py-[1rem] mt-[-3rem] w-fit mx-auto text-[17px] bg-[#55e6a5] text-black font-semibold">
              Articles in Zenn
            </div>
            <div className="flex flex-col justify-center md:flex-row items-center  mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                <p className="text-white">By Sajal</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                <p className="text-white">Comments (12)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next js Fullstack Development</p>
          </div>
        </div>
        <div>
          <div className="relative w-[100%] h-[400px]">
            <Image
              fill
              src="/images/blog2.jpg" 
              alt="blog"
              className="object-cover"
              sizes="(min-width: 1280px) 33.3vw, (min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative text-center w-[90%] p-[2rem] mt-[-1rem] mx-auto bg-[#09101a]">
            <div className="relative px-[2rem] py-[1rem] mt-[-3rem] w-fit mx-auto text-[17px] bg-[#55e6a5] text-black font-semibold">
              AI Illustration
            </div>
            <div className="flex flex-col justify-center md:flex-row items-center  mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                <p className="text-white">By Sajal</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                <p className="text-white">Comments (12)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next js Fullstack Development</p>
          </div>
        </div>
        <div>
          <div className="relative w-[100%] h-[400px]">
            <Image
              fill
              src="/images/blog3.jpg" 
              alt="blog" 
              className="object-cover"
              sizes="(min-width: 1280px) 33.3vw, (min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative text-center w-[90%] p-[2rem] mt-[-1rem] mx-auto bg-[#09101a]">
            <div className="relative px-[2rem] py-[1rem] mt-[-3rem] w-fit mx-auto text-[17px] bg-[#55e6a5] text-black font-semibold">
              ???
            </div>
            <div className="flex flex-col justify-center md:flex-row items-center  mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                <p className="text-white">By Sajal</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                <p className="text-white">Comments (12)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next js Fullstack Development</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Others
