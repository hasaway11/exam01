import { Route, Routes } from 'react-router-dom'
import useAuthStore from './contact/store/useAuthStore'
import Nav from './contact/fragment/Nav';
import ContactList from './contact/page/ContactList';
import PublicRoute from './contact/router/PublicRoute';
import ContactLogin from './contact/page/ContactLogin';
import { useEffect } from 'react';


function App() {
  const {readLogin} = useAuthStore();
  
  useEffect(()=>{
    readLogin()
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<ContactList/>} />
        <Route path="/login" element={<PublicRoute element={<ContactLogin/>} />} />
      </Routes>
    </div>
  )
}

export default App