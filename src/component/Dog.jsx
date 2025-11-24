function Dog() {
  // 순수 자바스크립트에서 계산을 한 다음
  const name = '뽀삐';
  const nai = 5;

  return (
    <div>
      <div style={{color:'blue'}}>{name}</div>
      <div style={{color:'red'}}>{nai}살</div>
    </div>
  )
}

export default Dog;