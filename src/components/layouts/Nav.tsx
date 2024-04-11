import { Bars3Icon } from '@heroicons/react/20/solid';
import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import {useLocale} from 'next-intl';

import Button from '@/components/elements/button/Button';
import { handleScroll } from '@/utils';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setNavHeight } from '@/lib/features/layouts/layoutsSlice';

interface Props {
  openNav:()=> void;
}

const Nav = ({openNav}:Props) => {
  const navRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const dispatch = useAppDispatch();
  const navHeight = useAppSelector((state) => state.layouts.navHeight);

  useEffect(() => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      dispatch(setNavHeight(rect.height));
    }
  }, []);
  
  return (
    <div
      ref={navRef}
      className="
        fixed  z-[100] top-0
        w-[100%] h-[12vh]
        bg-[#141c27] 
        shadow-md
    ">
      <div className="
        flex items-center justify-between 
        w-[80%] h-[100%]
        mx-auto
      ">
        <h1 className="
          flex-[0.6]
          text-[20px] 
          sm:text-[25px] 
          text-white font-bold
          "
        >
          {"usma11dia0's"}
          <span className='text-[20px] sm:text-[25px] py-4 px-2 text-neon-blue'>PORTFOLIO</span>
        </h1>
        <Button name='intro'>
          <a href="#section-home"
            className="nav-link cursor-rock"
            onClick={(e) => handleScroll(e, "section-home", navHeight)}
          >
            HOME
          </a>
        </Button>
        <Button name='intro'>
          <a href="#section-about" 
            className="nav-link cursor-rock"
            onClick={(e) => handleScroll(e, "section-about", navHeight)}
          >
            ABOUT
          </a>
        </Button>
        {/* <Button name='intro'>
          <a href="#section-services"
            className="nav-link"
            onClick={(e) => handleScroll(e, "section-services")}
          >
            SERVICES
          </a>
        </Button> */}
        <Button name='intro'>
          <a href="#section-skills"
            className="nav-link cursor-rock"
            onClick={(e) => handleScroll(e, "section-skills", navHeight)}
          >
            SKILLS
          </a>
        </Button>
        <Button name='intro'>
          <a href="#section-projects"
            className="nav-link cursor-rock"
            onClick={(e) => handleScroll(e, "section-projects", navHeight)}
          >
            PROJECTS
          </a>
        </Button>
        <Button name='intro'>
          <a href="#section-others"
            className="nav-link cursor-rock"
            onClick={(e) => handleScroll(e, "section-others", navHeight)}
          >
            OTHERS
          </a>
        </Button>
        <Button name='intro'>
          {
            locale ==="ja" ? (
              <Link
                locale="en"
                href="/en"
                className="nav-link cursor-rock"
              >
                {"ENGLISH"}
              </Link>
            ) : (
              <Link
                locale="ja"
                href="/ja"
                className="nav-link cursor-rock"
              >
                {"日本語"}
              </Link>
            )
          }
        </Button>
        <Button name='intro'>
          <div onClick={openNav}>
            <Bars3Icon className="
              w-[2rem] h-[2rem] text-[#1FFFFF] cursor-rock
              lg:hidden
            "/>
          </div>
        </Button>
      </div>
    </div>      
  );
};

export default Nav
