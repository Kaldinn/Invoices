import React, {useState} from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Sidemenu from './Sidemenu/Sidemenu';

function App() {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () =>{
      if(menu){
        setMenu(false)
      }else{
        setMenu(true)
      }
  }
  return (
    <div className="App">
    <Navbar
      toggleMenu={toggleMenu}
    />
      <div className='content'>
        <Sidemenu
          toggleMenu={toggleMenu}
          menu={menu}
        />
        <Home />
      </div>
    </div>
  );
}

export default App;
