import React, { useState } from 'react';
import { GiCarWheel } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative w-full h-[100px] bg-blue-950 flex justify-between items-center px-5">
    
      <div className="flex items-center gap-3">
        <GiCarWheel className="text-blue-950 text-3xl font-bold"/>
        <p className="text-xl font-bold text-white">Car Vibe.</p>
      </div>

      <div className="hidden md:flex gap-10">
        <Link to="/" className="text-[15px] text-white hover:bg-white p-2 rounded flex gap-5 items-center  hover:text-blue-950  text-xs transition">
        <FaHome/>
          Home
        </Link>
        <Link to="/gallery" className="text-[15px] text-white hover:bg-white p-2 rounded flex gap-5  items-center hover:text-blue-950  text-xs transition">
        <GrGallery/>
          Our Gallery
        </Link>
        <Link to="/contact" className="text-[15px] text-white hover:bg-white p-2 rounded flex gap-5  items-center hover:text-blue-950  text-xs transition">
          <MdContactPhone/>
          Creator
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link to="/signOut">
          <CgProfile className="text-4xl font-bold text-white" />
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          {sidebarOpen ? (
            <AiOutlineClose className="text-3xl text-white" />
          ) : (
            <AiOutlineMenu className="text-3xl text-white" />
          )}
        </button>
      </div>
      {sidebarOpen && (
  <div className="fixed top-0 left-0 w-[70%] h-[100vh] bg-gray-800 text-white flex flex-col items-start px-5 py-10 shadow-lg z-50 transition duration-300">
    <Link to="/" className="mb-[100px] text-lg flex gap-5 items-center" onClick={toggleSidebar}>
      <FaHome />
      Home
    </Link>
    <Link to="/gallery" className="mb-[100px] text-lg flex gap-5 items-center" onClick={toggleSidebar}>
      <GrGallery />
      Our Gallery
    </Link>
    <Link to="/contact" className="mb-[100px] text-lg flex gap-5 items-center" onClick={toggleSidebar}>
      <MdContactPhone />
      Creator
    </Link>
    <Link to="/signOut" className="mb-[100px] text-lg flex items-center gap-5" onClick={toggleSidebar}>
      <CgProfile />
      Profile
    </Link>
  </div>
)}



    </div>
  );
};

export default Navbar;