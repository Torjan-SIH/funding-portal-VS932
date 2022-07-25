import React from "react";
import { Link } from "react-router-dom";
import './headerFooterStyle.css'

const Headers = () =>{
    return(
        <div className="headerStyle">
            <Link to="/home"><p className="headerText">One Nation - One Funding</p></Link>
        </div>
    )
}

export default Headers