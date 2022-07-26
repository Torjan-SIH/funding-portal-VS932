import React from "react";
const OeProfile=() =>
{
    return(
            
        <div className="ui main" align="center" >
            <h2>OE PROFILE</h2>
            <br></br>
            <form className="ui form">
                <div className="field" >
                    <label>Name:&nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input type="text" name="name" placeholder="name" ></input><br></br>
                    <br></br>
                </div>
                <div className="field">
                    <label>Mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="mail" placeholder="mail"></input><br></br>
                    <br></br>
                </div><div className="field">
                    <label>Contact:&nbsp;&nbsp;</label>
                    <input type="text" name="contact" placeholder="contact"></input><br></br>
                    <br></br>
                </div><div className="field">
                    <label>Address:&nbsp;&nbsp;</label>
                    <input type="text" name="address" placeholder="address"></input><br></br>
                    <br></br>
                </div>
                <button className="ui button blue" style={{backgroundColor:'skyblue'}}>Save Changes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="ui button blue" style={{backgroundColor:'skyblue'}}>Cancel</button>
            </form>
        </div>
        )
}

export default OeProfile;