import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:nanoid(),
        text:"Practising Redux Toolkit",
        completed:false
    },]
}

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=> todo.id !== action.payload)
         },
         updateTodo:(state, action)=>{
            const {id, text}=action.payload;
            state.todos.filter((todo)=>{
                if(todo.id===id){
                    todo.text=text;
                }
            })
         }
    }

})

export const {addTodo, removeTodo, updateTodo}=todoSlice.actions;
export default todoSlice.reducer