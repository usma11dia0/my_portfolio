import React, { MouseEvent, ReactNode } from 'react';

interface MouseMoveCrosshairProps {
  children: ReactNode;
}

const MouseMoveCrosshair = ({ children }: MouseMoveCrosshairProps): React.JSX.Element => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const verticalLine = document.getElementById('verticalLine');
    const horizontalLine = document.getElementById('horizontalLine');
    
    if (verticalLine && horizontalLine) {
      verticalLine.style.left = `${e.clientX}px`;
      horizontalLine.style.top = `${e.clientY}px`;
    }
  };

  return (
    <>
      <div className="crosshair-v hidden xl:flex" id="verticalLine"></div>
      <div className="crosshair-h hidden xl:flex" id="horizontalLine"></div>
      <div onMouseMove={handleMouseMove} className="w-full h-full top-0 left-0">
        {children}
      </div>
    </>
  );
};

export default MouseMoveCrosshair;
