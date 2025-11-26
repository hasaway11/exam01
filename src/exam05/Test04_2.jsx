import useLoginStore from './useLoginStore'
import { useNavigate } from 'react-router-dom';

function Test04_2() {
  const {login, setLogout} = useLoginStore();
  const navigate = useNavigate();

  const logout=()=>{
    setLogout();
    navigate("/t4");
  }

  return (
    <>
      <h1>이동했습니다</h1>
      {login && <div>로그인 상태입입니다 <button onClick={logout}>로그아웃</button> </div>}
      {!login && <div>로그인이 필요합니다<button onClick={()=>navigate('/t4')}>돌아가기</button></div>}
    </>
  )
}

export default Test04_2