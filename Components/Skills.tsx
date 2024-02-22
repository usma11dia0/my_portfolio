import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className="pt-[4rem] pb-[5rem] md:pt-[8rem] bg-[#09101a]">
      <h1 className="heading">
        Education ＆<span className="text-[28px] sm:text-[33px] md:text-[45px] py-4 px-3 text-neon-blue">Skills</span>
      </h1>
      <div className="
        w-[80%] pt-[4rem] mx-auto gap-[2rem] items-center
        grid grid-cols-1 
        md:pt-[8rem] md:grid-cols-2"
      >
        <div>
          <SkillsItem title="React Developer" year="2014 - 2018"/>
          <SkillsItem title="MERN Stack Developer" year="2016 - 2020"/>
          <SkillsLanguage 
            skill1="html" 
            skill2="css" 
            skill3="javascript" 
            level1="w-[91%]" 
            level2="w-[88%]" 
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem title="React Developer" year="2018 - 2021"/>
          <SkillsItem title="Node Js Developer" year="2021 - 2023"/>
          <SkillsLanguage 
            skill1="React Js" 
            skill2="Next Js" 
            skill3="Typescript" 
            level1="w-[91%]" 
            level2="w-[88%]" 
            level3="w-[80%]"/>
        </div>
      </div>
    </div>
  )
}

export default Skills