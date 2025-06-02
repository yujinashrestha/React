import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Theme from '../components/Theme'
import './index.css'

import { ContextProvider } from '../components/Context'
function App() {


  return (
    <>
      <ContextProvider>
        <Theme />
      </ContextProvider>
    </>
  )
}

export default App

