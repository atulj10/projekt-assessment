import Circle from "./Circle";

const TOP_BOTTOM_TABLET_COUNT = 18;
const TOP_BOTTOM_DESKTOP_COUNT = 40;

const LEFT_RIGHT_MOBILE_COUNT = 20;
const LEFT_RIGHT_TABLET_COUNT = 15;
const LEFT_RIGHT_DESKTOP_COUNT = 12;

const TicketBorder = () => {
  return (
    <>
      {/* TOP */}
      <div className="absolute top-0 left-0 hidden w-full -translate-y-1/2 md:flex">
        {/* TABLET */}
        <div className="hidden w-full justify-between px-[40px] md:flex lg:hidden">
          {Array.from({ length: TOP_BOTTOM_TABLET_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`top-tablet-${i}`} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden w-full justify-between lg:flex lg:px-[60px]">
          {Array.from({ length: TOP_BOTTOM_DESKTOP_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`top-desktop-${i}`} />
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-0 left-0 hidden w-full translate-y-1/2 md:flex">
        {/* TABLET */}
        <div className="hidden w-full justify-between px-[40px] md:flex lg:hidden">
          {Array.from({ length: TOP_BOTTOM_TABLET_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`bottom-tablet-${i}`} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden w-full justify-between lg:flex lg:px-[60px]">
          {Array.from({ length: TOP_BOTTOM_DESKTOP_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`bottom-desktop-${i}`} />
          ))}
        </div>
      </div>

      {/* LEFT */}
      <div className="absolute top-0 left-0 flex h-full flex-col justify-between py-[12px] -translate-x-1/2 md:py-[16px] lg:py-[20px]">
        {/* MOBILE */}
        <div className="flex h-full flex-col justify-between md:hidden">
          {Array.from({ length: LEFT_RIGHT_MOBILE_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`left-mobile-${i}`} />
          ))}
        </div>

        {/* TABLET */}
        <div className="hidden h-full flex-col justify-between md:flex lg:hidden">
          {Array.from({ length: LEFT_RIGHT_TABLET_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`left-tablet-${i}`} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden h-full flex-col justify-between lg:flex">
          {Array.from({ length: LEFT_RIGHT_DESKTOP_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`left-desktop-${i}`} />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="absolute top-0 right-0 flex h-full flex-col justify-between py-[12px] translate-x-1/2 md:py-[16px] lg:py-[20px]">
        {/* MOBILE */}
        <div className="flex h-full flex-col justify-between md:hidden">
          {Array.from({ length: LEFT_RIGHT_MOBILE_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`right-mobile-${i}`} />
          ))}
        </div>

        {/* TABLET */}
        <div className="hidden h-full flex-col justify-between md:flex lg:hidden">
          {Array.from({ length: LEFT_RIGHT_TABLET_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`right-tablet-${i}`} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden h-full flex-col justify-between lg:flex">
          {Array.from({ length: LEFT_RIGHT_DESKTOP_COUNT }).map((_, i) => (
            <Circle color="#F8F7F7" key={`right-desktop-${i}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketBorder;
