import React from "react";
import { ListOeDashboard } from "../../components/ListView/listview";
import TopBar from "../../components/TopBar/topbar";
import './oeStyles.css';
const OeDashBoard=() =>
{
    return(
        <div className="oeProfileDiv">
            <TopBar/>
            <div className="sideBySide">
                <ListOeDashboard/>    
            </div>
        </div>
    )
}

export default OeDashBoard;