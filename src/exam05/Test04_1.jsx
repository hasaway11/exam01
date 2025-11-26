import { Link } from "react-router-dom";
import useLoginStore from "./useLoginStore"

function Test04_1() {
  const {login, setLogin, setLogout} = useLoginStore();
  return (
    <>
      {login && <div>로그인하셨습니다<button onClick={setLogout}>로그아웃</button></div>}
      {!login && <div>로그인이 필요합니다<button onClick={setLogin}>로그인</button></div>}
      <div><Link to="/t4_2">이동하기</Link></div>
    </>
  )
}

export default Test04_1

// location.href, a태그는 리액트가 통제할 수 없다 -> 리액트 라우터의 navigate, return <Navigate />와 <Link>