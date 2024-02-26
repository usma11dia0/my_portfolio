import React from 'react'

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="
        grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
        w-[80%] gap-[3rem] mx-auto
        border-b-[1px] border-gray-400"
       />
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          usma11dia0's portfolio | 2024 02/24 Updated 
        </div>
        <div className="flex items-center space-x-10">
        </div>
      </div>
    </div>
  )
}

export default Footer