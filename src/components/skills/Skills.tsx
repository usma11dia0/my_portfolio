import React, { useEffect, useRef, useState } from 'react';
import RadarChart from './RadarChart';
import { DATA_INIT, DATA_BACKEND, DATA_DEVOPS, DATA_FRONTEND, options } from '@/components/skills/chartConfig';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '@/variants';
import type { ChartData } from 'chart.js';
import { Animator } from '@arwes/react-animator';
import FrameLines from '../elements/frame/FrameLines';
import TextBasic from '../elements/text/TextBasic';
import { useBleeps } from '@arwes/react';
import PuffsAndGridBG from '../elements/background/PuffsAndGridBG';

type BleepsNames = 'looping';

const Skills = () => {
  const [chartFrontendData, setChartFrontendData] = useState<ChartData<"radar", (number | null)[], unknown>>(DATA_INIT);
  const [chartBackendData, setChartBackendData] = useState<ChartData<"radar", (number | null)[], unknown>>(DATA_INIT);
  const [chartDevOpsData, setChartDevOpsData] = useState<ChartData<"radar", (number | null)[], unknown>>(DATA_INIT);
  const [activeFrontend, setActiveFrontend] = useState<boolean>(false);
  const [activeBackend, setActiveBackend] = useState<boolean>(false);
  const [activeDevOps, setActiveDevOps] = useState<boolean>(false);

  const bleeps = useBleeps<BleepsNames>();

  const refFrontend = useRef(null);
  const isInViewFrontend = useInView(refFrontend, { once: false,  amount: 0.2 });
  const refBackend = useRef(null);
  const isInViewBackend = useInView(refBackend, { once: false,  amount: 0.2 });
  const refDevOps = useRef(null);
  const isInViewDevOps = useInView(refDevOps, { once: false,  amount: 0.2 });

  const timerFrontendPlayId = useRef<number>();
  const timerFrontendStopId = useRef<number>();
  const timerBackendPlayId = useRef<number>();
  const timerBackendStopId = useRef<number>();
  const timerDevOpsPlayId = useRef<number>();
  const timerDevOpsStopId = useRef<number>();

  // Frontendの表示状態に応じた副作用
  useEffect(() => {
    if (isInViewFrontend) {
      setTimeout(() => setChartFrontendData(DATA_FRONTEND), 150);
      setTimeout(() => setActiveFrontend(true), 900);
      timerFrontendPlayId.current = window.setTimeout(() => bleeps.looping?.play(), 1300);
      timerFrontendStopId.current = window.setTimeout(() => bleeps.looping?.stop(), 2300);
    }

    return () => {
      setActiveFrontend(false);
      setChartFrontendData(DATA_INIT);
      clearTimeout(timerFrontendPlayId.current);
      clearTimeout(timerFrontendStopId.current);
    };
  }, [isInViewFrontend]);

  // Backendの表示状態に応じた副作用
  useEffect(() => {
    if (isInViewBackend) {
      setTimeout(() => setChartBackendData(DATA_BACKEND), 150);
      setTimeout(() => setActiveBackend(true), 900);
      timerBackendPlayId.current = window.setTimeout(() => bleeps.looping?.play(), 1300);
      timerBackendStopId.current = window.setTimeout(() => bleeps.looping?.stop(), 2300);
    }

    return () => {
      setActiveBackend(false);
      setChartBackendData(DATA_INIT);
      clearTimeout(timerBackendPlayId.current);
      clearTimeout(timerBackendStopId.current);
    };
  }, [isInViewBackend]);

  // DevOpsの表示状態に応じた副作用
  useEffect(() => {
    if (isInViewDevOps) {
      setTimeout(() => setChartDevOpsData(DATA_DEVOPS), 150);
      setTimeout(() => setActiveDevOps(true), 900);
      timerDevOpsPlayId.current = window.setTimeout(() => bleeps.looping?.play(), 1300);
      timerDevOpsStopId.current = window.setTimeout(() => bleeps.looping?.stop(), 2300);
    }

    return () => {
      setActiveDevOps(false);
      setChartDevOpsData(DATA_INIT);
      clearTimeout(timerDevOpsPlayId.current);
      clearTimeout(timerDevOpsStopId.current);
    };
  }, [isInViewDevOps]);

  return (
    <div id="section-skills" className="
      relative bg-[#09101a] pt-[3rem] pb-[5rem] 
      md:pt-[8rem]
      mdAndLgh:pt-[4rem]
      lg:pt-[2.5rem]
      2xlAndLgh:pt-[5rem]
      3xl:pt-[7rem]
      3xlAndMdh:pt-[2rem]
      4xl:pt-[5rem]
      5xl:pt-[3rem]
      5xlAnd1xl:pt-[12rem]
    ">
      <PuffsAndGridBG zIndex={0}/>
      <h1 className="heading">
        <span className="
          relative text-neon-blue text-[28px] px-2 
          sm:text-[33px] 
          md:text-[45px]
        ">
          Skills
        </span>
      </h1>
      <div className="
        w-[80%] pt-[2rem] pb-[8rem] mx-auto gap-[2rem] items-center
        grid grid-cols-1 2xl:grid-cols-3
        md:pt-[4rem] 
        xl:pt-[2rem]
        2xlAndLgh:pt-[5rem]
        3xl:pb-[20rem]
        4xl:pt-[5rem]
        5xl:pt-[2rem]
        "
      >
        {/* Frontend Skill */}
        <motion.div
          ref={refFrontend} 
          variants={fadeIn('up', 0)}
          initial='hidden'
          animate= {isInViewFrontend ? 'show' : 'hidden'}
          exit='show'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <div className="
            flex flex-col items-center
            lg:flex-row lg:items-center lg:justify-center
            2xl:flex-col"
          >
            <RadarChart options={options} data={chartFrontendData}/>
            <div className="p-3" />
            <Animator active={activeFrontend}>
              <FrameLines theme={'frontEnd'}>
                <div className="p-4 pl-6">
                  <TextBasic className="
                    text-white text-[14px]
                    sm:text-[16px]
                    " 
                    enterSec={0.8}
                  >
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
          </div>
        </motion.div>
        {/* Backend Skill */}
        <motion.div
          ref={refBackend} 
          variants={fadeIn('up', 0)}
          initial='hidden'
          animate= {isInViewBackend ? 'show' : 'hidden'}
          exit='show'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <div className="
            flex flex-col items-center
            lg:flex-row  lg:items-center lg:justify-center
            2xl:flex-col"
          >
            <RadarChart options={options} data={chartBackendData}/>
            <div className="p-3" />
            <Animator active={activeBackend}>
              <FrameLines theme={'backEnd'}>
                <div className="p-4 pl-6">
                  <TextBasic className="
                    text-white text-[14px]
                    sm:text-[16px]
                    " 
                    enterSec={0.8}
                  >
                    ■ Python - 2 years of experience<br />
                    ■ FastAPI - 1 years of Experience<br />
                    ■ Rust - ※currently studying<br />
                    ■ PostgreSQL - 1 year Experience<br />
                    ■ Ruby - a half year Experience<br />
                    ■ Node.js - a half year Experience<br />
                  </TextBasic>
                </div>
              </FrameLines>
            </Animator>
            </div>
        </motion.div>
        {/* DevOps Skill */}
        <motion.div
          ref={refDevOps} 
          variants={fadeIn('up', 0)}
          initial='hidden'
          animate= {isInViewDevOps ? 'show' : 'hidden'}
          exit='show'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='div'
        >
          <div className="
            flex flex-col items-center
            lg:flex-row lg:items-center lg:justify-center
            2xl:flex-col"
          >
            <RadarChart options={options} data={chartDevOpsData}/>
            <div className="p-3" />
            <Animator active={activeDevOps}>
              <FrameLines theme={'devOps'}>
                <div className="p-4 pl-6">
                <TextBasic className="
                    text-white text-[14px]
                    sm:text-[16px]
                    " 
                    enterSec={0.8}
                  >
                    ■ AWS - 1 year Experience<br />
                    ■ GCP - a half year Experience<br />
                    ■ Azure - ※currently studying<br />
                    ■ Docker - 1 year Experience<br />
                    ■ Git- 2 year Experience<br />
                    ■ Jira - 1 year Experience<br />
                  </TextBasic>
                </div>
              </FrameLines>
            </Animator>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
