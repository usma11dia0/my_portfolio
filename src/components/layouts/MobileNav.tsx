import { XMarkIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import Button from '../elements/button/Button';
import { handleScroll } from '@/utils';
import Link from 'next/link';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {
  const navAnimation = nav ? 'translate-x-0' :'translate-x-[-100%]';
  const [navHeight, setNavHeight] = useState(0);

  // Todo:一時的にroute, localeを直接指定
  const route= '/'
  const locale = 'ja'
  

  useEffect(() => {
    setNavHeight(window.innerHeight * 0.1);
  }, []);

  return (
    <div 
      className={`
        fixed 
        ${navAnimation} transform transition-all dulation-300 
        top-0 left-0 right-0 bottom-0 z-[100] 
        bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">
          <Button name='intro'>
            <a href="#section-home"
              onClick={(e) => {
                handleScroll(e, "section-home", navHeight);
                closeNav();
              }}
            >
              HOME
            </a>
          </Button>
        </div>
        {/* <div className="nav-link-mobile">SERVICES</div> */}
        <div className="nav-link-mobile">
          <Button name='intro'>
            <a href="#section-about"
              onClick={(e) => {
                handleScroll(e, "section-about", navHeight);
                closeNav();
              }}
            >
              ABOUT
            </a>
          </Button>
        </div>
        <div className="nav-link-mobile">
          <Button name='intro'>
            <a href="#section-skills"
              onClick={(e) => {
                handleScroll(e, "section-skills", navHeight);
                closeNav();
              }}
            >
              SKILLS
            </a>
          </Button>
        </div>
        <div className="nav-link-mobile">
          <Button name='intro'>
            <a href="#section-projects"
              onClick={(e) => {
                handleScroll(e, "section-projects", navHeight);
                closeNav();
              }}
            >
              PROJECTS
            </a>
          </Button>
        </div>
        <div className="nav-link-mobile">
          <Button name='intro'>
            <a href="#section-others"
              onClick={(e) => {
                handleScroll(e, "section-others", navHeight);
                closeNav();
              }}
            >
              OTHERS
            </a>
          </Button>
        </div>
        <div className="nav-link-mobile">
          <Button name='intro'>
            <Link
              href={route}
              locale={locale === "ja" ? "en" : "ja"}
              onClick={(e) => { closeNav() }}
            >
              {locale == "ja" ? "ENGLISH" : "日本語"}
            </Link>
          </Button>
        </div>
      </div>
      <Button name="intro">
        <div
          onClick={closeNav}
          className="absolute z-[1000000000]  top-[2rem] right-[2rem] w-[2.5rem] h-[2.5rem] text-[#1FFFFF]"
        >
          <XMarkIcon />
        </div>
      </Button>
    </div>
  )
}

export default MobileNav
