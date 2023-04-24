import ITopLocation from "../../../../typings/top-locations";
import PieChartCard from "./PieChartCard";

const TopLocations = ({ locations }: { locations: ITopLocation[] }) => {
  return (
    <PieChartCard title="Top Locations">
      <div className="">
        {locations.map((location) => (
          <div className="">{location.country}</div>
        ))}
      </div>
    </PieChartCard>
  );
};

export default TopLocations;
