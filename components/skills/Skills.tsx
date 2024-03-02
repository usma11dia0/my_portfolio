import React from 'react'
import RadarChart from './RadarChart'
import { data_backend, data_devops, data_frontend, options } from '@/components/skills/chartConfig'

const Skills = () => {

  return (
    <div id="section-skills" className="pt-[4rem] pb-[5rem] md:pt-[8rem] bg-[#09101a]">
      <h1 className="heading">
        <span className="text-[28px] sm:text-[33px] md:text-[45px] py-4 px-3 text-neon-blue">Skills</span>
      </h1>
      <div className="
        w-[80%] pt-[4rem] mx-auto gap-[2rem] items-center
        grid grid-cols-1 
        md:pt-[8rem] 3xl:grid-cols-3"
      >
        <div>
          <RadarChart options={options} data={data_frontend}/>
        </div>
        <div>
          <RadarChart options={options} data={data_backend}/>
        </div>
        <div>
          <RadarChart options={options} data={data_devops}/>
        </div>
      </div>
    </div>
  )
}

export default Skills
