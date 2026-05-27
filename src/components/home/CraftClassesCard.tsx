const CraftClassesCard = () => {
  return (
    <div className="bg-[#FFDAD0] rounded-xl p-6 shadow-sm lg:col-start-3 lg:row-start-3 lg:row-span-1 h-full flex flex-col items-start justify-center">
      <h2 className="text-[40px] text-[#6B0018] font-right-slab leading-tight mb-3">
        Craft Classes
      </h2>
      <p className="text-[#6B0018] text-[18px] mb-6 font-manrope leading-relaxed">
        Every Wednesday. All materials provided, all mess contained. They
        make something. You hang it on the fridge.
      </p>
      <span className="bg-[#F71A00] text-[#FFDAD0] font-manrope text-[16px] font-semibold px-3 py-1.5 rounded">
        Age 3-12
      </span>
    </div>
  );
};

export default CraftClassesCard;
