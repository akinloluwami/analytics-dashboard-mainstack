import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      fill: true,
      backgroundColor: (context: any) => {
        const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(255, 84, 3, 0.5)");
        gradient.addColorStop(1, "rgba(255, 84, 3, 0.01)");
        return gradient;
      },
    },
  ],
};

const LineChart = () => {
  return (
    <div className="w-full">
      <Line
        options={options}
        data={data}
        style={{ width: "100%", height: "50%" }}
      />
    </div>
  );
};

export default LineChart;
