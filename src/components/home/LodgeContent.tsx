const LodgeContent = () => {
  return (
    <div className="max-w-[700px]">
      <div className="flex flex-col gap-[20px]">
        <p className="font-manrope text-[14px] font-normal uppercase leading-[140%] text-white">
          THE LODGE
        </p>

        <div>
          <h2 className="font-right-slab text-[40px] font-light leading-[100%] text-[#FF939E] sm:text-[52px] md:text-[64px]">
            Bring your laptop.
          </h2>

          <h2 className="font-right-slab text-[40px] font-light leading-[100%] text-[#FFE7EA] sm:text-[52px] md:text-[64px]">
            The kids are handled.
          </h2>
        </div>

        <div className="flex flex-col gap-[4px]">
          <p className="font-manrope text-[16px] font-normal leading-[140%] text-[#FFE7EA] md:text-[20px]">
            Free Wi-Fi, charging ports, and a full view of the play floor.
          </p>

          <p className="font-manrope text-[16px] font-normal leading-[140%] text-[#FFE7EA] md:text-[20px]">
            Stay as long as they do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LodgeContent;
