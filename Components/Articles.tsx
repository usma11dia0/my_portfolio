import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Articles = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        My <span className="text-neon-blue"> Articles</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[80%] mt-[4rem] gap-[3rem] mx-auto">
        <div>
          <div className="relative w-[100%] h-[400px]">
            <Image 
              src="/images/blog1.jpg" 
              alt="blog" 
              layout="fill" 
              className="object-cover"
            />
          </div>
          <div className="relative text-center w-[90%] p-[2rem] mt-[-1rem] mx-auto bg-[#09101a]">
            <div className="relative px-[2rem] py-[1rem] mt-[-3rem] w-fit mx-auto text-[17px] bg-[#55e6a5] text-black font-semibold">
              December 10, 2023
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
              src="/images/blog2.jpg" 
              alt="blog" 
              layout="fill" 
              className="object-cover"
            />
          </div>
          <div className="relative text-center w-[90%] p-[2rem] mt-[-1rem] mx-auto bg-[#09101a]">
            <div className="relative px-[2rem] py-[1rem] mt-[-3rem] w-fit mx-auto text-[17px] bg-[#55e6a5] text-black font-semibold">
              December 10, 2023
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
              src="/images/blog3.jpg" 
              alt="blog" 
              layout="fill" 
              className="object-cover"
            />
          </div>
          <div className="relative text-center w-[90%] p-[2rem] mt-[-1rem] mx-auto bg-[#09101a]">
            <div className="relative px-[2rem] py-[1rem] mt-[-3rem] w-fit mx-auto text-[17px] bg-[#55e6a5] text-black font-semibold">
              December 10, 2023
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

export default Articles