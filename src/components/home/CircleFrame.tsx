import type { ReactNode } from "react";

const TOP_COUNT = 18;
const SIDE_COUNT = 12;
const SIZE = 12;

interface CircleFrameProps {
  children: ReactNode;
}

interface HalfCircleProps {
  direction: "top" | "bottom" | "left" | "right";
  color: string;
}

const HalfCircle = ({ direction, color }: HalfCircleProps) => {
  const gradients = {
    top: `linear-gradient(to bottom, transparent 46%, ${color} 54%)`,
    bottom: `linear-gradient(to top, transparent 46%, ${color} 54%)`,
    left: `linear-gradient(to right, transparent 46%, ${color} 54%)`,
    right: `linear-gradient(to left, transparent 46%, ${color} 54%)`,
  };

  return (
    <div
      className="rounded-full shrink-0"
      style={{
        width: SIZE,
        height: SIZE,
        background: gradients[direction],
      }}
    />
  );
};

const CircleFrame = ({ children }: CircleFrameProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* TOP */}
      <div className="absolute top-0 left-0 flex w-full justify-between -translate-y-1/2 px-1 pointer-events-none z-20">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <HalfCircle key={`top-${i}`} direction="top" color="#01545C" />
        ))}
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-0 left-0 flex w-full justify-between translate-y-1/2 px-1 pointer-events-none z-20">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <HalfCircle key={`bottom-${i}`} direction="bottom" color="#011C1F" />
        ))}
      </div>

      {/* LEFT */}
      <div className="absolute left-0 top-0 flex h-full flex-col justify-between -translate-x-1/2 py-1 pointer-events-none z-20">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <HalfCircle key={`left-${i}`} direction="left" color="#011C1F" />
        ))}
      </div>

      {/* RIGHT */}
      <div className="absolute right-0 top-0 flex h-full flex-col justify-between translate-x-1/2 py-1 pointer-events-none z-20">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <HalfCircle key={`right-${i}`} direction="right" color="#011C1F" />
        ))}
      </div>

      {children}
    </div>
  );
};

export default CircleFrame;
