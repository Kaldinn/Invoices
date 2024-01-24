import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";


const Navbar = (props) => {

  return (
    <nav className='navbar'>
      <button onClick={props.toggleMenu}><IoMenu /></button>
      <h1>Dashboard</h1>
      <div className='links'>
          <NavLink to="/"><a href='/'>Home</a></NavLink>
          <NavLink to="add_invoice"><a href='/' style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: '8px'
          }}>Add Invoice</a> </NavLink>
      </div>
    </nav>
  )
}

export default Navbar


