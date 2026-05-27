import Circle from "./Circle";

const COUNT = 40;

const TicketBorder = () => {
  return (
    <>
      {/* TOP */}
      <div className="absolute top-0 left-0 hidden w-full justify-between lg:px-[60px] -translate-y-1/2 md:flex">
        {Array.from({ length: COUNT }).map((_, i) => (
          <Circle color="#F8F7F7" key={`top-${i}`} />
        ))}
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-0 left-0 hidden w-full justify-between lg:px-[60px] translate-y-1/2 md:flex">
        {Array.from({ length: COUNT }).map((_, i) => (
          <Circle color="#F8F7F7" key={`bottom-${i}`} />
        ))}
      </div>

      {/* LEFT */}
      <div className="absolute top-0 left-0 flex h-full flex-col justify-between py-[12px] -translate-x-1/2 md:py-[16px] lg:py-[20px]">
        {/* PHONE = 20 */}
        <div className="flex h-full flex-col justify-between md:hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <Circle color="#F8F7F7" key={`left-mobile-${i}`} />
          ))}
        </div>

        {/* TABLET = 15 */}
        <div className="hidden h-full flex-col justify-between md:flex lg:hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <Circle color="#F8F7F7" key={`left-tablet-${i}`} />
          ))}
        </div>

        {/* LAPTOP = 12 */}
        <div className="hidden h-full flex-col justify-between lg:flex">
          {Array.from({ length: 12 }).map((_, i) => (
            <Circle color="#F8F7F7" key={`left-desktop-${i}`} />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="absolute top-0 right-0 flex h-full flex-col justify-between py-[12px] translate-x-1/2 md:py-[16px] lg:py-[20px]">
        {/* PHONE = 20 */}
        <div className="flex h-full flex-col justify-between md:hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <Circle color="#F8F7F7" key={`right-mobile-${i}`} />
          ))}
        </div>

        {/* TABLET = 15 */}
        <div className="hidden h-full flex-col justify-between md:flex lg:hidden">
          {Array.from({ length: 13 }).map((_, i) => (
            <Circle color="#F8F7F7" key={`right-tablet-${i}`} />
          ))}
        </div>

        {/* LAPTOP = 12 */}
        <div className="hidden h-full flex-col justify-between lg:flex">
          {Array.from({ length: 12 }).map((_, i) => (
            <Circle color="#F8F7F7" key={`right-desktop-${i}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketBorder;
