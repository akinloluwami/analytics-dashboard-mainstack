import ITopSources from "../../../../typings/top-sources";
import DoughnutChart from "../DoughnutChart";
import DoughnutChartCard from "./DoughnutChartCard";

const TopSources = ({ sources }: { sources: ITopSources[] }) => {
  const mapSourceToColorAndIcon = (source: any) => {
    switch (source) {
      case "google":
        return {
          color: "#4285f4",
          icon: "https://cdn.cdnlogo.com/logos/g/35/google-icon.svg",
        };
      case "instagram":
        return {
          color: "#e4405f",
          icon: "https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg",
        };
      case "facebook":
        return {
          color: "#3b5998",
          icon: "https://cdn.cdnlogo.com/logos/f/91/facebook-icon.svg",
        };
      case "linkedin":
        return {
          color: "#0e76a8",
          icon: "https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg",
        };
      default:
        return {
          color: "#000000",
          icon: "",
        };
    }
  };

  const modifiedData = sources.map((source) => {
    const { count, percent, source: sourceName } = source;
    const { color, icon } = mapSourceToColorAndIcon(sourceName);

    return {
      source: sourceName,
      count,
      percent,
      color,
      icon,
    };
  });

  const data = {
    labels: modifiedData.map((source) => source.source),
    datasets: [
      {
        label: "Top sources",
        data: modifiedData.map((source) => source.percent),
        backgroundColor: modifiedData.map((source) => source.color),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <DoughnutChartCard title="Top Sources">
      <div className="flex items-center justify-between">
        <div className="mt-2">
          {modifiedData.map((source) => {
            const modifiedSourceName = `${source.source
              .slice(0, 1)
              .toUpperCase()}${source.source.slice(1)}`;
            return (
              <div className="my-3 flex items-center" key={source.source}>
                {source.icon ? (
                  <img
                    src={source.icon}
                    alt={source.source}
                    className="w-5 mr-2"
                  />
                ) : (
                  <div
                    className="w-5 h-5 rounded-full mr-2"
                    style={{ backgroundColor: source.color }}
                  ></div>
                )}
                {modifiedSourceName}
                <span className="font-semibold ml-2">{source.percent}%</span>
                <div
                  className="w-3 h-3 rounded-full ml-2"
                  style={{
                    backgroundColor: source.color,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="">
          <DoughnutChart data={data} />
        </div>
      </div>
    </DoughnutChartCard>
  );
};

export default TopSources;
