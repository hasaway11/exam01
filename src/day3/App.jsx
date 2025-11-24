import { useState } from "react"
import Hello from "./component/Hello";

function App() {
  const [inputs, setInputs] = useState({irum:'', email:''});
  const [message, setMessage] = useState('');

  // inputs.irum 또는 inputs.email
  // 그런데 irum 또는 email이라는 값을 가지는 변수 param 이 있다면
  // inputs[param]
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setInputs(prev=>({...prev, [name]:value}));
  }
  const print=()=>{
    if(inputs.irum==='' || inputs.email==='')
      setMessage("이름과 이메일은 필수입력입니다");
    else {
      setMessage('');
      alert('로그인합니다');
    }
  }

  return (
    <>
      <input type='text' name="irum" onChange={handleChange} />
      <input type='text' name="email" onChange={handleChange} />
      <button onClick={print}>출력하기v</button>
      {message && <span style={{color:'red'}}>{message}</span>}
    </>
  )
}

export default App