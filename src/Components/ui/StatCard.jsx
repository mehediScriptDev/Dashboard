const StatCard = ({ icon, iconBg, label, value, change, changeColor }) => (
  <div className="bg-stat-bg rounded-xl p-4 border border-border">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-[#90A1B9] text-sm mb-1">{label}</p>
        <p className="text-white text-3xl font-medium">{value}</p>
        <p className={`text-sm mt-1 ${changeColor}`}>{change}</p>
      </div>
      <div className={`w-12 h-12 ${iconBg} rounded-[14px] flex items-center justify-center text-white`}>
        <span>{icon}</span>
      </div>
    </div>
  </div>
);

export default StatCard;
