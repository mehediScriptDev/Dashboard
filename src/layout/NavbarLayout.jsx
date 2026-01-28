import React from 'react';
import { useLocation } from 'react-router';
import Avatar from '../Components/ui/Avatar';
import { FiX } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';

const NavbarLayout = ({ onMenuClick }) => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard Overview';
      case '/call-logs':
        return 'Call Logs & History';
      case '/appointments':
        return 'Appointments';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className='flex justify-between items-center px-4 sm:px-6 py-4 bg-stat-bg'>
      <div className="flex items-center gap-3">
        
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-white/60 hover:text-white transition-colors p-2 -ml-2"
        >
          <RiMenu3Line className="w-6 h-6" />
        </button>
        <h1 className='text-white text-xl sm:text-2xl lg:text-[32px] font-normal tracking-wide'>{getPageTitle()}</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="text-white hover:text-white transition-colors">
          
          <AiOutlineBell className='w-5 h-5 sm:w-6 sm:h-6' />
        </button>
        <Avatar size="md" />
      </div>
    </div>
  );
};

export default NavbarLayout;