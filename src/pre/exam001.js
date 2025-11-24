// node.js는 JS를 독립적으로 실행해준다

console.log("node로 실행하기");

// 기본타입과 참조타입의 차이
// 기본타입 : number, string, boolean, null, undefined
// 참조타입 : 객체를 가리키는 타입

const a = 10;

// const는 저장하고 있는 값을 바꿀 수 없다
//a++;

// obj는 객체를 가리키는 참조변수 (자바로 치자면 hashCode를 저장하고 있다)
const obj = {irum:'홍길동', nai:20};
obj.nai = 30;
console.log(obj);

// 객체에 obj를 적용하면 필드의 값을 변경못하는 것이 아니라 가리키는 대상을 바꿀 수 없다
obj = {}

// 리액트는 값을 변경하면 리액트가 재렌더링
// 리액트가 변수의 값이 변경되어야만 재렌더링