import kidExploring from "../../assets/images/kid-exploring.png";
import CircleFrame from "./CircleFrame";
import Doorknob from "./Doorknob";

const IndoorPlaygroundCard = () => {
  return (
    <div className="relative h-full lg:col-start-2 lg:row-start-1 lg:row-span-3">
      <div className="absolute -top-2 -left-14 z-30 pointer-events-none">
        <Doorknob />
      </div>

      <div
        className="
          bg-[linear-gradient(180deg,_#0098A7_0%,_#00191B_100%)]
          rounded-xl
          p-6 pb-8
          relative
          h-full
          flex flex-col items-start justify-between
          pt-20
          origin-top-left
          rotate-[-6deg]
          translate-x-[-45px]
          shadow-[12px_12px_20px_0px_#00000063,24px_24px_36px_0px_#00000057,48px_48px_49px_0px_#00000033,72px_72px_58px_0px_#0000000F]
        "
        style={{
          WebkitMaskImage:
            "radial-gradient(circle 45px at 14px 21px, transparent 98%, black 100%)",
          maskImage:
            "radial-gradient(circle 45px at 14px 21px, transparent 98%, black 100%)",
        }}
      >
        {/* content */}
        <div className="relative z-20">
          <h2 className="text-[40px] text-[#BBFBFF] font-right-slab leading-tight">
            Indoor Playground
          </h2>

          <p className="text-[#BBFBFF] text-[18px] mb-6 font-manrope leading-relaxed">
            The one they'll talk about all week. Award-winning Traverse climbing
            wall, the i-Wall interactive room, and Sisy Fox experiences — all
            open, all day.
          </p>

          <span className="bg-[#00D8E9] text-[#00282C] font-manrope text-[16px] font-bold px-3 py-1.5 rounded inline-block mb-6">
            Age 3-12
          </span>
        </div>

        {/* image */}
        <div className="relative z-20 w-full">
          <CircleFrame>
            <div className="bg-[#F4F4F4]">
              <img
                src={kidExploring}
                alt="Kid exploring miniature nature playground"
                className="object-cover object-center"
              />
            </div>
          </CircleFrame>
        </div>
      </div>
    </div>
  );
};

export default IndoorPlaygroundCard;
