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
      <body className="login">
      <center>
      
         <form onSubmit={submitLoginHandler}>
         <table border="0" width="50%" 
          bgcolor="white"
          
       cellpadding="10"
       cellspacing="5" align="right">
         <tr><th colSpan='2'><center><b>LOG IN</b></center></th></tr>
         <tr><td></td></tr>
         <tr><td></td></tr>
               <tr className="loginUserName" >
                  <th><center>
                     <label className="loginLabel" for="userLogin" >Username  </label><br></br></center>
                  </th>
                  
                  <td>
                     <input className="loginInput" type="email" name="username" value={userLogin} required onChange = {(e) => changeLoginHandler(e)} ></input> 
                  </td>
                  </tr><tr><td></td></tr>
                  <tr className="loginPassword">
                     <th><center>
                        <label className="loginLabel" for="passwdLogin">Password </label><br></br></center>
                     </th>
                  <td>
                     <input className="loginInput" type="password" name="password" value={passwdLogin} required onChange = {(e) => changeLoginHandler(e)}></input>
                  </td>
               </tr><tr><td></td></tr>
               <tr className="loginRoles">
                  <th><center>
                     <label className="loginLabel" for="role">Select Role: </label></center>
                  </th>
                  <td>
                     <select className="loginInput" name="role" value={roleLogin} required onChange={(e) => changeLoginHandler(e)} > 
                     <option name="role" value="">Select</option>
                     <option name="role" value="agencies" >Agencies</option>
                     <option name="role" value="hei" >HEI's</option>
                     <option name="role" value="oe" >OE's</option>
                     </select>
                  </td>
               </tr><tr><td></td></tr>
               <tr>
                  <td>
                     <center>
                        {validPasswd ? <span className="valid">Password Length</span> : <span className="invalid">Password Length</span>}
                     </center>
                  </td>
               </tr><tr><td></td></tr>
               <tr className="loginSubmit" >
                  <td colSpan={2}>
                     <center>
                        <button type="submit" className="loginSubmitButton" style={{background:"green"}}> Login</button> 
                     </center>
                  </td>
               </tr><tr><td></td></tr>
               <tr className="forgotPasswd">
                  <td colSpan={2}>
                     <center>
                        <Link to="/forgotpasswd" ><p style={{color:"black"}}>Forgot Password?</p></Link>
                     </center>
               </td>
               </tr><tr><td></td></tr>
               <tr>
                  <td colSpan={2}>
                     <center>
                        Don't have an account?
                     </center>
                  </td>
               </tr>
               <tr className="loginRegister">
               <td colSpan={2}>
                     <center>
                     <h3><Link to="/register"><p style={{color:"black"}}>Sign-up</p></Link></h3>
                     </center>
                  </td>       
               </tr>
            </table>
         </form> 
      </center>
      </body>
   )
   
}

export default Login