import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="
        grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
        w-[80%] pb-[6rem] gap-[3rem] mx-auto
        border-b-[1px] border-gray-400"
      >
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center w-[5rem] h-[5rem] md:w-[6.5rem] md:h-[6.5rem] rounded-full bg-[#55e6a5]">
            <MapIcon className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] text-black "/>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Address
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Lorem, ipsum dolor sit
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center w-[5rem] h-[5rem] md:w-[6.5rem] md:h-[6.5rem] rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] text-black "/>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Send Me Email
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              usma11dia0@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center w-[5rem] h-[5rem] md:w-[6.5rem] md:h-[6.5rem] rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] text-black "/>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Phone
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              +0938459060
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          usma11dia0's portfolio 2024 | All Right Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[18px] text-white opacity-20">Terms ＆ Condition</p>
          <p className="text-[18px] text-white opacity-20">Terms ＆ Privacy Policy</p>
          <p className="text-[18px] text-white opacity-20">Terms ＆ Sitemap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer