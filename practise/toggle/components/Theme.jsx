import React, { use } from 'react'
import { useContext } from 'react'
import { Context } from './Context'
function Theme() {
    const {theme, setTheme}=useContext(Context)
  return (
    <>
    <div className={`h-screen w-full mx-0 my-0  ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>

        <h1>
          Current Theme:{theme}
        </h1>

        <button className={theme==="light"?"bg-white text-black ":"bg-black text-white"} onClick={()=>{
            setTheme((prev)=>prev=="light"?"dark":"light")
        }}>
           Switch to {theme==="light"?"dark":"light"} mode
        </button>
        </div>
        </>
  )
}

export default Theme