import React from "react";
import TopBar from "../../components/TopBar/topbar";
import './oeStyles.css';
const OeDashBoard=() =>
{
    return(
        <div className="oeProfileDiv">
            <TopBar/>
            
            <div className="sideBySide">
            <form className="oeProfileForm">
                <h1 className="oeProfileHeading">Verification Requests</h1>
                <table className="oeProfileTable">
                <tr>
                        <th>HEI/Individual Name </th>
                        <th>Scheme ID </th>
                        <th>Applied Scheme Name</th>
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
                        <td><button >Verify</button></td>

                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}

export default OeDashBoard;