const ToddlerAreaCard = () => {
  return (
    <div className="bg-toddler-bg rounded-xl p-6 overflow-hidden relative min-h-[320px] lg:col-start-1 lg:row-start-2 lg:row-span-2 h-full flex flex-col justify-between">
      <div className="relative z-10 flex flex-col items-start">
        <h2 className="text-[40px] text-toddler-text font-right-slab leading-tight mb-3">
          Toddler Area
        </h2>
        <p className="text-toddler-text text-lg mb-6 font-manrope leading-relaxed w-11/12">
          A space where a 2-year-old can explore without you holding your
          breath. Soft surfaces, safe equipment, no big kids.
        </p>
      </div>

      <div className="relative z-10 flex items-end">
        <span className="bg-toddler-badge text-toddler-bg font-manrope text-base font-semibold px-4 py-2 rounded inline-block">
          Age 3-12
        </span>
      </div>

      <div
        className="absolute -bottom-4 -right-25 w-[368px] h-[350px] z-0 flex justify-center pt-16 gap-6 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #85E056 0%, #55C61E 30%, #000000 85%)",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
        }}
      >
        <div className="w-[24.74px] h-[49.48px] bg-white rounded-full flex items-center justify-center relative shadow-inner">
          <div className="w-[21.47px] h-[21.47px] bg-black rounded-full absolute bottom-1"></div>
        </div>
        <div className="w-[24.74px] h-[49.48px] bg-white rounded-full flex items-center justify-center relative shadow-inner">
          <div className="w-[21.47px] h-[21.47px] bg-black rounded-full absolute bottom-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ToddlerAreaCard;
