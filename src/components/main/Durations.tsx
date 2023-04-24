const Durations = () => {
  const durations = [
    "1 Day",
    "3 Days",
    "7 Days",
    "30 Days",
    "All Time",
    "Custom Date",
  ];

  return (
    <div>
      {durations.map((duration) => (
        <button key={duration} className="pill">
          {duration}
        </button>
      ))}
    </div>
  );
};

export default Durations;
