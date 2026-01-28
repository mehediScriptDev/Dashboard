import React from 'react';
import { StatCard, ActivityItem, ProgressBar } from "../../../Components/ui";
import { RiRobot2Line } from 'react-icons/ri';
import { CalendarIcon, ClockIcon, PhoneIcon, XCircleIcon } from 'lucide-react';
import { LuArrowRightLeft } from 'react-icons/lu';



const IndexPage = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="min-h-screen bgColorPrimary p-4 sm:p-6 lg:p-8">
      {/* Stats Cards - Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
        <StatCard
          icon={<PhoneIcon className="w-5 h-5" />}
          iconBg="bg-gradient-to-tr from-[#2B7FFF] to-[#00B8DB]"
          label="Total Calls Today"
          value="127"
          change="+12%"
          changeColor="text-green-400"
        />
        <StatCard
          icon={<RiRobot2Line className="w-5 h-5" />}
          iconBg=" bg-gradient-to-tr from-[#AD46FF] to-[#F6339A]"
          label="AI-handled Calls"
          value="98"
          change="+77%"
          changeColor="text-green-400"
        />
        <StatCard
          icon={ <LuArrowRightLeft className='w-5 h-5' />}
          iconBg="bg-gradient-to-tr from-[#FF6900] to-[#FB2C36]"
          label="Warm Transfer"
          value="23"
          change="+18%"
          changeColor="text-red-400"
        />
        <StatCard
          icon={<CalendarIcon className="w-5 h-5" />}
          iconBg="bg-gradient-to-tr from-[#00C950] to-[#00BC7D]"
          label="Appointments Booked"
          value="34"
          change="+8%"
          changeColor="text-green-400"
        />
         <StatCard
          icon={<XCircleIcon className="w-5 h-5" />}
          iconBg="bg-gradient-to-tr from-[#FB2C36] to-[#FF2056]"
          label="Missed/Failed Calls"
          value="6"
          change="-3%"
          changeColor="text-[#FD244A]"
        />
        <StatCard
          icon={<ClockIcon className="w-5 h-5" />}
          iconBg="bg-gradient-to-tr from-[#615FFF] to-[#2B7FFF]"
          label="Avg Call Duration"
          value="3:42"
          change="+16%"
          changeColor="text-green-400"
        />
      </div>

     

      {/* Call Trends Chart */}
      <div className="bg-stat-bg rounded-xl p-6 border border-border mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-white text-lg font-semibold">Call Trends - This Week</h2>
            <p className="text-white/50 text-sm">Total: 472 calls</p>
          </div>
          <button className="bg-[#2B7FFF33]/20 text-white/80 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            This Week
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* Simple Chart */}
        <div className="relative h-64">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Simple hardcoded chart path */}
            <polygon fill="url(#chartGradient)" points="0,100 0,55 16,25 33,45 50,50 66,65 83,40 100,60 100,100" />
            <polyline fill="none" stroke="#3B82F6" strokeWidth="0.5" points="0,55 16,25 33,45 50,50 66,65 83,40 100,60" />
          </svg>
          
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white/40 text-xs py-2">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between text-white/40 text-sm mt-2 px-8">
          {days.map((day, i) => (
            <span key={i}>{day}</span>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 ">
        {/* Recent Activity */}
        <div className="bg-stat-bg rounded-xl p-4 sm:p-6 border border-border">
          <h2 className="text-white text-xl font-semibold mb-6">Recent Activity</h2>
          <div>
            <ActivityItem
              color="bg-[#05DF72]"
              title="AI booked appointment for iPhone 13 screen repair"
              time="2 min ago"
            />
            <ActivityItem
              color="bg-[#FF8904]"
              title="Warm transfer to technician - Software issue"
              time="5 min ago"
            />
            <ActivityItem
              color="bg-[#05DF72]"
              title="Quote provided for iPad battery replacement"
              time="8 min ago"
            />
            <ActivityItem
              color="bg-[#FF6467]"
              title="Call dropped after 12 seconds"
              time="15 min ago"
            />
          </div>
        </div>

        {/* Top Repair Requests */}
        <div className="bg-stat-bg rounded-xl p-6 border border-border">
          <h2 className="text-white text-lg font-semibold mb-6">Top Repair Requests</h2>
          <ProgressBar label="Screen Repair" value={175} maxValue={250} color="bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]" />
          <ProgressBar label="Battery Replacement" value={89} maxValue={200} color="bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]" />
          <ProgressBar label="Back Glass Repair" value={67} maxValue={200} color="bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]" />
          <ProgressBar label="Software Issues" value={45} maxValue={200} color="bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]" />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;