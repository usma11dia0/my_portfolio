import { ChatBubbleLeftRightIcon, LinkIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import LinkButton from '../elements/button/LinkButton';

interface OtherCardProps {
  other: string;
}

const OtherCard = ({ other }: OtherCardProps) => {

  const t = useTranslations('others')
  const otherPublicSet = t.raw(`${other}`)
  const mainImageSrc = otherPublicSet["image"]["mainImageSrc"]
  const otherName = otherPublicSet["text"]["otherName"]
  const otherDetails = otherPublicSet["text"]["otherDetails"]
  const otherURLLink = otherPublicSet["text"]["otherURLLink"]
  const brightness = otherPublicSet["brightness"]

  return (
    <div>
      <div className="relative w-[100%] h-[400px]">
        <Image
          fill
          src={mainImageSrc}
          alt="other-main-image"
          className="object-cover"
          sizes="(min-width: 1280px) 33.3vw, (min-width: 1024px) 50vw, 100vw"
          style={{
            backgroundColor: 'hsl(180, 75%, 10%)',
            filter: brightness,
          }}
        />
      </div>
      <div className="
        relative text-center w-[70%] p-[1rem] mt-[-1rem] mx-auto
        md:p-[2rem] md:w-[90%]
        "
        style={{
          backgroundColor: 'hsl(180, 75%, 7%)',
          color: 'hsl(180, 75%, 50%)',
          border: '1.5px dotted hsl(180, 75%, 50%)'
        }}>
        <div 
          className="relative px-[2rem] py-[1rem] mt-[-3rem] w-fit mx-auto text-[17px] text-neon-blue-without-flicker"
          style={{
            backgroundColor: 'hsl(180, 75%, 10%)',
            border: '2px solid hsl(180, 75%, 50%)'
          }}
        >
          {otherName}
        </div>
        <div className="
          flex flex-col justify-center items-center space-y-2
          md:flex-row mt-[1rem] md:space-x-10 md:space-y-0
          "
        >
          <p className="
            mt-[0rem] text-white text-[18px] font-semibold">
            {otherDetails}
          </p>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <LinkButton name={"URL"} link={otherURLLink} />
          </div>
        </div>
      </div>
    </div>
  )
}



export default OtherCard;
