import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/components/Card.jsx'


function App() {
  let obj={
    name:"yujina",
    address:"banepa"
  }
  let newarray=[1,2,3]
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500'>tailwind</h1>
    
  <Card username="yujina" btn="click me"/>
  <Card username="yashna"/>
    </>
  )
}

export default App
