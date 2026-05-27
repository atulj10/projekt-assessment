const ArtClassesCard = () => {
  return (
    <div className="bg-[#DEECFF] rounded-xl p-6 shadow-sm lg:col-start-3 lg:row-start-1 lg:row-span-1 h-full flex flex-col items-start justify-center">
      <h2 className="text-[40px] text-[#00164A] font-right-slab leading-tight mb-3">
        Art Classes
      </h2>
      <p className="text-[#00164A] text-[18px] mb-6 font-manrope leading-relaxed">
        Thursdays. They make something. You hang it on the fridge. Book 48
        hours ahead — spots fill every week.
      </p>
      <span className="bg-[#002774] text-[#DEECFF] font-manrope text-[16px] font-semibold px-3 py-1.5 rounded">
        Age 3-12
      </span>
    </div>
  );
};

export default ArtClassesCard;
