import ITopLocation from "../../../../typings/top-locations";
import PieChartCard from "./PieChartCard";

const TopLocations = ({ locations }: { locations: ITopLocation[] }) => {
  const mapCountryToColorAndFlag = (country: any) => {
    switch (country) {
      case "Nigeria":
        return {
          color: "#599EEA",
          flagImage: "/NG/flat/64.png",
        };

      case "Germany":
        return {
          color: "#844FF6",
          flagImage: "/DE/flat/64.png",
        };
      case "Ghana":
        return {
          color: "#0FB77A",
          flagImage: "/GH/flat/64.png",
        };
      case "Finland":
        return {
          color: "#FAB70A",
          flagImage: "/FI/flat/64.png",
        };
      case "United Kingdom":
        return {
          color: "#F09468",
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
          <div className="my-3 flex items-center" key={location.country}>
            <img
              src={`https://flagsapi.com${location.flagImage}`}
              alt={location.country}
              className="w-5 mr-2"
            />
            {location.country}{" "}
            <span className="font-semibold ml-2">{location.percent}%</span>
            <div
              className="w-3 h-3 rounded-full ml-2"
              style={{
                backgroundColor: location.color,
              }}
            ></div>
          </div>
        ))}
      </div>
    </PieChartCard>
  );
};

export default TopLocations;
