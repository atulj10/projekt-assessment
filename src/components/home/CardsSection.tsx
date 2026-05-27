import Card from "./Card";

const cards = [
  {
    title: "Free Wi-Fi + charging",
    description: "Stay connected while they burn it all off",
  },
  {
    title: "Stay as long as they do",
    description: "No pressure, no time limit during open play",
  },
  {
    title: "Full view of the play floor",
    description: "Keep an eye on them without hovering",
  },
];

const CardsSection = () => {
  return (
    <div className="grid gap-[8px] sm:grid-cols-2 lg:w-[372px] lg:grid-cols-1">
      {cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardsSection;
