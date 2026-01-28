const ActivityItem = ({ color, title, time }) => (
  <div className="bg-[#1D293D80] rounded-xl p-4 mb-3 last:mb-0">
    <div className="flex items-start gap-3">
      <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${color}`}></div>
      <div className="flex-1">
        <p className="text-white text-sm font-medium">{title}</p>
        <p className="text-[#7A8BA4] text-xs mt-1">{time}</p>
      </div>
    </div>
  </div>
);

export default ActivityItem;
