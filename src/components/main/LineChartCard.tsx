import info from "../../assets/icons/info.svg";
import IgraphData from "../../typings/graph-data";
import LineChart from "./charts/LineChart";

interface LineChartCardProps {
  graphData?: IgraphData;
}

const LineChartCard = ({
  graphData = {
    views: {},
  },
}: LineChartCardProps) => {
  return (
    <>
      {graphData && (
        <div className="w-full border-2 rounded-md p-3 my-6 border-[#EFF1F6]">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-xl font-bold">Page Views</h2>
              <p>All time</p>
            </div>
            <button>
              <img src={info} alt="info" />
            </button>
          </div>
          <h1 className="text-4xl font-bold mt-3">500</h1>
          <LineChart graphData={graphData} />
        </div>
      )}
    </>
  );
};

export default LineChartCard;
