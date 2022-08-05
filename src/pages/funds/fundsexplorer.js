import React from "react";

import { CardFundExplorer } from "../../components/CardView/cardview";
import FundSideBar from "../../components/SideBar/FUNDsidebar";
const FundExplorer=() =>

{
  return(
    <div>
    <div >
    <FundSideBar />
    </div>

    <div>
    <CardFundExplorer/>
    </div>
    </div>
  )
}
export default FundExplorer;