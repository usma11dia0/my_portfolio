'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from "react";
import TextDecipher from '../elements/text/TextDecipher';
import { Animator } from '@arwes/react';
import DotsVariationBG from '../elements/background/DotsVariationBG';
import FrameKranox from '../elements/frame/FrameKranox';
import TextBasic from '../elements/text/TextBasic';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
        onClick={handleClose}
      >
        {/*body*/}
        <div className="
          relative 
          pt-24
          w-[100%] h-[90%]
          flex justify-center items-center
          "
        >
          <Animator active={active}>
            <FrameKranox>
                <DotsVariationBG active={active}>
                  <div className="grid grid-cols-2 gap-20">
                    {/* Left Side */}
                    <div>
                      <Image
                        src="/images/projects/portfolio/portfolio_main.png" 
                        alt="portfolio"
                        width={800} 
                        height={800}
                        className="object-contain z-[1] relative"
                      />
                    </div>
                    {/* Right Side */}
                    <div>
                      <TextBasic className="text-[19px] text-sf-blue">
                        - Japanese Prononciation Quiz App
                      </TextBasic>
                      <TextBasic className="text-[19px] text-sf-blue">
                        - 日本語の同音異義語を判別するクイズアプリです。
                      </TextBasic>
                      <TextBasic className="text-[19px] text-sf-blue">
                        - 使用技術 -
                      </TextBasic>
                    </div>
                  </div>
                </DotsVariationBG>
            </FrameKranox>
          </Animator>
        </div>
      </div>
    </>
  );
}

export default Modal;
