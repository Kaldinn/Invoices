
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import Content from './components/Content/Content';

function App() {

  const [isMenuHide, setIsMenuHide] = useState(true)

  const toggleMenu = (e) =>{
    if(!isMenuHide){
      setIsMenuHide(true)
      console.log(isMenuHide)
    }else{
      setIsMenuHide(false)
      console.log(isMenuHide)
    }
  }

  return (
    <main>
      <Navbar 
        toggleMenu={toggleMenu}
      />
      <Content
        isMenuHide={isMenuHide}
       />
    </main>

  );
}

export default App;
