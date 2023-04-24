interface PieChartCardProps {
  title: string;
}

const PieChartCard = ({ title }: PieChartCardProps) => {
  return (
    <div className="w-1/2 border-2 border-light_gray p-5 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">{title}</h1>
        <p className="text-accent cursor-pointer font-semibold">
          View full reports
        </p>
      </div>
    </div>
  );
};

export default PieChartCard;
