const body =
  "font-manrope text-xl leading-[140%] tracking-normal text-center max-md:text-lg max-sm:text-base";
const bodySemibold = `${body} font-semibold`;
const heading =
  "font-right-slab font-light text-[80px] leading-none tracking-normal text-center max-lg:text-7xl max-md:text-6xl max-sm:text-6xl";

const Header = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto text-center gap-6 px-4">
      <div className="max-w-189.5 flex flex-col gap-6 w-full">
        <div>
          <p className="font-manrope font-medium text-sm text-header-dark max-sm:text-[14px]">
            INSIDE KIDIVERSE
          </p>
          <div>
            <h2 className={`${heading} text-header-primary`}>
              Six ways to wear them
            </h2>
            <h2 className={`${heading} text-header-accent`}>out before dinner.</h2>
          </div>
        </div>
        <p className={`${body} font-normal`}>
          Every zone is open from the moment you walk in. No scheduling, no
          extra charges, no sitting out.
        </p>
      </div>
      <div className="w-full max-w-147.25 rounded-sm px-6.25 py-4 gap-2.5 bg-warm-gray shadow-[inset_0px_0.72px_1.44px_0.36px_#00000059] flex flex-col items-center justify-center min-h-18.5">
        <p className={`${bodySemibold} text-header-accent`}>
          Non-skid Kidiverse socks are mandatory for everyone.{" "}
        </p>
        <p className={`${body} text-muted-text`}>
          Available at the front desk ·{" "}
          <span className={`${bodySemibold} text-[#000000]`}>$4.50 each</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
