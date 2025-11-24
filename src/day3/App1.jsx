// 리액트는 UI 라이브러리 : 화면 처리 + 컴포넌트화(재사용, 부분갱신)
// 부모 컴포넌트는 데이터를 가진다 -> 자식 컴포넌트는 출력을 담당
// - 리액트는 데이터를 부모에서 자식으로 보낼 수 있다(자식에서 부모로는 X. 단방향)

function Team({team}) {
  const {rank, name, win, lose} = team;
  return (
    <div>{rank}위 {name} {win}승 {lose}패</div>
  )
}

function App() {
  // 자바스크립트
  const teams = [
    {rank:1, name:'LG 트윈스', win:85, lose:86 },
    {rank:2, name:'한화 이글스', win:83, lose:57 },
    {rank:3, name:'SSG 렌더스', win:75, lose:65 },
  ];
  return (
    <div>
    {
      teams.map(team=><Team team={team}/>)
    }
    </div>
  )
}

export default App