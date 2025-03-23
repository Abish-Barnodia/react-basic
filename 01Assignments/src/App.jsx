import { useState } from 'react'

import './App.css'
// counter is not gone above 20 and below 0
function App() {
  // useState hook : responsible for change the state
  let [Counter , setCounter] = useState(0)
 

  // let Counter =5
  const addValue =()=>{
    if( Counter<20)
    // console.log("value added",Counter);
     setCounter(Counter + 1)

  
    
     
  }

  const RemoveValue= ()=>{
    if(Counter>0)
    setCounter(Counter-1)
  }

  return (
    <>
    <h1>react chal rha ha</h1>
    <h2>counter value:{Counter}</h2>
    <button 
    onClick={addValue}>add value</button>
    <br />

    <button 
    onClick={RemoveValue}>decrease value</button>

    </>
  )
}

export default App
