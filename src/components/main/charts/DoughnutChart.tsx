import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DoughnutChart = ({ data }: any) => {
  return (
    <Doughnut
      data={data}
      options={options}
      style={{
        width: "170px",
        height: "170px",
      }}
    />
  );
};

export default DoughnutChart;
