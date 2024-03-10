/** @jsxImportSource @emotion/react */
import { type ReactElement, useRef, ReactNode } from 'react';
import {  FrameSVGKranox, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';

interface FrameKranoxProps {
  children: ReactNode;
}

const FrameKranox = ({children}: FrameKranoxProps): ReactElement => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div css={{
      position: 'relative',
      width: '80%',
      height: '100%',
      zIndex: 51,

      '[data-name=bg]': {
        // color: 'hsl(180, 75%, 10%)'
        color: 'hsla(0, 50%, 10%, 0.7)',
        filter: 'drop-shadow(0 0 4px hsl(60, 75%, 10%))'
      },
      '[data-name=line]': {
        color: 'hsl(180, 75%, 50%)',
        filter: 'drop-shadow(0 0 4px hsl(60, 75%, 50%))'
      }
    }}>
      <FrameSVGKranox
        elementRef={svgRef}
        onRender={onRender}
        padding={0}
        strokeWidth={3}
        squareSize={12}
        smallLineLength={12}
        largeLineLength={48}
      />
      {children}
    </div>
  );
};

export default FrameKranox
