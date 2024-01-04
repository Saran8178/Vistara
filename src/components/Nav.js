import React from "react";
import { Link } from 'react-router-dom';
import '../Assests/CSS/Nav.css';
const Nav=()=>{
    return (

        <div style={{ backgroundColor: 'white' }}>
      <nav>
        <ul className="nav">
         
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
          <li>
            <Link to='/signup' className="same">SIGN UP</Link>
          </li>
          <li>
            <Link to="/login" className="same">LOGIN</Link>
            
          </li>
          <li>
            <Link to="/login" className="same">LOGIN</Link>
           
          </li>
        </ul>

      </nav>

      
    </div>
)
}
export  default Nav;