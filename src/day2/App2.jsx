// props : 부모로부터 전달받은 상태 객체
function Member(props) {
  const style = {
    width: '200px',
    height: '50px',
    lineHeight: '50px',
    border: '1px solid red',
    margin: '5px'
  }
  return <div style={style}>{props.name} {props.nai}세</div>
}


function App() {
  return (
    <div>
      <Member name="카리나" nai="25"/>
      <Member name="지젤" nai="25"/>
      <Member name="윈터" nai="24"/>
      <Member name="닝닝" nai="23"/>
    </div>
  )
}

export default App