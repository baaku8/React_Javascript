import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username,SetUsername]=useState("");
    const [password,SetPassword]=useState("");
    const {setUser}=useContext(UserContext);
    const handleSubmit=(e)=>{
       e.preventDefault();
       setUser({username,password});
    }
  return (
    <>
    <div>
        <h2>Login</h2>
        <input
        className='bg-white p-3 text-xl text-black m-3 rounded-xl'
         type="text" 
         placeholder='username'
         value={username}
         onChange={(e)=>{
             SetUsername(e.target.value);
         }}
         />
        <input 
            type="text" 
            className='bg-white p-3 text-xl text-black m-3 rounded-xl'
            placeholder='password'
            id="password"
            value={password}
            onChange={(e)=>{
            SetPassword(e.target.value);
         }}
         />
        <button className='bg-indigo-500 text-xl font-bold text-white p-3 cursor-pointer rounded-xl'
        onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default Login