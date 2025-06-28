import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoslice";
import {useState } from "react";

export default function AddTodo() {
   const [input, setInput]=useState("");
   const dispatch=useDispatch();
   const handleer=(e)=>{
    e.preventDefault();
    if(!input.trim) return;
    dispatch(addTodo(input));
    setInput("")
   }
    return(
<>
    <form onSubmit={handleer} className="flex justify-center items-center gap-2 mt-4">
        <input 
            type="text" 
            placeholder="Add Todo" 
            value={input} 
            onChange={(e)=>setInput(e.target.value)} 
            className="border border-gray-300 rounded p-2 w-1/3 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
</>
    )

}
