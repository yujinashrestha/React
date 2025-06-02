import { useState, createContext } from "react";
export const Context=createContext()
export const ContextProvider=({children})=>{
    const [theme, setTheme]=useState("light")
    return(
        
        <Context.Provider value={{theme, setTheme}}>
        {children}
        </Context.Provider>
    )
}