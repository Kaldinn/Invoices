import React, {useState} from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Sidemenu from './Sidemenu/Sidemenu';
import DashboardChart from './DashboardChart/DashboardChart';

function App() {

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(prevMenu => !prevMenu);
    console.log(menu)
};


  return (
    <div className="App">
    <Navbar 
      toggleMenu={toggleMenu}
    />
      <div className='content'>
        <Sidemenu
          menu={menu}
        />
        <DashboardChart />
        <Home />
      </div>
    </div>
  );
}

export default App;