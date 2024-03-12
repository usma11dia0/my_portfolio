import Image from 'next/image';
import { useCallback, useEffect, useState } from "react";
import { Animator } from '@arwes/react';
import { ProjectImageSetType } from '@/components/projects/projectConfig';
import DotsVariationBG from '../elements/background/DotsVariationBG';
import FrameKranox from '../elements/frame/FrameKranox';
import TextBasic from '../elements/text/TextBasic';
import Button from '../elements/button/Button';
import ModalSubImage from './ModalSubImage';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  imgSet: ProjectImageSetType[string];
}

const ProjectModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  imgSet,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [active, setActive] = useState(true);
  const [mainImagePath, setMainImagePath] =useState<string>(imgSet['mainImageSrc']);

  // 各画像のパス
  const mainImageSrc = imgSet['mainImageSrc'];
  const subImageSrc1 = imgSet['subImageSrc1'];
  const subImageSrc2 = imgSet['subImageSrc2'];
  const subImageSrc3 = imgSet['subImageSrc3'];

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
      setMainImagePath(mainImagePath);
    }, 0)
  }, [onClose]);

  // モーダル内側がクリックされた際は、イベントの伝播を停止
  const handleInsideClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); 
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          fixed inset-0 z-50 
          flex justify-center  items-center  
          overflow-x-hidden overflow-y-auto 
          outline-none focus:outline-none
          bg-neutral-800/70
        "
        onClick={handleClose}
      >
        {/*body*/}
        <div className="
          relative flex justify-center items-center
          pt-24
          w-[100%] h-[90%]
          "
        >
          <Animator active={active}>
            <FrameKranox>
                <DotsVariationBG active={active}>
                  <div className="grid grid-cols-2 gap-20" onClick={handleInsideClick}>
                    {/* Left Side */}
                    <div className="transform translate-x-10 translate-y-10">
                      {/* Main Image */}
                      <Image
                        src={mainImagePath}
                        alt="portfolio"
                        width={800} 
                        height={800}
                        className="
                          object-contain z-[1] relative 
                          filter border border-dotted border-[hsl(180,75%,30%)]
                        " 
                        style={{ filter: 'brightness(1.3)' }}
                      />
                      {/* Sub Image */}
                      <div className="pt-10 grid grid-cols-2 gap-4" style={{ paddingLeft: '3rem' }}>
                        <Button name="hover" onClick={() => setMainImagePath(mainImageSrc)}>
                          <ModalSubImage src={mainImageSrc}/>
                        </Button>
                        <Button name="hover" onClick={() => setMainImagePath(subImageSrc1)}>
                          <ModalSubImage src={subImageSrc1}/>
                        </Button>
                        <Button name="hover" onClick={() => setMainImagePath(subImageSrc2)}>
                          <ModalSubImage src={subImageSrc2}/>
                        </Button>
                        <Button name="hover" onClick={() => setMainImagePath(subImageSrc3)}>
                          <ModalSubImage src={subImageSrc3}/>
                        </Button>
                      </div>
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

export default ProjectModal;
