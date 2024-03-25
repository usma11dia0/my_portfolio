/** @jsxImportSource @emotion/react */
import React, { type ReactElement, useState, useEffect, ReactNode } from 'react';
import { Animator } from '@arwes/react-animator';
import { Dots } from '@arwes/react-bgs';
import { ZIndex } from 'tsparticles-engine';

interface DotsVariationBGProps {
  active: boolean;
  children: ReactNode;
}

const DotsVariationBG = ({active, children}: DotsVariationBGProps): ReactElement => {
  return (
    <div css={{
      top: '1%',
      left: '1%', 
      width: '98%', 
      height: '98%', 
      position: 'relative',
    }}>
      <Animator active={active} duration={{ enter: 0, exit: 1 }}>
        <Dots
          color='hsla(180, 100%, 75%, 0.2)'
          type='circle'
          distance={20}
          size={1}
          // x=0% y=100% or left-bottom corner.
          origin={[1, 0]}
          originInverted
        />
      </Animator>
      {children}
    </div>
  );
};

export default DotsVariationBG
