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
      <div className="login">
      <center>
         <form onSubmit={submitLoginHandler}>
         <table border="2" 
       cellpadding="10"
       cellspacing="5">
               <tr className="loginUserName" >
                  <th>
                     <label className="loginLabel" for="userLogin" >Username  </label><br></br>
                  </th>
                  <td>
                     <input className="loginInput" type="email" name="username" value={userLogin} required onChange = {(e) => changeLoginHandler(e)} ></input> 
                  </td>
                  </tr>
                  <tr className="loginPassword">
                     <th>
                        <label className="loginLabel" for="passwdLogin">Password </label><br></br>
                     </th>
                  <td>
                     <input className="loginInput" type="password" name="password" value={passwdLogin} required onChange = {(e) => changeLoginHandler(e)}></input>
                  </td>
               </tr>
               <tr className="loginRoles">
                  <th>
                     <label className="loginLabel" for="role">Select Role: </label>
                  </th>
                  <td>
                     <select className="loginInput" name="role" value={roleLogin} required onChange={(e) => changeLoginHandler(e)} > 
                     <option name="role" value="">Select</option>
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
                        <button type="submit" className="loginSubmitButton">Login</button> 
                     </center>
                  </td>
               </tr>
               <tr className="forgotPasswd">
                  <td colSpan={2}>
                     <center>
                        <Link to="/forgotpasswd" ><p>Forgot Password?</p></Link>
                     </center>
               </td>
               </tr>
               <tr className="loginRegister">
                  <td colSpan={2}>
                     <center>
                        Don't have an account?<h3><Link to="/register"><p>Sign-up</p></Link></h3>
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