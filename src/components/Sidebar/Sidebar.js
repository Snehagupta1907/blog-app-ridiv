import React from 'react';
import { GiPapers } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();
    
    return (
        <div className={`fixed top-0 right-0 w-80 bg-purple-500 h-full z-50 p-9 shadow-xl transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button type="button" className="absolute top-6 right-6 transition-opacity hover:opacity-80" onClick={closeSidebar}>
                <FaTimes size={24} className="text-white" />
            </button>
            <Link className="text-white flex items-center text-2xl font-bold" to="/">
                <span className="mr-2"><GiPapers /></span>
                <span>Blog.</span>
            </Link>
            <ul className="my-8 font-semibold">
                <li className="border-b border-purple-800 py-3">
                    <Link to="/" className="text-white text-lg">Home</Link>
                </li>
                <li className="border-b border-purple-800 py-3">
                    <Link to="/about" className="text-white text-lg">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
