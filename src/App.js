import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Sidemenu from './Sidemenu/Sidemenu';
function App() {

  return (
    <div className="App">
    <Navbar />
      <div className='content'>
        <Sidemenu />
        <Home />
      </div>
    </div>
  );
}

export default App;
