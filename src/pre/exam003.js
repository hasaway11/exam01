// 배열 내장 함수 : forEach, filter, map

const ar = [1,2,3];
// ar를 4라는 원소를 추가
ar.push(4);
console.log(ar);

// 그런데 리액트는 위처럼 작업하면 안된다. why?
// - 리액트는 UI 기술로 렌더링을 담당 <- 변수의 값이 바뀌면 리액트가 재렌더링
// - 객체의 경우 새로운 객체를 생성해야 한다


// 2번째 원소 삭제
ar.splice(2, 1);
console.log(ar);
