import { useBleeps } from "@arwes/react";
import { ReactElement, ReactNode } from "react";

type BleepsNames 
  = 'click' | 'intro' | 'error' | 'transmission' | 'expand' | 'hover';

interface ButtonProps {
  name: BleepsNames
  children: ReactNode
}

const Button = (props: ButtonProps): ReactElement => {
  const { name, children } = props;
  const bleeps = useBleeps<BleepsNames>();
  const onClick = (): void => bleeps[name]?.play();
  const onMouseEnter = (): void => {
    bleeps.hover?.play();
  };
  

  return <button onClick={onClick} onMouseEnter={onMouseEnter}>{children}</button>;
};

export default Button
