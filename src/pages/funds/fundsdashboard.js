import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';

const FundsDashboard = () =>
{
    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
            <form className="fundProfileForm">
                <center>
                <h1 className="fundProfileHeading">Funds Dashboard</h1>
                <table className="fundProfileTable" cellPadding={15} cellSpacing={15} border='1'>
                    <tr>
                        <th>HEI/Individual Name </th>
                        
                        <th>Applied Scheme ID </th>
                        <th>Applied Scheme </th>
                        <th>Applied Date</th>

                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                        <td>Status</td>
                        <td><button >Verify</button></td>

                    </tr>
                    <tr>
                        <td>Scheme ID </td>
                        <td>Scheme Name </td>
                        <td>Applied On </td>
                        <td>Status</td>
                        <td><button>Verify</button></td>

                    </tr>
                </table></center>
            </form>
            </div>
        </div>
    )
}
export default FundsDashboard;
            
        