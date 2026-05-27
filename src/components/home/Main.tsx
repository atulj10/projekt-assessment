import JungleGymCard from "./JungleGymCard";
import ToddlerAreaCard from "./ToddlerAreaCard";
import IndoorPlaygroundCard from "./IndoorPlaygroundCard";
import ArtClassesCard from "./ArtClassesCard";
import ArcadeCard from "./ArcadeCard";
import CraftClassesCard from "./CraftClassesCard";

const Main = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex items-center justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-2 relative">
        <JungleGymCard />
        <ToddlerAreaCard />
        <IndoorPlaygroundCard />
        <ArtClassesCard />
        <ArcadeCard />
        <CraftClassesCard />
      </div>
    </div>
  );
};

export default Main;
