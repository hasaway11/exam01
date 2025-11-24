import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';

function Test003() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // axios.get().then(res=>setData(res.data));
  // guard -> 데이터 수신 -> 상태 변경 -> 재렌더링 -> axios 재실행 -> 상태 변경 -> 재렌더링 -> axios 재실행....무한 루프

  useEffect(()=>{
    setLoading(true);
    axios.get('https://contactsvc.bmaster.kro.kr/contacts').then(res=>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      if(err.status===404)
        setMessage("서버를 찾을 수 없습니다");
      setLoading(false);
    });
  }, [])

  if(isLoading)
    return <LoadingSpinner />
  if(message)
    return <Alert variant='danger'>{message}</Alert>
  if(data===null)
    return null;
  return (
    <div>
      {data.totalcount}
    </div>
  )
}

export default Test003