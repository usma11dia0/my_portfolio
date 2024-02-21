import React from 'react'

interface Props {
    skill1: string
    skill2: string
    skill3: string
    level1: string
    level2: string
    level3: string
}

const SkillsLanguage = ({ 
    level1, 
    level2, 
    level3,
    skill1,
    skill2,
    skill3, 
}: Props) => {
  return (
    <div>
      <div className="relative mb-[3rem]">
        <h1 className="text-[20px] p-5 w-[100%] text-white uppercase font-bold bg-gray-800 rounded-sm">
          {skill1}
        </h1>
        <span className={`absolute bottom-0 ${level1} h-[6px] bg-[#55e6a5]`}></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="text-[20px] p-5 w-[100%] text-white uppercase font-bold bg-gray-800 rounded-sm">
          {skill2}
        </h1>
        <span className={`absolute bottom-0 ${level2} h-[6px] bg-[#55e6a5]`}></span>
      </div>
      <div className="relative mb-[3rem]">
        <h1 className="text-[20px] p-5 w-[100%] text-white uppercase font-bold bg-gray-800 rounded-sm">
          {skill3}
        </h1>
        <span className={`absolute bottom-0 ${level3} h-[6px] bg-[#55e6a5]`}></span>
      </div>
    </div>    
  )
}

export default SkillsLanguage