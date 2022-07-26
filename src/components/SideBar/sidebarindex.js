import React from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './sideBarStyle.css';

const SideBar = () =>{
    return(
        <div className="sideBarDiv">
            <ProSidebar>
                <Menu iconShape='square' className="sideBar">
                    <MenuItem className="sideBarElement"><Link to="/">Dashboard</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/">Component 1</Link></MenuItem>
                    <MenuItem className="sideBarElement"><Link to="/">Component 2</Link></MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default SideBar