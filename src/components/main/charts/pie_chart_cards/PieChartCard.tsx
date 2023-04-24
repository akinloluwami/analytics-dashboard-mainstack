interface PieChartCardProps {
  title: string;
  children: React.ReactNode;
}

const PieChartCard = ({ title, children }: PieChartCardProps) => {
  return (
    <div className="w-1/2 border-2 border-light_gray p-5 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">{title}</h1>
        <button className="text-accent font-semibold">View full reports</button>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default PieChartCard;
