import ZoneCard from "./ZoneCard";

const CraftClassesCard = () => {
  return (
    <ZoneCard
      title="Craft Classes"
      description="Every Wednesday. All materials provided, all mess contained. They make something. You hang it on the fridge."
      ageLabel="Age 3-12"
      className="bg-craft-bg text-craft-text lg:col-start-3 lg:row-start-3 lg:row-span-1"
      badgeClassName="bg-craft-badge text-craft-bg"
    />
  );
};

export default CraftClassesCard;
