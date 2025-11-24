// 배열의 CRUD 하기

const users = [
  {id:1, name:'홍길동', email:'hkd@naver.com'},
  {id:2, name:'전우치', email:'juc@daum.net'}
];

// 임꺽정, lkj@naver.com을 추가하기 -> 전개연산자
const newUser = {id:3, name:'임꺽정', email:'lkj@naver.com'};
const newUsers = [...users, newUser];
console.log(newUsers);

// id===2를 삭제 -> filter
function removeUser(id) {
  return newUsers.filter(a=>a.id!==id);
}

console.log(removeUser(2));

// id===3을 찾아서 email을 lkj@daum.net으로 변경하시오
// map과 전개연산자를 사용
function updateEmail(id, newEmail) {
  // id가 다른 경우 원소를 그대로
  // id가 같은 경우 email을 변경한 원소를 
  return newUsers.map(a=>a.id===id?{...a, email:newEmail}:a);
}

console.log(updateEmail(2, "aaa@naver.com"));

