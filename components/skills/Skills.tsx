import React, { useEffect, useRef, useState } from 'react'
import RadarChart from './RadarChart'
import { dataInit, dataBackend, dataDevOps, dataFrontend, options } from '@/components/skills/chartConfig'
import { motion, useInView } from 'framer-motion'
import { fadeIn } from '@/variants'
import type { ChartData, ChartOptions } from 'chart.js';

const Skills = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const [chartFrontEndData, setChartFrontEndData] = useState<ChartData<"radar", (number | null)[], unknown>>(dataInit);
  const [chartBackEndData, setChartBackEndData] = useState<ChartData<"radar", (number | null)[], unknown>>(dataInit);
  const [chartDevOpsData, setChartDevOpsData] = useState<ChartData<"radar", (number | null)[], unknown>>(dataInit);

  useEffect(() => {
    if(isInView) {
      setTimeout(() => {
        setChartFrontEndData(dataFrontend);
        setChartBackEndData(dataBackend);
        setChartDevOpsData(dataDevOps);
      }, 300)
    }
  }, [isInView]);

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
        <motion.div
          ref={ref} 
          variants={fadeIn('up', 0)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='show'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <RadarChart options={options} data={chartFrontEndData}/>
        </motion.div>
        <motion.div
          ref={ref} 
          variants={fadeIn('up', 0)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='show'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <RadarChart options={options} data={chartBackEndData}/>
        </motion.div>
        <motion.div
          ref={ref} 
          variants={fadeIn('up', 0)}
          initial='hidden'
          animate= {isInView ? 'show' : 'hidden'}
          exit='show'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <RadarChart options={options} data={chartDevOpsData}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
