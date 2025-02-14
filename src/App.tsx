import { useState } from 'react'
import ProgressionDash from './components/ProgressionDash.tsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProgressionDash />
    </>
  )
}

export default App
