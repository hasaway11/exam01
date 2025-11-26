import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Paginations({rest}) {
  const {pageno, pagesize, totalcount, blocksize=5} = rest;
  const [pages, setPages] = useState(null);
  const navigate = useNavigate();
  
  useEffect(()=>{
    const 페이지의개수 = Math.floor((totalcount-1)/pagesize+1);
    const prev = Math.floor((pageno-1)/blocksize)*blocksize;
    const start = prev+1;
    let end = prev + blocksize;
    let next = end + 1;
    if(end>=페이지의개수) {
      end = 페이지의개수;
      next = 0;
    }

    const pageItem=[];
    for(let i=start; i<=end; i++) {
      pageItem.push(i);
    }

    setPages({prev, next, pageItem});
  }, []);

  if(pages===null)
    return null;
  return (
    <Pagination style={{justifyContent:'center'}}>
    {
      pages.prev>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pages.prev}`)}>이전으로</Pagination.Item>
    }
    {
      pages.pageItem.map(i=><Pagination.Item key={i} active={i===pageno} onClick={()=>navigate(`/?pageno=${i}`)}>{i}</Pagination.Item>)
    }
    {
      pages.next>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pages.next}`)}>다음으로</Pagination.Item>
    }
    </Pagination>
  )
}

export default Paginations