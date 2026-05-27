const CIRCLE_SIZE = 16;

const Circle = ({ color = "#F8F7F7" }) => {
  return (
    <div
      className="shrink-0 rounded-full"
      style={{
        width: `${CIRCLE_SIZE}px`,
        height: `${CIRCLE_SIZE}px`,
        backgroundColor: color,
      }}
    />
  );
};

export default Circle;
