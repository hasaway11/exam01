// 로그인하지 않아야만 접근 가능 : 로그인 화면

import useLoginStore from "./useLoginStore"

function Test06() {
  const {setLogin} = useLoginStore();

  return (
    <div>
      <button onClick={setLogin}>로그인</button>
    </div>
  )
}

export default Test06