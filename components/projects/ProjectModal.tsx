import Image from 'next/image';
import { useCallback, useEffect, useState } from "react";
import { Animator } from '@arwes/react';
import { ProjectImageSetType } from '@/components/projects/projectConfig';
import DotsVariationBG from '../elements/background/DotsVariationBG';
import FrameKranox from '../elements/frame/FrameKranox';
import TextBasic from '../elements/text/TextBasic';
import Button from '../elements/button/Button';
import ModalSubImage from './ModalSubImage';
import FrameLines from '../elements/frame/FrameLines';
import { VideoCameraIcon } from '@heroicons/react/20/solid';
import FrameUnderline from '../elements/frame/FrameUnderLine';
import FrameCorners from '../elements/frame/FrameCorners';
import FrameNefrex from '../elements/frame/FrameNefrex';

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
                  <div className="grid grid-cols-2 gap-10" onClick={handleInsideClick}>
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
                      <div 
                        className="
                          grid grid-cols-2 gap-4
                          pt-10 pl-16
                          4xl:gap-2 4xl:pt-6 4xl:pl-10
                        "
                      >
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
                    <div className="pt-10" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
                      <TextBasic className="text-[36px] text-neon-blue-without-flicker" enterSec={5}>
                        Japanese Prononciation Quiz App
                      </TextBasic>
                      <TextBasic className="text-[22px] pt-10 pb-5 text-sf-blue" enterSec={5}>
                        日本語の同音異義語を判別するクイズアプリ
                      </TextBasic>
                      <TextBasic className="text-[16px] text-sf-blue" enterSec={5}>
                        発音された同音異義語を当てる問題と、発生した発音が正確かどうかを判定する問題の二つを用意しています。
                        自分の声を用いてモデルの学習から作成しており、発音の判定は自分の声以外だと精度が低いです。
                      </TextBasic>
                      <TextBasic className="text-[19px] pt-15 pb-3 text-sf-blue" enterSec={5}>
                        - Links -
                      </TextBasic>
                      <div className="flex items-center justify-start pt-1 pl-4">
                        
                        <FrameUnderline>
                          <div className="flex items-center pl-2">
                            <VideoCameraIcon
                              className="pl-0"
                              color='white'
                              style={{ width: "20px", height: "20px" }}
                            />
                            <TextBasic className="text-[16px] p-2 text-sf-blue" enterSec={5}>
                              DEMO
                            </TextBasic>
                          </div>
                        </FrameUnderline>
                        <div className='pl-8'/>
                        <FrameUnderline>
                          <div className="flex items-center pl-2">
                            <Image
                              src="/images/github-mark-white.svg" // publicフォルダからの相対パス
                              alt="GitHub"
                              width={20} // 幅を24ピクセルに設定
                              height={20} // 高さを24ピクセルに設定
                            />
                            <TextBasic className="text-[16px] p-2 text-sf-blue" enterSec={5}>
                              GITHUB
                            </TextBasic>
                          </div>
                        </FrameUnderline>
                      </div>
                      <div className="pt-11"/>
                      <FrameLines theme={'frontEnd'}>
                        <div className="p-4 pt-6 pb-6">
                          {/* <TextBasic className="pb-4 text-[20px] text-neon-blue-without-flicker">Details</TextBasic> */}
                            <TextBasic className="text-sf-blue" enterSec={5}>
                              - 使用技術 - <br />
                              ■ HTML/CSS - 2 years of experience<br />
                              ■ JavaScript - 2 year of experience<br />
                              ■ TypeScript - 1 year of experience<br />
                              ■ Dart/Flutter - 1 year of experience<br />
                              ■ React - 1 year of experience<br />
                              ■ Next.js - ※currently studying<br />
                            </TextBasic>
                        </div>
                      </FrameLines>
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
