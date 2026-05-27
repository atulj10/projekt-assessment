const ArcadeCard = () => {
  return (
    <div className="bg-[#E9D6FF] rounded-xl p-6 shadow-sm lg:col-start-3 lg:row-start-2 lg:row-span-1 h-full flex flex-col items-start justify-center">
      <h2 className="text-[40px] text-[#37005C] font-right-slab leading-tight mb-3">
        Arcade
      </h2>
      <p className="text-[#37005C] text-[18px] mb-6 font-manrope leading-relaxed">
        Beat your dad at air hockey. Win something from the claw machine.
        See who lasts longest on the iWall. All included in your entry.
      </p>
      <span className="bg-[#AA24FF] text-[#E9D6FF] font-manrope text-[16px] font-semibold px-3 py-1.5 rounded">
        Age 3-12
      </span>
    </div>
  );
};

export default ArcadeCard;
