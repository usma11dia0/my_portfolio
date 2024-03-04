import React, { useEffect, useRef, useState } from 'react';
import RadarChart from './RadarChart';
import { dataInit, dataBackend, dataDevOps, dataFrontend, options } from '@/components/skills/chartConfig';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '@/variants';
import type { ChartData } from 'chart.js';
import { Animator } from '@arwes/react-animator';
import FrameLines from '../elements/frame/FrameLines';
import TextBasic from '../elements/text/TextBasic';
import { useBleeps } from '@arwes/react';

type BleepsNames = 'looping';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false })
  const [chartFrontEndData, setChartFrontEndData] = useState<ChartData<"radar", (number | null)[], unknown>>(dataInit);
  const [chartBackEndData, setChartBackEndData] = useState<ChartData<"radar", (number | null)[], unknown>>(dataInit);
  const [chartDevOpsData, setChartDevOpsData] = useState<ChartData<"radar", (number | null)[], unknown>>(dataInit);
  const [active, setActive] = useState(false);
  const bleeps = useBleeps<BleepsNames>();

  useEffect(() => {
    let timerPlayId: number;
    let timerStopId: number;

    if (isInView) {
      setTimeout(() => {
        setChartFrontEndData(dataFrontend);
        setChartBackEndData(dataBackend);
        setChartDevOpsData(dataDevOps);
      }, 150);
      setTimeout(() => {
        setActive(true)
      }, 900);
      timerPlayId = window.setTimeout(() => {
        bleeps.looping?.play();
      }, 1300);
      // play()から1秒後にbleepsをstop
      timerStopId = window.setTimeout(() => {
        bleeps.looping?.stop();
      }, 2000);
    }
    // クリーンアップ関数
    return () => {
      setActive(false);
      setChartFrontEndData(dataInit);
      setChartBackEndData(dataInit);
      setChartDevOpsData(dataInit);
      if (timerPlayId !== undefined) clearTimeout(timerPlayId);
      if (timerStopId !== undefined) clearTimeout(timerStopId);
    };
  }, [isInView]);

  return (
    <div id="section-skills" className="pt-[4rem] pb-[5rem] md:pt-[8rem] bg-[#09101a]">
      <h1 className="heading">
        <span className="text-[28px] sm:text-[33px] md:text-[45px] py-1 px-2 text-neon-blue">Skills</span>
      </h1>
      <div className="
        w-[80%] pt-[4rem] mx-auto gap-[2rem] items-center
        grid grid-cols-1 
        md:pt-[1rem] 3xl:grid-cols-3"
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
          <div className="p-2" />
          <Animator active={active}>
            <FrameLines theme={'frontEnd'}>
              <div className="p-4 pl-16">
                <TextBasic className="pb-2 text-[20px] text-neon-blue-without-flicker">Details</TextBasic>
                  <TextBasic className="text-white">
                    ■ HTML/CSS - 2 years of experience<br />
                    ■ JavaScript - 2 year of experience<br />
                    ■ TypeScript - 1 year of experience<br />
                    ■ Dart/Flutter - 1 year of experience<br />
                    ■ React - 1 year of experience<br />
                    ■ Next.js - ※currently studying<br />
                  </TextBasic>
              </div>
            </FrameLines>
          </Animator>
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
          <div className="p-2" />
          <Animator active={active}>
            <FrameLines theme={'backEnd'}>
              <div className="p-4 pl-16">
                <TextBasic className="pb-2 text-[20px] text-neon-red-without-flicker">Details</TextBasic>
                  <TextBasic className="text-white">
                    ■ Python - 2 years of experiences<br />
                    ■ FastAPI - 1 years of Experiences<br />
                    ■ Rust - ※currently studying<br />
                    ■ PostgreSQL - 1 year Experiences<br />
                    ■ Ruby - a half year Experiences<br />
                    ■ Node.js - a half year Experiences<br />
                  </TextBasic>
              </div>
            </FrameLines>
          </Animator>
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
          <div className="p-2" />
          <Animator active={active}>
            <FrameLines theme={'devOps'}>
              <div className="p-4 pl-16">
                <TextBasic className="pb-2 text-[20px] text-neon-yellow-without-flicker">Details</TextBasic>
                  <TextBasic className="text-white">
                    ■ AWS - 1 year Experiences<br />
                    ■ GCP - a half year Experiences<br />
                    ■ Azure - ※currently studying<br />
                    ■ Docker - 1 year Experiences<br />
                    ■ Git- 2 year Experiences<br />
                    ■ Jira - 1 year Experiences<br />
                  </TextBasic>
              </div>
            </FrameLines>
          </Animator>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
