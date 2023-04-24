import { useState, useEffect } from "react";
import axios from "axios";
import Durations from "./Durations";
import LineChartCard from "./LineChartCard";
import ITopCountries from "../../typings/top-countries";
import ITopSources from "../../typings/top-sources";
import IgraphData from "../../typings/graph-data";

interface Data {
  graph_data: IgraphData;
  top_locations: ITopCountries;
  top_sources: ITopSources;
}

const Main = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fe-task-api.mainstack.io");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold mb-1">
            Good morning, Blessing ⛅️
          </h1>
          <p className="font-medium">Check out your dashboard summary.</p>
        </div>
        <p className="text-accent font-medium cursor-pointer">View analytics</p>
      </div>
      <Durations />
      <LineChartCard graphData={data?.graph_data} />
    </div>
  );
};

export default Main;
