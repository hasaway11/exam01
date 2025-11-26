import { Navigate } from "react-router-dom";
import useLoginStore from "./useLoginStore"

function PrivateRoute({element}) {
  const {login} = useLoginStore();
  return login? element:<Navigate to="/login" />
}

export default PrivateRoute