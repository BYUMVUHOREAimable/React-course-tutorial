import React, {useRef} from 'react';
import "../App.css";

export default function TheUseOfRef() {
  const input = useRef(null);

  const changePlaceholder = () => {
    input.current.value = "subscribe";
  };

  return (
    <div className="TheUseOfRef">
      <input type="text" value="hello" ref={input} />
    <button onClick={changePlaceholder}>Change Placeholder</button>  
    </div>
  )
}
