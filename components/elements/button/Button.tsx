import { useBleeps } from "@arwes/react";
import { ReactElement, ReactNode } from "react";

type BleepsNames 
  = 'click' | 'intro' | 'error' | 'transmission' | 'expand' | 'hover';

interface ButtonProps {
  name: BleepsNames
  children: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps): ReactElement => {
  const { name, children, onClick } = props;
  const bleeps = useBleeps<BleepsNames>();
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    bleeps[name]?.play();
    if (onClick) {
      onClick(e);
    }
  }
  const onMouseEnter = (): void => {
    bleeps.hover?.play();
  };
  

  return <button onClick={onClickHandler} onMouseEnter={onMouseEnter}>{children}</button>;
};

export default Button
