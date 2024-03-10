/** @jsxImportSource @emotion/react */
import { type ReactElement, useRef, ReactNode } from 'react';
import { FrameSVGUnderline, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';

interface FrameUnderLineProps {
  children: ReactNode;
}

const FrameUnderline = ({children}: FrameUnderLineProps): ReactElement => {
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
        color: 'hsla(0, 50%, 10%, 0.5)'
      },
      '[data-name=line]': {
        color: 'hsl(180, 75%, 50%)'
      }
    }}>
      <FrameSVGUnderline
        elementRef={svgRef}
        onRender={onRender}
        squareSize={32}
        strokeWidth={3}
      />
      {children}
    </div>
  );
};

export default FrameUnderline
