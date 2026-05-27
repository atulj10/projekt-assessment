const LodgeContent = () => {
  return (
    <div className="max-w-[700px]">
      <div className="flex flex-col gap-5">
        <p className="font-manrope text-sm font-normal uppercase leading-[140%] text-white">
          THE LODGE
        </p>

        <div>
          <h2 className="font-right-slab text-[40px] font-light leading-none text-footer-accent sm:text-[52px] md:text-[64px]">
            Bring your laptop.
          </h2>

          <h2 className="font-right-slab text-[40px] font-light leading-none text-footer-text sm:text-[52px] md:text-[64px]">
            The kids are handled.
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-manrope text-base font-normal leading-[140%] text-footer-text md:text-xl">
            Free Wi-Fi, charging ports, and a full view of the play floor.
          </p>

          <p className="font-manrope text-base font-normal leading-[140%] text-footer-text md:text-xl">
            Stay as long as they do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LodgeContent;
