import React from 'react'

interface Props {
    title: string
    year: string
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="text-[18px] px-[2rem] py-[0.9rem] text-[#55e6a5] font-bold border-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="text-[20px] mt-[2rem] mb-[1rem] uppercase font-semibold text-white sm:text-[25px] md:text-[30px]">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequatur minus hic neque cupiditate illum iure aliquid possimus 
        inventore adipisci totam fuga facere repudiandae sit, 
        ratione deserunt deleniti explicabo incidunt aperiam?
      </p>
    </div>
  )
}

export default SkillsItem