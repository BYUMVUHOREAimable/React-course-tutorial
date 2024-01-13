import React from 'react'
import { useState } from 'react';

export default function TheUseOfState() {
  const [name, setName] = useState("Mandela");
  const [age1, setAge1] = useState(20);
  const [age, setAge] = useState(20);
  return (
    <div>
      {name} <button onClick={()=>{setName("Aimable")}}>change name</button> <br />
      {age1} <button onClick={() => { setAge1(age1 + 1) }}>Increament age</button> <br />
      {age} <button onClick={() => { setAge(age - 1) }}>Decrement age</button>
      
    </div>
  )
}
