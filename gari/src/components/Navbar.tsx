import React from 'react'
import { GiCarWheel } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';


const Navbar:React.FC = () => {
  return (
    <div className="w-full p-5 h-[100px] flex justify-between items-center bg-gray-200">
        <div className="flex gap-5">
            <GiCarWheel className="text-blue-950 text-3xl font-bold"/>
            <p className="text-xl font-bold text-blue-950">Car Vibe.</p>
        </div>

<div className="flex gap-10">
<Link   to="/" className="text-[15px] text-blue-950 ">Home</Link>
<Link   to="/gallery" className="text-[15px] text-blue-950 ">Our  Gallery</Link>
 <Link   to="/contact" className="text-[15px] text-blue-950 ">Creator</Link> 
</div>
<div>
<Link to="/signOut"><CgProfile className="text-4xl font-bold text-blue-900"/></Link>
</div>
 </div>
  )
}

export default Navbar;
