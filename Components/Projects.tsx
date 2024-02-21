import Image from 'next/image';
import React from 'react'

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] pb-[1rem] md:pt-[8rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">Jects</span>
      </h1>
      <div className="
        grid grid-cols-1 gap-[2rem]
        md:grid-cols-2 
        lg:grid-cols-3
        w-[80%] pt-[2rem] mx-auto">
          <div>
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                src="/images/p1.jpg" 
                alt="portfolio" 
                layout="fill" 
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                src="/images/p2.jpg" 
                alt="portfolio" 
                layout="fill" 
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                src="/images/p3.jpg" 
                alt="portfolio" 
                layout="fill" 
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                src="/images/p4.jpg" 
                alt="portfolio" 
                layout="fill" 
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                src="/images/p5.jpg" 
                alt="portfolio" 
                layout="fill" 
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <div className="
              relative cursor-pointer
              w-[100%] h-[200px]
              transform transition-all duration-200 
              hover:-translate-y-6
              md:h-[300px]
            ">
              <Image 
                src="/images/p2.jpg" 
                alt="portfolio" 
                layout="fill" 
                className="object-contain"
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Projects