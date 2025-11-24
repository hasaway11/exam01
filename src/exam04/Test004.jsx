import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Spinner, Table } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';
import { useSearchParams } from 'react-router-dom';
import Paginations from './Paginations';

function Test004() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // /?pageno=1와 queryString을 읽어오기위한 리액트 라우터 훅
  const [searchParams] = useSearchParams();
  const pageno = searchParams.get('pageno')==null? 1:searchParams.get('pageno');
  // axios.get().then(res=>setData(res.data));
  // guard -> 데이터 수신 -> 상태 변경 -> 재렌더링 -> axios 재실행 -> 상태 변경 -> 재렌더링 -> axios 재실행....무한 루프

  useEffect(()=>{
    setLoading(true);
    axios.get(`https://contactsvc.bmaster.kro.kr/contacts?pagesize=10&pageno=${pageno}`).then(res=>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      if(err.status===404)
        setMessage("서버를 찾을 수 없습니다");
      setLoading(false);
    });
  }, [pageno])

  if(isLoading)
    return <LoadingSpinner />
  if(message)
    return <Alert variant='danger'>{message}</Alert>
  if(data===null)
    return null;

  // contacts, totalcount, pageno, pagesize
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
        {
          data.contacts.map(contact=><Contact key={contact.no} contact={contact} />)
        }
        </tbody>
      </Table>
      <Paginations pageno={data.pageno} totalcount={data.totalcount} />
    </>
  )
}

function Contact({contact}) {
  return (
    <tr>
      <td>{contact.no}</td>
      <td>{contact.name}</td>
      <td>{contact.address}</td>
      <td>{contact.tel}</td>
    </tr>
  )
}



export default Test004