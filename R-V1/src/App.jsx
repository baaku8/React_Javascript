import { useState } from 'react'


function App() {
let [counter,setCounter]=useState(12);
function addVal(){
  if(counter<20){
   setCounter(counter+1);
  }
}
function decVal(){
  if(counter>0) setCounter(counter-1);
}
  return (
    <>
      <div>Counter: {counter}</div>
      <button on onClick={addVal}>INCREASE</button>
      <button on onClick={decVal}>DECREASE</button>
      <p>Let's start! </p>
    </>
  )
}

export default App
