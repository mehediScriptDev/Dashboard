import { CalendarIcon, CircleCheckBig, ClockArrowDown, Copy } from 'lucide-react';
import React, { useState } from 'react';
import { AppointmentStatCard, Btn } from "../../../Components/ui";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const appointmentsData = [
  { id: 1, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '09:00' },
  { id: 2, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '10:00' },
  { id: 3, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '11:00' },
  { id: 4, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '12:00' },
  { id: 5, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '02:00' },
  { id: 6, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '03:00' },
];

const Appointment = () => {
  const [copied, setCopied] = useState(false);
  const bookingLink = 'https://techstore.com/book?id=store123';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bgColorPrimary p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <AppointmentStatCard
          icon={<CalendarIcon className="w-5 h-5 text-secondary" />}
          iconBg="text-[#05DF72]"
          label="Total Booked"
          value="34"
          change="+8 this week"
        />
        <AppointmentStatCard
          icon={
            <CircleCheckBig className='w-5 h-5 text-[#05DF72]' />
          }
          iconBg="text-[#90A1B9]"
          label="AI Booked"
          value="28"
          change="82% of total"
        />
        <AppointmentStatCard
          icon={
            <ClockArrowDown className="w-5 h-5 text-[#FDC700]" />
          }
          iconBg="text-[#90A1B9]"
          label="Pending"
          value="3"
          change="Awaiting confirmation"
        />
      </div>

      <div className="bg-linear-to-b from-[#1A1A2E] to-[#16213E] rounded-xl p-4 sm:p-5  mb-6">
        <p className="text-white  text-base font-normal tracking-wide mb-3">Booking Link</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 bg-[#070d1f] border border-[#00FF88]/20 rounded-lg px-4 py-3">
            <p className="text-white/80 text-sm font-normal truncate">{bookingLink}</p>
          </div>
          <div onClick={handleCopyLink} className="cursor-pointer">
            <Btn className="w-auto! py-3!">
               <Copy className='w-5 h-5' />
              {copied ? 'Copied!' : 'Copy Link'}
            </Btn>
          </div>
        </div>
      </div>

      <div className="bg-stat-bg rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-200">
            <thead>
              <tr className="border-b border-border">
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Client Name</th>
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Client Phone</th>
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Client mail</th>
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Device</th>
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Repair Type</th>
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Date</th>
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Slot no</th>
                <th className="text-center text-white text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Start Time</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment) => (
                <tr key={appointment.id} className="border-b border-border  transition-colors">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-[#51A2FF] text-sm font-normal">{appointment.clientName}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] text-sm whitespace-nowrap text-center">{appointment.phone}</td>
                  <td className="px-4 sm:px-6 py-4 text-white/90 text-sm whitespace-nowrap text-center">{appointment.email}</td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] text-sm whitespace-nowrap text-center">{appointment.device}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap  text-[#CFCFCF] text-sm text-center">
                   {appointment.repairType}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-white/80 whitespace-nowrap text-sm text-center">{appointment.date}</td>
                  <td className="px-4 sm:px-6 py-4 text-white/80 whitespace-nowrap text-sm text-center">{appointment.slotNo}</td>
                  <td className="px-4 sm:px-6 py-4 text-white/80 whitespace-nowrap text-sm text-center">{appointment.startTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 px-4 sm:px-6 py-4 mt-5">
        <button className="flex items-center gap-1 text-[#697077] hover:text-white px-2 sm:px-3 py-2 transition-colors text-base">
          <IoIosArrowBack className='w-4 h-4' />
          Previous
        </button>

        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center text-sm text-[#0F62FE]">1</button>
          <button className="w-8 h-8 flex items-center justify-center text-sm bg-[#A6C8FF] text-[#0F62FE]">2</button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-[#0F62FE]">3</button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-[#0F62FE]">4</button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-[#0F62FE]">5</button>
          <span className="text-white/40 px-2">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-[#0F62FE]">11</button>
        </div>

        <button className="flex items-center gap-1 text-[#0F62FE] px-3 py-2 transition-colors text-base">
          Next
          <IoIosArrowForward className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
};

export default Appointment;