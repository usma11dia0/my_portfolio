import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Link from 'next/link';

import { handleScroll } from '@/utils';
import Button from '../elements/button/Button';
import { useLocale } from 'next-intl';
import { useAppSelector } from '@/lib/hooks';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {
  const navAnimation = nav ? 'translate-x-0' :'translate-x-[-100%]';
  const locale = useLocale();
  const navHeight = useAppSelector((state) => state.layouts.navHeight);

  return (
    <div
      className={`
        fixed 
        ${navAnimation} transform transition-all dulation-300 
        top-0 left-0 right-0 bottom-0 z-[110] 
        bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">
          <Button name='intro'>
            <a href="#section-home"
              className="cursor-rock"
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
              className="cursor-rock"
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
              className="cursor-rock"
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
              className="cursor-rock"
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
              className="cursor-rock"
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
            {
            locale ==="ja" ? (
              <Link
                locale="en"
                href="/en"
                className="nav-link-mobile cursor-rock"
                onClick={(e)=>{ closeNav() }}
              >
                {"ENGLISH"}
              </Link>
            ) : (
              <Link
                locale="ja"
                href="/ja"
                className="nav-link-mobile cursor-rock"
                onClick={(e)=>{ closeNav() }}
              >
                {"日本語"}
              </Link>
            )
          }
          </Button>
        </div>
      </div>
      <Button name="intro">
        <div
          onClick={closeNav}
          className="absolute z-[1000000000] top-[2rem] right-[2rem] w-[2.5rem] h-[2.5rem] text-[#1FFFFF]"
        >
          <XMarkIcon />
        </div>
      </Button>
    </div>
  )
}

export default MobileNav
