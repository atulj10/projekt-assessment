const Doorknob = () => {
  return (
    <div
      className=" absolute top-0 left-0 z-30 flex h-[58px] w-[58px] items-center justify-center rounded-full"
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
  );
};

export default Doorknob;
