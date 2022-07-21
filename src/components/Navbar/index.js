import React from "react";
import { Link } from "react-router-dom";
import './navBarStyle.css';

const Navbar = () => {
   return (
     <div className="navBar">
         <ul className="navBarList">
            <Link to="/home" ><li>Home</li></Link>
            <Link to="/about" ><li>About</li></Link>
            <Link to="/contact" ><li>Contact</li></Link>
            <Link to="/events" ><li>Events</li></Link>
            <Link to="/login" ><li>Login</li></Link>
         </ul>
     </div>
   );
 };
   
 export default Navbar;