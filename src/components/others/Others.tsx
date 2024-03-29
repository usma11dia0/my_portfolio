import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import OtherCard from './OtherCard'

const Others = () => {

  const t = useTranslations('others')
  // const projectPublicSet = t.raw(`${projectName}`)

  return (
    <div id="section-others" className="
      pt-[3rem] pb-[8rem] bg-[rgb(2,5,10)]
      md:pt-[8rem]
      mdAndLgh:pt-[4rem]
      lg:pt-[2.5rem]
      1xlAndMdh:pt-[1rem]
      1xlAnd1Mdh:pt-[2rem]
      1.5xl:pt-[2rem]
      2xlAndLgh:pt-[5rem] 2xlAndLgh:pb-[18rem]
      3xl:pt-[7rem]
      3xlAndMdh:pt-[2rem]
      4xl:pt-[5rem]
      5xl:pt-[3rem]
      5xlAnd1xl:pt-[12rem] 5xlAnd1xl:pb-[20rem]
    ">
      <h1 className="heading">
         <span className="text-[28px] sm:text-[33px] md:text-[45px] text-neon-blue"> Others</span>
      </h1>
      <div className="
        grid grid-cols-1 w-[80%] mt-[2.5rem] gap-[3rem] mx-auto
        md:mt-[4rem]
        1xlAndMdh:mt-[2rem]
        1xlAnd1Mdh:pt-[2rem]
        1.5xl:pt-[2rem]
        2xlCustom:pt-[0rem]
        2xlAndLgh:pt-[2rem]
        4xl:pt-[3rem]
        5xl:pt-[2rem]
        lg:grid-cols-2 
        xl:grid-cols-3">
          <OtherCard other={"zenn"}/>
          <OtherCard other={"ai-arts"}/>
          <OtherCard other={"coming-soon"}/>
      </div>
    </div>
  )
}

export default Others
