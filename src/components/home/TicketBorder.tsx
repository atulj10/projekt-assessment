import Circle from "./Circle";

const COUNT = 40;

const TicketBorder = () => {
  return (
    <>
      {/* TOP */}
      <div className="absolute top-0 left-0 hidden w-full justify-between px-[20px] -translate-y-1/2 md:flex">
        {Array.from({ length: COUNT }).map((_, i) => (
          <Circle key={`top-${i}`} />
        ))}
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-0 left-0 hidden w-full justify-between px-[20px] translate-y-1/2 md:flex">
        {Array.from({ length: COUNT }).map((_, i) => (
          <Circle key={`bottom-${i}`} />
        ))}
      </div>

      {/* LEFT */}
      <div className="absolute top-0 left-0 flex h-full flex-col justify-between py-[12px] -translate-x-1/2 md:py-[20px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <Circle key={`left-${i}`} />
        ))}
      </div>

      {/* RIGHT */}
      <div className="absolute top-0 right-0 flex h-full flex-col justify-between py-[12px] translate-x-1/2 md:py-[20px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <Circle key={`right-${i}`} />
        ))}
      </div>
    </>
  );
};

export default TicketBorder;
