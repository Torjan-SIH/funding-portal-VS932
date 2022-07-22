import React from "react";
import { Link } from "react-router-dom";
import './navBarStyle.css';

const Navbar = () => {
   return (
     <div className="navBar">
         <ul className="navBarList">
            <Link to="/home" ><li className="navList">Home</li></Link>
            <Link to="/about" ><li className="navList">About</li></Link>
            <Link to="/contact" ><li className="navList">Contact</li></Link>
            <Link to="/events" ><li className="navList">Events</li></Link>
            <Link to="/login" ><li className="navList">Login</li></Link>
         </ul>
     </div>
   );
 };
   
 export default Navbar;