import React, { useState } from 'react'
import { FaBars,FaTimes  } from "react-icons/fa";
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [nav,setNav] = useState(!true);
  return (
    <div className='navbar'>
        <h1 className="logo">Flex-IT</h1>
        <ul className={!nav ? "nav" : "nav active"}>
          <li><NavLink to="/" href="#">Home</NavLink></li>
          <li><NavLink to="/Service" href="#">Services</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
        <div className='bars' onClick={()=>setNav(!nav)}>{!nav ? <FaBars size={20}/> : <FaTimes size={20}/>}</div>
    </div>
  )
}

export default Navbar