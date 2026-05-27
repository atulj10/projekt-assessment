import ZoneCard from "./ZoneCard";

const JungleGymCard = () => {
  return (
    <ZoneCard
      title="Jungle Gym"
      description="Kids burn energy. You sit down for a minute. Multi-level climbing structures, slides, tunnels, and obstacle courses."
      ageLabel="Age 3-12"
      className="bg-jungle-bg text-jungle-text lg:col-start-1 lg:row-start-1 lg:row-span-1"
      badgeClassName="bg-jungle-badge text-jungle-bg"
    />
  );
};

export default JungleGymCard;
