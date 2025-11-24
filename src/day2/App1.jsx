import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyName from '../component/MyName'
import Dog from '../component/Dog'
import Cat from '../component/Cat'
import Hello from '../component/Hello'

// 사용자 정의 UI 컴포넌트
function App() {
  const name = 'react';
  const value = 20;

  const style = {
    backgroundColor: 'balck',
    color: 'aqua',
    fontSize: '1.5em',
    padding: '1em'
  }

  return (
    <div>
      {/* JSX내부 JS는 중괄호로 감싼다 */}
      <Hello />
      <Hello />
      <div style={style}>{name}</div>
      <br/>
      {value%2===0? '짝수': '홀수'}
      <div className='gray-box'></div>

    </div>
  )
}

export default App
