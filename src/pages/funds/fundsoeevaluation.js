import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';

const FundsOeEvaluation = () =>
{
    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
            <form className="fundProfileForm">
                <h1 className="fundProfileHeading">Funds Dashboard</h1>
                <table className="fundProfileTable">
                    <tr>
                        <th>HEI/Individual Name </th>
                        <th>Applied Scheme ID </th>
                        <th>Applied Scheme </th>
                        <th>Applied Date</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                        <td>03-03-03</td>
                        <td>Approved</td>
                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                        <td>01-02-01</td>
                        <td>Rejected</td> 
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}
export default FundsOeEvaluation;
            
        