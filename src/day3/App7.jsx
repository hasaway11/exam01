import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const style={
    width: '100px',
    textAlign:'center'
  };

  const inc = ()=>{
    setCount(prev=>prev+1);
    setPrice(prev=>prev+1000);
  }

  const dec =()=>{
    if(count>1) {
      setCount(prev=>prev-1);
      setPrice(prev=>prev-1000);
    } else 
      reset();
  }

  const reset=()=>{
    setCount(0);
    setPrice(0);
  }


  return (
    <>
      개수:{count}, 총가격:{price}<br/>
      <button style={style} onClick={inc}>+</button>
      <button style={style} onClick={dec}>-</button>
      <button style={style} onClick={reset}>reset</button>
    </>
  )
}

export default App