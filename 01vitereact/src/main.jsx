import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function Myapp(){
 return( <h1>This is Custom App !!</h1>)
}

// const newElement=(
//   <a href='https://google.com'>Welcome to google</a>
// )

const newElement=React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  'click me to navigate to google'
)

createRoot(document.getElementById('root')).render(
  newElement
  
)
