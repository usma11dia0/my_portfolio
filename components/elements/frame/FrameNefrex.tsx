/** @jsxImportSource @emotion/react */
import { type ReactElement, useRef, useState, ReactNode, useEffect } from 'react';
import { Animator } from '@arwes/react-animator';
import { FrameSVGNefrex, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';

interface FrameNefrexProps {
  children: ReactNode;
}

const FrameNefrex = ({children}: FrameNefrexProps): ReactElement  => {
  return (
      <div css={{
        position: 'relative',
        zIndex: 1,
      }}>
        <FrameSVGNefrex 
          strokeWidth={3}
          css={{
            '[data-name=bg]': {
              color: 'hsl(180, 75%, 10%)',
            },
            '[data-name=line]': {
              color: 'hsl(180, 75%, 50%)',
            }
          }}
        />
          {children}
      </div>
  );
}

export default FrameNefrex
