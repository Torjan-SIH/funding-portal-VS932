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
   const [contactNo,setContactNo]=useState(null);
   
   
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
      if(name === "contactNo")
      setContactNo(e.target.value);
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
         <table className="tableRegister">
         <tr className="firstName">
            <th>
            <label className="firstNameLabel" for="firstName" >First Name </label>
            </th>
            <td>
            <input className="firstNameInput" type="text" name="firstName" placeholder="First Name" value={firstName} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="lastName">
            <th>
            <label className="lastNameLabel" for="lastName" >Last Name </label>
            </th>
            <td>
            <input className="lastNameInput" type="text" name="lastName" placeholder="Last Name" value={lastName} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="email">
            <th>
            <label className="emailLabel" for="email" >Email </label>
            </th>
            <td>
            <input className="emailInput" type="email" name="email" placeholder="Email" value={email} required onChange = {(e) => changeRegisterHandler(e)} ></input> 
            </td>
         </tr>
         <tr className="contactNo">
            <th>
            <label className="contactNoLabel" for="contactNo" >Contact Number </label>
            </th>
            <td>
            <input className="contactNoInput" type="contactNo" name="contactNo" placeholder="ContactNo" value={contactNo} minlength="10" maxlength="10"  required onChange = {(e) => changeRegisterHandler(e)}  ></input> 
            </td>
         </tr>
         <tr className="address">
            <th>
            <label className="addressLabel" for="address" >Address </label>
            </th>
            <td>
            <input className="addressInput" type="text" name="address" placeholder="Address" value={addressInput} required onChange = {(e) => changeRegisterHandler(e)} ></input>
            </td>
         </tr>
         <tr className="Roles">
            <th>
            <label className="rolesLabel" for="role">Select Role: </label>
            </th>
            <td>
            <select className="roleInput" name="role" value={roleInput} required onChange={(e) => changeRegisterHandler(e)} > 
               <option name="role" value="">Select</option>
               <option name="role" value="agencies" >Agencies</option>
               <option name="role" value="hei" >HEI's</option>
               <option name="role" value="oe" >OE's</option>
            </select>
            </td>
         </tr>
         <tr className="registerPassword">
            <th>
            <label className="registerLabel" for="passwdRegister">Password </label>
            </th>
            <td>
            <input className="registerInput" type="password" name="password" value={passwdRegister} required onChange={(e) => changeRegisterHandler(e)}></input>
            </td>
         </tr>
         <tr className="confirmPassword">
            <th>
            <label className="confirmLabel" for="passwdConfirm"> confirmPassword </label>
            </th>
            <td>
            <input className="confirmInput" type="password" name="passwordcnfrm" value={passwdConfirm} required onChange={(e) => changeRegisterHandler(e)}></input>
            </td>
         </tr>
         <tr className="passwdWarning">
            <td>
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
                  {specialChar ? <span className="valid">Symbols[!@#$&-_+?,.]</span> : <span className="invalid">Symbols[!@#$&-_+?,.]</span>}
               </li>
            </ul>
            </td>
         </tr>
         <tr className="RegisterSubmit">
            <td>
            <button type="submit" className="RegisterSubmitButton">Register</button> 
            </td>
         </tr>
      </table>
    </form>

   )
}

export default Register