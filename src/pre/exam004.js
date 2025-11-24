const ar = [88, 77, 55, 66, 99];

// forEach는 배열의 각 원소를 꺼내는 함수
// for(const a of ar) 
  // console.log(a);

// ar.forEach(e=>console.log(e));

// filter 함수(조건에 맞는 원소만 추출해서 새로운 배열을 생성)
// 70점이상만 추출 -> 70점이 안되면 삭제
const br = ar.filter(a=>a>=70);
console.log(ar);
console.log(br);

// map : 원소를 변경하는 함수
const cr = ar.map(a=>`${a}점입니다`);
console.log(cr);

ar.filter(a=>a>=70).map(a=>`${a}점입니다`).forEach(a=>console.log(a));

