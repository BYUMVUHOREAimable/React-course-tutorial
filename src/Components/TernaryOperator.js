import React, { useState } from 'react';
import "../App.css";

export default function TernaryOperator() {
  const [name, setName] = useState("");
  const [listOfNames, setListOfNames] = useState([]);

  return (
    <div className="ternaryOperator">
      <input type="text" onChange={(event) => {
        setName(event.target.value);
      }} />
      
      <button className='btnOfName'
        onClick={(event) => {
          setListOfNames([...listOfNames, name]);
        }}>

        Add Name
      </button>

      {listOfNames.map((value, key) => {
        return <h1 key={key}> { value}</h1>
      })}

    </div>
  )
}
