import React, { useState } from 'react';
import { GiCarWheel } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative w-full h-[100px] bg-gray-200 flex justify-between items-center px-5">
    
      <div className="flex items-center gap-3">
        <GiCarWheel className="text-blue-950 text-3xl font-bold" />
        <p className="text-xl font-bold text-blue-950">Car Vibe.</p>
      </div>

      <div className="hidden md:flex gap-10">
        <Link to="/" className="text-[15px] text-blue-950 hover:text-blue-800 transition">
          Home
        </Link>
        <Link to="/gallery" className="text-[15px] text-blue-950 hover:text-blue-800 transition">
          Our Gallery
        </Link>
        <Link to="/contact" className="text-[15px] text-blue-950 hover:text-blue-800 transition">
          Creator
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link to="/signOut">
          <CgProfile className="text-4xl font-bold text-blue-900" />
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          {sidebarOpen ? (
            <AiOutlineClose className="text-3xl text-blue-950" />
          ) : (
            <AiOutlineMenu className="text-3xl text-blue-950" />
          )}
        </button>
      </div>

      {sidebarOpen && (
        <div className="absolute top-0 left-0 w-[70%] h-[100vh] bg-gray-800 text-white flex flex-col items-start px-5 py-10 shadow-lg z-50 transition duration-300">
          <Link to="/" className="mb-[100px] text-lg" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/gallery" className="mb-[100px] text-lg" onClick={toggleSidebar}>
            Our Gallery
          </Link>
          <Link to="/contact" className="mb-[100px] text-lg" onClick={toggleSidebar}>
            Creator
          </Link>
          <Link to="/signOut" className="mb-[100px] text-lg flex items-center gap-3" onClick={toggleSidebar}>
            <CgProfile className="text-2xl absolute right-10 top-10" /> Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;




