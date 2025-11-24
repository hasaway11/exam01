function Team({name, win, lose, color='red'}) {
  return (
    <div style={{border:'1px solid red'}}>
      <div style={{color:color}}>{name}</div>
      <div>{win}승</div>
      <div>{lose}패</div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Team name="LG트윈스" win="85" lose="56" />
      <Team name="한화이글스" win="83" lose="57" color="blue" />
      <Team name="SSG렌더스" win="75" lose="65" />
    </div>
  )
}

export default App