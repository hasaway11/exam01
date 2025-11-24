// 전개(spread) 연산자 : 배열이나 객체를 펼치는 연산자

const ar1 = [1,2,3];
const ar2 = [5,6,7];
const arr = [...ar1, ...ar2];
console.log(arr);

// 배열을 전개한 다음 5를 추가한 새 배열을 리턴 -> 배열에 원소를 추가
const arr2 = [...ar1, 5];
console.log(arr2);

// 객체 전개
const obj = {
  irum:'홍길동',
  nai:20,
  address:'제주도'
};

console.log({...obj})

// 전개연산자를 이용해 값을 변경하기
const result = {...obj, nai:30}
console.log(result);


