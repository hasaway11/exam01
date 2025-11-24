import { useState } from "react"

function App() {
  // value는 상태 그 자체가 아니라 상태를 읽어온 값
  // useState는 상태가 없으면 새로 만들고, 상태가 있으면 그 값을 읽어온다
  // useState가 실행되야 value가 업데이트된다
  const [value, setValue] = useState(0);

  const add=()=>{
    // 상태는 useState()가 실행되야 업데이트된다
    setValue(value+1);
    setValue(value+1);
    setValue(value+1);
    setValue(value+1);
    setValue(value+1);
  }
  
  const inc=()=>{
    // 함수형 업데이트 : 업데이트할 때 최신 상태를 읽어와서 업데이트해라
    //                 함수의 파라미터가 최신 상태
    setValue((prev)=>prev+1);
    setValue((prev)=>prev+1);
    setValue((prev)=>prev+1);
  }

  return (
    <div>
      {value}<br/>
      <button onClick={add}>더하기</button>
      <button onClick={inc}>함수형 업데이트</button>
    </div>
  )
}

export default App