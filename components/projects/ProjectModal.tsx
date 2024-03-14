import Image from 'next/image';
import { useCallback, useEffect, useState } from "react";
import { Animator } from '@arwes/react';
import { ProjectPublicSetType } from '@/components/projects/projectConfig';
import DotsVariationBG from '../elements/background/DotsVariationBG';
import FrameKranox from '../elements/frame/FrameKranox';
import TextBasic from '../elements/text/TextBasic';
import Button from '../elements/button/Button';
import ModalSubImage from './ModalSubImage';
import FrameLines from '../elements/frame/FrameLines';
import { LinkIcon, VideoCameraIcon } from '@heroicons/react/20/solid';
import FrameUnderline from '../elements/frame/FrameUnderLine';
import ImageMotion from './ImageMotion';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  projectPublicSet: ProjectPublicSetType[string];
}

const ProjectModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  projectPublicSet,
}) => {
  // 各画像のパス
  const mainImageSrc = projectPublicSet['image']['mainImageSrc'];
  const subImageSrc1 = projectPublicSet['image']['subImageSrc1'];
  const subImageSrc2 = projectPublicSet['image']['subImageSrc2'];
  const subImageSrc3 = projectPublicSet['image']['subImageSrc3'];

  // Projectのテキスト
  const projectName = projectPublicSet['text']['projectName'];
  const projectSummary = projectPublicSet['text']['projectSummary'];
  const projectDetails = projectPublicSet['text']['projectDetails'];
  const projectURLLink = projectPublicSet['text']['projectURLLink'];
  const projectDemoLink = projectPublicSet['text']['projectDemoLink'];
  const projectGithubLink = projectPublicSet['text']['projectGithubLink'];
  const projectSkills = projectPublicSet['text']['projectSkills'];
   
  const [showModal, setShowModal] = useState(isOpen);
  const [active, setActive] = useState(true);
  const [mainImagePath, setMainImagePath] =useState<string>(mainImageSrc);

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
                  <div className="transform translate-x-10 translate-y-15">
                    {/* Main Image */}
                    <ImageMotion active={active}>
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
                        <Button name="click" onClick={() => setMainImagePath(mainImageSrc)}>
                          <ModalSubImage src={mainImageSrc}/>
                        </Button>
                        <Button name="click" onClick={() => setMainImagePath(subImageSrc1)}>
                          <ModalSubImage src={subImageSrc1}/>
                        </Button>
                        <Button name="click" onClick={() => setMainImagePath(subImageSrc2)}>
                          <ModalSubImage src={subImageSrc2}/>
                        </Button>
                        <Button name="click" onClick={() => setMainImagePath(subImageSrc3)}>
                          <ModalSubImage src={subImageSrc3}/>
                        </Button>
                      </div>
                    </ImageMotion>
                  </div>
                  {/* Right Side */}
                  <div className="pt-10" style={{ paddingLeft: '3rem', paddingRight: '3rem'}}>
                    <TextBasic className="text-[36px] text-neon-blue-without-flicker" enterSec={5}>
                      {projectName}
                    </TextBasic>
                    <TextBasic className="text-[22px] pt-10 pb-5 text-sf-blue" enterSec={5}>
                      {projectSummary}
                    </TextBasic>
                    <TextBasic className="text-[16px] text-sf-blue min-h-[140px]" enterSec={5}>
                      {projectDetails}
                    </TextBasic>
                    {/* Link */}
                    <TextBasic className="text-[19px] pt-5 pb-2 text-sf-blue" enterSec={5}>
                      - Links -
                    </TextBasic>
                    <div className="flex items-center justify-start pt-0 pl-4">
                      <FrameUnderline link={projectURLLink}>
                        <a 
                          href={projectURLLink ? projectURLLink : "javascript:void(0);"}  
                          target={projectURLLink ? "_blank" : "_self"} //_blankのままだとjavascript:voidが適用されないため、_selfに変換'
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center pl-2">
                            <LinkIcon
                              className="pl-0"
                              color='white'
                              style={{ width: "20px", height: "20px" }}
                            />
                            <TextBasic className="text-[16px] p-2 text-sf-blue" enterSec={5}>
                              URL
                            </TextBasic>
                          </div>
                        </a>
                      </FrameUnderline>
                      <div className='pl-8'/>
                      <FrameUnderline link={projectDemoLink}>
                        <a 
                          href={projectDemoLink ? projectDemoLink : "javascript:void(0);"} 
                          target={projectDemoLink ? "_blank" : "_self"} //_blankのままだとjavascript:voidが適用されないため、_selfに変換'
                          rel="noopener noreferrer"
                        >
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
                        </a>
                      </FrameUnderline>
                      <div className='pl-8'/>
                      <FrameUnderline link={projectGithubLink}>
                        <a 
                          href={projectGithubLink ? projectGithubLink : "javascript:void(0);"}
                          target={projectGithubLink ? "_blank" : "_self"} //_blankのままだとjavascript:voidが適用されないため、_selfに変換'
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center pl-2">
                            <Image
                              src="/images/github-mark-white.svg"
                              alt="GitHub"
                              width={20}
                              height={20}
                            />
                            <TextBasic className="text-[16px] p-2 text-sf-blue" enterSec={5}>
                              GITHUB
                            </TextBasic>
                          </div>
                        </a>
                      </FrameUnderline>
                    </div>
                    <div className="pt-10"/>
                    {/* 主な使用技術 */}
                    <FrameLines theme={'frontEnd'}>
                      <div className="p-8 pt-6 pb-6">
                        {/* <TextBasic className="pb-4 text-[20px] text-neon-blue-without-flicker">Details</TextBasic> */}
                          <TextBasic className="pb-3 text-neon-blue" enterSec={5}>
                            - 主な使用技術 - 
                          </TextBasic>
                          <div className="grid grid-cols-2 pl-12">
                          {projectSkills.map((skill, index) => (
                            <TextBasic key={index} className="text-sf-blue" enterSec={5}>
                              ■ {skill}
                            </TextBasic>
                          ))}
                          </div>
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
