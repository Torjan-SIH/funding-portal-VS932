import React from "react";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
import TopBar from "../../components/TopBar/topbar";
import './fundsStyles.css';

const FundsProfile = () =>
{
    return(
        <div className="fundProfileDiv" >
            <TopBar/>
            <div className="sideBySide">
                <FundSideBar/>
            </div>
            <div className="sideBySide">
            <form className="fundProfileForm">
                <h1 className="fundProfileHeading">Fund Profile</h1>
                <table className="fundProfileTable">
                    <tr>
                        <th>Name: </th>
                        <td><input type="text" name="oename" ></input></td>
                    </tr>
                    <tr>
                        <th>Email: </th>
                        <td><input type="email" name="oemail" ></input></td>
                    </tr>
                    <tr>
                        <th>Contact: </th>
                        <td><input type="number" name="oecontact" ></input></td>
                    </tr>
                    <tr>
                        <th>Address: </th>
                        <td><input type="text" name="oeaddress" ></input></td>
                    </tr>
                    <tr>
                        <td><button >Save</button></td>
                        <td><button >Reset</button></td>
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}
export default FundsProfile;
            
        