// user : id, username, email, active

import { useRef, useState } from "react"

function User({user, handleDelete, handleUpdate}) {
  const {id, username, email, active} = user;
  return (
    <tr>
      <td>{id}</td>
      <td style={{fontWeight:'bold', color:active?'green':'black'}}>
        <span onClick={()=>handleUpdate(user.id)}>{username}</span>
      </td>
      <td>{email}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>삭제</button>
      </td>
    </tr>
  );
}

function UserList({users, handleDelete, handleUpdate}) {
  console.log(users);
  return (
    <table className='table table-border'>
      <thead>
        <tr>
          <th>번호</th><th>이름</th><th>이메일</th><th></th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(u=><User key={u.id} user={u} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
        }
      </tbody>
    </table>
  )
}

function CreateUser({handleChange, handleAdd}) {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const onClickHanlder=()=>{
    if(usernameRef.current.value==='' || emailRef.current.value==='')
      return
    handleAdd();
    usernameRef.current.value="";
    emailRef.current.value="";
  }
  return (
    <div>
      <input name='username' placeholder="계정명" onChange={handleChange} ref={usernameRef} />
      <input name='email' placeholder="이메일" onChange={handleChange} ref={emailRef} />
      <button onClick={onClickHanlder}>등록</button>
    </div>
  )
}

function App() {
  const [users, setUsers] = useState([
    {id:1, username:'velopert', email:'velopert@naver.com', active:true}
  ]);
  const [inputs, setInputs] = useState({username:'', email:''});
  const idRef = useRef(2);

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setInputs(prev=>({...prev, [name]:value}));
  }
  const handleAdd=()=>{
    const newUser = {id:idRef.current++, username:inputs.username, email:inputs.email};
    setUsers(prev=>[...prev, newUser]);
  }

  const handleDelete=(id)=>setUsers(prev=>{
    return prev.filter(user=>user.id!==id);
  });

  const handleDelete2=(id)=>setUsers(prev=>prev.filter(user=>user.id!==id));

  const handleUpdate=(id)=>setUsers(prev=>{
    return prev.map(user=>user.id===id?{...user, active:!user.active}:user);
  });

  return (
    <div>
      <CreateUser handleAdd={handleAdd} handleChange={handleChange} />
      <UserList users={users} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  )
}

export default App