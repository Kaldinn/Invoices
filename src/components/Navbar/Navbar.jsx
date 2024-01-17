import React from 'react'
import Style from '../Navbar/Navbar.css'
import { FiAlignJustify } from "react-icons/fi";
import { ImUser } from "react-icons/im";
import { useState } from 'react';

const Navbar = ({ toggleMenu }) => {

  return (
    <nav className='navbar'>
        <button className='menu-icon' onClick={toggleMenu}><FiAlignJustify /></button>
        <p className='dashboard-text'>Dashboard</p> 
        <button className='user-icon'><ImUser /></button>
    </nav>
  )
}

export default Navbar