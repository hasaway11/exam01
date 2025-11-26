import { Navigate } from "react-router-dom";
import useLoginStore from "./useLoginStore"

function PublicRoute({element}) {
  const {login} = useLoginStore();

  return login? <Navigate to="/"/> : element;
}

export default PublicRoute