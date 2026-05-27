import kidExploring from "../../assets/images/kid-exploring.png";
import CircleFrame from "./CircleFrame";
import Doorknob from "./Doorknob";

const IndoorPlaygroundCard = () => {
  return (
    <div
      className="relative h-full lg:col-start-2 lg:row-start-1 lg:row-span-3 origin-top-left 
          rotate-[-6deg]
          translate-x-[-45px]
          max-sm:translate-x-[-30px]
          shadow-[12px_12px_20px_0px_#00000063,24px_24px_36px_0px_#00000057,48px_48px_49px_0px_#00000033,72px_72px_58px_0px_#0000000F] rounded-xl"
    >
      <div className="absolute -top-2 -left-2 z-30 pointer-events-none">
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
              <div
                className="relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.075)",
                  backgroundImage:
                    "url(data:image/png;base64,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)",
                }}
              >
                <img
                  src={kidExploring}
                  alt="Kid exploring miniature nature playground"
                  className="object-cover object-center mix-blend-multiply opacity-95"
                />
              </div>
            </div>
          </CircleFrame>
        </div>
      </div>
    </div>
  );
};

export default IndoorPlaygroundCard;
