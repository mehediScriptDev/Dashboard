import React from 'react';
import { Link, NavLink } from 'react-router';
import { AiOutlineHome } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { PiCalendarBlank } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { IoIosLogIn } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import Btn from '../Components/ui/Btn';

const Sidebar = ({ onClose }) => {
    return (
        <div className='w-56 bg-[#0F172B] h-screen relative border-r border-border z-50'>
            {/* Close button for mobile */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 lg:hidden text-white/60 hover:text-white z-10"
            >
                <FiX className="w-6 h-6" />
            </button>
            
            {/* logo */}
            <div className='flex justify-center pt-6 pb-4'>
                <img src="logo.png" alt="logo" />
            </div>

            {/* links */}
            <div className='mt-8 px-4'>
                <ul className='text-white text-sm space-y-2'>
                    <li>
                        <NavLink 
                            to={'/'} 
                            onClick={onClose}
                        >
                            {({isActive}) => isActive ? (
                                <Btn>
                                    <AiOutlineHome className='w-5 h-5' />
                                    Dashboard Overview
                                </Btn>
                            ) : (
                                <span className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all hover:bg-white/5">
                                    <AiOutlineHome className='w-5 h-5' />
                                    Dashboard Overview
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/call-logs'} 
                            onClick={onClose}
                        >
                            {({isActive}) => isActive ? (
                                <Btn>
                                    <IoCallOutline className='w-5 h-5' />
                                    Call Logs
                                </Btn>
                            ) : (
                                <span className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all hover:bg-white/5">
                                    <IoCallOutline className='w-5 h-5' />
                                    Call Logs
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/appointments'} 
                            onClick={onClose}
                        >
                            {({isActive}) => isActive ? (
                                <Btn>
                                    <PiCalendarBlank className='w-5 h-5' />
                                    Appointments
                                </Btn>
                            ) : (
                                <span className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all hover:bg-white/5">
                                    <PiCalendarBlank className='w-5 h-5' />
                                    Appointments
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/settings'} 
                            onClick={onClose}
                        >
                            {({isActive}) => isActive ? (
                                <Btn>
                                    <TbSettings className='w-5 h-5' />
                                    Settings
                                </Btn>
                            ) : (
                                <span className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all hover:bg-white/5">
                                    <TbSettings className='w-5 h-5' />
                                    Settings
                                </span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Log Out at bottom */}
            <div className="absolute bottom-8 left-4 right-4">
                <button className="flex items-center gap-2 text-red-400 text-base hover:text-red-300 px-3 py-2">
                    <IoIosLogIn className='w-7 h-7 text-black' />
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Sidebar;