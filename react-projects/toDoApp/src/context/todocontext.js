import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todo:[
        {
             id: 1,
             todo:"Learn Complete React",
             completed: false
         }
        ],
        addTodo: (todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}
})


export const useToDo = ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider