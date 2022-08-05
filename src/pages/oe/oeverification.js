import React from "react";
import TopBar from "../../components/TopBar/topbar";
import OeSideBar from "../../components/SideBar/oesidebar";


const OeVerification=()=>
{
    
    return(
    <div className="oeProfileDiv">
        <TopBar />
        
    <div className="sideBySide">
    <OeSideBar/>
    </div>
    <div className="sideBySide">
    <div className="oeVerify" >
            <div className="oeHeiName">
               <h6><b>HEI NAME/INDIVIDUAL NAME:</b></h6>
            </div>
            <div className="oeSchemeId">
                <h6><b>APPLIED SCHEME ID:</b></h6>
            </div>
            <div className="oeScheme">
                <h6><b>APPLIED SCHEME:</b></h6>
            </div>
            <div className="oeDate">
                <h6><b>APPLIED DATE:</b></h6>
            </div>
           
            <button className="accept" >ACCEPT</button>
           &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="reject">REJECT</button>
          </div>
          </div>
          </div>
        
        
    )
}
export default OeVerification;