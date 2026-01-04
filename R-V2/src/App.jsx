import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("#212121");
  

  return (
    <div className='h-screen duration-300' style={{backgroundColor:color}}>
         <h1 className='text-white font-bold text-3xl text-center py-20'>bg-changer</h1>
         <div className='fixed flex flex-wrap justify-center bottom-10 py-8 px-3 inset-x-3'>
             <div className='fixed flex justify-center bg-white py-2 px-3 rounded-full space-x-3 border-2'>
                  <button className='bg-blue-500 px-10 py-1 rounded-full border-2' onClick={()=>(setColor('blue'))}>Blue</button>
                  <button className='bg-green-400 px-10 py-1 rounded-full border-2 ' onClick={()=>(setColor('green'))}>green</button>
                  <button className='bg-fuchsia-300 px-10 py-1 rounded-full border-2'onClick={()=>(setColor('oklch(83.3% 0.145 321.434)'))}>fuschia</button>
                  <button className='bg-teal-500 px-10 py-1 rounded-full border-2'onClick={()=>(setColor('oklch(70.4% 0.14 182.503)'))}>teal</button>
                  <button className='bg-slate-600 px-10 py-1 rounded-full border-2'onClick={()=>(setColor('oklch(44.6% 0.043 257.281)'))}>slate</button>
             </div>
  
         </div>
  
    </div>
  )
}

export default App
