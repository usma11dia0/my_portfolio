import React, { ReactNode, type ReactElement } from 'react';
import { Animator } from '@arwes/react-animator';
import { GridLines, Dots } from '@arwes/react-bgs';
import { Puffs } from '@arwes/react';

interface PuffsAndGridBGProps {
  children?: ReactNode;
  zIndex: number;
}

const PuffsAndGridBG = ({zIndex}: PuffsAndGridBGProps): ReactElement => {
  return (
    <Animator duration={{ interval: 2 }}>
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: zIndex,
        // backgroundColor: 'rgba(31, 255, 255, 0.1)',
        // backgroundImage: 'radial-gradient(85% 85% at 50% 50%, rgba(31, 255, 255, 0.25) 0%, rgba(31, 255, 255, 0.12) 50%, rgba(31, 255, 255, 0) 100%)'
      }}>
        <GridLines
          lineColor='hsla(180, 100%, 75%, 0.05)'
          distance={45}
        />
        <Dots
          color='hsla(180, 100%, 75%, 0.05)'
          distance={45}
        />
        <Puffs
          color='hsla(180, 100%, 75%, 0.5)'
          quantity={200}
          padding={20}
          xOffset={[50, -100]}
          yOffset={[50, -100]}
          radiusOffset={[4, 0]}
        />
      </div>
    </Animator>
  );
};

export default PuffsAndGridBG
