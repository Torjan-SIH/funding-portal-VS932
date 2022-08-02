import React from "react";
import { Link } from "react-router-dom";
import './navBarStyle.css';

const NavBar = () => {
   return (
    
     <div className="navBar">
       { <img 
              src='https://www.creditboss.in/wp-content/uploads/2020/10/Process-of-funding.jpg'
              height='40'
              align='left'
              alt=''
              loading='lazy'
            /> }
            
         <ul className="navBarList" >
          
            <Link to="/home" ><li className="navList"><h3>ONE NATION-ONE FUNDING</h3></li></Link>
            <Link to="/home" ><li className="navList">Home</li></Link>
            <Link to="/about" ><li className="navList">About</li></Link>
            <Link to="/contact" ><li className="navList">Contact</li></Link>
            <Link to="/events" ><li className="navList">Events</li></Link>
            <Link to="/login" ><li className="navList">LogIn</li></Link>
         </ul>
     </div>
     
   );
 };
   
 export default NavBar;