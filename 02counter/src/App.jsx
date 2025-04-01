import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, Setcounter]=useState(5)
 const addvalue =() =>{
console.log("value added", counter)
if(counter<19){
  counter=counter+1
Setcounter(prevCounter=> prevCounter+1)
Setcounter(prevCounter=> prevCounter+1)
}

}
 

 const removevalue=()=>{
  console.log("value removed", counter)
  
  if(counter>0){
    counter=counter-1
Setcounter(counter)
  }
}

  return (
    <>
      <h1>Chai aur Code</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
      
    </>
  )
}

export default App
