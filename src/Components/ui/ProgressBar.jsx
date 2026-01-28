const ProgressBar = ({ label, value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/80 text-sm">{label}</span>
        <span className="text-white/60 text-sm">{value} requests</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
