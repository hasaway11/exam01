let ar = [
  {no:1, title:'영어공부', finish: false},
  {no:2, title:'러닝', finish: true},
  {no:3, title:'부서회식', finish: false}
];

// 할일 추가 : "데이트"
  ar = [...ar, {no:4, title:'데이트', finish:false}];
  console.log(ar);


// 할일 변경 : 3번 작업을 완료로 체크
  ar = ar.map(item=>item.no===3?{...item, finish:true}:item);
  console.log(ar);

// 할일 삭제 : 4번 삭제
  ar = ar.filter(item=>item.no!==4);
  console.log(ar);

// 전체 삭제
  ar = [];