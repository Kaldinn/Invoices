import React, {useState} from 'react'
import '../Navbar/Navbar.css'
import { IoMenu } from "react-icons/io5";


const Navbar = (props) => {

  return (
    <nav className='navbar'>
      <button onClick={props.toggleMenu}><IoMenu /></button>
      <h1>Dashboard</h1>
      <div className='links'>
          <a href='/'>Home</a>
          <a href='/' style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: '8px'
          }}>Add Invoice</a>
      </div>
    </nav>
  )
}

export default Navbar


