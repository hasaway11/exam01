// 구조분해 
// 배열이나 객체을 해체하여 변수에 담는다

const ar = [1,2,3];
const [a, b, c] = ar;
const [x, y, z] = ar;


const obj = {irum:'홍길동', nai:20};
const {irum, nai} = obj;

// 배열 구조분해 vs 객체 구조분해
// 배열은 변수 이름을 임의로 지정
// 객체는 정해진 속성 이름을 사용
