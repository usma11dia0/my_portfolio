/** @jsxImportSource @emotion/react */
import { type ReactElement, useRef, ReactNode } from 'react';
import { FrameSVGUnderline, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';

interface FrameUnderLineProps {
  children: ReactNode;
  link: string;
}

const FrameUnderline = ({children, link}: FrameUnderLineProps): ReactElement => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div css={{
      position: 'relative',
      height: '100%',
      zIndex: 51,
      border: '1px dotted transparent',
      filter: link === "" ? 'brightness(0.5)' : 'brightness(1)',
      ...(link !== "" && {
        ':hover': {
          filter: 'brightness(1.6)',
          'borderTop': '1px dotted hsl(180, 75%, 30%)',
          'borderLeft': '1px dotted hsl(180, 75%, 30%)',
          'borderBottom': '1px dotted transparent',
          'borderRight': 'none',
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            right: 0,
            top: '0%',
            bottom: '20%',
            width: '1px',
            background: 'repeating-linear-gradient(to bottom, hsl(180, 75%, 30%), hsl(180, 75%, 30%) 1px, transparent 1px, transparent 2px)',
            display: 'block',
          },
          '[data-name=bg]': {
            color: 'hsl(180, 75%, 9%)'
          }
        }
      }),

      '[data-name=bg]': {
        color: 'hsl(180, 75%, 10%)'
        // color: 'hsla(0, 50%, 10%, 0.7)'
      },
      '[data-name=line]': {
        color: 'hsl(180, 75%, 50%)'
      }
    }}>
      <FrameSVGUnderline
        elementRef={svgRef}
        onRender={onRender}
        squareSize={8}
        strokeWidth={1.5}
      />
      {children}
    </div>
  );
};

export default FrameUnderline
