import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore"

function Nav() {
  const {login, setLogout} = useAuthStore();

  if(!login) {
    return (
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/write">Write</Link></li>
          <li><Link to="/#" onClick={setLogout}>Logout</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav