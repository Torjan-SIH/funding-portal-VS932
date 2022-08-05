import React from "react";
import TopBar from "../../components/TopBar/topbar";


const HeiVerify = () => {
    return(  
        <div className="heiProfileDiv">
            <TopBar/>
            <div className="btn">
            <button >Agency Verification Requests</button>
            <button >Hei Verification Requests</button>
            </div>
            <div className="sideBySide">
                <form className="heiProfileForm">
                    <h1 className="heiProfileHeading">HEI Registrations</h1>
                    <table className="heiProfileTable" cellPadding={15} cellSpacing={15} border={1} align={"right"}>
                    <tr>
                    <th>Name of HEi/Individual</th>
                        <th>Mail </th>
                        <th>Contact No.</th>
                        <th>Address</th>
                        <th>Govt. Authorisation Certificate </th>
                        <th>Role </th>
                        
                    </tr>
                    <tr>
                        <td>VVIT</td>
                        <td>vvit.net </td>
                        <td>0987654321 </td>
                        <td>nambur</td>
                        <td>abcdefgh </td>
                        <td>HEI </td>
                        <button >Accept/Reject</button>
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
export default HeiVerify;