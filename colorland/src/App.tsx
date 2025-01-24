import { useState } from 'react'
import './App.css'
import GraphContainer from './graph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GraphContainer count={count} />
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
