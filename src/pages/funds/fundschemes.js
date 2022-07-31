import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';

const FundSchemes = () =>
{
    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="btn">
            <button >New Scheme</button>
            </div>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
            <form className="fundProfileForm">
                <h1 className="fundProfileHeading">Schemes</h1>
                <table className="fundProfileTable">
                    <tr>
                        <th>Scheme ID </th>
                        <th>Scheme Name</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>

                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}
export default FundSchemes;
            
        