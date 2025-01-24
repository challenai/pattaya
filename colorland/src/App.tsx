import { useState } from 'react'
import './App.css'
import GraphContainer from './graph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GraphContainer count={count} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        hello, world
      </p>
    </>
  )
}

export default App
