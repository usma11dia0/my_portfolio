import React, { ReactNode, type ReactElement } from 'react';
import { Animator } from '@arwes/react-animator';
import { GridLines, Dots, MovingLines } from '@arwes/react-bgs';

interface MovingLinesBGProps {
  zIndex: number;
}

const MovingLinesBG = ({zIndex}: MovingLinesBGProps): ReactElement => {
  return (
    <Animator duration={{ interval: 20 }}>
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: zIndex,
        // backgroundColor: '#000906',
        // backgroundImage: 'radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)'
      }}>
        <GridLines
          lineColor='hsla(180, 100%, 75%, 0.05)'
          distance={45}
        />
        <Dots
          color='hsla(180, 100%, 75%, 0.05)'
          distance={45}
        />
        <MovingLines
          lineColor='hsla(180, 100%, 75%, 0.2)'
          distance={5}
        />
      </div>
    </Animator>
  );
};

export default MovingLinesBG
