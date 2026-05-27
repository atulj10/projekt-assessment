import type { ReactNode } from "react";

const TOP_COUNT = 18;
const SIDE_COUNT = 12;
const SIZE = 12;

interface CircleFrameProps {
  children: ReactNode;
}

interface CutoutCircleProps {
  color?: string;
}

const CutoutCircle = ({ color = "#021316" }: CutoutCircleProps) => {
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
      {/* TOP CUTOUTS */}
      <div className="absolute top-0 left-0 z-20 flex w-full justify-between px-1 -translate-y-1/2 pointer-events-none">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <CutoutCircle key={`top-${i}`} color="#01545C" />
        ))}
      </div>

      {/* BOTTOM CUTOUTS */}
      <div className="absolute bottom-0 left-0 z-20 flex w-full justify-between px-1 translate-y-1/2 pointer-events-none">
        {Array.from({ length: TOP_COUNT }).map((_, i) => (
          <CutoutCircle key={`bottom-${i}`} color="#012E32" />
        ))}
      </div>

      {/* LEFT CUTOUTS */}
      <div className="absolute top-0 left-0 z-20 flex h-full flex-col justify-between py-1 -translate-x-1/2 pointer-events-none">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <CutoutCircle key={`left-${i}`} color="#012E32" />
        ))}
      </div>

      {/* RIGHT CUTOUTS */}
      <div className="absolute top-0 right-0 z-20 flex h-full flex-col justify-between py-1 translate-x-1/2 pointer-events-none">
        {Array.from({ length: SIDE_COUNT }).map((_, i) => (
          <CutoutCircle key={`right-${i}`} color="#012E32" />
        ))}
      </div>

      {children}
    </div>
  );
};

export default CircleFrame;
