import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name:'todo', // Name of the slice
    initialState, // Set the initial state for this slice
    reducers:{
        addTodo: (state,action)=>{  // Add a new todo to the state
           const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state,action)=>{  // Remove a todo by id
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions
export default  todoSlice.reducer