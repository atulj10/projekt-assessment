import Circle from "./Circle";

type SideCounts = { mobile: number; tablet: number; desktop: number };

const sides: { side: "top" | "bottom" | "left" | "right"; vertical: boolean; counts: SideCounts }[] = [
  {
    side: "top",
    vertical: false,
    counts: { mobile: 0, tablet: 18, desktop: 40 },
  },
  {
    side: "bottom",
    vertical: false,
    counts: { mobile: 0, tablet: 18, desktop: 40 },
  },
  {
    side: "left",
    vertical: true,
    counts: { mobile: 20, tablet: 15, desktop: 12 },
  },
  {
    side: "right",
    vertical: true,
    counts: { mobile: 20, tablet: 15, desktop: 12 },
  },
];

const TicketBorder = () => {
  return (
    <>
      {sides.map(({ side, vertical, counts }) => {
        const isHorizontal = !vertical;

        if (isHorizontal) {
          return (
            <div
              key={side}
              className={`absolute ${side === "top" ? "top-0" : "bottom-0"} left-0 hidden w-full ${side === "top" ? "-translate-y-1/2" : "translate-y-1/2"} md:flex`}
            >
              <div className="hidden w-full justify-between px-10 md:flex lg:hidden">
                {Array.from({ length: counts.tablet }).map((_, i) => (
                  <Circle key={`${side}-tablet-${i}`} />
                ))}
              </div>
              <div className="hidden w-full justify-between lg:flex lg:px-[60px]">
                {Array.from({ length: counts.desktop }).map((_, i) => (
                  <Circle key={`${side}-desktop-${i}`} />
                ))}
              </div>
            </div>
          );
        }

        return (
          <div
            key={side}
            className={`absolute top-0 ${side === "left" ? "left-0" : "right-0"} flex h-full flex-col justify-between py-3 ${side === "left" ? "-translate-x-1/2" : "translate-x-1/2"} md:py-4 lg:py-5`}
          >
            <div className="flex h-full flex-col justify-between md:hidden">
              {Array.from({ length: counts.mobile }).map((_, i) => (
                <Circle key={`${side}-mobile-${i}`} />
              ))}
            </div>
            <div className="hidden h-full flex-col justify-between md:flex lg:hidden">
              {Array.from({ length: counts.tablet }).map((_, i) => (
                <Circle key={`${side}-tablet-${i}`} />
              ))}
            </div>
            <div className="hidden h-full flex-col justify-between lg:flex">
              {Array.from({ length: counts.desktop }).map((_, i) => (
                <Circle key={`${side}-desktop-${i}`} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TicketBorder;
