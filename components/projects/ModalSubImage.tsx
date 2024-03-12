import React from 'react'
import Image from 'next/image';

interface SubImageProps {
  src: string;
}

const ModalSubImage = ({src}: SubImageProps) => {
  return (
    <div className="group">
      <Image
        src={src}
        alt="portfolio"
        width={250} 
        height={400}
        className="
          object-contain z-[1] relative 
          filter border border-dotted border-[hsl(180,75%,30%)]
          brightness-60
          group-hover:brightness-100 group-hover:border-dotted group-hover:border-[hsl(180,75%,60%)]
        " 
        // style={{ filter: 'brightness(0.6)'}}
      />
    </div>
  )
}

export default ModalSubImage
