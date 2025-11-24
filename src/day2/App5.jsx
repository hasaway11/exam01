// 상태  : count 
// +버튼을 클릭하면 1씩 증가
// -버튼을 클릭하면 감소. 최소값은 0
// reset버튼을 클릭하면 0으로 리셋

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const style = {width:'100px', height:'50px', lineHeight:'50px'};

  const dec=()=>{
    if(count>0)
      setCount(count-1);
    else 
      setCount(0);
  }

  return (
    <div>
      <div>{count}</div>
      <button style={style} onClick={()=>setCount(count+1)}>+</button>
      <button style={style} onClick={dec}>-</button>
      <button style={style} onClick={()=>setCount(0)}>reset</button>
    </div>

  )
}

export default App