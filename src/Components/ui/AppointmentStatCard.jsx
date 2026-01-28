const AppointmentStatCard = ({ icon, iconBg = 'bg-transparent', label, value, change }) => (
  <div className="bg-stat-bg rounded-2xl p-4 border border-border">
    <div className="flex items-center gap-3 mb-2">
      <div className={` rounded-lg flex items-center justify-center`}>{icon}</div>
      <p className="text-[#90A1B9] text-sm">{label}</p>
    </div>

    <p className="text-white text-2xl font-normal mb-1">{value}</p>
    <p className={` ${iconBg} text-sm`}>{change}</p>
  </div>
);

export default AppointmentStatCard;
