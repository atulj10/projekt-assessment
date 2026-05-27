const Circle = ({ color = "var(--color-off-white)", size = 16 }) => {
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
