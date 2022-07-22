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
      <form onSubmit={submitLoginHandler}>
         <div className="loginUserName">
            <label className="loginLabel" for="userLogin" >Username  </label><br></br>
            <input className="loginInput" type="email" name="username" value={userLogin} required onChange = {(e) => changeLoginHandler(e)} ></input> 
         </div>
         <div className="loginPassword">
            <label className="loginLabel" for="passwdLogin">Password </label><br></br>
            <input className="loginInput" type="password" name="password" value={passwdLogin} required onChange = {(e) => changeLoginHandler(e)}></input>
         </div>
         <div className="loginRoles">
            <label className="loginLabel" for="role">Select Role: </label>
            <select className="loginInput" name="role" value={roleLogin} required onChange={(e) => changeLoginHandler(e)} > 
               <option name="role" value="">Select</option>
               <option name="role" value="agencies" >Agencies</option>
               <option name="role" value="hei" >HEI's</option>
               <option name="role" value="oe" >OE's</option>
            </select>
         </div>
         <div>
            <li className="warn">
               {validPasswd ? <span className="valid">Password Length</span> : <span className="invalid">Password Length</span>}
            </li>
         </div>
         <div className="loginSubmit">
            <button type="submit" className="loginSubmitButton">Login</button> 
         </div>
         <div className="forgotPasswd">
            <Link to="/forgotpasswd" ><p>Forgot Password?</p></Link>
         </div>
         <div className="loginRegister">
            Don't have an account?<Link to="/register"><p>Sign-up</p></Link>
         </div>
      </form>
   )
}

export default Login