import React,{useState} from "react";

const Login = () =>{
   
   const [userLogin, setUserLogin] = useState(null);
   const [passwdLogin, setPasswdLogin] = useState(null);
   const [roleLogin, setRoleLogin] = useState(null);
   
   const changeLoginHandler = (e) =>{
      const{name,value} = e.target;
      if(name === "username")
         setUserLogin(e.target.value);
      if(name === "password")
         setPasswdLogin(e.target.value);
      if(name === "role")
         setRoleLogin(e.target.value);
   }
   const submitLoginHandler = (e) =>{
      e.preventDefault();
      if(roleLogin == "null")
         alert("please select a role");
   }
   return(
      <form onSubmit={()=>submitLoginHandler}>
         <div className="loginUserName">
            <label className="loginLabel" for="userLogin" >Email  </label><br></br>
            <input className="loginInput" type="email" name="username" value={userLogin} required onChange = {(e) => changeLoginHandler(e)} ></input> 
         </div>
         <div className="loginPassword">
            <label className="loginLabel" for="passwdLogin">Password </label><br></br>
            <input className="loginInput" type="password" name="password" value={passwdLogin} required onChange = {(e) => changeLoginHandler(e)}></input>
         </div>
         <div className="loginRoles">
            <label className="loginLabel" for="role">Select Role: </label>
            <select className="loginInput" name="role" value={roleLogin} required onChange={(e) => changeLoginHandler(e)}> 
               <option name="role" value="null">Select</option>
               <option name="role" value="agencies" >Agencies</option>
               <option name="role" value="hei" >HEI's</option>
               <option name="role" value="oe" >OE's</option>
            </select>
         </div>
         <div className="loginSubmit">
            <button type="submit" className="loginSubmitButton">submit</button> 
         </div>
         {/* <p>{userLogin},{passwdLogin},{roleLogin}</p> */}
      </form>
   )
}

export default Login