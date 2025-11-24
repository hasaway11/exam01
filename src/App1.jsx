// useRef는 document.getElementById()를 대신

import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const focusIn=()=>{
    inputRef.current.value='';
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} value='1234' />
      <button onClick={focusIn}>포커스 넣어주기</button>
    </>
  )
}

export default App