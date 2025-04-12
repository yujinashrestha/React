import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home/Home'
import { About } from './Home/About'
import { UseState } from './MoodTracker/MoodTracker'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <UseState />
    </>
  )
}

export default App
