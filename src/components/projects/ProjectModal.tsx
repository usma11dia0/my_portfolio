import Image from 'next/image';
import { useCallback, useEffect, useState } from "react";
import { Animator } from '@arwes/react';
import { ProjectPublicSetType } from '@/components/projects/ProjectPublicSetType';
import DotsVariationBG from '../elements/background/DotsVariationBG';
import FrameKranox from '../elements/frame/FrameKranox';
import TextBasic from '../elements/text/TextBasic';
import ModalSubImage from './ModalSubImage';
import FrameLines from '../elements/frame/FrameLines';
import ImageMotion from './ImageMotion';
import LinkButton from '../elements/button/LinkButton';

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

  //　画像の明るさ
  const brightness = projectPublicSet['brightness']
   
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
    // `mainImagePath` は依存関係から除外
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          flex justify-center items-center
          overflow-x-hidden overflow-y-auto 
          outline-none focus:outline-none
          bg-neutral-800/70
        "
        onClick={handleClose}
      >
        {/*body*/}
        <div className="
          relative flex justify-center items-center z-[0] pt-[850px] pb-[50px]
          "
        >
          <Animator active={active}>
            <FrameKranox>
              <DotsVariationBG active={active}>
                <div className="
                  grid grid-cols-1 gap-10
                  1xl:grid-cols-2
                  "
                  onClick={handleInsideClick}
                >
                  {/* Left Side */}
                  <div className="
                    order-1 z-[1]
                  ">
                    <ImageMotion active={active}>
                      {/* Main Image */}
                      <Image
                        src={mainImagePath}
                        alt="portfolio"
                        width={800} 
                        height={800}
                        className="
                          object-contain relative 
                          filter border border-dotted border-[hsl(180,75%,30%)]
                          w-[75%] h-full
                          sm:w-[85%]
                          1xl:w-[100%]
                          5xl:w-[75%]
                        " 
                        style={{ filter: brightness }}
                      />
                      {/* Sub Image */}
                      <div 
                        className="
                          grid grid-cols-2 gap-4
                          pt-6 pl-4 pb-5 w-[70%]
                          sm:w-[85%] sm:pt-10 sm:pl-0
                          md:pl-8 md:w-[78%]
                        "
                      >
                        <ModalSubImage src={mainImageSrc} onClick={() => setMainImagePath(mainImageSrc)} />
                        {subImageSrc1 && <ModalSubImage src={subImageSrc1} onClick={() => setMainImagePath(subImageSrc1)} />}
                        {subImageSrc2 && <ModalSubImage src={subImageSrc2} onClick={() => setMainImagePath(subImageSrc2)} />}
                        {subImageSrc3 && <ModalSubImage src={subImageSrc3} onClick={() => setMainImagePath(subImageSrc3)} />}
                      </div>
                    </ImageMotion>
                  </div>
                  {/* Right Side */}
                  <div className="
                    order-2 pt-0 z-[0] pl-12 pr-12
                    sm:pt-2
                    lg:order-2
                    1xl:pt-8 1xl:pl-10
                    3xl:pt-11
                    "
                  >
                    <TextBasic className="
                      text-neon-blue-without-flicker text-[26px] leading-10 pb-8
                      xs:text-[30px]
                      sm:text-[36px]
                      1xl:pb-4
                      2xlAndLgh:text-[38px] 2xlAndLgh:pb-8
                      3xl:text-[38px] 3xl:pb-8
                      5xl:text-[44px]
                      "
                      enterSec={5}
                    >
                      {projectName}
                    </TextBasic>
                    <TextBasic className="
                      text-sf-blue text-[16px] pb-5
                      xs:text-[20px]
                      2xlAndLgh:text-[22px]
                      3xl:text-[22px]
                      5xl:text-[28px]
                      "
                      enterSec={5}
                    >
                      {projectSummary}
                    </TextBasic>
                    <TextBasic className="
                      text-[14px] text-sf-blue min-h-[470px]
                      " 
                      enterSec={5}
                    >
                      {projectDetails}
                    </TextBasic>
                    {/* Link */}
                    <TextBasic className="
                      text-[19px] pt-10 pb-5 text-sf-blue
                      1xl:pt-5
                      5xl:text-[22px]
                      " 
                      enterSec={5}
                    >
                      - Links -
                    </TextBasic>
                    <div className="
                      grid grid-cols-2 gap-6 justify-start
                      sm:pl-4
                      1xl:gap-3
                    ">
                      <LinkButton name={"URL"} link={projectURLLink} />
                      {/* <div className='pl-8'/> */}
                      <LinkButton name={"DEMO"} link={projectDemoLink} /> 
                      {/* <div className='pl-8'/> */}
                      <LinkButton name={"GITHUB"} link={projectGithubLink} /> 
                    </div>
                    <div className="pt-10 xs:pt-9 2xl:pt-10 3xl:pt-12"/>
                    {/* Technologies */}
                    <FrameLines theme={'frontEnd'}>
                      <div className="
                        p-4 pt-8 pb-6 min-h-[230px]
                        sm:p-8
                        1xl:p-3 1xl:min-h-[150px]
                        2xl:min-h-[180px] 2xl:p-6
                      ">
                          <TextBasic className="
                            text-[16px] pb-3 text-neon-blue
                            xs:text-[18px]  
                            5xl:text-[22px]" enterSec={5}>
                            - Technologies - 
                          </TextBasic>
                          <div className="
                            grid grid-cols-1 pl-0
                            sm:grid-cols-2 sm:pl-12
                            5xl:gap-3 5xl:pb-2
                          ">
                          {projectSkills.map((skill, index) => (
                            <TextBasic key={index} className="
                              text-[14px] text-sf-blue 
                              xs:text-[18px]
                              5xl:text-[20px] 
                              " enterSec={5}>
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
