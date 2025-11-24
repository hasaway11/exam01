// hook : useState, useRef, useEffect(생명 주기 관리. 생성, 상태 변경, 파괴)
// useEffect(콜백, 의존성 배열)

import { useEffect, useState } from "react"


function Test001() {
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(()=>{
    console.log("객체 생성");
  }, []);

  useEffect(()=>{
    console.log("value 증가할 때");
  }, [value]);

  useEffect(()=>{
    console.log("재렌더링될때마다 실행");
  })


  return (
    <div>
      {value}<br/>
      {count}<br/>
      <button onClick={()=>setValue(value+1)}>value 증가</button>
      <button onClick={()=>setCount(count+1)}>count 증가</button>
    </div>
  )
}

export default Test001