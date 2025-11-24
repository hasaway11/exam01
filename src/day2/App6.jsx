import { useState } from "react"

function App() {
  const [on,setOn] = useState(false);
  return (
    <div>
      <button onClick={()=>setOn(!on)}>
      {on? "켜짐":"꺼짐"}
      </button>
    </div>
  )
}

export default App