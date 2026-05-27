import ZoneCard from "./ZoneCard";

const ArtClassesCard = () => {
  return (
    <ZoneCard
      title="Art Classes"
      description="Thursdays. They make something. You hang it on the fridge. Book 48 hours ahead — spots fill every week."
      ageLabel="Age 3-12"
      className="bg-art-bg text-art-text lg:col-start-3 lg:row-start-1 lg:row-span-1"
      badgeClassName="bg-art-badge text-art-bg"
    />
  );
};

export default ArtClassesCard;
