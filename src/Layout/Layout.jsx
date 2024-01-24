import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidemenu from '../Sidemenu/Sidemenu'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
      setMenu(prevMenu => !prevMenu);
      console.log(menu)
  };

  return (
    <div className="App">
    <Navbar toggleMenu={toggleMenu}/>
      <div className='content'>
        <Sidemenu menu={menu}/>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout