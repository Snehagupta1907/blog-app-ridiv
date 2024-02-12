import React from 'react';
import { Link } from 'react-router-dom';
import { GiPapers } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { useSidebarContext } from '../../context/sidebarContext';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <nav className="h-20 bg-purple-700 flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="brand-and-toggler">
            <Link to="/" className="mr-2 text-white flex items-center text-2xl font-medium">
              <span className="mx-4">
                <GiPapers />
              </span>
              <span className="font-rubik font-semibold">Blog.</span>
            </Link>
          </div>
          <div className="mx-4 flex items-center">
            <ul className="gap-5 flex items-center font-rubik">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white text-lg font-medium">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white text-lg font-medium">About</Link>
              </li>
            </ul>
            <div className="navbar-btns ml-5 flex items-center">
              <button type="button" className="border-2 rounded-lg bg-white flex items-center justify-center" onClick={() => openSidebar()}>
                <FaBars size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
