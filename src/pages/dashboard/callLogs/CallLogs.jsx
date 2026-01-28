import { PhoneIcon } from 'lucide-react';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosCheckmarkCircleOutline, IoMdArrowDropdown } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuClock } from 'react-icons/lu';

// Sample call data
const callsData = [
  {
    id: 1,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Quote Provided',
    issueType: 'Screen',
    status: 'AI Resolved',
    statusColor: 'bg-green-500',
  },
  {
    id: 2,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Escalated to technician',
    issueType: 'Software',
    status: 'Warm Transfer',
    statusColor: 'bg-yellow-500',
  },
  {
    id: 3,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Appointment Booked',
    issueType: 'Battery',
    status: 'Appointment',
    statusColor: 'bg-blue-500',
  },
  {
    id: 4,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '0:20',
    outcome: 'Call Dropped',
    issueType: 'Unknown',
    status: 'Dropped',
    statusColor: 'bg-red-500',
  },
  {
    id: 5,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Quote Provided',
    issueType: 'Screen',
    status: 'AI Resolved',
    statusColor: 'bg-green-500',
  },
];

const transcriptMessages = [
  { speaker: 'AI Assistant', message: 'Thank you for calling UBreakiFix! How can I help you today?', isAI: true },
  { speaker: 'Customer', message: 'Hi, my iPhone 13 screen is cracked. How much would it cost to repair?', isAI: false },
  { speaker: 'AI Assistant', message: 'I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?', isAI: true },
  { speaker: 'Customer', message: 'Yes, please! When are you available?', isAI: false },
  { speaker: 'AI Assistant', message: 'Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?', isAI: true },
];

const CallLogs = () => {
  const [selectedCall, setSelectedCall] = useState(callsData[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusBadge = (status, statusColor) => {
    const colorMap = {
      'AI Resolved': 'bg-gradient-to-tr from-[#00C950]/20 to-[#00BC7D]/20 text-[#05DF72] border-[#00C950]/30',
      'Warm Transfer': 'bg-gradient-to-tr from-[#FF6900]/20 to-[#FB2C36]/20 text-[#FF8904] border-[#FF6900]/30',
      'Appointment': 'bg-gradient-to-tr from-[#2B7FFF]/20 to-[#00B8DB]/20 text-[#51A2FF] border-[#2B7FFF]/30',
      'Dropped': 'bg-gradient-to-tr from-[#FF1500]/20 to-[#FB2C36]/20 text-[#FF0404] border-[#FF6900]/30',
    };
    return colorMap[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getIssueBadge = (issueType) => {
    const colorMap = {
      'Screen': 'bg-cyan-500/20 text-cyan-400',
      'Software': 'bg-purple-500/20 text-purple-400',
      'Battery': 'bg-yellow-500/20 text-yellow-400',
      'Unknown': 'bg-gray-500/20 text-gray-400',
    };
    return colorMap[issueType] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="min-h-screen bgColorPrimary p-4 sm:p-6 lg:p-8">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            
            <CiSearch className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#90A1B9]" />
            <input
              type="text"
              placeholder="Search by phone number, issue type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stat-bg border border-border text-sm rounded-lg pl-10 pr-4 py-3 text-[62748E] placeholder:text-white/40 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button className="bg-stat-bg border border-border text-white/80 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm">
            All Type
            
            <IoMdArrowDropdown className='w-4 h-4' />
          </button>
          <button className="bg-stat-bg border border-border text-white/80 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm">
            All Issues
            <IoMdArrowDropdown className='w-4 h-4' />
          </button>
          <button className="bg-stat-bg border border-border text-white/80 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm">
            Today
            <IoMdArrowDropdown className='w-4 h-4' />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Call List */}
        <div className="bg-stat-bg rounded-xl border border-border overflow-hidden lg:w-[40%] lg:h-fit">
          <div className="p-4 border-b border-border">
            <h2 className="text-white font-medium">Call List</h2>
          </div>
          <div className="divide-y divide-border  lg:max-h-none overflow-y-auto">
            {callsData.map((call) => (
              <div
                key={call.id}
                onClick={() => setSelectedCall(call)}
                className={`p-4 cursor-pointer hover:bg-white/5 transition-colors ${selectedCall?.id === call.id ? 'bg-white/5' : ''}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-tr from-[#2B7FFF] to-[#00B8DB] rounded-xl flex items-center justify-center">
                    
                      <PhoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{call.phoneNumber}</p>
                      <p className="text-[#90A1B9] text-[12px]">{call.date} • {call.time}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-[10px] text-xs border ${getStatusBadge(call.status)}`}>
                    {call.status}
                  </span>
                </div>
                <div className="flex items-start gap-4 pt-2">
                  <div className="flex items-center gap-1 text-[#90A1B9] text-sm">
                    
                    <LuClock className='w-4 h-4' />
                    {call.duration}
                  </div>
                  <div className="flex items-center gap-1 text-[#90A1B9] text-sm">
                    
                     <IoIosCheckmarkCircleOutline className='w-4 h-4' />
                    {call.outcome}
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs bg-[#2B7FFF]/20 text-[#2B7FFF]`}>
                    {call.issueType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call Details */}
        <div className="bg-stat-bg rounded-xl border border-border overflow-hidden lg:w-[60%]">
          <div className="p-4 border-b border-border">
            <h2 className="text-white font-semibold">Call Details</h2>
          </div>
          
          {selectedCall && (
            <div className="p-4">
              {/* Call Info Grid */}
              <div className="flex flex-col gap-4 mb-6">
                <div className='grid grid-cols-2 gap-4  justify-between'>
                  <div>
                  <p className="text-[#90A1B9] text-sm mb-1">Phone Number</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-[#90A1B9] text-sm mb-1">Duration</p>
                  <p className="text-white">4:32</p>
                </div>
                </div>
                <div className='grid grid-cols-2 gap-4  justify-between'>
                  <div>
                  <p className="text-[#90A1B9] text-sm mb-1">Date & Time</p>
                  <p className="text-white">2025-12-16 10:45 AM</p>
                </div>
                <div>
                  <p className="text-[#90A1B9] text-sm mb-1">Issue Type</p>
                  <p className="text-white">Screen</p>
                </div>
                </div>
                <div className='grid grid-cols-1 space-y-4'>
                  <div>
                  <p className="text-[#90A1B9] text-sm mb-1">Call Type</p>
                  <span className="px-3 py-1 rounded-[10px] text-xs bg-linear-to-tr from-[#00C950]/20 to-[#00BC7D]/20 text-[#05DF72] border border-[#00C950]/30">
                    AI Resolved
                  </span>
                </div>
                <div>
                  <p className="text-[#90A1B9] text-sm mb-1">Outcome</p>
                  <p className="text-white">Quote provided</p>
                </div>
                </div>
              </div>

              {/* Audio Player */}
              <button className="w-full bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] text-[#C27AFF] py-3 rounded-[14px] flex items-center justify-center gap-2 mb-6 hover:bg-blue-500/30 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Audio Recording
              </button>

              {/* Conversation Transcript */}
              <div>
                <h3 className="text-white font-normal text-base tracking-wide mb-4 flex items-center gap-2">
                  <IoDocumentTextOutline className='w-5 h-5 text-[#51A2FF]' />
                  Conversation Transcript
                </h3>
                <div className="space-y-4 bg-[#1D293D] rounded-[14px] p-6 overflow-y-auto">
                  {transcriptMessages.map((msg, index) => (
                    <div key={index}>
                      <p className={`text-sm font-normal tracking-wide mb-1 ${msg.isAI ? 'text-[#05DF72]' : 'text-[#51A2FF]'}`}>
                        {msg.speaker}:
                      </p>
                      <p className="text-white/80 text-xs leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallLogs;