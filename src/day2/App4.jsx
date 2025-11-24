// 리액트가 추적하는 값을 상태(state)라고 부른다
// 리액트가 상태가 변경되었을 때만 재렌더링
// 일반 변수는 상태가 아니다. 리액트만의 특수한 함수(hook)을 이용해 상태를 정의할 수 있다

import { useState } from "react";

function App() {
  // 상태가 변경되면 컴포넌트가 재렌더링
  // 재렌더링되면 value는 0으로 돌아온다
  let value = 0;
  // useState는 상태와 세터함수를 배열로 리턴
  const [count, setCount] = useState(0)

  const inc=()=>{ value++; }

  const add=()=>{ setCount(count+1); }

  return (
    <div>
      변수 : {value} <br/>
      상태 : {count} <br/>
      <br/>
      <button onClick={inc}>일반 변수 증가</button>
      <button onClick={add}>상태 증가</button>
    </div>
  )
}

export default App