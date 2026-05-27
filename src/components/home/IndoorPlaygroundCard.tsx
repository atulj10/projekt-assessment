import kidExploring from "../../assets/images/kid-exploring.png";
import CircleFrame from "./CircleFrame";

const IndoorPlaygroundCard = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#0098A7_0%,_#00191B_100%)]  rounded-xl p-6 pb-8 shadow-xl relative lg:col-start-2 lg:row-start-1 lg:row-span-3 h-full flex flex-col items-start justify-between pt-20">
      <div
        className="absolute -top-4 -left-4 z-30 flex h-[58px] w-[58px] items-center justify-center rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #d9d9d9 0%, #9a9a9a 45%, #3d3d3d 100%)",
          boxShadow: `
      0px 28px 30px rgba(0,0,0,0.65),
      0px 14px 18px rgba(0,0,0,0.45),
      0px 6px 8px rgba(0,0,0,0.35),
      inset 0px 2px 3px rgba(255,255,255,0.9),
      inset 0px -3px 5px rgba(0,0,0,0.7)
    `,
        }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background: `
        conic-gradient(
          from 210deg at 50% 50%,
          #f4f4f4 0deg,
          #bcbcbc 20deg,
          #8d8d8d 45deg,
          #e9e9e9 70deg,
          #6f6f6f 95deg,
          #d4d4d4 120deg,
          #7a7a7a 150deg,
          #f7f7f7 180deg,
          #8c8c8c 215deg,
          #dcdcdc 250deg,
          #5f5f5f 285deg,
          #cfcfcf 320deg,
          #f3f3f3 360deg
        )
      `,
            boxShadow: `
        inset 0px 2px 2px rgba(255,255,255,0.7),
        inset 0px -2px 4px rgba(0,0,0,0.55)
      `,
            filter: "contrast(115%) brightness(108%)",
          }}
        />
      </div>
      <div>
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

      <CircleFrame>
        <div className="bg-[#F4F4F4]">
          <img
            src={kidExploring}
            alt="Kid exploring miniature nature playground"
            className=" object-cover object-center"
          />
        </div>
      </CircleFrame>
    </div>
  );
};

export default IndoorPlaygroundCard;
