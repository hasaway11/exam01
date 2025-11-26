// useEffect 

import { useEffect, useState } from "react";

// 1.윈도우에서 탐색기를 개발한다면?
// - 탐색기 UI를 띄운다
// - 파일 목록을 읽어온다

// 2. 위 작업을 순서대로 수행한다면?
// - 파일 목록을 읽어올 때까지 탐색기를 띄울 수가 없다

// 3. 두 작업을 병렬 수행하자
// - 일단 데이터없이 UI를 띄우고 잠시 뒤에 파일 목록 읽기가 끝나면 UI를 갱신한다

// 리액트는 선택한 방법은
// - 일단 초기값으로 화면을 띄운다 -> 처리 작업은 화면을 띄운 다음에 수행


// 렌더링 : 상태를 출력하는 작업
function Test01() {
  console.log("11111111111");
  const [a, setA] = useState(10);
  const b = a*0.01;
  
  // 외부와 통신을 한다든지. 화면을 이동한다든지 하는 렌더링 이외의 작업은 예약된다
  useEffect(()=>console.log("222222222"), []);

  console.log("33333333333");
  return (
    <div>Test01</div>
  )
}

export default Test01