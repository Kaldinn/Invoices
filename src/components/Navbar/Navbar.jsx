import React from 'react'
import styles from '../Navbar/Navbar.css'
import { FiAlignJustify } from "react-icons/fi";
import { ImUser } from "react-icons/im";


const Navbar = () => {
  return (
    <nav className='navbar'>
        <button><FiAlignJustify /></button>
        <p>Dashboard</p> 
        <button className="user-icon"><ImUser /></button>
    </nav>
  )
}

export default Navbar