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
import { useTranslations } from 'next-intl';

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

  const t = useTranslations('skills');
  const ft = t.raw('frontend');
  const bt = t.raw('backend');
  const dt = t.raw('devOps');

  function useSkillEffect(
    isInView: boolean, 
    setData: React.Dispatch<React.SetStateAction<ChartData<"radar", (number | null)[], unknown>>>, 
    data: ChartData<"radar", (number | null)[], unknown>, 
    setActive: React.Dispatch<React.SetStateAction<boolean>>, 
    timerPlayIdRef: React.MutableRefObject<number | undefined>, 
    timerStopIdRef: React.MutableRefObject<number | undefined>
    ) {
    useEffect(() => {
      if (isInView) {
        setTimeout(() => setData(data), 150);
        setTimeout(() => setActive(true), 900);
        timerPlayIdRef.current = window.setTimeout(() => bleeps.looping?.play(), 1300);
        timerStopIdRef.current = window.setTimeout(() => bleeps.looping?.stop(), 2300);
      }
  
      return () => {
        setActive(false);
        setData(DATA_INIT);
        clearTimeout(timerPlayIdRef.current);
        clearTimeout(timerStopIdRef.current);
      };
      // `bleeps.looping` は依存関係から除外
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView, setData, data, setActive, timerPlayIdRef, timerStopIdRef]);
  }
  
  useSkillEffect(isInViewFrontend, setChartFrontendData, DATA_FRONTEND, setActiveFrontend, timerFrontendPlayId, timerFrontendStopId);
  useSkillEffect(isInViewBackend, setChartBackendData, DATA_BACKEND, setActiveBackend, timerBackendPlayId, timerBackendStopId);
  useSkillEffect(isInViewDevOps, setChartDevOpsData, DATA_DEVOPS, setActiveDevOps, timerDevOpsPlayId, timerDevOpsStopId);

  return (
    <div id="section-skills" className="
      relative bg-[#09101a] pt-[3rem] pb-[5rem] 
      md:pt-[8rem]
      mdAndLgh:pt-[4rem]
      lg:pt-[2.5rem]
      1xlAndMdh:pt-[0.5rem]
      1xlAnd1Mdh:pt-[2rem] 1xlAnd1Mdh:pb-[10rem]
      1.5xl:pt-[2rem]
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
        grid grid-cols-1 1xl:grid-cols-3
        md:pt-[4rem] 
        xl:pt-[2rem]
        1xlAnd1Mdh:pt-[2rem]
        2xlAndLgh:pt-[5rem]
        3xl:pb-[20rem]
        4xl:pt-[5rem]
        5xl:pt-[1rem]
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
            1xl:flex-col"
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
                    ■ HTML/CSS - {ft['HTML/CSS']}<br />
                    ■ JavaScript - {ft['JavaScript']}<br />
                    ■ TypeScript - {ft['TypeScript']}<br />
                    ■ Dart/Flutter - {ft['Dart/Flutter']}<br />
                    ■ React - {ft['React']}<br />
                    ■ Next.js - {ft['NextJs']}<br />
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
            1xl:flex-col"
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
                    ■ Python - {bt['Python']}<br />
                    ■ FastAPI - {bt['FastAPI']}<br />
                    ■ Rust - {bt['Rust']}<br />
                    ■ PostgreSQL - {bt['PostgreSQL']}<br />
                    ■ Ruby - {bt['Ruby']}<br />
                    ■ Node.js - {bt['NodeJs']}<br />
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
            1xl:flex-col"
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
                    ■ AWS - {dt['AWS']}<br />
                    ■ GCP - {dt['GCP']}<br />
                    ■ Azure - {dt['Azure']}<br />
                    ■ Docker - {dt['Docker']}<br />
                    ■ Git- {dt['Git']}<br />
                    ■ Jira - {dt['Jira']}<br />
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
