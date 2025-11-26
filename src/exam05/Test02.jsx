import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'

function Test02() {
  const a = 100;
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  // 화면 렌더링이 끝난 다음에 side effect를 수행해야 한다
  // 아래 코드는 에러다 : 아직 화면이 나타나기 전이기 때문에
  // -> 렌더링이 끝난 다음에 이동시켜라...라고 예약해서 처리
  // -> 최신 리액트는 에러 메시지를 출력 + 예약을 걸어 처리하지만...사용하지 마라
  // if(a==100)
  //   navigate("/test01");

  // side effect를 처리하는 훅
  // useEffect(()=>navigate("/test01"), []);

  // 리액트 라우터는 navigate를 컴포넌트로도 제공 : 내부적으로 useEffect를 사용
  if(a===100)
    return <Navigate to="/test01" />

  return (
    <div>Test02</div>
  )
}

export default Test02