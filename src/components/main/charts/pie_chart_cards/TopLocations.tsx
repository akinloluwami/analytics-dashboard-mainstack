import ITopLocation from "../../../../typings/top-locations";
import PieChartCard from "./PieChartCard";

const TopLocations = ({ locations }: { locations: ITopLocation[] }) => {
  const mapCountryToColorAndFlag = (country: any) => {
    switch (country) {
      case "Nigeria":
        return {
          color: "#008000",
          flagImage: "/NG/flat/64.png",
        };

      case "Germany":
        return {
          color: "#FF0000",
          flagImage: "/DE/flat/64.png",
        };
      case "Ghana":
        return {
          color: "#FFA500",
          flagImage: "/GH/flat/64.png",
        };
      case "Finland":
        return {
          color: "#0000FF",
          flagImage: "/FI/flat/64.png",
        };
      case "United Kingdom":
        return {
          color: "#FFFFFF",
          flagImage: "/GB/flat/64.png",
        };
      default:
        return {
          color: "#000000",
          flagImage: "",
        };
    }
  };

  const modifiedData = locations.map((location) => {
    const { country, count, percent } = location;
    const { color, flagImage } = mapCountryToColorAndFlag(country);

    return {
      country,
      count,
      percent,
      color,
      flagImage,
    };
  });

  return (
    <PieChartCard title="Top Locations">
      <div className="">
        {modifiedData.map((location) => (
          <div className="my-2 flex" key={location.country}>
            <img
              src={`https://flagsapi.com${location.flagImage}`}
              alt={location.country}
              className="w-5 mr-2"
            />
            {location.country}{" "}
            <span className="font-semibold">{location.percent}%</span>
          </div>
        ))}
      </div>
    </PieChartCard>
  );
};

export default TopLocations;
