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
      // width: '80%',
      height: '100%',
      zIndex: 51,
      border: '1px solid transparent',
      ':hover': {
        filter: 'brightness(1.6)',
        'border-top': '1px dotted hsl(180, 75%, 30%)',
        'border-left': '1px dotted hsl(180, 75%, 30%)',
        'border-bottom': 'none',
        'border-right': 'none', //枠線右側は以下の疑似要素で装飾
        position: 'relative', // 疑似要素のポジショニングの基準点
        '&:after': { // 疑似要素を追加
          content: '""',
          position: 'absolute',
          right: 0,
          top: '0%', // 上端からの位置を指定
          bottom: '20%', // 下端からの位置を指定
          width: '1px', // 線の太さ
          // backgroundColor: 'hsl(180, 75%, 30%)', // 線の色
          background: 'repeating-linear-gradient(to bottom, hsl(180, 75%, 30%), hsl(180, 75%, 30%) 1px, transparent 1px, transparent 2px)',
          display: 'block',
        },
        '[data-name=bg]': {
          color: 'hsl(180, 75%, 9%)'
        }
      },

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
