import './App.css';

function Member({member}) {
  const {name, year, nai, country} = member;
  return (
    <div className='border'>
      <div>{name} {year}년 {nai}세 {country}</div>
    </div>
  )
}

function App() {
  const members = [
    {id:1, name:'카리나', year:2000, nai:25, country:'한국'},
    {id:2, name:'지젤', year:2000, nai:25, country:'일본'},
    {id:3, name:'윈터', year:2001, nai:24, country:'한국'},
    {id:4, name:'닝닝', year:2002, nai:24, country:'중국'}
  ]
  return (
    <div>
      {
        members.map(m=><Member key={m.id} member={m} />)
      }
    </div>
  )
}

export default App