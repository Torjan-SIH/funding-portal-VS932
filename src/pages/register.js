import React from "react";
import { useState, useEffect } from "react";
import './pagesStyle.css';

const Register = () =>{
   
   const passwdlen = 8;
 
   const [firstName, setFirstName] = useState(null);
   const [lastName, setLastName] = useState(null);
   const [email, setEmail] = useState(null);
   const [roleInput, setRoleInput] = useState(null);
   const [addressInput, setAddressInput] = useState(null);
   const [passwdRegister, setPasswdRegister] = useState("");
   const [passwdConfirm, setPasswdConfirm] = useState("");
   const [validLength, setValidLength] = useState("");
   const [hasNumber, setHasNumber] = useState(null);
   const [upperCase, setUpperCase] = useState(null);
   const [lowerCase, setLowerCase] = useState(null);
   const [specialChar, setSpecialChar] = useState(null);
   const [match, setMatch] = useState(null);
   
   
   const changeRegisterHandler=(e) =>{
      const{name} = e.target;
      if(name === "firstName")
      setFirstName(e.target.value);
      if(name === "lastName")
      setLastName(e.target.value); 
      if(name === "email")
      setEmail(e.target.value); 
      if(name === "address")
      setAddressInput(e.target.value);
      if(name === "role")
      setRoleInput(e.target.value);
      if(name === "password")
      setPasswdRegister(e.target.value);  
      if(name === "passwordcnfrm")
      setPasswdConfirm(e.target.value)
      
   }
   const validate=(e) =>{
      e.preventDefault();
   }

   useEffect(() => {
      setUpperCase(/[A-Z]/.test(passwdRegister));
      setLowerCase(/[a-z]/.test(passwdRegister));
      setHasNumber(/\d/.test(passwdRegister));
      setMatch(passwdRegister === passwdConfirm);
      setSpecialChar(/[!@#$&*-_+?,.]/.test(passwdRegister));
      setValidLength((passwdRegister.length >= 8)? true : false)
      },[passwdRegister, passwdConfirm, passwdlen]);

   return(
      <form onSubmit={validate}>
         <div className="firstName">
            <label className="firstNameLabel" for="firstName" >First Name </label>
            &nbsp;
            <input className="firstNameInput" type="text" name="firstName" placeholder="First Name" value={firstName} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
         </div>
         <div className="lastName">
            <label className="lastNameLabel" for="lastName" >Last Name </label>
            &nbsp;
            <input className="lastNameInput" type="text" name="lastName" placeholder="Last Name" value={lastName} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
         </div>
         <div className="email">
            <label className="emailLabel" for="email" >Email </label>
            &nbsp;
            <input className="emailInput" type="email" name="email" placeholder="Email" value={email} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
         </div>
         <div className="address">
            <label className="addressLabel" for="address" >Address </label>
            &nbsp;
            <input className="addressInput" type="text" name="address" placeholder="Address" value={addressInput} required onChange = {(e) => changeRegisterHandler(e)} ></input>
         </div>
         <div className="Roles">
            <label className="rolesLabel" for="role">Select Role: </label>
            <select className="roleInput" name="role" value={roleInput} required onChange={(e) => changeRegisterHandler(e)} > 
               <option name="role" value="">Select</option>
               <option name="role" value="agencies" >Agencies</option>
               <option name="role" value="hei" >HEI's</option>
               <option name="role" value="oe" >OE's</option>
            </select>
         </div>
         <div className="registerPassword">
            <label className="registerLabel" for="passwdRegister">Password </label>
            <input className="registerInput" type="password" name="password" value={passwdRegister} required onChange={(e) => changeRegisterHandler(e)}></input>
         </div>
         <div className="confirmPassword">
            <label className="confirmLabel" for="passwdConfirm"> confirmPassword </label>
            <input className="confirmInput" type="password" name="passwordcnfrm" value={passwdConfirm} required onChange={(e) => changeRegisterHandler(e)}></input>
         </div>
         <div className="passwdWarning">
            <ul>
               <li className="warn">
                  {hasNumber ? <span className="valid">Number[0-9]</span> : <span className="invalid">Number[0-9]</span>}
               </li>
               <li className="warn">
                  {upperCase ? <span className="valid">UpperCase[A-Z]</span> : <span className="invalid">UpperCase[A-Z]</span>}
               </li>
               <li className="warn">
                  {lowerCase ? <span className="valid">LowerCase[a-z]</span> : <span className="invalid">LowerCase[a-z]</span>}
               </li>
               <li className="warn">{match ? <span className="valid">Password Match</span> : <span className="invalid">Password Match</span>}</li>
               <li className="warn">
                  {validLength ? <span className="valid">Password Length </span> : <span className="invalid">Password Length</span>}
               </li>
               <li className="warn">
                  {specialChar ? <span className="valid">Symbols[!@#$&*-_+?,.]</span> : <span className="invalid">Symbols[!@#$&*-_+?,.]</span>}
               </li>
            </ul>
         </div>
         <div className="RegisterSubmit">
            <button type="submit" className="RegisterSubmitButton">Register</button> 
         </div>
    </form>
   )
}

export default Register