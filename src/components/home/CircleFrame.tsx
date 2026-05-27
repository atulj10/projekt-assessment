import type { ReactNode } from "react";
import Circle from "./Circle";

const TOP_COUNT = 14;
const SIDE_COUNT = 8;

interface CircleFrameProps {
  children: ReactNode;
}

const CircleFrame = ({ children }: CircleFrameProps) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 flex w-full justify-between -translate-y-1/2 px-1">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <Circle color="#01545C" key={`top-${i}`} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 flex w-full justify-between translate-y-1/2 px-1">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <Circle color="#011C1F" key={`bottom-${i}`} />
        ))}
      </div>

      <div className="absolute left-0 top-0 flex h-full flex-col justify-between -translate-x-1/2 py-1">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <Circle color="#011C1F" key={`left-${i}`} />
        ))}
      </div>

      <div className="absolute right-0 top-0 flex h-full flex-col justify-between translate-x-1/2 py-1">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <Circle color="#011C1F" key={`right-${i}`} />
        ))}
      </div>

      {children}
    </div>
  );
};

export default CircleFrame;
