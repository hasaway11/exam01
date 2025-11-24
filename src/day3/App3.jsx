import React from 'react'

function MyInfo() {
  return <div>로그인해야 볼 수 있는 내정보</div>;
}

function Login() {
  return <div>로그인 페이지</div>
}

// const count =10, price=20;
// {count:count, price:price}라는 객체를 만들때 단축 표현이 {count, price}
// 즉 중괄호 내부에 변수이름이 오면 JS는 객체 단축 표현으로 간주
// JSX는 JS의 확장이므로 JS 문법을 존중한다 
function AuthWrapper({children, isLogin}) {
  if(!isLogin)
    return <Login/>
  else
    return <div>{children}</div>;
}

function App() {
  return (
    <AuthWrapper isLogin={false}>
      <MyInfo />
    </AuthWrapper>
  )
}

export default App