import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './register';
import './pagesStyle.css';

const Login = () =>{
   
   
   const [userLogin, setUserLogin] = useState(null);
   const [passwdLogin, setPasswdLogin] = useState("");
   const [roleLogin, setRoleLogin] = useState(null);
   const [validPasswd, setValidPasswd] = useState(null);
   
   const changeLoginHandler = (e) =>{
      const{name} = e.target;
      if(name === "username")
         setUserLogin(e.target.value);
      if(name === "password")
         setPasswdLogin(e.target.value);
      if(name === "role")
         setRoleLogin(e.target.value);
      }
   
   useEffect(() =>{
      setValidPasswd((passwdLogin.length >= 8)? true : false)
   },[passwdLogin])

   const submitLoginHandler = (e) =>{
      e.preventDefault();
         
   }

      return(
     <div class="contactform"><center>
      <form onSubmit={submitLoginHandler} className="myform">
         <table border="0" width="50%"  cellpadding="10" cellspacing="5">
          <tr><th colSpan='2'><center><h4><b>LOG IN</b></h4></center></th></tr>
          <tr className="loginUserName" >
             <td colSpan={'2'}>
                <input className="loginInput"  type="email" name="username" placeholder="Username"value={userLogin} required onChange = {(e) => changeLoginHandler(e)} ></input> 
             </td>
          </tr>
          <tr className="loginPassword">
               <td colSpan={'2'}>
                  <input className="loginInput" type="password" placeholder="Password" name="password" value={passwdLogin} required onChange = {(e) => changeLoginHandler(e)}></input>
               </td>
          </tr>
          <tr className="loginRoles">
               <td>
                     <select className="loginInput" name="role" value={roleLogin} required onChange={(e) => changeLoginHandler(e)} > 
                     <option name="role" value="">--Select--</option>
                     <option name="role" value="agencies" >Agencies</option>
                     <option name="role" value="hei" >HEI's</option>
                     <option name="role" value="oe" >OE's</option>
                     </select>
                </td>
          </tr>
               
               <tr>
                  <td>
                     <center>
                        {validPasswd ? <span className="valid">Password Length</span> : <span className="invalid">Password Length</span>}
                     </center>
                  </td>
               </tr>


                <tr className="loginSubmit" >
                  <td colSpan={2}>
                     <center>
                        <button type="submit" className="loginSubmitButton"> Login</button> 
                     </center>
                  </td>
               </tr> 
               

               <tr className="forgotPasswd">
                  <td colSpan={2}>
                     <center>
                        <Link to="/forgotpasswd" ><p style={{color:"black"}}>Forgot Password?</p></Link>
                     </center>
               </td>
               </tr>
               <tr className="loginRegister">
               <td colSpan={2}>
                     <center>
                        <h5>Don't have an account?</h5>
                     <h4><Link to="/register"><p style={{color:"black"}}>Sign-up</p></Link></h4>
                     </center>
                  </td>       
               </tr>
               </table>
               </form> 
      </center>
      </div>
     
      
   )
   
}

export default Login