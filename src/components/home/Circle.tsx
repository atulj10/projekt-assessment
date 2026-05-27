const CIRCLE_SIZE = 16;

const Circle = ({ color = "#F8F7F7", size = CIRCLE_SIZE }) => {
  return (
    <div
      className="shrink-0 rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
    />
  );
};

export default Circle;
