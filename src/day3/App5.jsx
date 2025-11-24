import { useState } from "react";

// 상태는 리액트 내부 저장소에 저장되어 리액트가 추적한다
// useState를 사용하면 리액트는 내부에 상태변수와 그 상태변수를 변경하는 세터를 생성한 다음 리턴한다
// 아래 코드에서 value는 개발자가 사용할 수 있도록 리액트 내부 상태변수를 받아온 값
function App() {
  // 2번 실행
  console.log("===재렌더링===")

  // 컴포넌트가 재렌더링 : 컴포넌트 전체를 재실행
  // 재렌더링할 때 일반변수는 다시 초기화
  let count=0;

  // useState는 리액트 내부 저장소에 상태 변수가 없다면 초기값으로 초기화
  // 상태 변수가 있다면 그 값을 읽어온다
  const [value, setValue] = useState(0);

  const add=()=>{
    count++;
    console.log(count);
  }

  // 1번 실행
  const inc=()=>{
    // 내부저정소에 저장된 상태변수의 값을 1증가 시켜라
    setValue(value+1);        // 내부 상태 변수는 1
    console.log(value);       // value는 미갱신이므로 0
  }

  // 3번 실행
  return (
    <div>
      변수:{count}<br/>
      상태:{value}<br/>
      <button onClick={add}>변수 증가</button>
      <button onClick={inc}>상태 증가</button>
    </div>
  )
}

export default App