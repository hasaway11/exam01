import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore"

function PublicRoute({element}) {
  const {login} = useAuthStore();

  if(login===undefined)
    return null;
  
  return login? <Navigate to="/" />:element;
}

export default PublicRoute