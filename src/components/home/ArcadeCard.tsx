import ZoneCard from "./ZoneCard";

const ArcadeCard = () => {
  return (
    <ZoneCard
      title="Arcade"
      description="Beat your dad at air hockey. Win something from the claw machine. See who lasts longest on the iWall. All included in your entry."
      ageLabel="Age 3-12"
      className="bg-arcade-bg text-arcade-text lg:col-start-3 lg:row-start-2 lg:row-span-1"
      badgeClassName="bg-arcade-badge text-arcade-bg"
    />
  );
};

export default ArcadeCard;
