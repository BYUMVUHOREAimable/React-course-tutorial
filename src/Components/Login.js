import React from 'react';
import { useState } from "react";
import "../App.css";

export default function Login() {
 const firstName = "Aimable";
  const lastName = "BYUMVUHORE";
  const email = "aimablebyumvuhore@gmail.com";
  const password = "Aimable1234";

  const [firstNameState, setFirstNameState] = useState("");
  const [lastnameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if (firstNameState === firstName && lastnameState === lastName && emailState === email && passwordState === password) {
      setLoggedIn(true);
    }
  }


  return (
   <div >
      <form action="#" method="get" className="form">
      <h1 className="login">Login</h1>
    
      <input type="text" className='input' placeholder="Enter your firstname" onChange={(event) => {
        setFirstNameState(event.target.value)
      }} />
      
       <input type="text" className='input' placeholder="Enter your lastname" onChange={(event) => {
        setLastNameState(event.target.value)
      }} />

       <input type="email" className='input' placeholder="Enter your email" onChange={(event) => {
        setEmailState(event.target.value)
      }}/>
      
      <input type="password" placeholder="Enter your password..." onChange={(event) => {
        setPasswordState(event.target.value)
       }} />
      <button className='submit' onClick={login}>submit</button>

        {loggedIn && <h1>Logged In</h1>}
        
      </form> 
      
    </div>
      
  )
}
