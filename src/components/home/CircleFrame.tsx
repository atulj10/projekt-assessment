import type { ReactNode } from "react";

const TOP_COUNT = 18;
const SIDE_COUNT = 12;
const SIZE = 12;

interface CircleFrameProps {
  children: ReactNode;
}

const Dot = ({ color }: { color: string }) => {
  return (
    <div
      className="rounded-full shrink-0"
      style={{
        width: SIZE,
        height: SIZE,
        backgroundColor: color,
      }}
    />
  );
};

const CircleFrame = ({ children }: CircleFrameProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-20 flex w-full justify-between px-1 -translate-y-1/2 pointer-events-none">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <Dot key={`top-${i}`} color="var(--color-frame-top)" />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 z-20 flex w-full justify-between px-1 translate-y-1/2 pointer-events-none">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <Dot key={`bottom-${i}`} color="var(--color-frame-side)" />
        ))}
      </div>

      <div className="absolute top-0 left-0 z-20 flex h-full flex-col justify-between py-1 -translate-x-1/2 pointer-events-none">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <Dot key={`left-${i}`} color="var(--color-frame-side)" />
        ))}
      </div>

      <div className="absolute top-0 right-0 z-20 flex h-full flex-col justify-between py-1 translate-x-1/2 pointer-events-none">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <Dot key={`right-${i}`} color="var(--color-frame-side)" />
        ))}
      </div>

      {children}
    </div>
  );
};

export default CircleFrame;
