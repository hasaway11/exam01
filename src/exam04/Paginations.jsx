
// 1. props를 이용해 prev, start, end, next를 계산
// 2. start부터 end까지 페이지 번호를 담은 배열, prev, end를 pages에 담자
// 3. pages를 이용해 페이지네이션 출력

import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

// 4. 페이지네이션을 클릭하면 /?pageno=?로 navigate 시킨다
function Paginations({pageno, totalcount, pagesize=10, blocksize=5}) {
  const navigate = useNavigate();
  const [pages, setPages] = useState(null);

  useEffect(()=>{
    const 페이지의개수 = Math.floor((totalcount-1)/pagesize + 1);
    const prev = Math.floor((pageno-1)/blocksize) * blocksize;
    const start = prev + 1;
    let end = prev + blocksize;
    let next = end + 1;
    if(end>=페이지의개수) {
      end = 페이지의개수;
      next = 0;
    }
    const pageItem = [];
    for(let i=start; i<=end; i++) 
      pageItem.push(i);
    setPages({prev, next, pageItem});
  }, []);

  if(pages===null) return;

  return (
    <Pagination>
    {
      pages.prev>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pages.prev}`)}>이전으로</Pagination.Item>
    }
    {
      pages.pageItem.map(p=><Pagination.Item key={p} active={pageno==p} onClick={()=>navigate(`/?pageno=${p}`)}>{p}</Pagination.Item>)
    }
    {
      pages.next>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pages.next}`)}>다음으로</Pagination.Item>
    }
    </Pagination>
  )
}

export default Paginations