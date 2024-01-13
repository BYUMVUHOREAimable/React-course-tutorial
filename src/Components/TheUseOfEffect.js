import React, { useEffect, useState } from 'react';
import "../App.css";

export default function TheUseOfEffect() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Page rendered");
  }, []);

  return (
    <div className="TheUseOfEffect" style={{ fontSize: 30 }}>
      {number}
      <button
        onClick={() => {
        setNumber(number + 1);
      }}
      >
        Increase Number
        </button>
  
    </div>
  )
}
