import Card from "./Card";

const cards = [
  {
    id: "wifi",
    title: "Free Wi-Fi + charging",
    description: "Stay connected while they burn it all off",
  },
  {
    id: "stay",
    title: "Stay as long as they do",
    description: "No pressure, no time limit during open play",
  },
  {
    id: "view",
    title: "Full view of the play floor",
    description: "Keep an eye on them without hovering",
  },
];

const CardsSection = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:w-[372px] lg:grid-cols-1">
      {cards.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardsSection;
