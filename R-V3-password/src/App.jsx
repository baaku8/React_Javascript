import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
const [length,setLength]=useState(8);
const [char,setChar]=useState(false);
const [num,setNum]=useState(false);
const [password,setPassword]=useState("");
let minLength=6;
let maxLength=15;
const passwordRef=useRef(null);

const copyToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
},[password])

const passwordGenerator=useCallback(()=>{
  let pass="";
  let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(char){
      str+='@#$%^&*';
  }
  if(num){
    str+='1234567890';
  }
  for(let i=0;i<length;i++){
    let index=Math.floor(Math.random()*str.length);
    pass+=str[index];
  }
  setPassword(pass);

},[length,char,num,setPassword]);

useEffect(()=>{
    passwordGenerator();
},[length,num,char,setPassword])
  return (
    <>
      <div className='w-full max-w-md px-4 py-3 m-8 bg-indigo-300 rounded-xl' >
        <div className='text-black text-center font-bold text-xl mb-3'>Password Generator</div>
        <div className='flex justify-center mb-3'>
          <input 
          type="text"
          value={password}
          className='bg-white pr-36 pl-6 py-3 rounded-l-2xl'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className='bg-indigo-700 py-3 px-3 text-white text-sm font-bold rounded-r-2xl hover:bg-indigo-800'
            onClick={copyToClipBoard}>COPY</button>
        </div>
        <div className='flex gap-x-4'>
          <div className='flex gap-x-2 align-middle'>
          <input 
          type="range"
          min={minLength}
          max={maxLength}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>  Length: {length}</label>
        </div>
         <div>
          <input 
          type="checkbox" 
          defaultChecked={num}
          value={num}
          onClick={()=>{
            setNum((prev)=>!prev);
          }}
          />
          <label>Number?</label>
         </div>

         <div>
          <input 
          type="checkbox" 
          value={char}
          defaultChecked={char}
          onClick={()=>{
            setChar((prev)=>!prev);
          }}
          />
          <label>character?</label>
         </div>
        </div>
      </div>
      
    </>
  )
}

export default App
