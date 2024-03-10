'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from "react";
import FrameUnderline from "../elements/frame/FrameUnderLine";
import TextDecipher from '../elements/text/TextDecipher';
import { Animator } from '@arwes/react';
import DotsVariationBG from '../elements/background/DotsVariationBG';
import FrameKranox from '../elements/frame/FrameKranox';

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
          pt-24 pl-0
          flex-auto
          w-[100%] h-[90%]
          flex justify-center items-center
          "
        >
          <Animator active={active}>
            <FrameKranox>
              <DotsVariationBG active={active}>
                <Image
                  fill
                  src="/images/p1.jpg" 
                  alt="portfolio"  
                  className="object-contain p-20"
                />
                <TextDecipher className="text-[19px] text-sf-blue">
                  - Fundamental Information Technology Engineer Examination (FE)
                </TextDecipher>
              </DotsVariationBG>
            </FrameKranox>
          </Animator>
        </div>
      </div>
    </>
  );
}

export default Modal;
