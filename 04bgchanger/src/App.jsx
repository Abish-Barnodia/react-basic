import {useState} from 'react';
import './App.css'

function App() {
  const [color , setColor]=useState("olive")
  return (
    <>
    <div className=" h-screen duration-200 flex items-center justify-center"
     style={{backgroundColor : color}}>
      <div className ="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
 <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
 <button
 onClick={()=>setColor("red")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}
 >Red</button>
 <button
  onClick={()=>setColor("green")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}
 >Green</button>
 <button
  onClick={()=>setColor("blue")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}
 >Blue</button>
 <button
 onClick={()=>setColor("purple")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}
 >Purple</button>
 <button
 onClick={()=>setColor("yellow")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}
 >Yellow</button>
 </div>
      </div>
    </div>
    </>
  )
}

// onClick={setColor}=> this expect to pass function but its also a reference of function
//                      but  when we give function this type we cant pass parameters
//    onClick={setColor()}  => now we a return value but onClick  neede function
// onClick={()=>setColor()}  => now we have function with return value
// thats why we use call by  onClick={()=>setColor("yellow")} call back is function 
// and also it call another function in it also

export default App
