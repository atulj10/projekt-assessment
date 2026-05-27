const JungleGymCard = () => {
  return (
    <div className="bg-[#FFE7EA] rounded-xl p-6 shadow-sm lg:col-start-1 lg:row-start-1 lg:row-span-1 h-full flex flex-col items-start justify-center">
      <h2 className="text-[40px] text-[#6B0018] font-right-slab leading-tight mb-3">
        Jungle Gym
      </h2>
      <p className="text-[#6B0018] text-[18px] font-manrope mb-6 leading-relaxed pr-4">
        Kids burn energy. You sit down for a minute. Multi-level climbing
        structures, slides, tunnels, and obstacle courses.
      </p>
      <span className="bg-[#FF004E] text-[#FFE7EA] font-manrope text-[16px] font-semibold px-3 py-1.5 rounded">
        Age 3-12
      </span>
    </div>
  );
};

export default JungleGymCard;
