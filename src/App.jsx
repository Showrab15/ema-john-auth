import { useState } from 'react'

import './App.css'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Shop></Shop>
    </div>
  )
}

export default App
