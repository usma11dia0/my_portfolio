import React, { ReactNode, useState } from 'react';
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';

interface TextDecipherProps {
  children: ReactNode;
  className: string;
}

const TextDecipher = ({children, className}: TextDecipherProps) => {

  const [active, setActive] = useState(true);


  return (
    <Animator active={active} duration={{enter: 3.5, exit: 1.5}}>
      <Text
        className={className}
        manager='decipher'
        easing='outSine'
        fixed
      >
        {children}
      </Text>
    </Animator>
  );
}

export default TextDecipher
