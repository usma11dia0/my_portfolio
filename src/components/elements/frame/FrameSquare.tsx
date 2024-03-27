/** @jsxImportSource @emotion/react */
import { type ReactElement, useRef, ReactNode } from 'react';
import { FrameSVGCorners, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';

interface FrameCornersProps {
    children: ReactNode;
    brightness: string;
}

const FrameSquare = ({children, brightness}: FrameCornersProps): ReactElement => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div
      css={{
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        border: '5px solid transparent',
        ':hover': {
          filter: brightness,
          border: '1px dotted hsl(180, 75%, 30%)',
          '[data-name=bg]': {
            color: 'hsl(180, 75%, 7%)'
          }
        },
        '[data-name=bg]': {
          // color: 'hsl(180, 75%, 10%)'
          color: 'hsla(0, 50%, 10%, 0.5)'
        },
        '[data-name=line]': {
          color: 'hsl(180, 75%, 50%)'
        }
      }}
    >
      <FrameSVGCorners
        strokeWidth={1}
        cornerLength={1000}
        elementRef={svgRef}
        onRender={onRender}
      />
      {children}
    </div>
  );
};

export default FrameSquare
