import { useState } from 'react'
import Detail from '../movie/detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-between'>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <Detail />
    </>
  )
}

export default App
