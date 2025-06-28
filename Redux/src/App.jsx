import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './app/store'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  


  return (
    <Provider store={store}>
      <AddTodo />
    <Todo/>
    </Provider>
  )
}

export default App
