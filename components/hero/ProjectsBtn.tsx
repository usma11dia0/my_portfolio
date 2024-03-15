import Image from 'next/image'
import React from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import { handleScroll } from '@/utils'
import Button from '../elements/button/Button'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto mt-15 xl:mx-0">
      <div className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
        <Image
          src={"/images/rounded-text.jpg"} 
          width={141} 
          height={148}
          alt="my project icon"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <a href="section-projects"
          onClick={(e) => handleScroll(e, "section-projects")}
          style={{ position: 'absolute'}}
        >
          <Button name='error'>
            <ChevronDoubleDownIcon
              className="
                svg-neon-blue svg-neon-blue:hover
                group-hover:translate-y-2
                transition-all duration-300
              " 
              width={48} 
              height={48}
            />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default ProjectsBtn
