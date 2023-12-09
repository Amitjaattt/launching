import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Menu , X } from "lucide-react"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const NavLinks = () => {
    const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  const handleButtonClick1 = () => {
    // Use navigate to navigate to a different route
    navigate1('/Aboutus');
  };
 
  const handleButtonClick2 = () => {
    navigate2('/Contactus');
    };

  return (
    <>
    
   <button className="btn-style mt-5 ml-32 ">
  <div className="relative text-[20px] font-medium ">
    <NavLink to="/" className="no-underline bg-blue-400 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded">
      Home
    </NavLink>
  </div>
</button>

<button className="btn-style mt-6 ml-32 " onClick={handleButtonClick1}>
  <b className="relative  text-[20px] font-medium">
    <NavLink to="/About" className="no-underline bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      About
    </NavLink>
  </b>
</button>

<button className="btn-style mt-6 ml-28 " onClick={handleButtonClick2}>
  <div className="relative text-[20px] font-medium">
    <NavLink to="/Contact" className="no-underline bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
      Contact
    </NavLink>
  </div>
</button>
<div className=" mt-4 ml-20 rounded-[7px] [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)] shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-[15px] text-6xl text-white">
    <button className=" [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)]"> <div className=" text-6xl [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)] relative font-semibold text-white">Visit now</div></button>
        </div>


          
    
    
    </>
  )
}



const Nav = () => {

    const [isOpen , setIsOpen ]=useState(false);

    const toggleNavbar =()=>{
        setIsOpen(!isOpen);
    }
  return (
    <>
    <nav className=" ml-40 mt-0">
        <div className=" hidden w-full justify-between md:flex">
            <NavLinks />
        </div>
        <div className=" md:hidden ml-16 sm:ml-80 mt-0 ">
            <button onClick={toggleNavbar}>{isOpen ? <X/>: <Menu/>}</button>
        </div>
    </nav>
    {isOpen && (
        <div className=" flex basis-full items-center flex-col h-16 ">
            <NavLinks/>
        </div>
    )}
    </>
    
  )
}



export default Nav;