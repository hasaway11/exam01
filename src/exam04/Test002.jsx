// https://contactsvc.bmaster.kro.kr/contacts API 서버에서 글을 받아와 출력

import axios from "axios";
import { useState } from "react"

// 서버에서 수신한 데이터를 상태로 관리해야하는 이유
// 1. 일반 변수로 처리하면 : axios가 비동기이므로 return이 먼저 걸려서 출력이 불가능하다
// 2. 서버에서 수신이 안됐으면 출력하지마 : if(data===null) return;
// 3. 나중에 data가 수신되면 재렌더링을 해야 한다 : 재렌더링 될려면 state여야 한다
function Test002() {
  let data = null;

  axios.get('https://contactsvc.bmaster.kro.kr/contacts').then(res=>{
    data=res.data;
    // JS라면 출력하면 된다 -> 리액트에서 출력은 리액트가 한다. 개발자가 건드릴 수 없다
  })

  // guard : 데이터가 수신되지 않았다면 출력하지 마라
  //         data가 상태가 아닌 경우 21라인에서 컴포넌트가 종료된다 -> 아무것도 안나온다
  if(data===null)
    return;

  return (
    <div>{data.totalcount}</div>
  );

}

export default Test002