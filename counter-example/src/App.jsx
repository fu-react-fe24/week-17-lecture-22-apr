import { useState } from 'react'
import Counter from './components/Counter'
import ButtonGroup from './components/ButtonGroup'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <Counter count={count} />
      <ButtonGroup setCount={setCount} />
    </div>
  )
}

export default App;
