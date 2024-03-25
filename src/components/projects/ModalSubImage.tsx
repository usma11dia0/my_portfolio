import React from 'react'
import Image from 'next/image';
import Button from '../elements/button/Button';

interface SubImageProps {
  src: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalSubImage = ({src, onClick}: SubImageProps) => {
  return (
    <div className="
      group max-w-[250px] max-h-[400px]
      flex items-center justify-center
      "
    >
      <Button name="click" onClick={onClick}>
        <Image
          src={src}
          alt="portfolio"
          width={250} 
          height={400}
          className="
            object-contain z-[1]
            w-[90%]
            filter border border-dotted border-[hsl(180,75%,30%)]
            brightness-60
            group-hover:brightness-100 group-hover:border-dotted group-hover:border-[hsl(180,75%,60%)]
          " 
        />
      </Button>
    </div>
  )
}

export default ModalSubImage
