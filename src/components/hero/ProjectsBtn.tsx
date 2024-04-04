import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import { handleScroll } from '@/utils'
import Button from '../elements/button/Button'

const ProjectsBtn = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setNavHeight(window.innerHeight * 0.1);
  }, []);

  return (
    <div className="mx-auto mt-15 lg:mt-0 xl:mx-0">
      <div className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
        <Image
          src={"/images/rounded-text.jpg"} 
          width={141} 
          height={148}
          alt="my project icon"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <a href="section-projects"
          onClick={(e) => handleScroll(e, "section-projects", navHeight)}
          style={{ position: 'absolute'}}
        >
          <Button name='error' aria-label="move to projects">
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
