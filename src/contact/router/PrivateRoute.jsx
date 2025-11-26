import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore"

function PrivateRoute({element}) {
  const {login} = useAuthStore();

  if(login===undefined)
    return null;
  
  return login? element : <Navigate to="/login" />
}

export default PrivateRoute