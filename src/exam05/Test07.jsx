import { Link } from "react-router-dom";
import useLoginStore from "./useLoginStore"

function Test07() {
  const {login} = useLoginStore();
  return (
    <div>
      루트입니다
      {!login && <Link to={"/login"} >로그인으로</Link>}
    </div>
  )
}

export default Test07