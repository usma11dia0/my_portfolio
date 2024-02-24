import Image from 'next/image'
import React from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <div className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
        <Image
          src={"/images/rounded-text.jpg"} 
          width={141} 
          height={148}
          alt="my project icon"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <ChevronDoubleDownIcon 
          className="
            absolute svg-neon-blue svg-neon-blue:hover
            group-hover:translate-y-2
            transition-all duration-300
          " 
          width={48} 
          height={48}/>
      </div>
    </div>
  )
}

export default ProjectsBtn