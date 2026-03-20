import { useState } from 'react'
import ToggleBox from './components/ToggleBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleBox/>
    </>
  )
}

export default App
