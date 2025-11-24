import React from 'react'

function MyInfo() {
  return <div>로그인해야 볼 수 있는 내정보</div>;
}

function Login() {
  return <div>로그인 페이지</div>
}

// 조건부 렌더링
function AuthWrapper({children, isLogin}) {
  return (
    <div>
      {isLogin && <Login />}
      {!isLogin && <div>{children}</div>}
    </div>
  )
}

function App() {
  return (
    <AuthWrapper isLogin={false}>
      <MyInfo />
    </AuthWrapper>
  )
}

export default App