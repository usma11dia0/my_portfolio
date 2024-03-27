import React from 'react'
import FrameUnderline from '../frame/FrameUnderLine';
import { LinkIcon } from '@heroicons/react/20/solid';
import Button from './Button';
import TextBasic from '../text/TextBasic';

interface LinkButtonProps {
  name: string;
  link: string;
}

const LinkButton = ({ name, link }: LinkButtonProps) => {
  return (
    <FrameUnderline link={link}>
      <a 
        href={link || "#"} 
        onClick={(e) => {
          if (!link) {
            e.preventDefault();
          }
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center pl-2">
          <LinkIcon
            className="pl-0"
            color='white'
            style={{ width: "20px", height: "20px" }}
          />
          {
            link ? (
              <Button name='fade'>
                <TextBasic className="
                  text-[12px] p-2 text-sf-blue
                  xs:text-[14px]
                  sm:text-[16px]
                  " 
                  enterSec={5}
                >
                  {name}
                </TextBasic>
              </Button>
            ) : (
              <TextBasic className="
                text-[12px] p-2 text-sf-blue
                xs:text-[14px]
                sm:text-[16px]
              " 
              enterSec={5}
              >
                {name}
              </TextBasic>
            )
          }
        </div>
      </a>
    </FrameUnderline>
  )
}

export default LinkButton
