import React, { useState } from 'react';
import "../App.css";

export default function Form() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitForm = () => {
    var user = { firstName: firstName, lastName: lastName, email: email, password: password };
    console.log(user);
  }
  
  return (
    <div>
      <form className="form2">
        
        <label htmlFor="firstName">First Name:</label>
        <input className="input-form2" type="text" id="firstName" onChange={(e) => {
          setFirstName(e.target.value);
        }}/>
         <label htmlFor="lastName">Last Name:</label>
        <input className="input-form2" type="text" id="lastName" onChange={(e) => {
          setLastName(e.target.value);
        }}/>
         <label htmlFor="email">Email:</label>
        <input className="input-form2" type="email" id="email" onChange={(e) => {
          setEmail(e.target.value);
        }} />
         <label htmlFor="password">Password:</label>
        <input className="input-form2" type="password" id="password" onChange={(e) => {
          setPassword(e.target.value);
        }} />
        <input className="input-form2" type="button" onClick={submitForm} value="Submit" />
      </form>
      
    </div>
  )
}
