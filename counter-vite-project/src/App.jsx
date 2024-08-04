import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(0)
  

  const addValue=()=>{
    console.log("Value Added! ")
    counter=counter+1
    setCounter(counter)
  }

 const removeValue=()=>{
    if(counter > 0){
      counter = counter -1 
      setCounter(counter)
    }    
  }

  return (
    <>
    <h2>Counter - Vite - App</h2>

    <h2>counter Value : {counter}</h2>
    <br />
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
