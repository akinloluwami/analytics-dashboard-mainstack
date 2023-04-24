const Durations = () => {
  const durations = [
    {
      label: "1 Day",
    },
    {
      label: "3 Days",
    },
    {
      label: "7 Days",
    },
    {
      label: "30 Days",
    },
    {
      label: "All Time",
      active: true,
    },
    {
      label: "Custom Date",
    },
  ];

  return (
    <div className="flex space-x-4 my-5">
      {durations.map((duration) => (
        <button key={crypto.randomUUID()} className={`pill`}>
          {duration.label}
        </button>
      ))}
    </div>
  );
};

export default Durations;
