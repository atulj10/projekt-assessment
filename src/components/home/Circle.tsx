const CIRCLE_SIZE = 16;

const Circle = () => {
  return (
    <div
      className="shrink-0 rounded-full bg-[#F8F7F7]"
      style={{
        width: `${CIRCLE_SIZE}px`,
        height: `${CIRCLE_SIZE}px`,
      }}
    />
  );
};

export default Circle;
