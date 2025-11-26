import useCountStore from './useCountStore'

function Test03() {
  const {count, inc, dec} = useCountStore();

  return (
    <div>
      {count}<br />
      <button onClick={inc}>증가</button>
      <button onClick={dec}>감소</button>
    </div>
  )
}

export default Test03