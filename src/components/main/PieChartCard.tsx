interface PieChartCardProps {
  title: string;
}

const PieChartCard = ({ title }: PieChartCardProps) => {
  return (
    <div className="w-1/2 border-2 border-light_gray p-5 rounded-md">
      <div className="flex items-center justify-between">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PieChartCard;
