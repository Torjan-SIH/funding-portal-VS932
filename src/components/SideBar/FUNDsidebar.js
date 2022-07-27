import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const FundSideBar = () =>{
    return(
        <div className="sideBarDiv">
            <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                    <MenuItem className="sideBarElement"><Link to="/">Dashboard</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/">OE Evaluation</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/">Schemes</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/">Explore</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/">Profile</Link></MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default FundSideBar