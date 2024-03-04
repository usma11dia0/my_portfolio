/** @jsxImportSource @emotion/react */
import { type ReactElement, useRef, ReactNode } from 'react';
import { FrameSVGLines, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';

interface FrameLinesProps {
    children: ReactNode;
    theme: 'frontEnd' | 'backEnd' | 'devOps';
}

const FrameLines = ({children, theme}: FrameLinesProps): ReactElement => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
  
  const themeStyles = {
    frontEnd: {
      backgroundColor: 'hsl(180, 75%, 10%)',
      color: 'hsl(180, 75%, 50%)',
    },
    backEnd: {
      backgroundColor: 'hsl(0, 75%, 10%)',
      color: 'hsl(0, 75%, 50%)',
    },
    devOps: {
      backgroundColor: 'hsl(60, 75%, 10%)',
      color: 'hsl(60, 75%, 50%)',
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div css={{
      position: 'relative',
      zIndex: 1,
      '[data-name=bg]': {
        color: 'hsla(0, 50%, 10%, 0.5)'
      },
      '[data-name=line]': {
        color: currentTheme.color,
      }
    }}>
      <FrameSVGLines
        elementRef={svgRef}
        onRender={onRender}
      />
      {children}
    </div>
  );
};

export default FrameLines
