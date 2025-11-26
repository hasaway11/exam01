import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom";
import api from '../util/api'
import { Alert, Spinner } from "react-bootstrap";
import Contacts from "../component/Contacts";
import Paginations from "../component/Paginations";

function ContactList() {
  // 로딩처리, 서버응답, 서버에러를 저장하 상태
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');

  // pageno, pagesize 처리
  const [searchParams] = useSearchParams();
  const pageno = searchParams.get('pageno')==null? 1: searchParams.get('pageno');
  const pagesizeRef = useRef(10);

  useEffect(()=>{
    setLoading(true);
    api.get(`/?pagesize=${pagesizeRef.current}&pageno=${pageno}`).then(res=>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      console.log(err);
      setMessage("네트워크 통신에 문제가 있습니다");
      setLoading(false);
    });
  }, [pageno]);

  if(isLoading)
    return <Spinner />
  if(message)
    return <Alert variant="danger">{message}</Alert>
  if(data===null)
    return null;

  // data : contacts, totalcount, pageno, pagesize
  const {contacts, ...rest} = data;

  return(
    <>
      <Contacts contacts={contacts} />
      <Paginations rest={rest} />
    </>
  )
  
}

export default ContactList