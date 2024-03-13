import React, { type ReactElement, useState, useEffect, ReactNode } from 'react';
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';

interface TextBasicProps {
  children: ReactNode;
  className: string;
  enterSec: number;
}

const TextBasic = ({children, className, enterSec}: TextBasicProps): ReactElement => {
  const [active, setActive] = useState(true);

  return (
    <Animator active={active} duration={{enter: enterSec}}>
      <Text 
        className={className}
        as='p'
      >
        {children}
      </Text>
    </Animator>
  );
};

export default TextBasic
