import React, { type ReactElement, useState, useEffect, ReactNode } from 'react';
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';

interface TextBasicProps {
  children: ReactNode;
  className: string;
}

const TextBasic = ({children, className}: TextBasicProps): ReactElement => {
  const [active, setActive] = useState(true);

  return (
    <Animator active={active} duration={{enter: 0.8}}>
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
